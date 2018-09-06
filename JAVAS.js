<Script language="JavaScript">
<!--

Confirmado=false;

function CambiaBoton(){
  var MiTexto= miform.MiBoton.createTextRange();
 
 if (!Confirmado){
  MiTexto.text="Confirmación de Envío";
  Confirmado=true;
  alert: "Hola mundo"
  }
 else{
  Confirmado=false; //no necesario
  miform.submit();
  }
  return true;
 }

//-->
</Script>