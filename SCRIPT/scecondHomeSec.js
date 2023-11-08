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