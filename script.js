const spanOne = document.querySelector('.atc-one');
const spanTwo = document.querySelector('.atc-two');
const spanThree = document.querySelector('.atc-three');
const spanFour = document.querySelector('.atc-four');
const spanFive = document.querySelector('.atc-five');
const spanSix = document.querySelector('.atc-six');
const spanSeven = document.querySelector('.atc-seven');
function atcOne() {
  if (!spanOne.innerText || spanOne.innerText == 'Added to cart') {
    var timer;
    const runTimer = () => {
      timer = window.setTimeout(() => {
        spanOne.innerText = 'Add to cart';
      }, 1 * 1000);
    };
    runTimer();
    spanOne.innerText = 'Removed from cart';
  } else {
    spanOne.innerText = 'Added to cart';
  }
}
function atcTwo() {
  if (!spanTwo.innerText || spanTwo.innerText == 'Added to cart') {
    var timer;
    const runTimer = () => {
      timer = window.setTimeout(() => {
        spanTwo.innerText = 'Add to cart';
      }, 1 * 1000);
    };
    runTimer();
    spanTwo.innerText = 'Removed from cart';
  } else {
    spanTwo.innerText = 'Added to cart';
  }
}
function atcThree() {
  if (!spanThree.innerText || spanThree.innerText == 'Added to cart') {
    var timer;
    const runTimer = () => {
      timer = window.setTimeout(() => {
        spanThree.innerText = 'Add to cart';
      }, 1 * 1000);
    };
    runTimer();
    spanThree.innerText = 'Removed from cart';
  } else {
    spanThree.innerText = 'Added to cart';
  }
}
function atcFour() {
  if (!spanFour.innerText || spanFour.innerText == 'Added to cart') {
    var timer;
    const runTimer = () => {
      timer = window.setTimeout(() => {
        spanFour.innerText = 'Add to cart';
      }, 1 * 1000);
    };
    runTimer();
    spanFour.innerText = 'Removed from cart';
  } else {
    spanFour.innerText = 'Added to cart';
  }
}
function atcFive() {
  if (!spanFive.innerText || spanFive.innerText == 'Added to cart') {
    var timer;
    const runTimer = () => {
      timer = window.setTimeout(() => {
        spanFive.innerText = 'Add to cart';
      }, 1 * 1000);
    };
    runTimer();
    spanFive.innerText = 'Removed from cart';
  } else {
    spanFive.innerText = 'Added to cart';
  }
}
function atcSix() {
  if (!spanSix.innerText || spanSix.innerText == 'Added to cart') {
    var timer;
    const runTimer = () => {
      timer = window.setTimeout(() => {
        spanSix.innerText = 'Add to cart';
      }, 1 * 1000);
    };
    runTimer();
    spanSix.innerText = 'Removed from cart';
  } else {
    spanSix.innerText = 'Added to cart';
  }
}
function atcSeven() {
  if (!spanSeven.innerText || spanSeven.innerText == 'Added to cart') {
    var timer;
    const runTimer = () => {
      timer = window.setTimeout(() => {
        spanSeven.innerText = 'Add to cart';
      }, 1 * 1000);
    };
    runTimer();
    spanSeven.innerText = 'Removed from cart';
  } else {
    spanSeven.innerText = 'Added to cart';
  }
}
