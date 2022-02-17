function mapInit() {
  ymaps.ready(() => {
    let myMap = new ymaps.Map("map", {
      center: [55.76, 37.62],
      zoom: 12,
      behaviors: ["drag"],
    });

    var myPlacemark = new ymaps.Placemark([55.76, 37.61], {
      balloonContent: [
      '<div class="reviews">',
        '<div class="reviews__form ">',
          '<div class="reviews__content">',

            '<div class="reviews__desc">',
              '<div class="reviews__desc--name">Сергей</div>',
              '<div class="reviews__desc--location">Кафе</div>',
              '<div class="reviews__desc--date">12.01.2020</div>',
            '</div>',
            '<div class="reviews__comment">Очень хорошее место</div>',

            '<div class="reviews__desc">',
              '<div class="reviews__desc--name">Сергей</div>',
              '<div class="reviews__desc--location">Кафе</div>',
              '<div class="reviews__desc--date">12.01.2020</div>',
            '</div>',
            '<div class="reviews__comment">Очень хорошее место</div>',
            
            '<div class="reviews__desc">',
              '<div class="reviews__desc--name">Сергей</div>',
              '<div class="reviews__desc--location">Кафе</div>',
              '<div class="reviews__desc--date">12.01.2020</div>',
            '</div>',
            '<div class="reviews__comment">Очень хорошее место</div>',

          '</div>',

          '<h2 class="form__title">Отзыв:</h2>',

          '<div class="reviews__input">',
            '<div class="input">',
              '<input type="text" name="name" class="form__input" placeholder="Укажите ваше имя"/>', 
            '</div>',
            '<div class="input">',
              '<input type="text" name="place" class="form__input" placeholder="Укажите место"/>', 
            '</div>',
            '<div class="input">',
              '<textarea class="form__input form__input--textarea" name="comment" placeholder="Оставить отзыв"></textarea>',
            '</div>',
            '<button class="form_btn">Добавить</button>',
          '</div>',
          '<div class="form__triangle"></div>',
        '</div>',
      '</div>',   
      ].join('') 
    });

    var myPlacemark2 = new ymaps.Placemark([55.78, 37.61], {
    });
    var myPlacemark3 = new ymaps.Placemark([55.77, 37.64], {
    });

    
    // Добавим метку на карту.
    myMap.geoObjects.add(myPlacemark);
    myMap.geoObjects.add(myPlacemark2);
    myMap.geoObjects.add(myPlacemark3);

    var clusterer = new ymaps.Clusterer({

    });


  // Добавим кластеризатор на карту.
    myMap.geoObjects.add(clusterer);
    clusterer.add(myPlacemark);
    clusterer.add(myPlacemark2);
    clusterer.add(myPlacemark3);
  });
}

export { mapInit };
