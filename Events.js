function showMessage() {
    alert("⚠️ Oops, no data found!");
}

let Search = document.querySelector("#Search");
Search.addEventListener("mouseover", () => {
    Search.style.backgroundColor = "rgb(113, 180, 11)";
    Search.style.transitionDuration = "0.5s";
});

Search.addEventListener("mouseout", () => {
    Search.style.backgroundColor = "";
});

let started = document.querySelector("#started");
started.addEventListener("mouseover", () => {
    started.style.backgroundColor = "rgb(113, 180, 11)";
    started.style.border = "1px solid rgb(113, 180, 11)";
    started.style.transitionDuration = "0.5s";
});
started.addEventListener("mouseout", () => {
    started.style.backgroundColor = "";
    started.style.border = "";
});