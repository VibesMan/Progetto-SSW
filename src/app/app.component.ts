import { Component } from '@angular/core';
import { PostwebService } from './postweb.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  postIts: Array<string>; //Variabile dove memorizzare tutti i post-it. Vi fa riferimento la view
  apiKey: string; //Chiave di accesso dell'utente
  constructor(private pws: PostwebService) {}

  //Recupero dei post-it salvati e inizializzazione della variabile apikey
  retrievePostits(apiKey: string) {
    this.pws.getPostits(apiKey).subscribe({
      next: v => {
        this.apiKey = apiKey;
        this.postIts = JSON.parse(v.toString());
      },
      error: e => {
        alert(
          e.status == 400
            ? 'Inserire una chiave di accesso valida'
            : 'Errore di connessione'
        );
        this.reset();
      }
    });
  }

  deletePostit(tsp: number) {
    let tempArray = []; //Utilizzo questo array ausiliario per evitare che il post-it venga cancellato dalla view prima che l'interazione con il servizio online sia andata a buon fine
    this.postIts.forEach(val => tempArray.push(Object.assign({}, val)));
    tempArray.splice(tempArray.findIndex(el => el.timestamp == tsp), 1);
    this.updatePostits(tempArray);
  }

  //Metodo per aggiornare la seqeuenza di post-it salvata sul db
  updatePostits(arrayPostit: Array<string>) {
    this.pws.uploadPostits(this.apiKey, JSON.stringify(arrayPostit)).subscribe({
      next: v => {
        if (v == 'Message is too long') {
          alert(
            'Memoria per i post-it esaurita. Scrivere un post-it più corto o cancellare altri post-it'
          );
        } else {
          this.postIts = arrayPostit; //L'operazione è andata a buon fine: posso aggiornare la variabile collegata alla view
        }
      },
      error: e => {
        alert(
          'Errore nel salvataggio del post. Controllare la propria connessione di rete e riprovare.'
        );
        console.error(e);
      }
    });
  }

  //Metodo per richiedere una nuova chiave al servizio online
  createKey() {
    this.pws.getNewKey().subscribe({
      next: v => {
        this.apiKey = v.toString();
      },
      error: e => {
        alert('Errore nella creazione della chiave.');
        console.log(e);
      }
    });
  }

  //Metodo per aggiungere un nuovo post-it e aggiornare il db
  createPostit(postit: Object) {
    postit['timestamp'] = Date.now(); //Utilizzo un timestamp UNIX come id univoco dei post-it
    let tempArray = [];
    if (this.postIts !== undefined && typeof this.postIts[0] == 'object') {
      this.postIts.forEach(val => tempArray.push(Object.assign({}, val)));
    }
    tempArray.push(postit);
    this.updatePostits(tempArray);
  }

  reset() {
    this.apiKey = undefined;
    this.postIts = undefined;
  }
}
