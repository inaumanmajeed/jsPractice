// Select buttons and the body
const buttons = document.querySelectorAll(".btn");
const body = document.querySelector("body");

// Mapping of button classes to body classes
const classMap = {
  teal: "teal__skyBlue",
  redish: "redish__pink",
  fairyYellow: "firey__yellow",
  hotPink: "hot__pink",
  hotGreen: "hot__green",
  shinyBlue: "shiny__blue",
  hotOrange: "hot__orange",
  liveMulti: "live__multiColor",
  liveBlue: "live__blue",
};

// Function to reset classes
const resetClasses = () => {
  body.className = "";
  buttons.forEach((btn) => {
    btn.classList.remove(...Object.values(classMap), "font__white");
  });
};

// Add event listeners to each button
buttons.forEach((button) => {
  const buttonClass = button.classList[1];

  button.addEventListener("click", () => {
    if (buttonClass === "reset") {
      resetClasses();
    } else if (classMap[buttonClass]) {
      body.className = classMap[buttonClass];
    }
  });

  button.addEventListener("mouseover", () => {
    if (classMap[buttonClass]) {
      button.classList.add(classMap[buttonClass], "font__white");
    }
  });

  button.addEventListener("mouseout", () => {
    if (classMap[buttonClass]) {
      button.classList.remove(classMap[buttonClass], "font__white");
    }
  });
});
