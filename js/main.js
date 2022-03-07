// Variables
var gender = document.querySelector('input[name="female-male"]:checked').value;
var heightFeet = document.getElementById('height-feet').value;
var heightInches = document.getElementById('height-inches').value;
var weight = document.getElementById('weight').value;
var age = document.getElementById('age').value;
var activity = document.getElementById("activityLevel").value;
var bmr = "";

// Button
var button = document.getElementById('calculate');

// Event listener for the button
button.addEventListener('click', () => {
    console.log(gender);
    console.log(heightFeet);
    console.log(heightInches);
    console.log(weight);
    console.log(age);
    console.log(activity);
    calculate();
});

function calculate() {

    let kgs = (parseFloat(weight)*0.45359237);
    console.log(kgs)

    let cms = (((parseFloat(heightFeet)*12) + parseFloat(heightInches)) * 2.54);
    console.log(cms)

    console.log(gender);

    if (gender === "male") {
        bmr = (10 * kgs) + (6.25 * cms) - (5*(parseInt(age))) + 5 ;
        var finalBMR = bmr * (parseFloat(activity));
    }
    else if (gender === "female") {
        bmr = (10 * kgs) + (6.25 * cms) - (5*(parseInt(age))) - 161 ;
        var finalBMR = bmr * (parseFloat(activity));
    }

    console.log(finalBMR);

    var labels = document.querySelectorAll('.result-label');
    labels.forEach(label => {
    label.classList.remove('result-label');
})

    let weightLoss = finalBMR - 250;
    let wightGain = finalBMR + 250;

    document.getElementById('maintain-weight').innerHTML = Math.round(finalBMR);
    document.getElementById('weight-loss').innerHTML = Math.round(weightLoss);
    document.getElementById('weight-gain').innerHTML = Math.round(wightGain);

}
