console.log("Hello!")
// Get all elements with class "highlight" and log them
const highlightElements = document.querySelectorAll(".highlight");
console.log("Found " + highlightElements.length + " highlighted items");

const greeting = "Welcome to my resume!";
const greetingEl = document.getElementById("greeting");
if (greetingEl) greetingEl.textContent = greeting;

const helloBtn = document.getElementById("hello-btn");
if (helloBtn) {
  helloBtn.addEventListener("click", function() {
    alert("Button is clicked!");
  });
}

const toggleBtn = document.getElementById("toggle-btn");
if (toggleBtn) {
  toggleBtn.addEventListener("click", function() {
    const section = document.getElementById("skills-section");

    if (section.style.display === "none") {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  });
}

const items = document.getElementsByClassName("highlight");

for (let i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = "yellow";
}

document.querySelectorAll(".highlight").forEach(function(item) {
  item.style.color = "blue";
});

const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", function(e) {

    e.preventDefault();

    const name = document.getElementById("name-input").value;
    const email = document.getElementById("email-input").value;
    const message = document.getElementById("message-input").value;

    document.getElementById("form-output").innerHTML =
      "<p>Name: " + name + "</p><p>Email: " + email + "</p><p>Message: " + message + "</p>";

  });
}