const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
let pTag = document.createElement("p");

pTag.textContent = "Hey I'm red!";

pTag.style.color = "red";

const content2 = document.createElement("div");
content2.setAttribute("style", "background-color: pink; border-style: solid");
content2.innerHTML = "<h1> I'm in a div </h1> <p> ME TOO! </p>";

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

const btn3 = document.querySelector("#btn3");

btn3.addEventListener("click", () => {
    alert("Hello World");
});

btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
});

container.appendChild(content);
container.appendChild(pTag);
container.appendChild(content2);



