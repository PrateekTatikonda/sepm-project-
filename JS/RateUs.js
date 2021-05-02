const q1answer = document.querySelectorAll("input[name='answer1']");



const replyButton = document.querySelector(".replyButton");
replyButton.addEventListener("click", checkReply);

const reply = document.querySelector(".reply");

let text = ""

function checkReply()
{
    let points = 0;
    points = points + checkAnswer(q1answer);
    console.log(points)
    
    if (points === 1) 
    {
       text = "Aw man, we're sorry :("; 
    }
    else if (points === 2) 
    {
        text = "Thanks!";
    }
    else if (points === 3)
    {
        text = "Thank you so much!";
    }

    reply.textContent = text;
}


function checkAnswer (q)
{
    let points = 0;

    for (let index = 0; index < q.length; index++) 
    {
        let inputElement = q[index];
        
        if (inputElement.checked) 
        {
            points = points + parseInt(inputElement.value)
        }

    }

    return points;
}