document.getElementById("alphabetizeButton").onclick = alphabetize;
document.getElementById("reverseButton").onclick = reverse;
document.getElementById("randomButton").onclick = random;

function alphabetize() {
    let sorted = getList().sort()
    printList(sorted)
}

function reverse() {
    let sorted = getList().sort().reverse()
    printList(sorted)
}

function random() {
    console.log("3")
}

function getList() {
    let input = document.getElementById("input").value
    let splitted = input.split("\n")

    return splitted
}

function printList(list) {
    document.getElementById("input").value = null // Adds empty string to the first line of textarea, must be parsed out with 'getPrettifiedList'

    getPrettifiedList(list).forEach(element => {
        document.getElementById("input").value += element + "\n"
    });
}

function getPrettifiedList(list) {
    return list.filter(function(el) {
        return el != "";
    });
}