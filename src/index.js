let angle = 0;
const spinner = document.querySelector("#spinner");

function galleryspin(sign) {
    if (!sign) {
        angle = angle + 60;
    } else {
        angle = angle - 60;
    }
    spinner.style.transform = `rotateY(${angle}deg)`;
}
function enviarCorreo() {
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    console.log('Correo Electrónico:', email);
    console.log('Mensaje:', message);

    enviarCorreoOriginal('marcelpro365@gmail.com', email, message);
  }

  function enviarCorreoOriginal(destinatario, asunto, cuerpo) {
    var mailtoLink = "mailto:" + destinatario +
          "?subject=" + encodeURIComponent(asunto) +
          "&body=" + encodeURIComponent(cuerpo);
    window.location.href = mailtoLink;
  }