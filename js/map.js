document.addEventListener("DOMContentLoaded", function () {
  // Função para criar mapa
  function createMap(targetId, centerCoordinates) {
    var map = new ol.Map({
      target: targetId,
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM(),
        }),
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat(centerCoordinates),
        zoom: 4,
      }),
    });

    var states = [
      { name: "Acre", coordinates: [-70.532786, -8.77] },
      { name: "Alagoas", coordinates: [-36.661471, -9.5713] },
      { name: "Amapá", coordinates: [-51.777512, 0.902] },
      { name: "Amazonas", coordinates: [-63.065848, -3.4168] },
      { name: "Bahia", coordinates: [-38.5, -12.9704] },
      { name: "Ceará", coordinates: [-38.510197, -3.71722] },
      { name: "Distrito Federal", coordinates: [-47.9292, -15.7801] },
      { name: "Espírito Santo", coordinates: [-40.3366, -19.19] },
      { name: "Goiás", coordinates: [-49.267137, -16.6869] },
      { name: "Maranhão", coordinates: [-44.301636, -2.53] },
      { name: "Mato Grosso", coordinates: [-56.1026, -12.64] },
      { name: "Mato Grosso do Sul", coordinates: [-54.631, -20.51] },
      { name: "Minas Gerais", coordinates: [-44.55, -18.1] },
      { name: "Pará", coordinates: [-52.297, -1.46] },
      { name: "Paraíba", coordinates: [-35.37, -7.12] },
      { name: "Paraná", coordinates: [-51.02, -25.42] },
      { name: "Pernambuco", coordinates: [-35.7, -8.28] },
      { name: "Piauí", coordinates: [-42.8, -8.28] },
      { name: "Rio de Janeiro", coordinates: [-43.2, -22.91] },
      { name: "Rio Grande do Norte", coordinates: [-35.22, -5.81] },
      { name: "Rio Grande do Sul", coordinates: [-51.22, -30.03] },
      { name: "Rondônia", coordinates: [-63.9, -11.22] },
      { name: "Roraima", coordinates: [-60.66, 2.82] },
      { name: "Santa Catarina", coordinates: [-48.55, -27.59] },
      { name: "São Paulo", coordinates: [-46.63, -23.55] },
      { name: "Sergipe", coordinates: [-37.07, -10.91] },
      { name: "Tocantins", coordinates: [-48.36, -10.25] },
    ];

    var iconStyle = new ol.style.Style({
      image: new ol.style.Icon({
        anchor: [0.5, 1],
        src: "./assets/icones/location-pin.png",
        scale: 0.05,
      }),
    });

    states.forEach(function (state) {
      var marker = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat(state.coordinates)),
        name: state.name,
      });

      marker.setStyle(iconStyle);

      var vectorSource = new ol.source.Vector({
        features: [marker],
      });

      var markerVectorLayer = new ol.layer.Vector({
        source: vectorSource,
      });

      map.addLayer(markerVectorLayer);
    });
  }

  // Inicializando mapas com IDs diferentes
  createMap("map-admin", [-48.55, -27.59]); // Centro da Hubcare Administradora
  createMap("map-gestao", [-47.9292, -15.7801]); // Centro da Hubcare Gestão Saúde
  createMap("map-digital", [-48.55, -27.59]); // Centro da Hubcare Digital
});
