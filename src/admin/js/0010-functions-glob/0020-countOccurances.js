/**
* COUNT OCCURANCES in array
* DESC: If you wish to know how many occurances of certain value is in array then you shoudl use this method.
* @param 1 array
* @param 2 value that you wish to count...
* @since 1.0.0
*/
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
