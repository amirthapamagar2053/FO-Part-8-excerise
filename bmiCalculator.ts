const calculateBmi = (height: number, weight: number): String => {
  const bmiHeightInSquareMeter = (height / 100) * (height / 100);
  const bmi = weight / bmiHeightInSquareMeter;
  if (bmi < 18.5) {
    return "Not Normal (Underweight)";
  } else if (bmi > 18.5 && bmi < 25.9) {
    return "Normal (Healthy Weight)";
  } else if (bmi > 25.0 && bmi < 29.9) {
    return "Not Normal (Overweight)";
  } else {
    return "Not Normal (Obesity)";
  }
};

// console.log(calculateBmi(Number(process.argv[2]), Number(process.argv[3])));

export default calculateBmi;
