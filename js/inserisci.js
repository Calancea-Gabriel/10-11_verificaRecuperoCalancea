/**
    PER TUTTE LE PAGINE:
    1) Mettere il proprio cognome e nome nel footer

    PER QUESTA PAGINA
    5.1) In corrispondenza del bottone INSERISCI è necessario controllare i campi compilati
    5.2) Quando inserisco i dati devo controllare che non ci sia già lo slot di quel giorno 
        pieno, in tal caso lo aggiorno sostiendo le info precedenti con quelle nuove
 */

window.onload = async () => {
    // Recupero le materie dal server
    let busta = await fetch("server/recuperaMaterie.php");
    busta = await busta.json();

    // Carico le combo delle ore e delle materie
    caricaComboBox(busta.materie);

    document.querySelector("button").addEventListener("click", () => {inserisciMateria(busta.materie);});
}

async function inserisciMateria(materie) {
    let data = document.querySelector("input");
    let slot = document.getElementById("selSlot");
    let txtMateria = document.getElementById("selMateria");

    // Recupero il codice della materia
    let codMateria;

    materie.forEach(materia => {
        if(txtMateria.value == materia.descr) codMateria = materia.cod;
    });
    console.log(materie);
    
    // Controllo che i campi siano stati inseriti
    if(data.value == "" || slot.value == "" || txtMateria.value == "") {
        alert("Inserire tutti i campi");
        console.log("Il codice della materia è => " + codMateria);
        return;
    }
    

    // Creo un oggetto con i dati inseriti dall'utente
    let materia = {
        data: data.value,
        slot: slot.value,
        codDesc: codMateria
    }

    // Invio i dati al server nella tabella eventi
    await fetch(baseURL + 'server/inserisciMateria.php', {
        method: 'POST',
        body: JSON.stringify(materia)
    });
}

function caricaComboBox(materie) {
    // Carico la combo con le ore
    let select = document.getElementById("selSlot");
    for(let i = 1; i < 7; i++) select.innerHTML += `<option>${i}° ora</option>`;

    // Carico la combo delle materie
    select = document.getElementById("selMateria");
    materie.forEach(materia => {select.innerHTML += `<option>${materia.descr}</option>`;});
}