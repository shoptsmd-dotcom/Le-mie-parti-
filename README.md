# Le mie parti

Web app/PWA personale per gestire:
- parti da svolgere
- scadenze e luoghi
- stime Scrum configurabili
- timer e sessioni di preparazione
- parti completate
- report annuali modificabili
- prompt ChatGPT

## Pubblicazione con GitHub Pages

1. Crea su GitHub un nuovo repository pubblico, per esempio `le-mie-parti`.
2. Carica nella radice del repository tutti i file presenti in questa cartella.
3. Apri `Settings` → `Pages`.
4. In `Build and deployment`, seleziona `Deploy from a branch`.
5. Seleziona la branch `main` e la cartella `/(root)`, poi salva.
6. GitHub mostrerà l'indirizzo del sito nella stessa pagina `Pages`.
7. Apri quell'indirizzo con Safari su iPhone.
8. Usa `Condividi` → `Aggiungi alla schermata Home` e scegli di aprirla come app web.

## Dati e backup

I dati personali dell'app non vengono salvati nel repository: vengono memorizzati localmente
nel browser/PWA sul dispositivo tramite `localStorage`.

Usa periodicamente il pulsante di esportazione dell'app per creare un backup JSON.
