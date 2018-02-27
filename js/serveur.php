<?php
    $user = [];
    $user['id'] = uniqid();
    $user['nom'] = $_GET['nom'];
    $user['prenom'] = $_GET['prenom'];
    $user['age'] = $_GET['age'];
    echo json_encode($user);

?>