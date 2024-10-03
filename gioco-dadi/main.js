let numberDadiGiocatore = parseInt(Math.random() * 6 + 1);
let numberDadiComputer = parseInt(Math.random() * 6 + 1);

if (numberDadiGiocatore > numberDadiComputer) {
    console.log(`Vittoria del giocatore con numero ${numberDadiGiocatore}`);
}else if (numberDadiGiocatore < numberDadiComputer) {
    console.log(`Vittoria del pc con numero ${numberDadiComputer}`);
}else {
    console.log(`I numeri sono gli stessi. Giocare di nuovo`);
}