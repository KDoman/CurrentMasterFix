export const GetReviewAvg = (arrOfRatings) => {
  if (!arrOfRatings) return null;

  return (
    arrOfRatings.map((rate) => rate.mark).reduce((acc, val) => acc + val, 0) /
    arrOfRatings.length
  ).toFixed(2);
};
