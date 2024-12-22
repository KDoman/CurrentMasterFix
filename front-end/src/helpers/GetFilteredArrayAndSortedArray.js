import { GetReviewAvg } from "./GetReviewAvg";

export const GetFilteredArrayAndSortedArray = (array, query, filterBy) => {
  const specialistArray = array.filter((specialist) => specialist.isSpecialist);
  const filteredArray = specialistArray.filter((professional) => {
    const matchesLocation =
      !query.location ||
      professional.city?.toLowerCase() === query.location?.toLowerCase();
    const matchesProfession =
      !query.proffesion || professional.professions.includes(query.proffesion);

    return matchesLocation && matchesProfession;
  });

  const getRatingCount = (rating) => rating.length;

  const sortedArray = [...filteredArray].sort((a, b) => {
    if (filterBy === "count") {
      return getRatingCount(b.rating) - getRatingCount(a.rating);
    }
    if (filterBy === "mark") {
      const avgA = GetReviewAvg(a.rating);
      const avgB = GetReviewAvg(b.rating);

      return avgB - avgA;
    }
    return 0;
  });
  return sortedArray;
};
