<?php

$file=fopen("Datos.doc", "a") or die ("problemas al crear");

fwrite($file, "Datos:");
fwrite($file, "\n");
fwrite($file, "---------");
fwrite($file, "Nombre:" . $_POST['nombre']);
fwrite($file, "\n");
fwrite($file, "---------");
fwrite($file, "Contenido:" . $_POST['contenido']);
fwrite($file, "\n");

fclose($file);

echo "Archivo ha sido creado y escrito exitosamente";

?>