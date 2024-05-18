let title = document.getElementById('vehicleTitle');
let desc = document.getElementById('technologyDesc');
let img = document.getElementById('image');

function setContent(titleText, description, imageSmall, imageLarge) {
    title.innerHTML = titleText;
    desc.innerHTML = description;
    
    // Check the screen width and set the appropriate image
    const screenWidth = window.innerWidth;
    if (screenWidth < 769) {
        img.style.backgroundImage = `url(${imageSmall})`;
    } else {
        img.style.backgroundImage = `url(${imageLarge})`;
    }
}

function contentOne() {
    setContent('Launch vehicle', 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth\'s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 meters tall, it\'s quite an awe-inspiring sight on the launch pad!', './assets/technology/image-launch-vehicle-landscape.jpg', './assets/technology/image-launch-vehicle-portrait.jpg');
}

function contentTwo() {
    setContent('Space capsule', 'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth\'s atmosphere without wings. Our capsule is where you\'ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.', './assets/technology/image-space-capsule-landscape.jpg', './assets/technology/image-space-capsule-portrait.jpg');
}

function contentThree() {
    setContent('Spaceport', 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.', './assets/technology/image-spaceport-landscape.jpg', './assets/technology/image-spaceport-portrait.jpg');
}
