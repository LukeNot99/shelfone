/**
 * Email service integration notes for the frontend team.
 *
 * Obiettivo:
 * rimuovere i comportamenti simulati legati alla registrazione e alle email
 * di conferma, sostituendoli con chiamate reali al backend.
 *
 * Dove agganciarsi nel frontend:
 * - `client/pages/Register.tsx`
 * - flusso conferma prenotazione da `client/pages/BookDetail.tsx`
 *
 * Cosa oggi e' mockato:
 * - submit registrazione con `setTimeout`
 * - redirect automatico senza risposta reale del server
 * - messaggio che conferma l'invio mail dopo la prenotazione
 *
 * Cosa deve fare il frontendista:
 * 1. in registrazione sostituire il `setTimeout` con una `fetch` reale
 * 2. chiamare il backend, ad esempio `POST /api/email/register`
 *    oppure un endpoint piu' corretto di onboarding utente
 * 3. inviare almeno l`email` raccolta nel form
 * 4. gestire loading, errore e successo sulla base della response reale
 * 5. fare redirect solo dopo esito positivo
 *
 * Caso prenotazione libro:
 * - la UI oggi dice che e' stata inviata una mail di conferma
 * - il frontend non deve assumere che la mail sia partita
 * - deve leggere questo esito dalla response backend dopo la prenotazione,
 *   oppure da un flag esplicito tipo `confirmationEmailSent`
 *
 * Dati minimi attesi dal backend:
 * - `success`
 * - `message`
 * - eventuale `userId` o `registrationId`
 * - eventuale `confirmationEmailSent`
 *
 * Nota architetturale:
 * - provider email, template e credenziali restano lato backend
 * - il frontend deve solo invocare endpoint applicativi, non provider esterni
 */
