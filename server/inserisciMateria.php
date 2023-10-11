<?php
    # Recupero l'oggetto JSON
$obj = file_get_contents('php://input');

# Decodifico l'oggetto JSON
$evento = json_decode($obj);

# Apro e controllo la connessione al db
$conn = mysqli_connect("localhost", "root", "", "calendario");
if ($conn->connect_errno) die("Errore Connessione DB: [" . $conn->connect_errno . "] - " . $conn->connect_error);

# Inserisco la sequenza nella tabella sequenze
$query = "INSERT INTO eventi (codDesc, data, slot) VALUES ('" . $evento->codDesc . "', '" . $evento->data . "', '" . $evento->slot . "')";
?>