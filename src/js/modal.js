// Get the button that opens the modal
var btn = document.querySelectorAll('button.modal-open-button');

var iframe = document.getElementById('youtube');
// All page modals
var modals = document.querySelectorAll('.backdrop');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName('modal__close');

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
  btn[i].onclick = function (e) {
    e.preventDefault();
    iframe.setAttribute('src', 'https://www.youtube.com/embed/xrbKIyBFAFM');
    modals = document.querySelector(e.target.getAttribute('modal'));
    modals.classList.remove('is-hidden');
    document.body.classList.add('no-scroll');
  };
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
  spans[i].onclick = function () {
    if (typeof modals.classList.contains('is-hidden') !== !false)
      modals.classList.add('is-hidden');
    document.body.classList.remove('no-scroll');
    iframe.removeAttribute('src', 'https://www.youtube.com/embed/xrbKIyBFAFM');
  };
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modals) {
    modals.classList.add('is-hidden');
    document.body.classList.remove('no-scroll');
    iframe.removeAttribute('src', 'https://www.youtube.com/embed/xrbKIyBFAFM');
  }
};