
function bigButton(){
    alert("Hello, world!");

    let textBox = document.getElementById("textInput");
    textBox.style.fontSize = "24pt";
}

function applyStyle(){
    let textBox = document.getElementById("textInput");
    let fancy = document.getElementById("fancy");

    if(fancy.checked){
        alert("FancyShmancy has been chosen");

        textBox.style.fontWeight = "bold";
        textBox.style.color = "blue";
        textBox.style.textDecoration = "underline";

        
    } else {
        textBox.style.fontWeight = "normal";
        textBox.style.color = "black";
        textBox.style.textDecoration = "none";
    }
}

function mooButton(){
    

    let textBox = document.getElementById("textInput");

    let upperText = textBox.value.toUpperCase();

    let sentence = upperText.split(".");

    for (i = 0; i < sentence.length; i++) {
        let word = sentence[i].trim().split(" ");

        if (word.length > 0 && word[0] !== ""){
            word[word.length - 1] += "-MOO";
        }

        sentence[i] = word.join(" ");
    }

    let text = sentence.join(".");
    textBox.value = text;
}