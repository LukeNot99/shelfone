
/** SERVICE URL:
    http://192.168.10.34:8080


    Frontend
    ↓
    Clerk Login / Signup
    ↓
    JWT Session Token
    ↓
    Authorization: Bearer <TOKEN>
    ↓
    FastAPI Request
    ↓
    auth.authorize(request)
    ↓
    Clerk Token Validation
    ↓
    AuthenticatedUser
    ↓
    MongoDB Validation / Save


    ENDPOINT:
    POST /login/v1

    HEADERS:
    {
        "Authorization": "Bearer <CLERK_TOKEN>"
    }

    FASTAPI ROUTE:

    @router.post("/login/v1", status_code=status.HTTP_200_OK)
    async def login(
        request: Request,
        service=Depends(_create_instance)
    ):
        return await service.login(request)


    SERVICE FLOW:

    async def login(self, request: Request) -> AuthenticatedUser:

        # Validate Clerk token
        authenticated = await auth.authorize(request)

        # Verify user exists
        if not self.user_client.user_exists(authenticated.uuid):
            raise RuntimeError("User not found")

        # Validate saved token
        user = self.collection["users"].find_one({
            "user_id": authenticated.uuid,
            "token": authenticated.token,
        })

        if not user:
            raise RuntimeError("Invalid token")

        return authenticated


    LOGIN FLOW:
    1. User logs in with Clerk
    2. Clerk generates JWT token
    3. Frontend sends Bearer Token
    4. Backend validates token
    5. Backend verifies MongoDB session
    6. Authenticated user returned


    ENDPOINT:
    POST /signup/v1

    HEADERS:
    {
        "Authorization": "Bearer <CLERK_TOKEN>"
    }


    FASTAPI ROUTE:

    @router.post("/signup/v1", status_code=status.HTTP_200_OK)
    async def signup(
        request: Request,
        service=Depends(_create_instance)
    ):
        return await service.signup(request)


    SERVICE FLOW:

    async def signup(self, request: Request) -> AuthenticatedUser:

        # Validate Clerk token
        authenticated = await auth.authorize(request)

        # Build full name
        full_name = " ".join(filter(None, [
            authenticated.first_name,
            authenticated.last_name
        ]))

        payload = {
            "id": authenticated.uuid,
            "full_name": full_name,
            "email": authenticated.primary_email,
        }

        # Save / update MongoDB user
        self.collection.update_one(
            {"user_id": authenticated.uuid},
            {
                "$set": {
                    "token": authenticated.token,
                },
                "$setOnInsert": {
                    "email": authenticated.primary_email,
                    "full_name": full_name,
                },
            },
            upsert=True,
        )

        # Create external user
        self.user_client._create_user(payload)

        return authenticated


    SIGNUP FLOW:
    1. User registers with Clerk
    2. Clerk creates account
    3. Frontend retrieves JWT token
    4. Frontend sends Bearer Token
    5. Backend validates Clerk token
    6. MongoDB user created/updated
    7. External user service updated
    8. Authenticated user returned


    AUTH FUNCTION:

    async def authorize(request: Request) -> AuthenticatedUser:

        request_state = authenticate_request(
            request,
            AuthenticateRequestOptions(secret_key=key)
        )

        # Check authentication state
        if not request_state.is_signed_in:
            raise HTTPException(
                status_code=401,
                detail="Unauthenticated"
            )

        token = request_state.token

        if not token:
            raise HTTPException(
                status_code=401,
                detail="Unauthenticated"
            )

        # Extract Clerk user ID
        user_id = (request_state.payload or {}).get("sub")

        if not user_id:
            raise HTTPException(
                status_code=401,
                detail="Unauthenticated"
            )

        # Retrieve Clerk user
        user = sdk.users.get(user_id=user_id)

        return AuthenticatedUser(...)


    AUTHORIZATION FLOW:
    1. Read Authorization header
    2. Extract Bearer Token
    3. Validate JWT using Clerk
    4. Extract user_id from token payload
    5. Fetch Clerk user
    6. Return AuthenticatedUser model


    AuthenticatedUser(
        uuid=user.id,
        token=token,
        first_name=user.first_name,
        last_name=user.last_name,
        primary_email=primary_email,
    )

    COMPLETE REQUEST FLOW

    USER LOGIN
    ↓
    Clerk Authentication
    ↓
    JWT Generated
    ↓
    Frontend fetch()
    ↓
    Authorization: Bearer TOKEN
    ↓
    FastAPI Request
    ↓
    authenticate_request()
    ↓
    JWT Validation
    ↓
    Clerk User Retrieval
    ↓
    MongoDB Validation
    ↓
    AuthenticatedUser Returned
**/