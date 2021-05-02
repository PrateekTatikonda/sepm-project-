let pictures = [];

const part1Answer = document.querySelectorAll("input[name='answer1']");
const part2Answer = document.querySelectorAll("input[name='answer2']");
const part3Answer = document.querySelectorAll("input[name='answer3']");
const part4Answer = document.querySelectorAll("input[name='answer4']");
const part5Answer = document.querySelectorAll("input[name='answer5']");
const part6Answer = document.querySelectorAll("input[name='answer6']");
const part7Answer = document.querySelectorAll("input[name='answer7']");
const part8Answer = document.querySelectorAll("input[name='answer8']");

/*const picture1Answer = document.querySelectorAll("src[name='answer1']");
picture1Answer.addEventListener("click", addPicture);*/


/*
addPicture("img/cpu.png", "Bild på CPU", document.querySelector("#content-root"));
addPicture("img/gpu.png", "Bild på GPU", document.querySelector("#content-root"));

function addPicture(source, alt, location)
{
    let newPicture = document.createElement("img");
    newPicture.setAttribute("src", source);
    newPicture.setAttribute("alt", alt);
    location.appendChild(newPicture);
}

changePicture("my-picture", "img/newPicture.png", "a new nice picture");

function changePicture(id, src, alt) {
    document.getElementById(id).setAttribute("src", src);
    document.getElementById(id).setAttribute("alt", alt);
} */


const questions = document.querySelectorAll(".question");
let currentQuestion = 0;



const nextButton = document.querySelector("#next-component");
nextButton.addEventListener("click", nextComponent, nextTitle);

const previousButton = document.querySelector("#previous-component");
previousButton.addEventListener("click", previousComponent)

const title = document.querySelector("#title");

let name = "";

function nextComponent()    {
    if (currentQuestion < questions.length - 1)
    {
        questions[currentQuestion].style.display = "none";
        currentQuestion ++;
        console.log(currentQuestion);
        questions[currentQuestion].style.display = "block";

        previousButton.disabled = false;

    }
    else
    {
        nextButton.disabled = true;
    }
}

function previousComponent()   
 {
    
    if (currentQuestion > 0) {
        questions[currentQuestion].style.display = "none";
        currentQuestion --;
        questions[currentQuestion].style.display = "block";

        nextButton.disabled = false;
    }
    else
    {
        previousButton.disabled = true;
    }
}

function nextTitle() /*Detta fungerar inte :( */
{

    currentQuestion ++;

    console.log(currentQuestion);

    if (currentQuestion === 1) 
    {
        name = "RAM";
    }
    else if (currentQuestion === 2) 
    {
        name = "PCB";
    }
    else if (currentQuestion === 3) 
    {
        name = "Fan";
    }
    else if (currentQuestion === 4) 
    {
        name = "RAM";
    }
    else if (currentQuestion === 5) 
    {
        name = "GPU";
    }
    else if (currentQuestion === 6) 
    {
        name = "PSU";
    }
    else if (currentQuestion === 7) 
    {
        name = "HardDrive";
    }
    else if (currentQuestion === 8) 
    {
        name = "Case";
    }

    title.textContent = name;
}