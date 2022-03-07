// Button
var button = document.getElementById('calculate');

// Event listener for the button
button.addEventListener('click', () => {
    
    var gender = document.querySelector('input[name="female-male"]:checked').value;
    var heightFeet = document.getElementById('height-feet').value;
    var heightInches = document.getElementById('height-inches').value;
    var weight = document.getElementById('weight').value;
    var age = document.getElementById('age').value;
    var activity = document.getElementById("activityLevel").value;

    console.log(gender);
    console.log(heightFeet);
    console.log(heightInches);
    console.log(weight);
    console.log(age);
    console.log(activity);

    if (heightFeet == "" || heightInches == "") {
        document.getElementById('message').innerHTML = "Please enter your height in feet and inches"
    }
    else if (weight == "" ) {
        document.getElementById('message').innerHTML = "Please enter your weight in lbs."
    }
    else if (age == "" ) {
        document.getElementById('message').innerHTML = "Please enter your age in years"
    }
    else {
    
        document.getElementById('message').innerHTML = ""
    calculate(gender, heightFeet, heightInches, weight, age, activity);
    }
});

function calculate(gender, heightFeet, heightInches, weight, age, activity) {

    let kgs = (parseFloat(weight)*0.45359237);
    console.log(kgs)

    let cms = (((parseFloat(heightFeet)*12) + parseFloat(heightInches)) * 2.54);
    console.log(cms)

    console.log(gender);

    if (gender === "male") {
        let bmr = (10 * kgs) + (6.25 * cms) - (5*(parseInt(age))) + 5 ;
        var finalBMR = bmr * (parseFloat(activity));
    }
    else if (gender === "female") {
        let bmr = (10 * kgs) + (6.25 * cms) - (5*(parseInt(age))) - 161 ;
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
