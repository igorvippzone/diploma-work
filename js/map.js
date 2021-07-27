function initMap () {
    const map = new ymaps.Map('yandexmap', {
        center: [48.872185, 2.354224],
        zoom: 15,
        controls: [],
        type: 'yandex#map',
        behaviors: ['drag'],
    },
    {
        suppressMapOpenBlock: true
    }
    
    
    
    );
    const marker = new ymaps.Placemark([48.872185, 2.354224], {
        hintContent: 'Франция',
        balloonContent: 'Это наша организация'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: '../img/sun.svg',
        iconImageSize: [28, 40],
        iconImageOffset: [0, 0]
    });

    map.geoObjects.add(marker); 
}

ymaps.ready(initMap);








