// Ekko lightbox
$(document).on("click", '[data-toggle = "lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

// carousel de text
$(".carousel").carousel({
    interval: 2500,
    pause: "null",
});
