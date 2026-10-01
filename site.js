// Массив вопросов и правильных ответов
       const quiz = [
           {
               question: "Какой цвет небо?",
               options: ["1. Красный", "2. Синий", "3. Зеленый"],
               correctAnswer: 2 // номер правильного ответа
           },
           {
               question: "Сколько дней в неделе?",
               options: ["1. Шесть", "2. Семь", "3. Восемь"],
               correctAnswer: 2
           },
           {
               question: "Сколько у человека пальцев на одной руке?",
               options: ["1. Четыре", "2. Пять", "3. Шесть"],
               correctAnswer: 2
           }
       ];
function playTest(){
let correct = 0;

for (let i=0; i < quiz.length; i++){
    let answer = Number(prompt(quiz[i].question + "\n" + quiz[i].options.join("\n")));
    if (answer === quiz[i].correctAnswer) {
       correct++;
    } 
}     

alert('Кол-во правильных ответов: ' + correct);
    
}
// Игра "Угадай число"
function guessNum(){
    let num = Math.floor(Math.random() * 100) + 1;
    let question;
    while (question != num) {
        question = Number(prompt('Угадайте число от 1 до 100'));
        if (question === num){
            alert('Угадал!');
        } else if (question < num){
            alert('Загаданное число больше');
        } else {
            alert('Загаданное число меньше');
        }
    }
}
// Игра "Простая арифметика"
function arithmetic(){
    let a = Math.floor(Math.random() * 20) +1;
    let b = Math.floor(Math.random() * 20) +1;

    let operation = Math.floor(Math.random() * 4) + 1; 
    let correctResponse;
    let userAnswer;
    if (operation === 1) {
        correctResponse = a + b;
        userAnswer = Number(prompt(a + '+' + b));
    } else if (operation ===2){
        correctResponse = a - b;
        userAnswer = Number(prompt(a + '-' + b));
    }else if(operation === 3){
        correctResponse = a * b;
        userAnswer = Number(prompt(a + '*' + b));
    }else{
        correctResponse = a / b;
        userAnswer = Number(prompt(a + '/' + b));
    }
    
    if (userAnswer === correctResponse){
        alert('Верно!');
    }else{
        alert('Ошибка!');
    }
}

// Игра "Переверни текст"
function reverso(){
    let userQuestion = prompt("Введите текст");
    userQuestion = userQuestion.split('').reverse().join('');

    alert (userQuestion);
}

//Игра «Камень, ножницы, бумага»
function game() {
    let userOption = prompt("Выберите: камень, ножницы или бумага");
    const options = ["камень", "ножницы", "бумага"];
    let action = Math.floor(Math.random() * 3);
    
    if (userOption === null || !options.includes(userOption)) {
        alert("Некорректный ответ");
        return;
    }

    let computerOption = options[action];
    console.log(userOption);
    console.log(computerOption);
        if (userOption === computerOption) {
            alert('Ничья');
        } else if ((userOption === "камень" && computerOption === "ножницы") || (userOption === "ножницы" && computerOption === "бумага") || (userOption === "бумага" && computerOption === "камень")){
            alert ('Вы победили!');
        } else {
            alert ('Вы проиграли!');
        }
    }

      //Игра "Генератор случайных цветов"
        const miniGamesElement = document.querySelector('.mini-games');
        const buttonElement = document.querySelector('.colorRandom-button');
        buttonElement.addEventListener('click', () =>{
        let symbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
        let color = '#';
        for (let i = 0; i < 6; i ++){
        let randomSymbol = Math.floor(Math.random() * symbols.length);
        color += symbols[randomSymbol];
        }
        miniGamesElement.style.backgroundColor = color;
        });
