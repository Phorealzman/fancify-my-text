
function Bigger(){ //Handles all the backend regarding Bigger button 
    alert("Hello, world!");

    let textBox = document.getElementById("textInput"); 
    textBox.style.fontSize = "24pt";
}

function applyStyle(){  //Handles the backend for the BoringBetty button and FancyShmancy button
    let textBox = document.getElementById("textInput");
    let fancy = document.getElementById("fancy");

    if(fancy.checked){ //If fancy button is checked, then apply the style otherwise, if boring button is pressed, reset the styles 
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

function Moo(){ //Handles backend functionality of the Moo button 
    

    let textBox = document.getElementById("textInput");

    let upperText = textBox.value.toUpperCase();

    let sentence = upperText.split(".");

    for (i = 0; i < sentence.length; i++) { <!-- for loop that checks the length of the user inputted text and then capitalizes it and then adds -MOO -->
        let word = sentence[i].trim().split(" ");

        if (word.length > 0 && word[0] !== ""){
            word[word.length - 1] += "-MOO";
        }

        sentence[i] = word.join(" ");
    }

    let text = sentence.join(".");
    textBox.value = text;
}
