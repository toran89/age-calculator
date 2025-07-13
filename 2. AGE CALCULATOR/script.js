const dateInput = document.getElementsByClassName("inputValue");
const clickButton = document.getElementById("calculateButton");
const saveOutput = document.getElementById("output");

clickButton.addEventListener("click",function () {
  let saveInput = dateInput[0];
  console.log(saveInput.value);
  let birthDate = new Date(saveInput.value);
  console.log(birthDate);
  
  let birthDateInMs = birthDate.getTime()
  console.log(birthDateInMs);
  
  let today = new Date();
  console.log(today);
  let todayInMs = today.getTime();
  console.log(todayInMs);
  let formula = 1000 * 60 * 60 * 24 * 365.25;
  let difference = todayInMs - birthDateInMs;
  console.log(difference);
  
  let result = Math.floor(difference / formula);
  console.log(result);
  
  saveOutput.innerHTML = `You are ${result} Years old `
})