document.getElementById("alphabetizeButton").onclick = alphabetize;
document.getElementById("reverseButton").onclick = reverse;
document.getElementById("randomButton").onclick = random;

document.addEventListener("keyup", keyUpListener, false);

function keyUpListener(e) {
  if (e.ctrlKey && e.keyCode == 13) {
    alphabetize();
  }
}

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

  if (!/\r|\n/.exec(input)) {
    // If input has no line breaks, change commas into line breaks
    input = input.replaceAll(",", "\n");
  }

  let list = input.split("\n");

  list = list.filter((el) => el !== "");

  list.forEach((currentValue, index) => {
    list[index] = currentValue.trim();
  });

  return list;
}

function printList(list) {
  let inputElement = document.getElementById("input");
  inputElement.value = "";

  list.forEach((element) => {
    inputElement.value += element + "\n";
  });

  inputElement.select();
}

// Fisher-Yates shuffle algorithm from https://stackoverflow.com/q/2450954
function shuffle(array) {
  let currentIndex = array.length,
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
