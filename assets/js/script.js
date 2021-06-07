// Create words arrays in English and French
let englishVerbsEasy = ["walk", "danse", "go", "come", "eat", "drink", "sleep", "watch", "do"];
let frenchVerbsEasy = ["marcher", "danser", "aller", "venir", "manger", "boire", "dormir", "regarder", "faire"];

let englishVerbsMed = ["be able to","need to","want","know","say","go","do/make","take","give","understand"];
let frenchVerbsMed = ["pouvoir", "devoir", "vouloir", "savoir", "dire", "aller", "faire", "prendre", "donner", "comprendre"];

let englishVerbsDiff = ["bring about","emphasise","own","experience","reach/get to","constitute","lead to/involve","unleash","trigger","cause/bring about"];
let frenchverbsDiff = ["engendrer","souligner","posséder","éprouver","atteindre","constituer","entraîner","déchaîner","déclencher","occasionner"];


document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let difficulty = this.getAttribute("data-type");
                runGame(difficulty);
            }
        })
    }

    // document.getElementById("answer-box").addEventListener("keydown",function(event){
    //     if (event.key === "Enter"){
    //         checkAnswer();
    //     }
    // })

    runGame("easy");

})



function runGame(difficulty) {
    
    // Get game difficulty
    if(document.getElementById('easy').checked == true) {   
        let difficulty = "easy";   
    } else if (document.getElementById('medium').checked == true){  
        let difficulty = "medium"; 
    } else {
        let difficulty ="difficult";
    }  

    // Creates 4 random numbers between 1 and length of language arrays (aim for 30 words per array)
    // need to add a check that no 2 numbers are repeated
    let num1 = Math.floor(Math.random() * englishVerbsEasy.length) + 1;
    let num2 = Math.floor(Math.random() * englishVerbsEasy.length) + 1;
    let num3 = Math.floor(Math.random() * englishVerbsEasy.length) + 1;
    let num4 = Math.floor(Math.random() * englishVerbsEasy.length) + 1; 

    // chooses random number between 1 and 4 for the question word
    let randomMC = Math.floor(Math.random() * 4) + 1;

    // puts random 1-4 numbers in array to check for duplicates (ie duplicate words), then recalc to get another word
    let randNumbers = [num1, num2, num3, num4];

    // If game difficulty = easy, choose 4 answer options from FRENCH matrix for multiple choice
    // and 1 value from ENGLISH  matrix 

    // If game difficulty = medium or hard, choose 4 answer options from ENGLISH matrix for multiple choice
    // and 1 value from FRENCH matrix

    if (difficulty === "easy"){
        let answer1 = frenchVerbsEasy[num1];
        let answer2 = frenchVerbsEasy[num2];
        let answer3 = frenchVerbsEasy[num3];
        let answer4 = frenchVerbsEasy[num4];

        let questionWord = englishVerbsEasy[randomMC];

        let questionLanguage = "English";

    } else if (difficulty === "medium") {
        let answer1 = frenchVerbsMed[num1];
        let answer2 = frenchVerbsMed[num2];
        let answer3 = frenchVerbsMed[num3];
        let answer4  = frenchVerbsMed[num4];

        let questionWord = englishVerbsMed[randomMC];

        let questionLanguage = "English";

    } else {   // ie if difficulty = difficult
        let answer1 = englishVerbsDiff[num1];
        let answer2 = englishVerbsDiff[num2];
        let answer3 = englishVerbsDiff[num3];
        let answer4 = englishVerbsDiff[num4];

        let questionWord = frenchVerbsDiff[randomMC];

        let questionLanguage = "French";

    }

} 

/**
 * Checks the radio buttons answer by indexing the radio 
 * button chosen with the questionWord within the relevant language array
 */
function checkAnswer() {

    // get radio button values
    let answerPicked1 = document.getElementById(answer1).value;
    let answerPicked2 = document.getElementById(answer2).value;
    let answerPicked3 = document.getElementById(answer3).value;
    let answerPicked4 = document.getElementById(answer4).value;

    // get radio button picked ie answer chosen
    if (answerPicked1.checked) {
            let answerChosen = answerPicked1.textContent;
        } else if (answerPicked2.checked) {
            let answerChosen = answerPicked2.textContent;
        } else if (answerPicked3.checked) {
            let answerChosen = answerPicked3.textContent;
        } else {
            let answerChosen = answerPicked4.textContent;
        }
    }

