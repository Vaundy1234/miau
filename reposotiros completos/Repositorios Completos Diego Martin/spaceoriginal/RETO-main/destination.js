function initRouter() {
    const contentDiv = document.querySelector('.imgCont'); // Use 'querySelector' instead of 'getElementsByClass'
    const routes = {
      '#/moon': `
        <div id="moon">MOON</div>
        <p>See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
       </div>`,
      '#/mars': `
        <div id="mars">MARS</div>
        <p>Discover the red planet and its secrets. Explore the Martian 
        landscape and experience breathtaking views. Don't forget to visit Olympus Mons, 
        the largest volcano in the solar system.</p>
        <div class="imgData"> 
          <div class="first">Avg. dst<span id="dst">225 MIL. KM</span></div>
          <div class="second">Est. travel tm<span id="tm">6-9 months</span></div>
        </div>`,
      '#/europa': `
        <div id="europa"> EUROOPA </div>
        <p>Discover the red planet and its secrets. Explore the Martian landscape and experience breathtaking views. Don't forget to visit Olympus Mons, the largest volcano in the solar system.</p>
        <div class="imgData"> 
          <div class="first">Avg. dst<span id="dst">225 MIL. KM</span></div>
          <div class="second">Est. travel tm<span id="tm">6-9 months</span></div>
        </div>`,
      '#/titan': `
        <div id="mars"> TITAN </div>
        <p>Discover the red planet and its secrets. Explore the Martian landscape and experience breathtaking views. Don't forget to visit Olympus Mons, the largest volcano in the solar system.</p>
        <div class="imgData"> 
          <div class="first">Avg. dst<span id="dst">225 MIL. KM</span></div>
          <div class="second">Est. travel tm<span id="tm">6-9 months</span></div>
        </div>`,
    };
    
    function renderContent() {
      const currentRouter = window.location.hash || '#';
      const imgCont = routes[currentRouter] || 'Page not found'; // Use 'routes' instead of 'router'
      contentDiv.innerHTML = imgCont;
    }
  
    window.addEventListener('hashchange', renderContent);
    renderContent();
  }
  
  initRouter();

  function moon(){
    let planet = document.getElementById('planetTitle');
    let description =document.getElementById('planetDesc')
    let dist = document.getElementById('dst');
    let tm = document.getElementById('tm');
    
    planet.innerHTML='MOON';
    description.innerHTML =`See our planet as you've never seen it before. A perfect relaxing trip away to
    help regain perspective and come back refreshed. 
    While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites`;
    dist.innerHTML='384,400 KM';
    tm.innerHTML='3 DAYS';

    //update old image with new image of the selected planet
    let oldImage=document.getElementById('planet');
    let newImage='./assets/destination/image-moon.png'
    oldImage.src = newImage;
  }


  function mars(){
    let planet = document.getElementById('planetTitle');
    let description =document.getElementById('planetDesc')
    let dist = document.getElementById('dst');
    let tm = document.getElementById('tm');
    planet.innerHTML='MARS';
    description.innerHTML =`Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
    the tallest planetary mountain in our solar system. It’s two and a half tms 
    the size of Everest!`;
    dist.innerHTML='225 MIL. KM';
    tm.innerHTML='9 months';

    //update old image with new image of the selected planet
    let oldImage=document.getElementById('planet');
    let newImage='./assets/destination/image-mars.png'
    oldImage.src = newImage;
    
  }
  function europa(){
    let planet = document.getElementById('planetTitle');
    let description =document.getElementById('planetDesc')
    let dist = document.getElementById('dst');
    let tm = document.getElementById('tm');
    
    planet.innerHTML='EUROPA';
    description.innerHTML =`The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
    winter lover’s dream. With an icy surface, it’s perfect for a bit of 
    ice skating, curling, hockey, or simple relaxation in your snug 
    wintery cabin.`;
    dist.innerHTML='628 MIL. KM';
    tm.innerHTML='3 Years';

    //update old image with new image of the selected planet
    let oldImage=document.getElementById('planet');
    let newImage='./assets/destination/image-europa.png'
    oldImage.src = newImage;
  }


  function titan(){
    let planet = document.getElementById('planetTitle');
    let description =document.getElementById('planetDesc')
    let dist = document.getElementById('dst');
    let tm = document.getElementById('tm');
    
    planet.innerHTML='TITAN';
    description.innerHTML =`The only moon known to have a dense atmosphere other than Earth, Titan 
    is a home away from home (just a few hundred degrees colder!). As a 
    bonus, you get striking views of the Rings of Saturn.`;
    dist.innerHTML='1.6 BIL. KM';
    tm.innerHTML='7 years';

    //update old image with new image of the selected planet
    let oldImage=document.getElementById('planet');
    let newImage='./assets/destination/image-titan.webp'
    oldImage.src = newImage;
  }

  
