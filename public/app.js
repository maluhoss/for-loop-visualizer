function createElementInArray() {
  let array = document.querySelector(".input-array");
  let lastSquareBracket = document.querySelector("#square-bracket");
  array.removeChild(lastSquareBracket);

  let newElement = document.createElement("input");
  let newComma = document.createElement("p");
  newComma.innerHTML = ",";
  newComma.setAttribute("style", "padding-right: 10px;");
  newElement.className = "element";
  newElement.classList.add("shadow", "border", "w-10");
  array.appendChild(newComma);
  array.appendChild(newElement);
  array.appendChild(lastSquareBracket);
}

function createArray() {
  let userArray = document.querySelectorAll('.element');
  let inputArray = [];

  for (let i = 0; i < userArray.length; i++) {
    inputArray.push(userArray[i].value);
  }

  return inputArray;
}

function showLength(index) {
  if (event.target.innerHTML === "inputArray.length") {
    event.target.innerHTML = index;
  } else {
    event.target.innerHTML = "inputArray.length";
  }
}

function showValue(index, value) {
  if (event.target.innerHTML === `inputArray[${index}]`) {
    event.target.innerHTML = value;
  } else {
    event.target.innerHTML = `inputArray[${index}]`;
  }
}

function displayLoopInfo(inputArray, startingValue) {
  let visualized = document.querySelector(".loop-container");
  let loopInfo = document.createElement("p");
  let loop;

  if (inputArray.length === 1) {
    loop = 'loop';
  } else {
    loop = 'loops';
  }

  loopInfo.innerHTML = `inputArray = [${inputArray}] <br/> Array length is ${inputArray.length} and starting index is ${startingValue} <br/>Therefore, there will be ${inputArray.length - startingValue} ${loop}`;
  visualized.appendChild(loopInfo);
}

function repeatLoop(inputArray, startingIndex, inputBody, secondInputBody) {
  let visualized = document.querySelector(".loop-container");
  let begin = 1;
  for (let i = startingIndex; i < inputArray.length; i++) {
    let forLoopNumber = document.createElement("p");
    forLoopNumber.innerHTML = `Loop: ${begin}, when i = ${i},`;

    let forLoop = document.createElement("code");
    forLoop.className = "language-javascript";
    forLoop.innerHTML = `for (let i = ${i}; i < <span onclick="showLength(${inputArray.length})">inputArray.length</span>; i++) { <br/> &nbsp;&nbsp;&nbsp;&nbsp;${inputBody} <span onclick="showValue(${i}, ${inputArray[i]})">inputArray[${i}]</span> ${secondInputBody};<br/>}`;
    visualized.appendChild(forLoopNumber);
    visualized.appendChild(forLoop);
    begin++;
  }
 }

function displayLoop(array, starting, body, secondBody) {
  let main = document.querySelector("main");
  let existingLoop = document.querySelector(".loop-container");

  if (existingLoop) {
    main.removeChild(existingLoop);
  }

  let visualized = document.createElement("div");
  visualized.className = "loop-container";
  main.appendChild(visualized);

  displayLoopInfo(array, starting);
  repeatLoop(array, starting, body, secondBody);
}

function visualize() {
  let inputArray = createArray();
  let startingValue = document.querySelector("#starting-value").value;
  let code = document.querySelector("#first-body").value;
  let codeTwo = document.querySelector("#second-body").value;
  displayLoop(inputArray, startingValue, code, codeTwo);
}