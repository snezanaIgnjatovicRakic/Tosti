function changeIMG(img, otherImg) {
  img.src = otherImg;
}
function burgerMenu(img) {
  const elem = document.getElementById('brgMenuPopUP');
  const blur = document.getElementById('blur');
  if (img.getAttribute('src') === '/burger menu/big_burger.png') {
    img.src = '/burger menu/x.png';
    elem.style.visibility = 'visible';
    blur.style.filter = 'blur(3.5px)';
  }
  else if (img.getAttribute('src') === '/burger menu/x.png') {
    img.src = '/burger menu/big_burger.png';
    elem.style.visibility = 'hidden';
    blur.style.filter = 'blur(0px)';
  }
}