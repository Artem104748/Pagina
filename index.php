<?php
 include "fpdf/fpdf.php";

 class Mipdf extends FPDF
 {

 	function Header()
 	{
 		$this->Image('de.png',10,10,30);//margen izquierdo, margen superior, tamaño de imagen
 		$this->SetFont('Courier','B', 14);//fuente, negrita y tamaño
 		$this->Cell(32);
 		$this->SetTextColor(255,255,255); // color  de letra
 		$this->SetFillColor(255,0,0);
 		$this->Cell(100,20,'Tutorial Creado por Arkan',1,0,'C',true);


 	}
 	function Footer()
 	{
 		$this->SetY(-20);
 		$this->Cell(20);
 		$this->Cell(120,10,'Pagina Numero'.$this->PageNo()."/{nb}",1,0);


 	}
 }
 $mipdf = new Mipdf();
 $mipdf-> AliasNBPages();
 $mipdf->addPage();
 for ($i=0; $i <100 ; $i++) { 
 	$mipdf->Cell(100,20,'Dato No'.$i,0,1);
 }
 $mipdf->Output();



?>