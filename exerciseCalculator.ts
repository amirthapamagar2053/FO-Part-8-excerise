interface result {
  periodLength: Number;
  trainingDays: Number;
  success: Boolean;
  rating: Number;
  ratingDescription: String;
  target: Number;
  average: Number;
}

const calculateExercises = (
  excerciseHours: number[],
  target: number
): result => {
  const trainingDays = excerciseHours.reduce(
    (totalTrainingDays, currentDayHours) => {
      totalTrainingDays =
        currentDayHours > 0 ? totalTrainingDays + 1 : totalTrainingDays + 0;
      return totalTrainingDays;
    },
    0
  );
  const average =
    excerciseHours.reduce((totalTrainingDays, currentDayHours) => {
      return totalTrainingDays + currentDayHours;
    }, 0) / excerciseHours.length;

  const success = average >= target ? true : false;

  const rating = 2;

  return {
    periodLength: excerciseHours.length,
    trainingDays,
    success,
    rating,
    ratingDescription: "not too bad but could be better",
    target,
    average,
  };
};

// console.log(
//   calculateExercises(
//     process.argv.slice(2, -1).map((arr) => Number(arr)),
//     Number(process.argv[process.argv.length - 1])
//   )
// );

export default calculateExercises;
