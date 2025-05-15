function mostrarImagen(event) {
    let imagen =document.getElementsById('ver-imagen');
    if (imagen) {
        imagen.src = URL.createObjectURL(event.target.files[0]);

    }
}

document.getElementById('registro-form').addEventListener('submit', function(event){
    event.preventDefault(); //Evita que el formulario se envíe

    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('correo').value;
    let contraseña = document.getElementById('contraseña').value;
    let imagen = document.getElementById('imagen').files[0];
   
    if (nombre && correo && contraseña && imagen) {
        alert ('Por favor complete todos los campos obligatorios').
        return;
}

if (imagen && !['image/jpeg', 'image/png', 'image/gif'].includes(imagen.type)) {
    alert ('La imagen debe ser en formato JPEG, PNG o GIF');
    return;
}

alert('Formulario enviado exitosamente.');
});