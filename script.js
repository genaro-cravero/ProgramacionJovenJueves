let form = document.querySelector('#quizz1');
let formNum = 1;

form.addEventListener('submit', function(e)
{
    e.preventDefault();

    let usuario = document.getElementById("Nombre").value;

    let genero = document.querySelector('input[name="genero"]:checked');
    let generoValue ;
    if(genero){
        generoValue = genero.value;
        console.log("Género seleccionado:", generoValue);
    } else {

        console.log("No se seleccionó ningún género");
    }
    
    console.log("Nombre:", usuario);
  
    // Aquí puedes hacer lo que quieras con los datos
    
    // se reinicio
    mostrarFormulario(formNum)
    form.reset();
})

function mostrarFormulario(formulario) {

    // const formActual = document.getElementById(`quizz${formulario}`);
    // const formSiguiente = document.getElementById(`quizz${formulario + 1}`);
    
    // formActual.style.display = "block";
    // formSiguiente.style.display = "block";
    // formNum++;
    // form = document.querySelector(`#quizz${formNum}`);
  }