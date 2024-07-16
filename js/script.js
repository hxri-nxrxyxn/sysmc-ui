// EVERYTHING RELATED TO BUTTONS
let currentState = 1
const btnState = document.getElementById("status")
btnState.textContent = "ON"
btnState.classList.remove("switch-off")

const toggleState = () => {
    if (currentState) {
        currentState = 0;
        btnState.textContent = "OFF";
        btnState.classList.toggle("switch-off")
    }
    else {
        currentState = 1;
        btnState.textContent = "ON";
        btnState.classList.toggle("switch-off")
    }
    console.log(currentState);
}

btnState.addEventListener("click", toggleState)

// EVERYTHING FOR WATER LEVEL
// const waterBox = document.querySelector(".water")
// let waterLevel = 90;
// waterBox.style.height = `${waterLevel}%`


function getExternalContent(url) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = function() {
    if (xhr.status === 200) {
      document.getElementById("replace").innerHTML = xhr.responseText;
    }
  };
  xhr.send();
}

const targetUrl = "your_other_html_file.html"; // Replace with the actual URL

document.getElementById('profile').addEventListener('click', )

