// Fetch questions from the text file
fetch('personality_questions.txt')
    .then(response => response.text())
    .then(data => {
        // Split the data into an array of lines
        const questions = data.trim().split('\n');
        let currentIndex = 0;
        let personx = 1;
        let userResponses = '';

        // Display the first question
        displayQuestion(currentIndex, questions);
        
        // Function to display the current question
        function displayQuestion(index, questions) {
            const questionContainer = document.getElementById('question-container');
            questionContainer.innerHTML = `
                <p> Choose from 1 - Disagree to 5 - Agree
                <p>${questions[index]}</p>
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
                // document.getElementById('response').innerText = 'User Responses: ' + userResponses;
                if (personx == 1) {
                    currentIndex = -1;
                    personx = 2;
                    alert("Preson2");
                
                    
                }
                else {
                localStorage.setItem("personality_result", userResponses);

                
                var p1 = userResponses.substring(0, 50);
                var p2 = userResponses.substring(50);


                var sum1 = 0;

                for (var i = 0; i < p1.length; i++) {
                    if (!isNaN(parseInt(p1[i]))) {
                    // If it's a digit, convert it to a number and add it to the sum
                    sum1 += parseInt(p1[i]);
                }
                }




                    
                // E = 20 + (1) _1__ - (6) __4_ + (11) __3_ - (16) _5__ + (21) _4__ - (26) _3__ + (31) _2__ - (36) _5__ + (41) _1__ - (46) _4__ = __10___
                document.getElementById('yesCount').textContent = sum1;
                    
                // window.location.href = "index.html";
                }
                }
            
        }
        document.getElementById('next-btn').addEventListener('click', nextQuestion);
    });
