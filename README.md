# shelfone. 📚

> **"La biblioteca del tuo comune, sempre in tasca."**

shelfone. è una moderna applicazione web per la gestione dei prestiti bibliotecari, progettata con un focus assoluto sull'esperienza utente (UX) e un design distintivo.

![Project Status](https://img.shields.io/badge/Status-In%20Development-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Caratteristiche Principali

* **🎨 Design "Paper UI":** Un'interfaccia utente unica con texture carta granulosa e toni caldi per richiamare l'esperienza di lettura fisica.
* **🌗 Smart Dark Mode:** Supporto nativo per il tema scuro, ottimizzato per la lettura notturna.
* **📱 Navigazione Responsive Avanzata:**
    * **Mobile:** Navigazione a "pillola" fluttuante in stile iOS.
    * **Desktop:** Dock centrale in stile macOS.
* **💬 Assistenza Integrata:** Chat sticky per supporto immediato con gli operatori della biblioteca.
* **📖 Dettaglio Libro Immersivo:** Modalità "Lightbox" per esplorare copertine e quarta di copertina ad alta risoluzione.
* **🔍 Ricerca Intelligente:** Interfaccia per ricerca per ISBN, autore, genere o citazione.

## 🛠 Tech Stack

Il progetto è costruito con le più recenti tecnologie frontend per garantire prestazioni e scalabilità:

* **Core:** [React 18](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) con configurazione personalizzata (colori, font, animazioni).
* **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (basato su Radix UI) + [Lucide React](https://lucide.dev/) (Icone).
* **State Management & Data:** [TanStack Query](https://tanstack.com/query/latest) (React Query).
* **Forms:** React Hook Form + Zod validation.
* **Routing:** React Router v6.
* **Backend (In Progress):** Express server integrato per API proxy e logica business.

## 🚀 Per Iniziare

Segui questi passaggi per clonare ed eseguire il progetto in locale:

### Prerequisiti
Assicurati di avere installato **Node.js** (v18+) e **npm**.

### Installazione

```bash
# Clona la repository
git clone http://github.com/lucanotaro-vidyasoft/shelfone.git

# Entra nella cartella
cd shelfone

# Installa le dipendenze
npm install
