let isNotBold = true;
let isNotItalic = true;
let isNotUnderLine = true;
let isNotUpperCase = true;
const textEditor = document.getElementById('text-editor')

document.getElementById('bold-btn').addEventListener('click', function() {
    if (isNotBold) {
        textEditor.style.fontWeight = 'bold';
        isNotBold = false;
    }
    else {
        textEditor.style.fontWeight = 'normal';
        isNotBold = true;
    }
});

document.getElementById('italic-btn').addEventListener('click', function() {
    if (isNotItalic) {
        textEditor.style.fontStyle = 'italic';
        isNotItalic = false;
    }
    else {
        textEditor.style.fontStyle = 'normal';
        isNotItalic = true;
    }
});

document.getElementById('underLine-btn').addEventListener('click', function() {
    if (isNotUnderLine) {
        textEditor.style.textDecoration = 'underline';
        isNotUnderLine = false;
    }
    else {
        textEditor.style.textDecoration = 'none';
        isNotUnderLine = true;
    }
});

document.getElementById('align-left').addEventListener('click', function() {
    textEditor.style.textAlign = 'left';
});

document.getElementById('align-center').addEventListener('click', function() {
    textEditor.style.textAlign = 'center';
});

document.getElementById('align-right').addEventListener('click', function() {
    textEditor.style.textAlign = 'right';
});

document.getElementById('align-justify').addEventListener('click', function() {
    textEditor.style.textAlign = 'justify';
});


document.getElementById('font-capitalization').addEventListener('click', function() {
    if (isNotUpperCase) {
        textEditor.value = textEditor.value.toUpperCase();
        isNotUpperCase = false;
    }
    else {
        textEditor.value = textEditor.value.toLowerCase();
        isNotUpperCase = true;
    }
});

document.getElementById('font-size').addEventListener('click', function(event) {
    const fontSize = event.target.value;
    textEditor.style.fontSize = fontSize.toString() + 'px';
});

function changeColor(event) {
    const color = event.target.value;
    textEditor.style.color = color;
}