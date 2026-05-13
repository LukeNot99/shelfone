/**
 * Document service integration notes for the frontend team.
 *
 * Obiettivo:
 * sostituire i dati hardcoded della pagina dettaglio libro con una chiamata
 * reale al service documentale/catalogo.
 *
 * Dove agganciarsi nel frontend:
 * - `client/pages/BookDetail.tsx`
 * - in futuro anche eventuali card/liste che aprono il dettaglio libro
 *
 * Cosa oggi e' mockato:
 * - titolo
 * - autore
 * - editore/logo
 * - anno pubblicazione
 * - tempo di lettura / metadati
 * - descrizione
 * - immagini copertina / retro
 * - stato disponibilita' per la prenotazione
 *
 * Cosa deve fare il frontendista:
 * 1. leggere l`id` dal router (`/book/:id`)
 * 2. chiamare il backend, ad esempio `GET /api/documents/:id`
 * 3. mostrare loading, empty state ed errore
 * 4. mappare la response del service nei campi UI della pagina dettaglio
 * 5. usare il dato reale di disponibilita' per abilitare/disabilitare il CTA
 *    "Prenotalo ora"
 *
 * Azione utente da collegare:
 * - il click su "Prenotalo ora" non deve piu' limitarsi al toast locale
 * - deve chiamare un endpoint backend, ad esempio
 *   `POST /api/documents/:id/reservations`
 * - se la prenotazione va a buon fine, il frontend puo' mostrare il toast
 *   di conferma e aggiornare lo stato locale del libro
 *
 * Dati minimi attesi dal service:
 * - `id`
 * - `title`
 * - `author`
 * - `publisher`
 * - `publicationYear`
 * - `description`
 * - `coverImage`
 * - `backCoverImage`
 * - `readingTime` oppure metadato equivalente
 * - `available`
 *
 * Nota architetturale:
 * - se il service esterno richiede token/chiavi private, la chiamata deve
 *   restare nel backend e il client deve parlare solo con `/api/...`
 * - evitare chiamate dirette dal browser a sistemi interni di biblioteca
 */
