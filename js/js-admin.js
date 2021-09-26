// function guardar_producto(){
//     var formulario = document.getElementById("formulario_add");
//     var datos_correctos = false;
//  // validar el ingreso del nombre del producto
//     if(formulario.txtNombre.value==""){
//         formulario.txtNombre.setAttribute("class", "form-control is-invalid");
//         var nombre_validar = document.getElementById("validar_nombre_producto");
//         nombre_validar.innerHTML = "Falta ingresar nombre del producto";
//         nombre_validar.setAttribute("class", "text-danger");
//     }else{
//         formulario.txtnombre.setAttribute("class", "form-control is-valid");
//         var nombre_validar = document.getElementById("validar_nombre_producto");
//         nombre_validar.innerHTML = "Ingresar nombre correctamente";
//         nombre_validar.setAttribute("class", "text-sucess");
//         datos_correctos = true;
// // validar el ingreso de la imagen del producto
//     }if(formulario.txtImagen.value==""){
//         formulario.txtImagen.setAttribute("class", "form-control is-invalid");
//         var imagen_validar = document.getElementById("validar_imagen");
//         imagen_validar.innerHTML = "Falto ingresar imagen";
//         imagen_validar.setAttribute("class", "text-danger");
//     }else{
//         formulario.txtImagen.setAttribute("class", "form-control is-valid");
//         var imagen_validar = document.getElementById("validar_imagen");
//         parrafo_validar.innerHTML = "Ingresar imagen correctamente";
//         parrafo_validar.setAttribute("class", "text-sucess");
// // validar el ingreso de la categoria del producto
//     }if(formulario.selectId.value=="1"){
//         formulario.selectId.setAttribute("class", "form-control is-invalid");
//         var categoria_validar = document.getElementById("selectId");
//         categoria_validar.innerHTML = "Falto ingresar categoria";
//         categoria_validar.setAttribute("class", "text-danger");
//     }else{
//         formulario.selectId.setAttribute("class", "form-control is-valid");
//         var categoria_validar = document.getElementById("validar_categoria");
//         categoria_validar.innerHTML = "Ingresar categoria correctamente";
//         categoria_validar.setAttribute("class", "text-sucess");
//     }
// //         datos_correctos = true;
//     }if(datos_correctos){
//         var btn_guardar = document.getElementById("boton_guardar");
//         btn_sumar.setAttribute("class", "btn btn-warning estilo_btn_cambiar");

//      }
 
// Ejemplo de JavaScript de inicio para deshabilitar envíos de formulario si hay campos no válidos
(function () {
    'use strict'
  
// Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
    var forms = document.querySelectorAll('.needs-validation')
  
// Bucle sobre ellos y evitar el envío
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()


