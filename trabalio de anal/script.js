function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    
    if (login == "admin" && senha == "123") {
        alert('Sucesso!');
        window.location.href = "home.html";
    } else {
        alert('Usuário ou senha incorretos');
    }
}
