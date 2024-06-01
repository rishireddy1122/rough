/*
TODO: 2. Select all elements needed
* The form element (has the id quiz-form)
* The answer inputs (have the class 'answer')
* BONUS: The questions (have the class question-item)
* BONUS: The alert (has the id alert)
*/

const form = document.querySelector("#quiz-form");
const answers = Array.from(document.querySelectorAll(".answer"));
const questions = Array.from(document.querySelectorAll(".question-item"));
const alert = document.querySelector("#alert");

//6. BONUS: Make sure unanswered questions show up as incorrect. 
// The easiest way to do this is to add the incorrect class and remove the correct class from all question items before checking the correct answers

questions.forEach(question => {
    question.classList.remove("correct");
    question.classList.add("incorrect");
});

// TODO: 3. Create a submit event listener for the form that does the following.
form.addEventListener("submit", e => {
    // 1. Prevent the default behaviour
    e.preventDefault();

    // 2. Get all selected answers (use the 'checked' property on the input to determine if it is selected or not)
    const checkedAnswers = answers.filter(answer => answer.checked);

    console.log(checkedAnswers);

    // 3. Loop through the selected answer to see if they are correct or not (Check the value of the answer to see if it is the string "true")
    checkedAnswers.forEach(answer => {
        const isCorrect = answer.value === "true";
        const questionItem = answer.closest(".question-item");

        // 4. For each correct answer add the class 'correct' to the parent with the class question-item and remove the class 'incorrect'.
        if (isCorrect) {
            questionItem.classList.add("correct");
            questionItem.classList.remove("incorrect");
        } else {
            // 5. For each incorrect answer add the class 'incorrect' to the parent with the class question-item and remove the class 'correct'.
            questionItem.classList.add("incorrect");
            questionItem.classList.remove("correct");
        }
    });

    // 7. BONUS: If all answers are correct show the element with the id 'alert' and hide it after one second (look into setTimeout) (use class 'active' to show alert and remove the class to hide it)
    // Check if all questions have been answered correctly
    let allCorrect = questions.every(question => question.classList.contains("correct"));

    let allcorrects = questions.length===checkedAnswers.length

    if (allCorrect && allcorrects) {
        alert.classList.add("active");
        setTimeout(() => {
            alert.classList.remove("active");
        }, 1000);
    }
});
