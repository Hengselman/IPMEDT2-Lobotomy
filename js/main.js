window.onload = (event) => {
  console.log('Javascript laadt in');
};

// Scroll progress bar interactie
window.onscroll = function() {scrollingInteraction()};
window.onscroll = console.log('Scroll werkt');

function scrollingInteraction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("scrollProgress").style.width = scrolled + "%";
}
