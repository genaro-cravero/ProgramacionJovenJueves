const form1 = document.querySelector('#quizz1');

form1.addEventListener('submit', function(e)
{
    e.preventDefault();

    let usuario = document.querySelector("#usuario").value;

    let genero = document.querySelector('input[name="genero"]:checked');
    let generoValue ;
    if(genero){
        generoValue = genero.value;
        console.log("Género seleccionado:", generoValue);
    } else {

        console.log("No se seleccionó ningún género");
    }
    
    document.write(usuario+"<br>");
    document.write(generoValue);

    form1.reset();
})