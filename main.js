let space1 = document.querySelector(".spade1")
let numb1 = document.querySelector(".numb1")
let space2 = document.querySelector(".spade2")
let aleatoryNumber = () => {
    let numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "A", "J", "Q", "K"];
    let indexnum = Math.floor(Math.random() * numbers.length);
    console.log(indexnum);
    return numbers[indexnum];
};
let ramSuit = () => {
    let suit = ["♠", "◊", "♣", "♥"];
    let indexsuit = Math.floor(Math.random() * suit.length);
    return suit[indexsuit];
}
let loquesea = ramSuit();
space1.innerHTML = loquesea;
space2.innerHTML = loquesea;
numb1.innerHTML = aleatoryNumber();
