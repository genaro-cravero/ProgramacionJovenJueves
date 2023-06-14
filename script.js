let button = document.querySelector("button");

let allForms = document.querySelectorAll('form');
let allFormsArray = Array.from(allForms);
let currentForm = 0;

let allFinals = document.querySelectorAll('h1');
let allFinalsArray = Array.from(allFinals);


let nombre,claseValue,q2, final;

allFormsArray.forEach((form) => {
    form.style.display = "none";
});
allFinalsArray.forEach((final) => {
    final.style.display = "none";
});

allFormsArray[currentForm].style.display = "flex";

button.addEventListener("click", () => {
    if(currentForm >= 0 && currentForm <= 6)
    {

        allFormsArray[currentForm].style.display = "none";
    }
    
    if (currentForm === 0) {
        nombre = document.querySelector("#Nombre").value;
        claseValue = document.querySelector('input[name="clase"]:checked').value;

        currentForm++;
        allFormsArray[currentForm].style.display = "flex";

    }else if(currentForm === 1){

        currentForm++;
        allFormsArray[currentForm].style.display = "flex";

    }else if(currentForm === 2){
        q2 = document.querySelector('input[name="q2"]:checked').value;
        q2 = parseInt(q2);
    
        SwitchQuizz(q2);
                
        allFormsArray[currentForm].style.display = "flex";
    }else if(currentForm >= 3 && currentForm <= 6 ){

        final = document.querySelector(`input[name="q${currentForm}"]:checked`).value;

        ShowFinal(final);
    }
    


    if(currentForm === 2){
        document.querySelector("#nombre").innerHTML = nombre;
    }
    
});

const SwitchQuizz = (quizz) => {
    switch (quizz)
    {
        case 0:
            currentForm++;
            break;
        case 1:
            currentForm += 2;
            break;
        case 2:
            currentForm += 3;
            break;
        case 3:
            currentForm += 4;
            break;
    }
}

const ShowFinal = (final) => {
    button.style.display = "none";
    if(claseValue === "duende"){
        document.querySelector("#MuerteSegura").style.display = "flex";
    }
    else{

        document.querySelector(`#${final}`).style.display = "flex";
    }
}