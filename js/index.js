

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {
    edge:'left',
    draggable: true,
    inDuration: 450,
    outDuration: 200,
    preventScrolling: true
  });
});

document.querySelector('[data-switch-dark]').addEventListener('click', function() {
  document.body.classList.toggle('light');
});

$(function () {
  $('.toggle-track').on('click', function () {
    $(this).toggleClass('toggled');
    document.body.classList.toggle('light');
  });
});

// $('#toggle').click(function() {
//   $(this).toggleClass('active');
//   $('#overlay').toggleClass('open');
//  });

//  function menuToggle(){
//    var nav = document.getElementById('overlay-menu');
//    nav.classList.toggle('active');

//    if ($('body').hasClass('lock-scroll')) {
//     $('body').removeClass('lock-scroll');
// }
// else {
//     $('body').addClass('lock-scroll');
// }
//  }

 //Collapsible in experience
 document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, {
    accordion:false,
  });
});


// var elemPushpins = document.querySelectorAll('.pushpin');

// elemPushpins.forEach(function(element){

//   var targetElement = document.getElementById(element.dataset.target);
//   var offsetTop = targetElement.offsetTop;
//   var outerHeight = targetElement.offsetHeight;
//   var height = getComputedStyle(element).height.replace("px","");

//   elemPushpinsOptions = {
//     top:offsetTop,
//     bottom: offsetTop + outerHeight - height,
//   };

//   elemPushpinsInstance = M.Pushpin.init(element,elemPushpinsOptions);
// });


