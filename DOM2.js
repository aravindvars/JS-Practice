const button1 = document.querySelector("#button");
button1.onclick = () => alert("Hello Again");

const button2 = document.querySelector("#button2");
button2.addEventListener("click", () => {
  alert("hello from my side");
});
