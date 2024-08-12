// select elements for calculation
const form = document.querySelector("form");

const result = document.querySelector("#result");

//default value of form

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const weight = parseInt(document.querySelector("#weight").value);
  //   console.log("🚀 ~ form.addEventListener ~ weight:", weight);
  const height = parseInt(document.querySelector("#height").value);
  //   console.log("🚀 ~ form.addEventListener ~ height:", height);
  const results = document.querySelector("#result");

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    results.textContent = "Please enter valid values";
  } else {
    //claculate bmi
    const heightInMeters = height / 100;
    const bmi = (weight / heightInMeters ** 2).toFixed(1);
    // console.log("🚀 ~ bmi:", bmi);
    // results.textContent = `Bmi: ${bmi}`;
    if (bmi < 18.5) {
      results.innerHTML = `Underweight: <span style="color: blue;">${bmi}</span> You are below the healthy weight range. Consider consulting a healthcare provider for advice.`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      results.innerHTML = `Normal weight: <span style="color: green;">${bmi}</span> You are within the healthy weight range. Keep maintaining a balanced diet and regular exercise.`;
    } else if (bmi >= 25 && bmi <= 29.9) {
      results.innerHTML = `Overweight: <span style="color: orange;">${bmi}</span> You are above the healthy weight range. Consider adopting a healthier lifestyle with balanced nutrition and regular physical activity.`;
    } else if (bmi >= 30 && bmi <= 39.9) {
      results.innerHTML = `Obese: <span style="color: red;">${bmi}</span> You're significantly above the healthy weight range. It's important to consult a healthcare provider for personalized advice.`;
    } else if (bmi >= 40) {
      results.innerHTML = `Morbidly Obese: <span style="color: darkred;">${bmi}</span> You are at a very high risk for health complications. Please seek medical advice immediately.`;
    }
  }
});
