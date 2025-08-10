const rollBtn = document.getElementById("rollBtn");
const numOfDiceInput = document.getElementById("numOfDice");
const diceImages = document.getElementById("diceImages");
const diceResult = document.getElementById("diceResult");
const diceTotal = document.getElementById("diceTotal");
const errorMessage = document.getElementById("error-message");
const historyList = document.getElementById("historyList");

rollBtn.addEventListener("click", rollDice);

function rollDice() {
  const numOfDice = parseInt(numOfDiceInput.value);
  diceImages.innerHTML = "";
  diceResult.textContent = "";
  diceTotal.textContent = "";
  errorMessage.textContent = "";

  if (isNaN(numOfDice) || numOfDice < 1 || numOfDice > 6) {
    errorMessage.textContent = "❌ Please enter a number between 1 and 6.";
    return;
  }

  const values = [];
  let total = 0;

  for (let i = 0; i < numOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    total += value;

    const img = document.createElement("img");
    img.src = `dice_images/${value}.png`;
    img.alt = `Dice ${value}`;
    img.classList.add("dice");
    img.classList.add("roll-animation");

    diceImages.appendChild(img);
  }

  // Show results
  diceResult.textContent = `🎯 You rolled: ${values.join(", ")}`;
  diceTotal.textContent = `➕ Total: ${total}`;

  // Add to history
  const historyItem = document.createElement("li");
  historyItem.textContent = `🎲 Rolled ${numOfDice} dice: [${values.join(", ")}] = ${total}`;
  historyList.prepend(historyItem);
}
