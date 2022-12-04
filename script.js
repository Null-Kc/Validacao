//VARIAVEIS
Resposta_cpf = "";

Resposta_Email = "";

validacoes = "";

function Validacao(){ // Verifica se os campos estao validados
   if(Resposta_cpf == true && Resposta_Email  == true){
      validacoes = true;
      
   }
   if(Resposta_cpf == false && Resposta_Email  == true || Resposta_cpf == true && Resposta_Email  == false){
      validacoes = false;
      
   }

   if(Resposta_cpf == false && Resposta_Email  == false){
      validacoes = false;
   }
}

//BOTÃO
let Botao = document.querySelector('#enviar');

Botao.addEventListener("click", Botao_enviar, false);

function Botao_enviar(event){ // Faz a verificacao dos campos para enviar o formulario
   if(validacoes == true){
      location.replace('./cadastro-finalizado.html')
   }

   else {
      alert("DIGITE CAMPOS VALIDOS");
      event.preventDefault();
   }
}

//CPF 
let Cpf = document.querySelector('#campo_cpf');

function Criar_Array_Cpf(Cpf) { // Tranforma o CPF em um array
   let NewCpf = num => Number(num);
        
   var Array_Cpf = Array.from(String(Cpf), NewCpf);

   return Array_Cpf;
}

function Validar_Primeiro_Digito(Array_Cpf){ // Faz a primeira parte da verificacao do CPF onde Verificamos se o resto da divisao e igual ao primeiro dígito verificador (primeiro dígito depois do '-'), a primeira parte da validação está correta.
   var Soma = 0;
   var Resto_da_divisao = 0;
   var M = 10;

   for(i=0; i < 9; i++){
      Soma += Array_Cpf[i] * M;
      M = M - 1;
   }

   Resto_da_divisao = (Soma * 10) % 11; 

   if(Resto_da_divisao == 10){
      Resto_da_divisao = 0;
   }
   
   if(Resto_da_divisao == Array_Cpf[9]){
      return true;
   }
   else {
      return false;
   }
}

function Validar_Segundo_Digito(Array_Cpf){ // Faz a Segunda parte da verificacao do CPF onde Verificamos se o resto da divisao e correspondente ao segundo dígito verificador.
   var Soma = 0;
   var Resto_da_divisao = 0;
   var M = 11;

   for(i=0; i < 10; i++){
      Soma += Array_Cpf[i] * M;
      M = M - 1;
   }

   Resto_da_divisao = (Soma * 10) % 11; 

   if(Resto_da_divisao == 10){
      Resto_da_divisao = 0;
   }
   
   if(Resto_da_divisao == Array_Cpf[10]){
      return true;
   }
   else {
      return false;
   }
}

function Validar_cpf(Array_Cpf){ // Verifica se o CPF e valido 
   Verificacao_Primeiro_Digito = Validar_Primeiro_Digito(Array_Cpf);
   Verificacao_Segundo_Digito = Validar_Segundo_Digito(Array_Cpf);

   if(Verificacao_Primeiro_Digito == true && Verificacao_Segundo_Digito == true){
      return true;
   }
   else{
      return false;
   }
}

function Verificar_Numeros_Iguais(Array_Cpf){ // Verifica se o cpf e formado por numeros iguais ja que isso passa pelas validacoes 
   var Primeiro_Digito = Array_Cpf[0];
   var Soma = 0;

   for(i=0; i < 11; i++){
      if(Array_Cpf[i] == Primeiro_Digito){
         Soma = Soma + 1;
      }
   }

   if(Soma == 11){
      return false;
   }
   else{
      return true;
   }
}

Cpf.addEventListener("blur", function(e) {
   let Cpf = this.value.replace( /\D/g , ""); // Retira todos os caracteres que nao sao numeros

   if(Cpf.length==11) { // verifica se o cpf tem 11 numeros

      Array_Cpf = Criar_Array_Cpf(Cpf);

      Verificacao_Numeros_Iguais = Verificar_Numeros_Iguais(Array_Cpf);

      if(Verificacao_Numeros_Iguais == true){
         Verificacao_Cpf = Validar_cpf(Array_Cpf);

         if(Verificacao_Cpf == true){
            document.getElementById("cpf_resposta").innerHTML = "";
            Resposta_cpf = true;
            Validacao();
         } 

         else {
            document.getElementById("cpf_resposta").innerHTML = "CPF INVALIDO";
            Resposta_cpf = false;
            Validacao();
         }
      }
      
      else {
         document.getElementById("cpf_resposta").innerHTML = "CPF INVALIDO";
         Resposta_cpf = false;
         Validacao();
      }
   }
   else {
      document.getElementById("cpf_resposta").innerHTML = "CPF INVALIDO";
      Resposta_cpf = false;
      Validacao();
   }

});


//EMAIL
let Email = document.querySelector('#campo_email');

Email.addEventListener("blur", function(e) {
   
   if( document.forms[0].email.value == "" || document.forms[0].email.value.indexOf('@') == -1 || document.forms[0].email.value.indexOf('.') == -1 ) { // Verificar se os elementos estao presentes do email
      document.getElementById("email_resposta").innerHTML = "EMAIL INVALIDO";
      Resposta_Email = false;
      Validacao();
   }
   else{
      document.getElementById("email_resposta").innerHTML = "";
      Resposta_Email = true;
      Validacao();
   }
})
