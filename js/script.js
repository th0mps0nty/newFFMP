$(document).ready(function(){
  //  ripples
  $(".info").ripples({
    dropRadius: 20,
    perturbance: 0.05,
  });
  //magnific popup
  $('.parent-container').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery: {
    enabled: true
  }
  // other options
});
});
