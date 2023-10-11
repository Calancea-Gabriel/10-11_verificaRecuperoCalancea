<?php
// Apro e controllo la connessione al db
$conn = mysqli_connect("localhost", "root", "", "calendario");
if ($conn->connect_errno) die("Errore Connessione DB: [" . $conn->connect_errno . "] - " . $conn->connect_error);

// Inserisco il messaggio nella tabella messaggi
$query = "SELECT * FROM eventi";
$ris = $conn->query($query);

if ($ris) {
    $jObj = new stdClass();
    $seq = array();
    $i = 0;
    while ($vet = $ris->fetch_assoc()) {
        $evento[$i] = new stdClass();
        $evento[$i]->cod = $vet["cod"];
        $evento[$i]->codDesc = $vet["codDesc"];
        $evento[$i]->data = $vet["data"];
        $evento[$i]->slot = $vet["slot"];
        $i++;
    }
    $jObj->evento = $evento;
}else die("Errore nella query: " . $conn->error);
echo json_encode($jObj);
?>