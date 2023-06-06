var fontFamily = document.getElementById("font-family");
var fontSize = document.getElementById("font-size");
var fontSizeInc = document.getElementById("font-size-inc");
var fontSizeDec = document.getElementById("font-size-dec");
var bodyTxt = document.getElementById("body-txt");
function forFontFamily() {
    var fontFamilyValue = fontFamily.options[fontFamily.selectedIndex].value;
    console.group(fontFamilyValue)
    if (fontFamilyValue == "arial") {
        bodyTxt.style.fontFamily = "Arial, Helvetica, sans-serif";
    }
    else if (fontFamilyValue == "times-new-roman") {
        bodyTxt.style.fontFamily = "'Times New Roman', Times, serif";
    }
    else if (fontFamilyValue == "courier-new") {
        bodyTxt.style.fontFamily = "'Courier New', Courier, monospace";
    }
    else if (fontFamilyValue == "georgia") {
        bodyTxt.style.fontFamily = "Georgia, 'Times New Roman', Times, serif";
    }
    else if (fontFamilyValue == "cambria") {
        bodyTxt.style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
    }
    else if (fontFamilyValue == "segoe-ui") {
        bodyTxt.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    }
    else if (fontFamilyValue == "josefin-sans") {
        bodyTxt.style.fontFamily = "'Josefin Sans', sans-serif";
    }
    else if (fontFamilyValue == "roboto") {
        bodyTxt.style.fontFamily = "'Roboto', sans-serif";
    }
    else if (fontFamilyValue == "oswald") {
        bodyTxt.style.fontFamily = "'Oswald', sans-serif";
    }
    else if (fontFamilyValue == "poppins") {
        bodyTxt.style.fontFamily = "'Poppins', sans-serif";
    }
    else if (fontFamilyValue == "dancing-script") {
        bodyTxt.style.fontFamily = "'Dancing Script', cursive";
    }
    else if (fontFamilyValue == "righteous") {
        bodyTxt.style.fontFamily = "'Righteous', cursive";
    }
    else if (fontFamilyValue == "caveat") {
        bodyTxt.style.fontFamily = "'Caveat', cursive";
    }
    else if (fontFamilyValue == "abril-fatface") {
        bodyTxt.style.fontFamily = "'Abril Fatface', cursive";
    }
    else if (fontFamilyValue == "mogra") {
        bodyTxt.style.fontFamily = "'Mogra', cursive";
    }
    else if (fontFamilyValue == "noto-nastaliq-urdu") {
        bodyTxt.style.fontFamily = "'Noto Nastaliq Urdu', serif";
    }
    else if (fontFamilyValue == "noto-sans-arabic") {
        bodyTxt.style.fontFamily = "'Noto Sans Arabic', sans-serif";
    }
    else if (fontFamilyValue == "indie-flower") {
        bodyTxt.style.fontFamily = "'Indie Flower', cursive";
    }
    else if (fontFamilyValue == "satisfy") {
        bodyTxt.style.fontFamily = "'Satisfy', cursive";
    }
    else if (fontFamilyValue == "orbitron") {
        bodyTxt.style.fontFamily = "'Orbitron', sans-serif";
    }
    else if (fontFamilyValue == "bruno-ace") {
        bodyTxt.style.fontFamily = "'Bruno Ace', cursive";
    }
    else if (fontFamilyValue == "bangers") {
        bodyTxt.style.fontFamily = "'Bangers', cursive";
    }
    else if (fontFamilyValue == "kalam") {
        bodyTxt.style.fontFamily = "kalam";
    }
    else if (fontFamilyValue == "lobster") {
        bodyTxt.style.fontFamily = "'Lobster', cursive;";
    }
    else if (fontFamilyValue == "lobster-two") {
        bodyTxt.style.fontFamily = "'Lobster Two', cursive";
    }
    else if (fontFamilyValue == "great-vibes") {
        bodyTxt.style.fontFamily = "'Great Vibes', cursive";
    }
    else if (fontFamilyValue == "rubik-moonrocks") {
        bodyTxt.style.fontFamily = "'Rubik Moonrocks', cursive";
    }
    else if (fontFamilyValue == "bad-script") {
        bodyTxt.style.fontFamily = "'Bad Script', cursive";
    }
    else if (fontFamilyValue == "share-tech-mono") {
        bodyTxt.style.fontFamily = "'Share Tech Mono', monospace";
    }
    else if (fontFamilyValue == "rock-salt") {
        bodyTxt.style.fontFamily = "'Rock Salt', cursive;";
    }
}

