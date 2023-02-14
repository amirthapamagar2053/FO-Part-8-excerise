import express from "express";
import calculateBmi from "./bmiCalculator";
const app = express();

app.get("/hello", (_req, res) => {
  return res.json("Hello fullstack");
});

app.get("/bmi", (req, res) => {
  const { height, weight } = req.query;
  if (!height || !weight) {
    return res.json({ error: "malformatted parameters" });
  }
  return res.json({
    height,
    weight,
    bmi: calculateBmi(Number(height), Number(weight)),
  });
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
