<?php
if (isset($_POST['submit'])) {
    $file = $_FILES['file'];
    $Name = $file['name'];
    $Size = $file['size'];
    $TmpName = $file['tmp_name'];
    $Error = $file['error'];
    $Type = $file['type'];
    $Ext = explode('.', $Name);
    $finalExt = strtolower(end($Ext));
    $notallowed = array('php')

    if (in_array($finalExt, $notallowed)) {
         echo "Your aren't allowed to upload .php files for security reasons."
    } else {
        if {$fileError === 0} {
            $NameFinal = uniqid('', true)."_".$Name.".".$finalExt;
            $Destination = 'uploads/'.$NameFinal;
            move_uploaded_file($TmpName, $Destination);
            header("Location: index.php?uploaded");
        } else {
            echo "Encountered a error while trying to upload this file."
        }
    }
}