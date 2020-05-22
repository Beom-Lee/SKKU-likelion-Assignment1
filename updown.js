const range = 100;
const answer = Math.ceil(Math.random() * range );
console.log(answer);

const inputTag = document.getElementById("input");
const resultDiv = document.getElementById("result");
const formBtn = document.getElementById("formBtn");
const displayLife = document.getElementById("lifecnt");

let life = 5;
formBtn.onclick = (event) =>{
    life -= 1;
    displayLife.textContent = life;
    const UserInput = Number(inputTag.value);
    const result = document.createElement('h2');
    result.textContent = UserInput + "->";

    if(UserInput === answer){
        result.textContent += "Answer";
        alert("You are correct!");
    }
    else{
        if (life > 0) {
            event.preventDefault();
            (UserInput > answer) ? (result.textContent += "down"):(result.textContent += "up");
            inputTag.focus();
        }

        else {
            alert("You failed!\nThe answer is " + answer);
        }
    }
    resultDiv.append(result);
    inputTag.value = '';
}
