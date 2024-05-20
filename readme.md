Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio: Di cosa ho bisogno per generare i numeri? Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.



-Vecchia repo:
Creo un bottone ed una sezione dove inserire le caselle nel dom. Do le grandezze alla sezione. Do le grandezze alle celle che dovrò inserire per creare la griglia Creo una funzione per il click sul bottone per far generare le celle nella sezione tramite un ciclo Pulisco in caso ci fosse una griglia già presente. Creo un ciclo for per creare ed inserire le celle nella sezione. Dentro il ciclo for includo anche l'indice della cella ed inoltre una funzione per l'aggiunta di una classe quando la determinata cella viene cliccata Creo una classe nel css per come deve essere visualizzata la cella quando cliccata. Quando la cella viene cliccata faccio un console.log del suo index.

-Nuova repo:
Creo un array che dovrà contenere i numeri dove verranno posizionate le bombe.
Creo un ciclo while affinchè i numeri creati siano unici e non ripetuti.
Aggiungo un Let per i punti che partono da 0, aumenta di 1 per ogni click su una casella giusta.
Se viene cliccata una casella con una bomba il gioco si ferma e viene visualizzato il punteggio