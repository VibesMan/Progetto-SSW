## Progetto SSW
[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-ivy-3tlnrt)

Progetto di Francesco Bertoli - Mat. 590178  
Il progetto è stato realizzato con il framework Angular.

### Struttura del progetto
- **Servizi**:
  - PostwebService: servizio di interfaccia al servizio online. Si compone di tre metodi: uno per la lettura della stringa JSON contenente la collezione dei post-it, uno per l'aggiornamento dei post-it e uno per ottenere una nuova chiave dal servizio online
- **Componenti**:
  - app: è il componente di "root". Qui risiedono le chiamate ai metodi di Postwebservice e alcune manipolazioni minori
  - postit-creator: componente di creazione dei post-it
  - postit-viewer: componente di visualizzazione dei post-it

### Note
- Sono state implementati la possibilità di **richiedere una chiave** al servizio online e quella di marcare i post-it come **importanti**
- È stato aggiunto ai post-it il campo "**timestamp**": è la soluzione scelta per ottenere un identificatore univoco e affidabile per la funzionalità di eliminazione dei post-it (affidandosi per es. al titolo, non si sarebbe potuti avere post-it con titolo uguale)
- Attraverso l'utilizzo delle callback di errore dell'observable restituita da HTTP post di angular, è stata implementata la **gestione delle eccezioni** di salvataggio dei post-it, di connessione al servizio online e di chiave non presente nel database.

