const submitBtn = document.querySelector('#submit-input-btn');
submitBtn.addEventListener('click', () => {
    function getUserInput() {
        const inputBox = document.querySelector('#input-box');
        const inputValue = inputBox.value;
        inputBox.value = "";
        return inputValue;
    }

    const noOfBoxes = getUserInput();
    console.log(noOfBoxes);

    const boxesArea = document.querySelector('.boxes-area');
    const containerHeight = parseFloat(window.getComputedStyle(boxesArea).height);
    const gap = parseFloat(window.getComputedStyle(boxesArea).gap);

    const boxWidth = (containerHeight - (noOfBoxes-1)*gap) / noOfBoxes;
    const boxHeight = (containerHeight - (noOfBoxes-1)*gap) / noOfBoxes;
    console.log(boxHeight);
    console.log(boxWidth);

    
    for(let i=0;i<noOfBoxes*noOfBoxes;i++) {
        const box = document.createElement('div');
        box.setAttribute('class', 'etch-box');
        box.setAttribute('style', `height: ${boxHeight}px; width: ${boxWidth}px;`);
        boxesArea.appendChild(box);
    }

}, {once: true});