$('.carousel').carousel({
  interval: 7000,
  pause: "hover"
});

$(document).on('click', '[data-toggle="lightbox"]', function (event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});