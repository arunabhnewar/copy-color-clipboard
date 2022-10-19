// Step 1 - Create onload handler
window.onload = () => {
    myHexaBgColor();
}

function myHexaBgColor() {

    // Step 3 - Collect all necessary reference
    const content = document.getElementById('content');
    const changeBtn = document.getElementById('change_btn');
    const output = document.getElementById('output');
    const copyBtn = document.getElementById('copy-btn')

    // Step 4 - Handle the click event
    changeBtn.addEventListener('click', function () {
        const myBgColor = hexaColorGenerate();
        content.style.background = myBgColor;
        output.value = myBgColor;
    })

    // Step 5 - handle the copy button click event
    copyBtn.addEventListener('click', function () {
        window.navigator.clipboard.writeText(output.value);
        alert(`Yes!! Your fav color code ${output.value} has been fucked up.`)
    })

    // Step 2 - Random color generator function
    function hexaColorGenerate() {
        const red = Math.floor(Math.random() * 255);
        const green = Math.floor(Math.random() * 255);
        const blue = Math.floor(Math.random() * 255);

        return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
    }
}
