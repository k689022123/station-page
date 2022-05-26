var windowScrollHeight = document.documentElement.scrollTop;

var navbarListButton = document.querySelector('.navbar_list-button');
var aside = document.querySelector('.aside');

navbarListButton.addEventListener('click', function () {
  navbarListButton.classList.toggle('active');
  aside.classList.toggle('active');
});
navbarListButton.onclick = function () {
  if (aside.style.display == 'block') {
    aside.style.display = 'none';
    document.getElementById('scroll').style.overflow = 'visible';
  } else {
    aside.style.display = 'block';
    document.getElementById('scroll').style.overflow = 'hidden';
  }
};
