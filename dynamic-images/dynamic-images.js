let prev = document.querySelector('#prev');
let next = document.querySelector('#next');
let thumbnail = document.querySelectorAll('.thumbnail');
let hero = document.querySelector('#hero');

let backgroundImg = new Array(
  "./assets/bg1.png",
  "./assets/bg2.png",
  "./assets/bg3.png",
  "./assets/bg4.png",
  "./assets/bg5.png",
);

let i = 0;
next.onclick = function() {
  if(i === 4) {
    thumbnail[i].classList.remove("active");
    i = 0;
  } else {
    i++;
    thumbnail[i-1].classList.remove("active");
  };
  hero.style.background = `url('${backgroundImg[i]}')`;
  hero.style.backgroundSize = 'cover';
  hero.style.backgroundPosition = 'center';
  thumbnail[i].classList.add("active");
}

prev.onclick = function() {
  if(i === 0) {
    thumbnail[i].classList.remove("active");
    i = 4;
  } else {
    i--
    thumbnail[i+1].classList.remove("active");
  };
  hero.style.background = `url('${backgroundImg[i]}')`;
  hero.style.backgroundSize = 'cover';
  hero.style.backgroundPosition = 'center';
  thumbnail[i].classList.add("active");
}
