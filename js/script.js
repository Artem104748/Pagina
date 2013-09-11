var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

$(document).ready(function(){
     $("#bEnviar").click(function(){
     	var nombre = $("#itNombre").val();
     	var usuario = $("#itUsuario").val();
     	var contra = $("#itContra").val();
          var vcontra = $("#itVContra").val();
          var correo = $("#itMail").val();
          var facebook = $("#itFacebook").val();
          var twitter = $("#itTwitter").val();

     	if(nombre == ""){
     		$("#mensaje1").fadeIn();
     		return false;

     	}else{
     		$("#mensaje1").fadeOut();
     		if (usuario==""){
     			$("#mensaje2").fadeIn();
     			return false;

     		}else{
     			$("#mensaje2").fadeOut();
     			if (contra==""){
     				$("#mensaje3").fadeIn();
     				return false;
     		}else{
                    $("#mensaje3").fadeOut();
                    if (vcontra==""){
                         $("#mensaje4").fadeIn();
                         return false;
                    }else{
                    $("#mensaje4").fadeOut();
                    if (correo=="" || !expr.test(correo)){
                         $("#mensaje5").fadeIn();
                         return false;
                    }else{
                    $("#mensaje5").fadeOut();
                    if (facebook==""){
                         $("#mensaje6").fadeIn();
                         return false;
                    }else{
                    $("#mensaje6").fadeOut();
                    if (twitter==""){
                         $("#mensaje7").fadeIn();
                         return false;
                    }
               }

               }
               }
               }

          }

     }

     	

     });
});