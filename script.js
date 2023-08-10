let images = [];
const TOTAL_IMG_2022 = 61;
const TOTAL_IMG_2019 = 13;

for (let i = 0; i < TOTAL_IMG_2022; i++) {
    images.push(`img/symfloyd2022_${i + 1}.jpg`);
}
for (let i = 0; i < TOTAL_IMG_2019; i++) {
    images.push(`img/symfloyd2019_${i + 1}.jpg`);
}


function loadImages() {
    for (let i = 0; i < images.length; i++) {
        document.getElementById('img-container').innerHTML += `
            <div onclick="openImage(${i})" class="img-box">
                <img src="${images[i]}">
            </div>
        `;
    }
}


function openImage(imgIndex) {
    removeElement('img-container');
    showElement('black-screen-container');
    let blackScreen = document.getElementById('black-screen-container');

    blackScreen.innerHTML = renderIconToPreviousImage(imgIndex);
    blackScreen.innerHTML += renderCurrentImage(imgIndex);
    blackScreen.innerHTML += renderIconToNextImage(imgIndex);
    blackScreen.innerHTML += renderClosingIcon();
}


function renderIconToPreviousImage(imgIndex) {
    return `
        <div class="black-screen-left" onmouseenter="showElement('previous-image')" onmouseleave="hideElement('previous-image')" onclick="openImage(${(imgIndex > 0) ? imgIndex - 1 : images.length - 1})">
            <img id="previous-image" class="hidden" src="img/icons/arrow-88-32.png">
        </div>
    `;
}


function renderCurrentImage(imgIndex) {
    return `<img class="current-image" src="${images[imgIndex]}">`;
}


function renderIconToNextImage(imgIndex) {
    return `
        <div class="black-screen-right" onmouseenter="showElement('next-image')" onmouseleave="hideElement('next-image')" onclick="openImage(${(imgIndex < images.length - 1) ? imgIndex + 1 : 0})">
            <img id="next-image" class="hidden" src="img/icons/arrow-24-32.png">
        </div>
    `;
}


function renderClosingIcon() {
    return `<img id="closing-icon" src="img/icons/x-mark-32.png" onclick="closeImage()">`;
}

function closeImage() {
    removeElement('black-screen-container');
    showElement('img-container');
}


function showElement(id) {
    if (document.getElementById(id).classList.contains('d-none'))
        document.getElementById(id).classList.remove('d-none');
    if (document.getElementById(id).classList.contains('hidden'))
        document.getElementById(id).classList.remove('hidden');
}


function hideElement(id) {
    document.getElementById(id).classList.add('hidden');
}


function removeElement(id) {
    document.getElementById(id).classList.add('d-none');
}