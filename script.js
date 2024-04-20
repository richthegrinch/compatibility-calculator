// Fetch questions from the text file
fetch('personality_questions.txt')
    .then(response => response.text())
    .then(data => {
        // Split the data into an array of lines
        const questions = data.trim().split('\n');
        print(questions);
        let currentIndex = 0;
        let userResponses = '';

        // Display the first question
        displayQuestion(currentIndex, questions);
        
        // Function to display the current question
        function displayQuestion(index, questions) {
            const questionContainer = document.getElementById('question-container');
            questionContainer.innerHTML = `
                <p> Choose from 1 - Disagree to 5 - Agree
                <p>${questions[index]}</p>
                <p>${index}</p>
                <label><input type="radio" name="option" value="1"> 1</label>
                <label><input type="radio" name="option" value="2"> 2</label>
                <label><input type="radio" name="option" value="3"> 3</label>
                <label><input type="radio" name="option" value="4"> 4</label>
                <label><input type="radio" name="option" value="5"> 5</label>
            `;
        }

        // Function to store the user's response
        function storeResponse(response) {
            userResponses += response;
        }

        // Function to proceed to the next question
        function nextQuestion() {
            // Get the selected option
            const selectedOption = document.querySelector('input[name="option"]:checked');
            if (!selectedOption) {
                alert('Please select an option.');
                return;
            }
            const response = selectedOption.value;
            storeResponse(response);

            // Proceed to the next question or end the quiz
            currentIndex++;
            if (currentIndex < questions.length) {
                displayQuestion(currentIndex, questions);
            } else {
                // End of quiz, display the user's responses
                document.getElementById('response').innerText = 'User Responses: ' + userResponses;
            }
        }
    });