function forFontSize() {
    var fontSizeValue = fontSize.options[fontSize.selectedIndex].value;

    if (fontSizeValue == 8) {
        bodyTxt.style.fontSize = "8px"
    }
    else if (fontSizeValue == 9) {
        bodyTxt.style.fontSize = "9px"
    }
    else if (fontSizeValue == 10) {
        bodyTxt.style.fontSize = "10px"
    }
    else if (fontSizeValue == 11) {
        bodyTxt.style.fontSize = "11px"
    }
    else if (fontSizeValue == 12) {
        bodyTxt.style.fontSize = "12px"
    }
    else if (fontSizeValue == 14) {
        bodyTxt.style.fontSize = "14px"
    }
    else if (fontSizeValue == 16) {
        bodyTxt.style.fontSize = "16px"
    }
    else if (fontSizeValue == 18) {
        bodyTxt.style.fontSize = "18px"
    }
    else if (fontSizeValue == 20) {
        bodyTxt.style.fontSize = "20px"
    }
    else if (fontSizeValue == 22) {
        bodyTxt.style.fontSize = "22px"
    }
    else if (fontSizeValue == 24) {
        bodyTxt.style.fontSize = "24px"
    }
    else if (fontSizeValue == 26) {
        bodyTxt.style.fontSize = "26px"
    }
    else if (fontSizeValue == 28) {
        bodyTxt.style.fontSize = "28px"
    }
    else if (fontSizeValue == 36) {
        bodyTxt.style.fontSize = "36px"
    }
    else if (fontSizeValue == 48) {
        bodyTxt.style.fontSize = "48px"
    }
    else if (fontSizeValue == 72) {
        bodyTxt.style.fontSize = "72px"
    }

}

var bold = document.getElementById("for-bold");
bold.value = "";

function forBold() {
    if (bold.value == "") {
        bodyTxt.style.fontWeight = "Bold";
        bold.style.backgroundColor = "#000";
        bold.innerHTML = "<i class='fa-solid fa-bold' style='color: #f0f2f5;'></i>";
        bold.value = "bold"
    } else {
        bodyTxt.style.fontWeight = "400";
        bold.style.backgroundColor = "#fff";
        bold.innerHTML = "<i class='fa-solid fa-bold'></i>";
        bold.value = "";
    }
}

var italic = document.getElementById("for-italic");
italic.value = "";

function forItalic() {
    if (italic.value == "") {
        console.log("if")
        bodyTxt.style.fontStyle = "italic";
        italic.style.backgroundColor = "#000";
        italic.innerHTML = "<i class='fa-solid fa-italic' style='color: #f0f2f5;'></i>";
        italic.value = "italic"
    } else {
        console.log("else")
        bodyTxt.style.fontStyle = "normal";
        italic.style.backgroundColor = "#fff";
        italic.innerHTML = "<i class='fa-solid fa-italic'></i>";
        italic.value = "";
    }
}

var underLine = document.getElementById("for-underline");
underLine.value = "";

function forUnderLine() {
    if (underLine.value == "") {
        console.log("if")
        bodyTxt.style.textDecoration = "underline";
        underLine.style.backgroundColor = "#000";
        underLine.innerHTML = "<i class='fa-solid fa-underline' style='color: #f0f2f5;'></i>";
        underLine.value = "underLine"
    } else {
        console.log("else")
        bodyTxt.style.textDecoration = "none";
        underLine.style.backgroundColor = "#fff";
        underLine.innerHTML = "<i class='fa-solid fa-underline'></i>";
        underLine.value = "";
    }
}

var strikeThrough = document.getElementById("for-strike");
strikeThrough.value = "";

function forStrikeThrough() {
    if (strikeThrough.value == "") {
        console.log("if")
        bodyTxt.style.textDecoration = "line-through";
        strikeThrough.style.backgroundColor = "#000";
        strikeThrough.innerHTML = "<i class='fa-solid fa-strikethrough' style='color: #f0f2f5;'></i>";
        strikeThrough.value = "strikeThrough"
    } else {
        console.log("else")
        bodyTxt.style.textDecoration = "none";
        strikeThrough.style.backgroundColor = "#fff";
        strikeThrough.innerHTML = "<i class='fa-solid fa-strikethrough'></i>";
        strikeThrough.value = "";
    }
}

var capitalize = document.getElementById("for-capitalize");
capitalize.value = "";

function forCapitalize() {
    if (capitalize.value == "") {
        console.log("if")
        bodyTxt.style.textTransform = "capitalize";
        capitalize.value = "forcapitalize"
    } else {
        console.log("else")
        bodyTxt.style.textTransform = "none";
        capitalize.value = "";
    }
}

var upperCase = document.getElementById("for-uppercase");
upperCase.value = "";

function forUpperCase() {
    if (upperCase.value == "") {
        console.log("if")
        bodyTxt.style.textTransform = "uppercase";
        upperCase.value = "forUppercase"
    } else {
        console.log("else")
        bodyTxt.style.textTransform = "none";
        upperCase.value = "";
    }
}

var lowerCase = document.getElementById("for-lowercase");
lowerCase.value = "";

function forLowerCase() {
    if (lowerCase.value == "") {
        console.log("if")
        bodyTxt.style.textTransform = "lowercase";
        lowerCase.value = "forLowercase"
    } else {
        console.log("else")
        bodyTxt.style.textTransform = "none";
        lowerCase.value = "";
    }
}

