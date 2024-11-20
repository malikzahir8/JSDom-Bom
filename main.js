let div = document.getElementById("div");

// Ändra bakrgounds färg
document.getElementById("button1").addEventListener("click", function() {
    document.body.style.backgroundColor = "gray"
})

// Ändra bilden
let varg = document.getElementById("varg")
varg.style.display = "none"
let lion = document.getElementById("lion")

document.getElementById("button2").addEventListener("click", function() {
    if (varg.style.display === "none") {
        lion.style.display = "none";
        varg.style.display = "block";
    } else if (lion.style.display === "none") {
        lion.style.display = "block";
        varg.style.display = "none";
    }
});

// Placera allt i mitten
document.getElementById("button3").addEventListener("click", function() {
    div.style.backgroundColor = "lightblue";
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
});

// Nytt text
function text() {
    let rubrik = document.createElement("h1");
    rubrik.innerHTML = "Övningar för provet";
    div.insertBefore(rubrik, div.firstChild);
}

// Gömma bilden
document.getElementById("button4").addEventListener("click", function() {
    lion.style.display = "none";
    varg.style.display = "none";
});

// Radera allt
document.getElementById("button5").addEventListener("click", function() {
    div.style.display = "none";
});

// Visa tiden
document.getElementById("button6").addEventListener("click", function() {
    let tid = document.getElementById("tid");
    let a = new Date();
    let text = a.toString();
    tid.textContent = text;
});

// Visa bilden
document.getElementById("button7").addEventListener("click", function() {
    if(varg.style.display === "none" && lion.style.display === "none" ){
        lion.style.display = "block";
    };
});

// Visa allt igen
document.getElementById("button8").addEventListener("click", function() {
    div.style.display = "block";
});
