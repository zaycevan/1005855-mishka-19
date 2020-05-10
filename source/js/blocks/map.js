if (document.querySelector(".contacts__map")) {
  var imageMap = document.querySelector(".contacts__map-image");

  ymaps.ready(init);

  function init() {

    var map = new ymaps.Map('map', {
      center: [59.9389, 30.3231],
      zoom: 17,
      controls: []
    });

    myPlacemark = new ymaps.Placemark([59.9389, 30.3231], {
      hintContent: 'Собственный значок метки',
      balloonContent: 'Это красивая метка'
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/icon-map-pin.svg',
      iconImageSize: [67, 100],
      iconImageOffset: [-25, -85]
    });

    map.behaviors
      .disable(['drag', 'rightMouseButtonMagnifier'])
      .enable('ruler');

    map.geoObjects
      .add(myPlacemark);
  };

  function hideImageMap() {
    imageMap.classList.add("visually-hidden");
  }

  window.addEventListener("load", hideImageMap);
}
