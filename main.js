const correctAnswers = ['1', '4', '2', '4', '2']
let selectedOptions = [];

function generateResult() {
    populateSelectedOptions();
    const totalScore = calculateResults();
    displayResult(totalScore);
    selectedOptions = [];
}

function populateSelectedOptions() {
    const selectedOption1 = document.querySelector('input[name="qn1"]:checked').value;
    const selectedOption2 = document.querySelector('input[name="qn2"]:checked').value;
    const selectedOption3 = document.querySelector('input[name="qn3"]:checked').value;
    const selectedOption4 = document.querySelector('input[name="qn4"]:checked').value;
    const selectedOption5 = document.querySelector('input[name="qn5"]:checked').value;
    selectedOptions.push(selectedOption1);
    selectedOptions.push(selectedOption2);
    selectedOptions.push(selectedOption3);
    selectedOptions.push(selectedOption4);
    selectedOptions.push(selectedOption5);
    console.log('selectedOptions', selectedOptions)
}

function calculateResults() {
    let i = 0;
    let score = 0;
    for(correctAnswer of correctAnswers) {
        console.log(i, correctAnswer, selectedOptions[i])
        if (correctAnswer === selectedOptions[i]) score++;
        i++;
    }
    return score;
}

function displayResult(score) {
    // default - fullmarks
    let message = '' ;
    if (score === 0) {
        message = 'Your gardening routine could be greener.'
    } else if (score < 3) {
        message = 'It\s ok! But now that you do know this try to start conserving your energy'
    } else if (score < 4) {
        message = 'You\'re off to a good start'
    } else if (score = 5) {
        message = 'Excellent work, you are a conservation machine!'
    }

    Swal.fire(
        score + ' out of 5',
        message,
        'info'
      )

    // Swal.fire({
    //     message,
    //     'info'
    //     animation: false,
    //     customClass: {
    //       popup: 'animated tada'
    //     }
    //   })

    // Swal.fire(
    //     message,
    //     'info'
    //   )
}