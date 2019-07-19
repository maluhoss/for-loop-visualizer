function createElementInArray() {
  let array = document.querySelector(".input-array");
  let lastSquareBracket = document.querySelector("#square-bracket");
  array.removeChild(lastSquareBracket);

  let newElement = document.createElement("input");
  let newDelete = document.createElement("p");
  let newComma = document.createElement("p");
  newDelete.innerHTML = "x";
  newComma.innerHTML = ",";
  newComma.classList.add("additional");
  newDelete.onclick = removeElement;
  newDelete.className = "additional";
  newDelete.classList.add("inline-block", "bg-red-600", "h-6", "text-white", "text-center", "px-2", "rounded-full", "z-10", "-mt-3", "-ml-3", "-mr-1", "text-sm", "cursor-pointer");
  newComma.setAttribute("style", "padding-right: 8px;");
  newElement.className = "element";
  newElement.classList.add("shadow", "border", "w-10", 'additional', "h-6", "mb-4", "text-center");
  lastSquareBracket.className = "ml-1"
  array.appendChild(newComma);
  array.appendChild(newElement);
  array.appendChild(newDelete);
  array.appendChild(lastSquareBracket);
}

function removeElement() {
  let array = document.querySelector(".input-array");
  const elementToRemove = event.target.previousSibling;
  const deleteButtonToRemove = event.target;
  const commaToRemove = elementToRemove.previousSibling;
  array.removeChild(elementToRemove);
  array.removeChild(deleteButtonToRemove);
  array.removeChild(commaToRemove);
}

function createArray() {
  let userArray = document.querySelectorAll('.element');
  let inputArray = [];

  for (let i = 0; i < userArray.length; i++) {
    inputArray.push(userArray[i].value);
  }

  return inputArray;
}

function createOptions(arrayLength) {
  let startingValueOptions = [];
  for (let i = 0; i < arrayLength; i++) {
    startingValueOptions.push(`<option value="${i}">${i}</option>`);
  }
  return startingValueOptions;
}

function myFunction() {
  const forLoopInput = document.querySelector('.for-loop-input');
  forLoopInput.classList.remove("hidden");

  const inputArray = createArray();
  const providedArray = document.querySelector('.array-provided');
  providedArray.innerHTML = `let inputArray = [${inputArray}];`;

  const options = createOptions(inputArray.length);
  const providedForLoop = document.querySelector('.for-loop-provided');
providedForLoop.innerHTML = `for (let i = <select id="starting-value">
  ${options}
</select>; i < inputArray.length; i++) {
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<input id="first-body" class="shadow border w-40" type="text">inputArray[i]<input id="second-body" class="shadow border w-40" type="text">;
            <br/>
            }`

  const startingValue = document.querySelector('#starting-value');
  startingValue.setAttribute("max", inputArray.length - 1);
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

  if (inputArray.length - startingValue === 1) {
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
    forLoopNumber.classList.add("mt-2", "font-bold");
    forLoopNumber.innerHTML = `Loop: ${begin}, when i = ${i},`;

    let forLoop = document.createElement("code");
    forLoop.className = "language-javascript";
    forLoop.classList.add("font-sans")
    forLoop.innerHTML = `for (let i = ${i}; i < <span class="inline-block w-40 text-center bg-red-200 rounded cursor-pointer p-1" onclick="showLength(${inputArray.length})">inputArray.length</span>; i++) { <br/> &nbsp;&nbsp;&nbsp;&nbsp;${inputBody} <span class="inline-block w-32 text-center bg-red-200 rounded cursor-pointer mt-1 p-1" onclick="showValue(${i}, ${inputArray[i]})">inputArray[${i}]</span> ${secondInputBody};<br/>}`;
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

function newArray() {
  const userInput = document.querySelector('.user-input');
  userInput.classList.remove("hidden");

  const arrayInput = document.querySelector('.input-array');
  const additionalElements = document.querySelectorAll('.additional');
  const forLoopInput = document.querySelector('.for-loop-input');
  const loopContainer = document.querySelector('.loop-container');
  const main = document.querySelector('main');
  const firstElement = document.querySelector("#first");
  const startingValue = document.querySelector("#starting-value");
  const firstBody = document.querySelector("#first-body");
  const secondBody = document.querySelector("#second-body");
  firstElement.value = '';
  startingValue.value = 0;
  firstBody.value = '';
  secondBody.value = '';
  arrayInput.classList.remove("hidden");
  forLoopInput.classList.add("hidden");

  for (let i = 0; i < additionalElements.length; i++) {
    arrayInput.removeChild(additionalElements[i]);
  }

  main.removeChild(loopContainer);

  const forLoopButtons = document.querySelectorAll(".for-loop-button");
  forLoopButtons[0].classList.remove("hidden");
  forLoopButtons[1].classList.remove("hidden");
}

function newLoop() {
  const userInput = document.querySelector('.user-input');
  userInput.classList.remove("hidden");

  const main = document.querySelector('main');
  const loopContainer = document.querySelector('.loop-container');
  const forLoopInput = document.querySelector('.for-loop-input');
  const allOptions = document.querySelector("#starting-value");
  const startingValue = allOptions.options[allOptions.selectedIndex].text;
  const firstBody = document.querySelector("#first-body");
  const secondBody = document.querySelector("#second-body");
  startingValue.value = 0;
  firstBody.value = '';
  secondBody.value = '';

  forLoopInput.classList.remove("hidden");
  main.removeChild(loopContainer);
}

function visualize() {
  const forLoopArray = document.querySelector('.input-array');
  const forLoopButtons = document.querySelectorAll(".for-loop-button");
  forLoopArray.classList.add("hidden");
  forLoopButtons[0].classList.add("hidden");
  forLoopButtons[1].classList.add("hidden");

  const ForLoopInput = document.querySelector('.for-loop-input');
  ForLoopInput.classList.add("hidden");

  const userInput = document.querySelector('.user-input');
  userInput.classList.add("hidden");

  let inputArray = createArray();
  const allOptions = document.querySelector("#starting-value");
  const startingValue = allOptions.options[allOptions.selectedIndex].text
  let code = document.querySelector("#first-body").value;
  let codeTwo = document.querySelector("#second-body").value;
  displayLoop(inputArray, startingValue, code, codeTwo);

  const loopContainer = document.querySelector('.loop-container');
  loopContainer.classList.add("bg-red-100", "max-w-lg", "mx-auto", "my-12", "p-10", "flex", "flex-col");
  const newArrayButton = document.createElement('button');
  const newLoopButton = document.createElement('button');
  newArrayButton.innerHTML = "New Array";
  newArrayButton.classList.add("bg-green-500", "rounded", "px-2", "h-10", "w-full", "text-white", "mt-4", "mb-2");
  newArrayButton.onclick = newArray;
  newLoopButton.innerHTML = "Modify For Loop";
  newLoopButton.classList.add("bg-indigo-500", "rounded", "px-2", "h-10", "w-full", "text-white");
  newLoopButton.onclick = newLoop;
  loopContainer.appendChild(newArrayButton);
  loopContainer.appendChild(newLoopButton);
}