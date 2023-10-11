let classi = ["tpsit", "info", "reti", "inglese", "lettere", "religione", "mate", "gestione", "storia", "gin"];


/**
    PER TUTTE LE PAGINE:
    1) Mettere il proprio cognome e nome nel footer

    PER QUESTA PAGINA:
    2.1) Scaricare tutti gli eventi di ottobre
    2.2) Inserire dinamicamente gli eventi nel calendario in modo corretto
    
    3.1) Aprire al click su un qualunque evento la pagina 
        relativa all'ingrandimento del giorno (pagina oggi.html)
    3.2) Completare la pagina in modo dinamico con i dati del giorno scelto
    
    4) Aprire al click sul numero del giorno la pagina di inserimento
        completando in modo dinamico la data con quella selezionata 
        e la fascia oraria eventualmente non compilata di quel giorno
 */

window.onload = async () => {
    let busta = await fetch("server/recuperaEventi.php");
    busta = await busta.json();

    caricaGiorni(busta.evento);
}

// function per caricare gli eventi nel calendario
function caricaGiorni(eventi) { 
    console.log(eventi);
    for(let i = 1; i < 31; i++){
        let giorno = document.getElementById("att" + i);
        eventi.forEach(evento => {
            let data = evento.data.split("-");
            if(data[2] == i){
                giorno.innerHTML += `<div class="${classi[(evento.codDesc)-1]}"></div>`;
            }
        });
    }

}