var alignRight = document.getElementById("for-align-right");
alignRight.value = "";

function forAlignRight() {
    if (alignRight.value == "") {
        //Right
        bodyTxt.style.textAlign = "right";
        alignRight.style.backgroundColor = "#000";
        alignRight.innerHTML = "<i class='fa-solid fa-align-right' style='color: #f0f2f5;'></i>";
        alignRight.value = "alignRight"
        //Center
        alignCenter.style.backgroundColor = "#fff";
        alignCenter.innerHTML = "<i class='fa-solid fa-align-center'></i>";
        alignCenter.value = "";
        //Left
        alignLeft.style.backgroundColor = "#fff";
        alignLeft.innerHTML = "<i class='fa-solid fa-align-left'></i>";
        alignLeft.value = "";
        //Justify
        alignJustify.style.backgroundColor = "#fff";
        alignJustify.innerHTML = "<i class='fa-solid fa-align-justify'></i>";
        alignJustify.value = "";
    } else {
        bodyTxt.style.textAlign = "start";
        alignRight.style.backgroundColor = "#fff";
        alignRight.innerHTML = "<i class='fa-solid fa-align-right'></i>";
        alignRight.value = "";
    }
}

var alignLeft = document.getElementById("for-align-left");
alignLeft.value = "";

function forAlignLeft() {
    if (alignLeft.value == "") {
        //Left
        bodyTxt.style.textAlign = "left";
        alignLeft.style.backgroundColor = "#000";
        alignLeft.innerHTML = "<i class='fa-solid fa-align-left' style='color: #f0f2f5;'></i>";
        alignLeft.value = "alignLeft"
        //Center
        alignCenter.style.backgroundColor = "#fff";
        alignCenter.innerHTML = "<i class='fa-solid fa-align-center'></i>";
        alignCenter.value = "";
        //Right
        alignRight.style.backgroundColor = "#fff";
        alignRight.innerHTML = "<i class='fa-solid fa-align-right'></i>";
        alignRight.value = "";
        //Justify
        alignJustify.style.backgroundColor = "#fff";
        alignJustify.innerHTML = "<i class='fa-solid fa-align-justify'></i>";
        alignJustify.value = "";
    } else {
        bodyTxt.style.textAlign = "start";
        alignLeft.style.backgroundColor = "#fff";
        alignLeft.innerHTML = "<i class='fa-solid fa-align-left'></i>";
        alignLeft.value = "";
    }
}

var alignJustify = document.getElementById("for-align-justify");
alignJustify.value = "";

function forAlignJustify() {
    if (alignJustify.value == "") {
        //justify
        bodyTxt.style.textAlign = "justify";
        alignJustify.style.backgroundColor = "#000";
        alignJustify.innerHTML = "<i class='fa-solid fa-align-justify' style='color: #f0f2f5;'></i>";
        alignJustify.value = "alignJustify"
        //Center
        alignCenter.style.backgroundColor = "#fff";
        alignCenter.innerHTML = "<i class='fa-solid fa-align-center'></i>";
        alignCenter.value = "";
        //Left
        alignLeft.style.backgroundColor = "#fff";
        alignLeft.innerHTML = "<i class='fa-solid fa-align-left'></i>";
        alignLeft.value = "";
        //Right
        alignRight.style.backgroundColor = "#fff";
        alignRight.innerHTML = "<i class='fa-solid fa-align-right'></i>";
        alignRight.value = "";
    } else {
        bodyTxt.style.textAlign = "start";
        alignJustify.style.backgroundColor = "#fff";
        alignJustify.innerHTML = "<i class='fa-solid fa-align-justify'></i>";
        alignJustify.value = "";
    }
}

var alignCenter = document.getElementById("for-align-center");
alignCenter.value = "";

function forAlignCenter() {
    if (alignCenter.value == "") {
        //Center
        bodyTxt.style.textAlign = "center";
        alignCenter.style.backgroundColor = "#000";
        alignCenter.innerHTML = "<i class='fa-solid fa-align-center' style='color: #f0f2f5;'></i>";
        alignCenter.value = "alignCenter"
        //Left
        alignLeft.style.backgroundColor = "#fff";
        alignLeft.innerHTML = "<i class='fa-solid fa-align-left'></i>";
        alignLeft.value = "";
        //Right
        alignRight.style.backgroundColor = "#fff";
        alignRight.innerHTML = "<i class='fa-solid fa-align-right'></i>";
        alignRight.value = "";
        //Justify
        alignJustify.style.backgroundColor = "#fff";
        alignJustify.innerHTML = "<i class='fa-solid fa-align-justify'></i>";
        alignJustify.value = "";
    } else {
        bodyTxt.style.textAlign = "start";
        alignCenter.style.backgroundColor = "#fff";
        alignCenter.innerHTML = "<i class='fa-solid fa-align-center'></i>";
        alignCenter.value = "";
    }
}

var fontColor = document.getElementById("font-color");
function forFontColor() {
    bodyTxt.style.color = fontColor.value;
}