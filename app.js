function ir(){
    const user="Admin";
    const pass="1234";
    const usuario = document.getElementById('usuario').value;
    const password = document.getElementById('password').value
    console.log(usuario, password);
    if (user === usuario && pass === password){
        alert("Bienvenido");
        window.location="cargav.html";
    } else {
        alert("Usuario o contraseña incorrecta, intentalo de nuevo");
    }
}