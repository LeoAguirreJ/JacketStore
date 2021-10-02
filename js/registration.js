function validar_campos(){
    var formulario = document.getElementById ("registration_forms");
    var elementos_formulario = formulario.elements;
    var datos_correctos = true;

    if (formulario.txtNombre.value == ""){
        formulario.txtNombre.setAttribute ("class", "form-control is-invalid");
        var validar_nombre = document.getElementById ("validar_nombre");
        validar_nombre.innerHTML = "Debe ingresar su nombre completo.";
        datos_correctos = false;
    }
    else{
        formulario.txtNombre.setAttribute ("class", "form-control is-valid");
        var validar_nombre = document.getElementById ("validar_nombre");
        validar_nombre.innerHTML = "";
    }
    if (formulario.txtDireccion.value == ""){
        formulario.txtDireccion.setAttribute ("class", "form-control is-invalid"); 
        var validar_direccion = document.getElementById ("validar_direccion");
        validar_direccion.innerHTML = "Ingrese su dirección de residencia.";
        datos_correctos = false;
    }
    else{
        formulario.txtDireccion.setAttribute ("class", "form-control is-valid");
        var validar_direccion = document.getElementById ("validar_direccion");
        validar_direccion.innerHTML = "";
    }
    if (formulario.nTelefono.value == ""){
        formulario.nTelefono.setAttribute ("class", "form-control is-invalid");
        var validar_telefono = document.getElementById ("validar_telefono");
        validar_telefono.innerHTML ="Debe ingresar su número de teléfono.";
        datos_correctos = false;
    }
    else{
        formulario.nTelefono.setAttribute ("class", "form-control is-valid");
        var validar_telefono = document.getElementById ("validar_telefono");
        validar_telefono.innerHTML = "";
    }
    if (formulario.edad.value == ""){
        formulario.edad.setAttribute ("class", "form-control is-invalid");
        var validar_edad = document.getElementById ("validar_edad");
        validar_edad.innerHTML = "Ingrese su edad";
        datos_correctos = false;
    }
    else {
        formulario.edad.setAttribute ("class", "form-control is-valid");
        var validar_edad = document.getElementById ("validar_edad");
        validar_edad.innerHTML = "";
    }
    if (formulario.idUsuario.value == ""){
        formulario.idUsuario.setAttribute ("class", "form-control is-invalid");
        var validar_idUsuario = document.getElementById ("validar_idUsuario");
        validar_idUsuario.innerHTML = "Debe ingresar su número de identificación.";
        datos_correctos = false;
    }
    else{
        formulario.idUsuario.setAttribute ("class", "form-control is-valid");
        var validar_idUsuario = document.getElementById ("validar_idUsuario");
        validar_idUsuario.innerHTML = "";
    }
    if (formulario.txtCorreo.value ==""){
        formulario.txtCorreo.setAttribute ("class", "form-control is-invalid");
        var validar_correo = document.getElementById ("validar_correo");
        validar_correo.innerHTML = "Debe ingresar su correo electrónico";
        datos_correctos = false;
    }
    else{
        formulario.txtCorreo.setAttribute ("class", "form-control is-valid");
        var validar_correo = document.getElementById ("validar_correo");
        validar_correo.innerHTML = "";
    }
    if (formulario.txtClave.value ==""){
        formulario.txtClave.setAttribute ("class", "form-control is-invalid");
        var validar_clave = document.getElementById ("validar_clave");
        validar_clave.innerHTML = "Debe ingresar una contraseña";
        datos_correctos = false;
    }
    else{
        formulario.txtClave.setAttribute ("class", "form-control is-valid");
        var validar_clave = document.getElementById ("validar_clave");
        validar_clave.innerHTML = "";
    }
    if (formulario.txtClave1.value ==""){
        formulario.txtClave1.setAttribute ("class", "form-control is-invalid");
        var validar_clave1 = document.getElementById ("validar_clave1");
        validar_clave1.innerHTML = "Debe ingresar la confirmación de su contraseña";
        datos_correctos = false;
    }
    else{
        formulario.txtClave1.setAttribute ("class", "form-control is-valid");
        var validar_clave1 = document.getElementById ("validar_clave1");
        validar_clave1.innerHTML = "";
    }
    if (formulario.txtClave.value != formulario.txtClave1.value){
        alert ("Las contraseñas no coinciden");
        datos_correctos = false;
    }
    
}