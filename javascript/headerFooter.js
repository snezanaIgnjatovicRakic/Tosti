class SpecialHeader extends HTMLElement {
  connectedCallBack() {
    this.innerHTML = `
      <header>
        <div id="headerLeft">
          <div class="buttonAndPopUp">
            <button id="btnHome" class="headerButtons" onclick="window.location.href = 'homePage.html'">
              <img class="headerImages" id="tostiLogo" src="/homePagePhoto/headerPhotos/logo213.png" alt="Logo">
            </button>
            <div id="popUpHome" class="descriptionPopUp">Početna strana</div>
          </div>
        </div>

        <div id="headerMiddle">
          <div id="pizza-button">
            <div class="buttonAndPopUp">
              <button class="headerButtons" onclick="window.location.href='Menu.html'">
                <img class="headerImages" id="pizza-icon" src="/homePagePhoto/headerPhotos/logo-pizza.png" alt="Menu icon" onmouseover="changeIMG(this, '/homePagePhoto/headerPhotos/pizza-icon-melting.png')" onmouseout="changeIMG(this, '/homePagePhoto/headerPhotos/logo-pizza.png')">
              </button>
              <div id="popUpMenu" class="descriptionPopUp">Meni</div>
            </div>
          </div>
          <!--<div id="bag-button">
            <div class="buttonAndPopUp">
              <button class="headerButtons" id="pizzabtn" onclick="window.location.href='Order.html'">
                <img class="headerImages" id="bag-icon" src="/homePagePhoto/headerPhotos/closed paper-bag-icon-23.jpg" alt="Order icon" onmouseover="changeIMG(this,'/homePagePhoto/headerPhotos/open paper-bag-icon-23.jpg')" onmouseout="changeIMG(this, '/homePagePhoto/headerPhotos/closed paper-bag-icon-23.jpg')">
                <div id="addedToCart" style="width: 20px;height: 20px; border-radius: 100%; z-index: 1; 
                background-color: white;">1</div>
              </button>
              <div id="popUpOrder" class="descriptionPopUp">Naruči</div>
            </div>
          </div>-->
        </div>

        <div id="headerRight">
          
          <div class="buttonAndPopUp">
            <button class="headerButtons" onclick="window.location.href='AboutUs.html'">
              <img class="headerImages" id="info-icon" src="/homePagePhoto/headerPhotos/about-us-white.png" alt="About us icon" onmouseover="changeIMG(this, '/homePagePhoto/headerPhotos/about-us-black.png')" onmouseout="changeIMG(this, '/homePagePhoto/headerPhotos/about-us-white.png')">
            </button>
            <div id="popUpAbout" class="descriptionPopUp">O nama</div>
          </div>
          <div class="buttonAndPopUp">
            <button class="headerButtons" onclick="window.location.href='Contact.html'">
              <img class="headerImages" id="contact-icon" src="/homePagePhoto/headerPhotos/call-icon.png" alt="Contact us icon" onmouseover="changeIMG(this, '/homePagePhoto/headerPhotos/active-call-icon_thumbnail.png')" onmouseout="changeIMG(this, '/homePagePhoto/headerPhotos/call-icon.png')">
            </button>
            <div id="popUpContact" class="descriptionPopUp">Kontaktiraj nas</div>
          </div>
        </div>
      </header>
      `
  }
}

window.customElements.define('special-header', SpecialHeader)

class SpecialFooter extends HTMLElement {
  connectedCallBack() {
    this.innerHTML = `
    <footer>
        <div id="footer-upper">
          <div id="footerLogo">
            <img id="footerLogoimg" src="/homePagePhoto/logoTosti.png" alt="Logo">
          </div>
          <div id="btnList">
            <ul title="Poseti naš sajt">
              <li><a class="Link" style="color: white;" href=''>Početna stanica</a></li>
              <li><a class="Link" style="color: white;" href=''>Meni</a></li>
              <!--<li><a class="Link" style="color: white;" href=''>Naruči</a></li>-->
              <li><a class="Link" style="color: white;" href=''>O nama</a></li>
              <li><a class="Link" style="color: white;" href=''>Kontaktiraj nas</a></li>
            </ul>
          </div>
          <div id="map">
            <div id="visitUs">Poseti nas</div>
            <iframe id="TostiMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.59679118928236!2d21.36792076122899!3d43.72466973648315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47569106af69b89f%3A0xabadd0df2b81424b!2sUR%20%22TOSTI%20fast%20food%22!5e0!3m2!1ssr!2srs!4v1712219929215!5m2!1ssr!2srs" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div id="footer-lower">
          <p id="footer-rights">© TOSTI 2024 All rights reserved.|Crafted by <a id="linkedin" href="https://www.linkedin.com/in/sne%C5%BEana-raki%C4%87/">Snežana Rakić</a></p>
        </div>
      </footer>
    `
  }
}

window.customElements.define('special-footer', SpecialFooter)