const PARAGRAPH_LIMIT = 5;

const handleInputChange = ({ target }) => {
  const button = document.querySelector("button");

  if (target.value.trim()) {
    button.style.visibility = "visible";
  } else {
    button.style.visibility = "hidden";
  }
};

const handleButtonClick = () => {
  const input = document.querySelector("input");
  const collector = document.querySelector(".collector");
  const button = document.querySelector("button");

  if (collector.children.length >= PARAGRAPH_LIMIT) {
    collector.removeChild(collector.firstElementChild);
  }

  const paragraph = document.createElement("p");
  paragraph.textContent = input.value;
  collector.appendChild(paragraph);

  input.value = "";
  button.style.visibility = "hidden";
};

const addLogic = () => {
  const button = document.querySelector("button");
  const input = document.querySelector("input");

  input.oninput = handleInputChange;
  button.onclick = handleButtonClick;
};

addLogic();