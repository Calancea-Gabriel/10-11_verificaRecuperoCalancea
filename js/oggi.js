let classi = ["tpsit", "info", "reti", "inglese", "lettere", "religione", "mate", "gestione", "storia", "gin"];

/**
    PER TUTTE LE PAGINE:
    1) Mettere il proprio cognome e nome nel footer

    PER QUESTA PAGINA:
    6.1) Mostro il giorno di oggi o quello selezionato
    6.2) Mostro gli eventi del giorno di oggi o quello eventualmente selezionato
    
    NOTA. E' possibile: 
        1) ritornare gli eventi da database, 
        2) salvare gli eventi nella memoria locale prima del cambio di pagina 
        3) o passare gli eventi come parametro
        
        RICORDO DI NON DIMENTICARE IL GIORNO DEL MESE!
 */

window.onload = async () => {
    let date = new Date();
    let giorno = date.getDate();

    // Metto la data corrente di oggi
    document.getElementById("dataDinamica").innerHTML = `OGGI: ${giorno} ottobre`;

    // Recupero gli eventi dal server
    let busta = await fetch("server/recuperaEventi.php");
    busta = await busta.json();

    // Carico gli eventi del giorno corrente
    caricaGiorno(busta.evento, giorno);
}

function caricaGiorno(eventi, giorno) { 
    let div = document.getElementById("evento");
    eventi.forEach(evento => {
        let data = evento.data.split("-");
        if(data[2] == giorno){
            div.innerHTML += `<div class="${classi[(evento.codDesc)-1]}"></div>`;
        }
    });

}