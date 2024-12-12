export const GetReviewAvg = (arrOfRatings) =>
  (
    arrOfRatings.map((rate) => rate.mark).reduce((acc, val) => acc + val) /
    arrOfRatings.length
  ).toFixed(2);
