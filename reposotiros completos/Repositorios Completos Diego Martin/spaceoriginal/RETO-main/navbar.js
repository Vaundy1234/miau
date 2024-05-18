const hamburger = document.getElementById('humberger');
const close = document.getElementById('close');
const navLinks = document.querySelector('.nav-elements');
const mobileLinks = document.querySelector('.mobile-links');

hamburger.addEventListener('click', () => {
    console.log('humberger clicked')
    mobileLinks.style.display='block';
    hamburger.style.display = 'none';
    close.style.display = 'block';
});

close.addEventListener('click', () => {
    console.log('close btn clicked')
    mobileLinks.style.display='none';
    close.style.display = 'none';
    hamburger.style.display = 'block';
});
