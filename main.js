let div = null

// Step 1 - Create onload handler
window.onload = () => {
    myHexaBgColor();
}


function myHexaBgColor() {

    // Step 3 - Collect all necessary reference
    const content = document.getElementById('content');
    const changeBtn = document.getElementById('change_btn');
    const output = document.getElementById('output');
    const output2 = document.getElementById('output2');
    const copyBtn = document.getElementById('copy-btn');
    const copyBtn2 = document.getElementById('copy-btn2')

    // Step 4 - Handle the click event
    changeBtn.addEventListener('click', function () {

        const bgColor = decimalColorGenerate();
        const hex = hexaColorGenerate(bgColor);
        const rgb = rgbColorGenerate(bgColor);

        content.style.background = hex;
        output.value = hex.substring(1);
        output2.value = rgb;
    })


    // Step 5 - handle the copy button click event
    copyBtn.addEventListener('click', function () {
        window.navigator.clipboard.writeText(`#${output.value}`);

        if (div !== null) {
            div.remove();
            div = null
        }

        // Step 11 - Prevent copying hex code if it is not valid
        if (isHexValid(output.value)) {
            toastMessage(`#${output.value} copied!!`)
        } else {
            alert('Invalid Color Code')
        }
    })


    // step 16 - implement copy function
    copyBtn2.addEventListener('click', function () {
        window.navigator.clipboard.writeText(`${output2.value}`);

        if (div !== null) {
            div.remove();
            div = null
        }

        // Step 11 - Prevent copying hex code if it is not valid
        if (isHexValid(output2.value)) {
            toastMessage(`${output2.value} copied!!`)
        } else {
            alert('Invalid Color Code')
        }
    })


    // Step 10 - implement change handler on input field
    output.addEventListener('keyup', function (e) {
        const color = e.target.value;

        if (color) {
            output.value = color.toUpperCase();

            if (isHexValid(color)) {
                content.style.background = `#${color}`;

                // step 15 - update change handler
                output2.value = hexToRgb(color)
            }
        }
    })
}


// step 12 - refactor the color generator function
// Function 1 - generate three random decimal number for red, green and blue
function decimalColorGenerate() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return {
        red,
        green,
        blue
    }
}



// Step 2 - Random color generator function
// Function 2 - generate hex color code
function hexaColorGenerate({ red, green, blue }) {

    const getTwoCode = (value) => {
        const hex = value.toString(16);
        return hex.length === 1 ? `0${hex}` : hex;
    }


    return `#${getTwoCode(red)}${getTwoCode(green)}${getTwoCode(blue)}`.toUpperCase()
}


// function 3 - generate rgba color code
function rgbColorGenerate({ red, green, blue }) {

    return `rgb(${red}, ${green}, ${blue})`;
}



/**
 * convert hex color to rgb
 * @param {string} hex
 */
// step 14 - create hex to rgb function
function hexToRgb(hex) {
    const red = parseInt(hex.slice(0, 2), 16)
    const green = parseInt(hex.slice(2, 4), 16)
    const blue = parseInt(hex.slice(4), 16)

    return `rgb(${red}, ${green}, ${blue})`;
}

console.log(hexToRgb('FFFFFF'));


// Step 6 - Activate toast message
function toastMessage(msg) {
    div = document.createElement('div');
    div.innerText = msg;
    div.className = 'toast-message toast-message-slide-in';

    //  Step 7 - Create a dynamic toast message
    div.addEventListener('click', function () {
        div.classList.remove('toast-message-slide-in');
        div.classList.add('toast-message-slide-out');

        div.addEventListener('animationend', function () {

            // Step 8 - Clear toast message
            div.remove();
            div = null;
        })
    })

    document.body.appendChild(div)
}



// Step 9 - create is Hex valid function
/**
 * @param {string} color
 */

function isHexValid(color) {
    if (color.length !== 6) return false;
    // if (color[0] !== '#') return false;

    // color = color.substring(1);
    return /^[0-9A-Fa-f]{6}$/i.test(color)
}





// step 13 - update color code to display rbg colors





