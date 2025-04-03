function logar (){
    var login=document.gpteleventbyID ('login').value;
    var senha=document.getelementbyID ('senha').value;
    var telefone=document.gpteleventbyID ('telefone').value;
    var email=document.getelementbyID ('email').value;

if (login=="admin" && senha=="123"){ alert ('sucesso');
location.href="home.html"; }

else{ alert ('usuário ou senha incorretas'); }

}
