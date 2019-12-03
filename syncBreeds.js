// data in memory

const catBreeds = {
  Balinese:
    "Balinese are curious, outgoing, intelligent cats with excelent communication skills. They are They are known for their chatty personalities and are always eager to tell you their views on life, love, and what you’ve served them for dinner.",
  Bombay:
    "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder."
};

const breedDetails = function(breed) {
  // can simply return it (easy peezee, butter squeey)...
  return catBreeds[breed];
};

// get the return value right away from the function

// const bombay = breedDetails("Bombay");
// console.log(bombay); // prints out the description from that breed

module.exports = breedDetails;
