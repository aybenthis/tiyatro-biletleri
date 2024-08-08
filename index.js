function groupEvenAndOdds(array) {
  const evenArray = array.filter((array) => array % 2 === 0);

  const oddArray = array.filter((array) => array % 2 === 1);

  const finalArray = evenArray.concat(oddArray);

  return finalArray;
}
