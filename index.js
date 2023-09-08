console.log("im working");


document.getElementById("button").addEventListener("click", function(){
    let weight = parseFloat(document.getElementById("weightInput").value.replace(",", "."));
    let height = parseFloat(document.getElementById("heightInput").value.replace(",", "."));
    var bmiRounded = bmiCalculator(weight, height);
    spanResult(bmiRounded);
});

function bmiCalculator(weight, height){
    var bmi = (weight / (height*height));
    var bmiRounded = Math.round(bmi);
    console.log(bmiRounded);
    return bmiRounded;
}

var span = document.getElementById("bmiResult");
var spanComment = document.getElementById("bmiComment");

function spanResult(bmiRounded){
    span.innerHTML = `Your BMI is ${bmiRounded}`;

    switch (true) {
        case bmiRounded < 18.5:
            spanComment.innerHTML = `You are underweight. Let's get some chips! 🍟`;
            break;
        case bmiRounded >= 18.5 && bmiRounded <= 24.9:
            spanComment.innerHTML = `You are normal weight. Whatever that means... 🤷‍♂️`;
            break;
        case bmiRounded >= 25 && bmiRounded <= 29.9:
            spanComment.innerHTML = `You are overweight. Time do some sporty stuff! 🏃‍♀️`;
            break;
        case bmiRounded >= 30:
            spanComment.innerHTML = `You are obese. Time to get serious! 🏋️‍♀️`;
            break;
        case bmiRounded > 100:
            spanComment.innerHTML = `You are a giant! 🤯`;
            break;
        default:
            spanComment.innerHTML = `Something went wrong. Please try again!`;
    }
    
}






