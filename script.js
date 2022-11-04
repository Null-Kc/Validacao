
//CPF 
let value_cpf = document.querySelector('#campo_cpf');

value_cpf.addEventListener("keydown", function(e) {
   if (e.key > "a" && e.key < "z") {
     e.preventDefault();
   }
 });

value_cpf.addEventListener("blur", function(e) {
     let validar_cpf = this.value.replace( /\D/g , "");

     
     if (validar_cpf.length==11){

      var Soma;
      var Resto;

      Soma = 0;
      for (i=1; i<=9; i++) Soma = Soma + parseInt(validar_cpf.substring(i-1, i)) * (11 - i);
         Resto = (Soma * 10) % 11;

      if ((Resto == 10) || (Resto == 11))  Resto = 0;
      if (Resto != parseInt(validar_cpf.substring(9, 10)) ) return alert("CPF Inválido!");;

      Soma = 0;
      for (i = 1; i <= 10; i++) Soma = Soma + parseInt(validar_cpf.substring(i-1, i)) * (12 - i);
      Resto = (Soma * 10) % 11;

      if ((Resto == 10) || (Resto == 11))  Resto = 0;
      if (Resto != parseInt(validar_cpf.substring(10, 11) ) ) return alert("CPF Inválido!");;

      //formatação final
      cpf_final = validar_cpf.replace( /(\d{3})(\d)/ , "$1.$2");
      cpf_final = cpf_final.replace( /(\d{3})(\d)/ , "$1.$2");
      cpf_final = cpf_final.replace(/(\d{3})(\d{1,2})$/ , "$1-$2");
      document.getElementById('campo_cpf').value = cpf_final;

     } else {
       alert("CPF Inválido! É esperado 11 dígitos numéricos.")
     }   

 })


//EMAIL
let value_email = document.querySelector('#campo_email');

value_email.addEventListener("blur", function(e) {
  if( document.forms[0].email.value=="" 
  || document.forms[0].email.value.indexOf('@')==-1 
    || document.forms[0].email.value.indexOf('.')==-1 )
 {
    alert( "Por favor, informe um E-MAIL valido!" );
    return false;
 }

})