var currentQuestion = 0;	// declaring varibales 
var score = 0;	// intitially the score is set to zero.
var totalQuestions = questions.length; // this will give us the total count of questions to the length of array.


var container = document.getElementById('Container'); // for text box input, accessing HTML elements by Id
var questionElement2 = document.getElementById('question2');
var opt1 = document.getElementById('optA');
var opt2 = document.getElementById('optB');
var opt3 = document.getElementById('optC');
var opt4 = document.getElementById('optD');


var questionElement = document.getElementById('question'); // for radio button input, accessing HTML elements by Id
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');


var nextButton = document.getElementById('nextButton'); // accessing HTML elements by Id
var result = document.getElementById('result');


function runQuestion (questionIndex) {	// method to load a question
	var q = questions[questionIndex]; // assigning a variable to array 
	questionElement.textContent = (questionIndex + 1) + '. ' + q.question; // setting text for question element, showing question number and concatenating with object attributes.
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
};

runQuestion(currentQuestion); // this will manually load question.

 function NextQuestion () { // method to validate answers and load next question
	var selectedOption = document.querySelector('input[type=radio]:checked'); // this will return the value of checked radio buttons.
	if(!selectedOption){ // if radio buttons are not selected or checked		
		alert('Please select your answer!'); // this condition will be true and it will return an alert message
		return;		
	}	
	var answer = selectedOption.value; // assinging a variable to the value of selected properties
	if(questions[currentQuestion].answer == answer){ // this will take the property value of an array and compare it to the value of HTML element and check if both values are same.
		score += 20; // this will increment score by 20
	}	
	selectedOption.checked = false; // this will clear the checked radio button.
	currentQuestion++;		// this increments the value in array which will move it to the next question index.
	if(currentQuestion == totalQuestions - 1){ // if current question number reaches to the end wich is 5
		nextButton.textContent = 'Finish';	// change the text of next button 
	}
	if(currentQuestion == totalQuestions){ // if the last question is completed
		container.style.display = 'none'; // hide the container element of HTML 
		result.style.display = '';	// this will show the result element 
		result.textContent = 'Your Score: ' + score; // text for result. 
		return;
	}
	runQuestion(currentQuestion); // this will load next question.
}
