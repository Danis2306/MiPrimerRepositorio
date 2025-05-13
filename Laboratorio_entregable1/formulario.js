document.getElementById("registroForm").addEventListener("submit", function (event) { event.preventDefault() //Evita el envío del formulario

const form = event.target;

//Obtener los valores de los campos del formulario
const Nombre = form.nombre.value.trim();
const Celular = form.celular.value.trim();   
const Correo = form.correo.value.trim();
const Mensaje = form.mensaje.value.trim();
const País = form.país.value.trim();

//Verificar que los campos no estén vacíos
if ((Nombre != null) && (fecha != null) && (Celular != null) && (Correo != null) && (Mensaje != null) && (País != null)) {
    //Si los campos no están vacíos, enviar el formulario
    alert ("Formulario enviado con éxito");
} else { alert ("Por favor, complete todos los campos"); }




})