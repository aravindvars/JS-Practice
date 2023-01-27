const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is a new class content";
container.appendChild(content);

const para = document.createElement("p");
para.textContent = "Hey ! I am Red";
para.setAttribute("style", "color:red");
container.appendChild(para);

const heading = document.createElement("h3");
heading.textContent = "Hey I am blue h3";
heading.setAttribute("style", "color:blue");
container.appendChild(heading);

const div2 = document.createElement("div");
div2.classList.add("div2");
div2.setAttribute(
  "style",
  "background:pink; border-color:black; border-style:solid"
);
container.appendChild(div2);

const head1 = document.createElement("h1");
head1.textContent = "Hey I am a div";
div2.appendChild(head1);

const para2 = document.createElement("p");
para2.textContent = "Me TOO!";
div2.appendChild(para2);
