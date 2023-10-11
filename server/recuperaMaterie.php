<?php
// Apro e controllo la connessione al db
$conn = mysqli_connect("localhost", "root", "", "calendario");
if ($conn->connect_errno) die("Errore Connessione DB: [" . $conn->connect_errno . "] - " . $conn->connect_error);

// Inserisco il messaggio nella tabella messaggi
$query = "SELECT * FROM nomi";
$ris = $conn->query($query);

if ($ris) {
    $jObj = new stdClass();
    $seq = array();
    $i = 0;
    while ($vet = $ris->fetch_assoc()) {
        $materia[$i] = new stdClass();
        $materia[$i]->cod = $vet["cod"];
        $materia[$i]->descr = $vet["descr"];
        $i++;
    }
    $jObj->materie = $materia;
}else die("Errore nella query: " . $conn->error);
echo json_encode($jObj);
?>