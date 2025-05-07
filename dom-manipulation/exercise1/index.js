const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
let pTag = document.createElement("p");

pTag.textContent = "Hey I'm red!";

pTag.style.color = "red";

container.appendChild(content);
container.appendChild(pTag);



