function validar_campos (){
    var formulario = document.getElementById ("refund_form");
    var datos_correctos = true;

    if(formulario.idProducto.value == ""){
        formulario.idProducto.setAttribute ("class", "form-control is-invalid");
        var validar_id = document.getElementById("validar_id");
        validar_id.innerHTML = "Debe ingresar el ID del producto";
        datos_correctos = false;
    }
    else {
        formulario.idProducto.setAttribute ("class", "form-control is-valid");
        var validar_id = document.getElementById("validar_id");
        validar_id.innerHTML = ""; 
    }
    if (formulario.txtMotivo.value == ""){
        formulario.txtMotivo.setAttribute ("class", "form-control is-invalid");
        var validar_motivo = document.getElementById("validar_motivo");
        validar_motivo.innerHTML = "Debe ingresar el motivo de devolución";
        datos_correctos = false;
    }
    else {
        formulario.txtMotivo.setAttribute ("class", "form-control is-valid");
        var validar_id = document.getElementById("validar_motivo");
        validar_id.innerHTML = ""; 
    }
}
function limpiar_campos (){
    
    if(formulario.idProducto.value != ""){
        formulario.idProducto.setAttribute ("class", "form-control is-valid");
    }
}