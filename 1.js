/**
 *
 * @param {*} arraySource
 * @param {*} characterToFind
 * @returns summary sumdeep
 */
function getSumDeep(arraySource, characterToFind) {
  // initial node
  let node = [];
  // initial sum
  let sum = [];
  // function sumDeep
  function sumDeep(arr, i = 0) {
    for (let element of arr) {
      // call self when element is array
      if (Array.isArray(element)) {
        // give index node in array children
        node.push(i + 1);
        element = sumDeep(element, i + 1);
      } else {
        // add node index to sum when character exists in array node
        if (
          element
            .toLowerCase()
            .includes(characterToFind.toLowerCase())
        )
          sum.push(i);
      }
    }
  }

  // sum all node deep value
  sumDeep([arraySource]);
  // return sum deep
  return sum.length > 0 ? sum.reduce((sum, value) => sum + value) : 0;
}

function getSumDeepChallenge(array, findChar) {
  let result = 0;
  [...findChar].forEach((value, index) => {
    const i = index + 1;
    result += getSumDeep(array, value) * i;
  });
  return result;
}

const input1 = getSumDeep(['AB', ['XY'], ['YP']], 'Y');
const input2 = getSumDeep(['', ['', ['XXXXX']]], 'X');
const input3 = getSumDeep(['X'], 'X');
const input4 = getSumDeep([''], 'X');
const input5 = getSumDeep(
  ['X', ['', ['', ['Y'], ['X']]], ['X', ['', ['Y'], ['Z']]]],
  'X'
);
const input6 = getSumDeep(
  ['X', [''], ['X'], ['X'], ['Y', ['']], ['X']],
  'X'
);

const deepChallenge = getSumDeepChallenge(
  ['ABAH', ['CIRCA'], ['CRUMP', ['IRA']], ['ALI']],
  'ACI'
);

console.log(`--------------------------------------------`);
console.log(`["AB", ["XY"], ["YP"]] , "Y" : ${input1}`);
console.log(`--------------------------------------------`);
console.log(`[", [", ["XXXXX"]]] , "X" : ${input2}`);
console.log(`--------------------------------------------`);
console.log(`["X"] , "X" : ${input3}`);
console.log(`--------------------------------------------`);
console.log(`["] , "X" : ${input4}`);
console.log(`--------------------------------------------`);
console.log(
  `["X", [", [", ["Y"], ["X"]]], ["X", [", ["Y"], ["Z"]]]] , "X" : ${input5}`
);
console.log(`--------------------------------------------`);
console.log(
  `["X", [""], ["X"], ["X"], ["Y", ["]], ["X"]] , "X" : ${input6}`
);
console.log(`--------------------------------------------`);

console.log(
  `["ABAH", ["CIRCA"], ["CRUMP", ["IRA"]], ["ALI"]]`,
  deepChallenge
);
