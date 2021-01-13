document.getElementById("alphabetizeButton").onclick = alphabetize;
document.getElementById("reverseButton").onclick = reverse;
document.getElementById("randomButton").onclick = random;

function alphabetize() {
  let sorted = getList().sort();
  printList(sorted);
}

function reverse() {
  let sorted = getList().sort().reverse();
  printList(sorted);
}

function random() {
  let shuffled = shuffle(getList());
  printList(shuffled);
}

function getList() {
  let input = document.getElementById("input").value;
  input = input.replaceAll(",", "\n");
  let list = input.split("\n");

  list = list.filter(function (el) {
    // Remove empty strings
    return el != "";
  });

  list.forEach((currentValue, index, theArray) => {
    theArray[index] = currentValue.trim();
  });

  return list;
}

function printList(list) {
  let inputElement = document.getElementById("input");
  inputElement.value = null;

  list.forEach((element) => {
    inputElement.value += element + "\n";
  });

  inputElement.select();
}

// Fisher-Yates shuffle algorithm from https://stackoverflow.com/q/2450954
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
