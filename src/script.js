
function bubbleSort(arr) {
//Outer pass
for (let i = 0; i < arr.length; i++) {
  if (arr[i + 1] < arr[i]) {
    //Swapping
    [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
  }
}
return arr;
}

function insertionSort(arr) {
//Start from the second element.
for (let i = 0; i < arr.length; i++) {
  //value comparison using ascending order.
  if (arr[i + 1] < arr[i]) {
    //swap
    [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
    return arr;
  }
}
}

function selectionSort(arr) {
let min;

//start passes.
for (let i = 0; i < arr.length; i++) {
  //index of the smallest element to be the ith element.
  min = i;

  //Check through the rest of the array for a lesser element
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[min]) {
      min = j;
    }
  }

  //compare the indexes
  if (min !== i) {
    //swap
    [arr[i], arr[min]] = [arr[min], arr[i]];
    return arr;
  }
}
}

document.getElementById("app").innerHTML = `
<div style="display:flex; width: 100vw; background-color:rgb(251, 210, 255);column-gap:15px;max-height: 69px;">
<h1 id=title style="margin: 0 auto;padding: 1rem;">BubbleSort</h1>
</div>
<div id='center' style="width: 100vw; height: 85vh;background-color:transparent;display:flex;justify-content:center">
</div>
<div id='nav' style="display:flex; width: 100vw; background-color:transparent;column-gap:15px;max-height: 69px;position:absolute;top:87%;">
<button class="nav-list" style="border-radius: 50%;border: none;width: 4rem;height: 4rem;margin: 0 auto;" id='nextFrame'><svg width="24" height="24" style="fill:#eba3e8;width: 100%;height: 55%;" viewBox="0 0 23 21" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg></button>
<button class="nav-list" style="border-radius: 50%;border: none;width: 4rem;height: 4rem;margin: 0 auto;" id='reset'><svg style="fill:#eba3e8;width: 100%;height: 55%;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -2 22 26"><path d="M12 0c-3.31 0-6.291 1.353-8.459 3.522l-2.48-2.48-1.061 7.341 7.437-.966-2.489-2.488c1.808-1.808 4.299-2.929 7.052-2.929 5.514 0 10 4.486 10 10s-4.486 10-10 10c-3.872 0-7.229-2.216-8.89-5.443l-1.717 1.046c2.012 3.803 6.005 6.397 10.607 6.397 6.627 0 12-5.373 12-12s-5.373-12-12-12z"/></svg></button>
<button class="nav-list" style="border-radius: 50%;border: none;width: 4rem;height: 4rem;margin: 0 auto;" id='insertion'><svg style="fill:#eba3e8;width: 100%;height: 55%;" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.67 3.955l-2.825-2.202.665-.753 4.478 3.497-4.474 3.503-.665-.753 2.942-2.292h-4.162c-3.547.043-5.202 3.405-6.913 7.023 1.711 3.617 3.366 6.979 6.913 7.022h4.099l-2.883-2.247.665-.753 4.478 3.497-4.474 3.503-.665-.753 2.884-2.247h-4.11c-3.896-.048-5.784-3.369-7.461-6.858-1.687 3.51-3.592 6.842-7.539 6.858h-2.623v-1h2.621c3.6-.014 5.268-3.387 6.988-7.022-1.72-3.636-3.388-7.009-6.988-7.023h-2.621v-1h2.623c3.947.016 5.852 3.348 7.539 6.858 1.677-3.489 3.565-6.81 7.461-6.858h4.047z"/></svg></button>
</div>
`;

document.getElementById("app").style="overflow:hidden;";

const box = document.getElementById("center");
const title = document.getElementById("title");

const nextButton = document.getElementById("nextFrame");
const resetButton = document.getElementById("reset");
const insertionButton = document.getElementById("insertion");
const bubbleButton = document.getElementById("bubble");

var mode = "BubbleSort"; //default

function createBar(size) {
  const bar = document.createElement("div");
  bar.style.width = "20px";
  bar.style.height = `${size}%`;
  bar.style.backgroundColor = `rgb(235, ${255 - size * 2}, ${
    255 - size * 0.5
  })`;
  return bar;
}

//for (let x = 0; x < 10; x++) {
//box.appendChild(createBar());
//}

var numbers = [];

for (var i = 0; i < 25; i++) {
  numbers.push(getRandomNumber());
}
numbers.length > 0
  ? numbers.map((numb) => box.appendChild(createBar(numb)))
  : null;

//box.innerHTML= '';//remove bars
function nextFrame() {
  if (mode == "InsertionSort") {
    insertionSort(numbers);
  }
  if (mode == "BubbleSort") {
    bubbleSort(numbers);
  }
  if (mode == "SelectionSort"){
    selectionSort(numbers);
  }
  //del();
  //setArray();
  draw();
}

function setArray() {
  numbers = [];
  for (var i = 0; i < 25; i++) {
    numbers.push(getRandomNumber());
  }
}

function getRandomNumber() {
  let min = 1;
  let max = 100;

  return Math.floor(Math.random() * (max - min) + min);
}

function draw() {
  box.innerHTML = "";
  if (numbers.length > 0) {
    numbers.map((numb) => box.appendChild(createBar(numb)));
  } else {
    null;
  }
}

function del() {
  numbers.splice(-1);
}

nextButton.addEventListener("click", function () {
  nextFrame();
});

resetButton.addEventListener("click", function () {
  setArray();
  draw();
});
var i = 0
const modes = ["InsertionSort","SelectionSort","BubbleSort"]
insertionButton.addEventListener("click", function () {
  mode = modes[i];
  title.innerText = modes[i];
  i++
  console.log(modes.length)
  if(i == modes.length){
    i = 0;
  }
});

bubbleButton.addEventListener("click", function () {
  mode = "BubbleSort";
  title.innerText = "BubbleSort";
});
