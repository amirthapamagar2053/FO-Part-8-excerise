import express from "express";
import calculateBmi from "./bmiCalculator";
import calculateExercises from "./exerciseCalculator";
const app = express();
app.use(express.json());

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

app.post("/exercises", (req: any, res) => {
  const { daily_exercises, target } = req.body;
  if (!daily_exercises || !target) {
    return res.json({
      error: "parameters missing",
    });
  }

  if (!Array.isArray(daily_exercises) || isNaN(Number(target))) {
    return res.json({
      error: "malformatted parameters",
    });
  }
  let result = calculateExercises(daily_exercises, target);
  return res.json(result);
});

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
