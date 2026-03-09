console.log("Hello!")
const greeting = "Welcome to my resume!";
document.getElementById("greeting").textContent = greeting;
document.getElementById("hello-btn").addEventListener("click", function() {
  alert("Button is clicked!");
});
document.getElementById("toggle-btn").addEventListener("click", function() {

  const section = document.getElementById("skills-section");

  if (section.style.display === "none") {
    section.style.display = "block";
  } else {
    section.style.display = "none";
  }

});
const items = document.getElementsByClassName("highlight");

for (let i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = "yellow";
}
document.querySelectorAll(".highlight").forEach(function(item) {
  item.style.color = "blue";
});
document.getElementById("contact-form").addEventListener("submit", function(e) {

  e.preventDefault();

  const name = document.getElementById("name-input").value;
  const email = document.getElementById("email-input").value;
  const message = document.getElementById("message-input").value;

  document.getElementById("form-output").innerHTML =
    "<p>Name: " + name + "</p><p>Email: " + email + "</p><p>Message: " + message + "</p>";

});