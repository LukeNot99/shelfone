/**
 * Stripe service integration notes for the frontend team.
 *
 * Obiettivo:
 * preparare il passaggio da UI simulata a flussi di pagamento reali, nel caso
 * in cui shelfone gestisca quote, penali, rinnovi o servizi premium.
 *
 * Stato attuale:
 * - nel client non risultano ancora schermate di pagamento collegate
 * - questo file serve come promemoria tecnico per il prossimo step
 *
 * Quando usare questo service:
 * - pagamento di penali di ritardo
 * - quota di iscrizione o rinnovo
 * - servizi extra collegati alla biblioteca
 *
 * Cosa deve fare il frontendista quando arrivera' il flusso:
 * 1. non chiamare mai Stripe direttamente con chiavi segrete dal client
 * 2. chiedere al backend la creazione della sessione di checkout, ad esempio
 *    `POST /api/stripe/checkout-session`
 * 3. usare la response backend per reindirizzare l'utente al checkout Stripe
 * 4. gestire schermate di success/cancel basate su response o query param
 * 5. aggiornare lo stato utente solo dopo conferma backend del pagamento
 *
 * Dati che il frontend dovra' inviare al backend:
 * - causale pagamento
 * - importo o identificativo tariffa
 * - riferimento utente
 * - riferimento prestito/prenotazione, se presente
 *
 * Nota architetturale:
 * - webhooks Stripe e verifica esito pagamento devono restare lato backend
 * - il frontend deve considerare "pagato" solo cio' che il backend conferma
 *
 * Se questo flusso non rientra nella prima release:
 * - lasciare il file come documentazione
 * - implementare gli endpoint solo quando la UI pagamento sara' pronta
 */
