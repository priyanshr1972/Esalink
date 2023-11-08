const corousalItems = document.querySelectorAll('.corousalItem');
const corosalContainer = document.querySelector('.corosalContainer');
const corousalHoverStyleElement = document.createElement('style');
const cssForCorousalHover = `.toBeVanished {
    visibility: hidden;
}`

corousalHoverStyleElement.textContent = cssForCorousalHover;


corousalItems.forEach((item, index) => {
  item.addEventListener('mouseenter', () => {
    corosalContainer.style.gridTemplateColumns = index === 0 ? `1.8fr 1fr 1fr`
      : index === 1 ? `1fr 1.8fr 1fr` : `1fr 1fr 1.8fr`;
  });

  item.addEventListener('mouseleave', () => {
    // Reset the grid layout to its original state
    corosalContainer.style.gridTemplateColumns = `1fr 1fr 1fr`;
  });
});

Object.values(document.getElementsByClassName('corousalItem')).forEach((item, index) => {
  item.addEventListener('mouseenter', () => {
    Object.values(document.getElementsByClassName(`toBeVanished${index + 1}`)).forEach((elem) => {
      elem.classList.add('hidden');
    });
    Object.values(document.getElementsByClassName(`toBeVanished2${index + 1}`)).forEach((elem) => {
      elem.classList.add('hidden');
    });
  });
  item.addEventListener('mouseleave', () => {
    Object.values(document.getElementsByClassName(`toBeVanished${index + 1}`)).forEach((elem) => {
      elem.classList.remove('hidden');
    });
    Object.values(document.getElementsByClassName(`toBeVanished2${index + 1}`)).forEach((elem) => {
      elem.classList.remove('hidden');
    });
  });
});


const showCircleDiv = (id,index) => {
  document.querySelectorAll('.secondCircleDesc').forEach(e => {
    e.classList.remove('activeCircle');
  });
  document.querySelectorAll('.arrowIcon').forEach((e, ind) => {
    
  })
  var div = document.getElementById(id);
  console.log(div)
  if (div)
    div.classList.add('activeCircle');
}


const showCircleDivision = (id) => {

  document.querySelectorAll('.secondCircleDesc2nd').forEach(e => {
    e.classList.remove('activeCircle2nd');
  });

  var div = document.getElementById(id);
  if (div)
    div.classList.add('activeCircle2nd');
}

const handleScroll = () => {
  const styleElementWhite = document.createElement('style');
  const styleElementBlack = document.createElement('style');
  const whiteBorderBottom = '.navButton {color: white;background-color:#ffffff56;}.factLinkContainer:hover {background-color: inherit;}.addOption {color: white;} .addOption:hover {border-bottom: 3px solid white;}';
  const blackBorderBottom = '.navButton {color: black;background-color:#f1f5f9;}.factLinkContainer:hover {background-color: white;}.addOption {color: black;}.addOption:hover {border-bottom: 3px solid black;}';
  styleElementWhite.textContent = whiteBorderBottom;
  styleElementBlack.textContent = blackBorderBottom;
  document.getElementsByClassName('logoImage')[0].src = `${window.scrollY <= 90 ? '../IMAGES/logo.svg' : '../IMAGES/scrollLogo.svg'}`
  document.getElementById('firstSectionContainer').style.cssText = `${window.scrollY <= 90 ? 'background-color: transparent'
    :
    `z-index: 10;
    color: black;
    background-color: #ffffffe1;
     `}`
  document.getElementsByClassName('factLinkContainer')[0].style.cssText = `${window.scrollY <= 90 ? 'border-color: white; color: white;' : 'border-color: #80a4cb;color: #80a4cb;'}`
  document.getElementById('body').appendChild(window.scrollY <= 90 ? styleElementWhite : styleElementBlack);

};


const hideDropdown = () => {
  document.getElementById('dropdown1').style.display = 'none';
}
const hideDropdown3 = () => {
  document.getElementById('dropdown3').style.display = 'none';
}
const hideDropdown2 = () => {
  document.getElementById('dropdown2').style.display = 'none';
}

const showDropdown = () => {
  hideDropdown2();
  hideDropdown3();
  document.getElementById('dropdown1').style.display = 'block';
}


const showDropdown2 = () => {
  hideDropdown();
  hideDropdown3();
  document.getElementById('dropdown2').style.display = 'block';
}


const showDropdown3 = () => {
  hideDropdown2();
  hideDropdown();
  document.getElementById('dropdown3').style.display = 'block';
}


// COROUSAL JS
// JavaScript to clone carousel items
const carouselContainer = document.querySelector('.carousel-container');
const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const itemWidth = carouselItems[0].getBoundingClientRect().width;
const numItems = carouselItems.length;
const carouselInner = document.querySelector('.carousel-inner');
const carousalImage = document.querySelectorAll('.carousel-image');



let scrollPosition = 0;

function scrollCarousel() {
  scrollPosition += itemWidth;
  if (scrollPosition >= numItems * itemWidth) {
    scrollPosition = 0;
  }
  carousel.style.transform = `translateX(-${scrollPosition}px)`;
}

const scrollInterval = setInterval(scrollCarousel, 2000);
