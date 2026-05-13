/**
 * Library service integration notes for the frontend team.
 *
 * Obiettivo:
 * sostituire i dataset mockati della home, della ricerca e della libreria
 * utente con dati veri recuperati dal backend.
 *
 * Dove agganciarsi nel frontend:
 * - `client/pages/Index.tsx`
 * - `client/pages/Library.tsx`
 * - `client/pages/Search.tsx`
 * - eventualmente `client/pages/Chat.tsx` se la disponibilita' libro viene
 *   verificata tramite catalogo reale
 *
 * Cosa oggi e' mockato:
 * - caroselli home (`newArrivals`, `topSellers`, `classicMysteries`)
 * - nome utente statico
 * - pagina libreria ancora solo descrittiva
 * - ricerca senza interrogazione del catalogo
 *
 * Cosa deve fare il frontendista:
 * 1. sostituire gli array locali con fetch reali a `/api/library/...`
 * 2. recuperare dalla response le sezioni della home gia' separate oppure
 *    filtrare lato client solo se concordato con il backend
 * 3. popolare la pagina libreria con:
 *    - prestiti attivi
 *    - wishlist
 *    - storico letture
 * 4. collegare la ricerca a un endpoint reale, ad esempio
 *    `GET /api/library/search?q=...&type=author|genre|quote|isbn`
 * 5. introdurre loading skeleton, stato vuoto ed errore per ogni vista
 *
 * Possibili endpoint applicativi:
 * - `GET /api/library/home`
 * - `GET /api/library/me`
 * - `GET /api/library/search`
 * - `GET /api/library/books/:id`
 *
 * Dati minimi utili per le liste:
 * - `id`
 * - `title`
 * - `author`
 * - `coverImage`
 * - `availability`
 * - eventuale `category` o `shelf`
 *
 * Nota importante:
 * - evitare di lasciare la trasformazione dei mock dentro i componenti pagina
 * - meglio centralizzare fetch e mapping in hook/helper dedicati, cosi' il
 *   passaggio da mock a reale resta ordinato e facile da mantenere
 */
