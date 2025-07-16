var drums = document.querySelectorAll("button.drum");
// button .drum : selects a child of button
// button.drum : selects button which also have class drum
// querySelectorAll : returns a nodelist

// "mouseenter"  "button.drum"  "." + key : whats in JS won't be inside " "

drums.forEach(function (dl) {
  //   dl.addEventListener("click", callMe);
  // .addEventListener("onclick", callMe()) : as it will run the callMe while compile , without clicked
  dl.addEventListener("mouseenter", function () {
    // using anonyms function
    this.style.borderColor = "#f90e9fff";
    this.style.transform = "scale(1.15)";
    // this.border: 10px solid #f90e35ff;
  });
  dl.addEventListener("mouseleave", function () {
    this.style.borderColor = "#404B69";
    this.style.transform = "scale(1.0)";
    this.doAction = function () {
      //defining it
      callMe();
    };
    // this.doAction(); // calling it
  });

  dl.addEventListener("click", function () {
    var forThisInnerHtml = this.innerHTML; // written inside dl
    var thisClass = this.classList[0];
    playSound(forThisInnerHtml);
    makeFlash(thisClass);
  });
});

document.addEventListener("keypress", function (evt) {
  // added to entire document
  playSound(evt.key);
  makeFlash(evt.key);
});

function makeFlash(key) {
  var activeButton = document.querySelector("." + key); // as key is in JS
  //retrns class
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100); // 0.1s delay
}

function playSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      // new Audio("sounds/crash.mp3").play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      console.log(key);
  }
}

function callMe() {
  alert(" calling this function");
}
