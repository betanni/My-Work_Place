
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {

    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const Result = document.querySelector('#result');

    if (height === '' || height < 0 || isNaN(height)) {

        Result.innerHTML = ` Please Enter Valid Height ${height}`;
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {

        Result.innerHTML = ` Please Enter Valid Height  ${weight}`;
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        Result.innerHTML = `<span>Your BMI is</span> ${bmi}`
        if (bmi < 18.5) {
            Result.innerHTML = ` ${bmi} <h2>Underweight</h2> `;
        }
        else if (bmi >= 18.5 && bmi <= 24.9) {
            Result.innerHTML = ` ${bmi} <h2>HealthyWeight</h2> `;
        }
        else if (bmi >= 25 && bmi <= 29.9) {
            Result.innerHTML = ` ${bmi} <h2>Overweight</h2> `;
        }
        else if (bmi >= 30) {
            Result.innerHTML = ` ${bmi} <h2>Obesity</h2> `;
        }
    }

}
)
