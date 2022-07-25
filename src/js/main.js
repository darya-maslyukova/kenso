$(document).ready(function() {

  const owl = $('.services-slider .owl-carousel');
  const info = $('.services-slider-number');

  owl.owlCarousel({
    animateOut: 'fadeOut',
    items: 1,
    smartSpeed: 450,
    nav: true,
    loop: true,
    onInitialized: function(event) {
      nextSlide(event);
    }
  });

  owl.on('changed.owl.carousel', function(event) {
    const index = event.page.index + 1;
    info.text(index < 10 ? `0${index}` : index);

    nextSlide(event);
  });

  $('.services-slider-next').click(function() {
    owl.trigger('next.owl.carousel');
  })

});

function nextSlide(event) {
  const current = event.item.index;
  const nextSlide = $(event.target).find(".owl-item").eq(current + 1).html();

  const nextSlideSrc = $(nextSlide).find('img').attr('src');
  const nextSlideTitle = $(nextSlide).find('.services-slider__info__title').text();

  $('.services-slider-next__img').attr('style', `background-image: url(${nextSlideSrc})`)
  $('.services-slider-next__info__title').text(nextSlideTitle);
}