document.addEventListener("DOMContentLoaded", function () {
  var allStates = [
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
    { name: "Santa Catarina", coordinates: [-49.55, -27.59] },
    { name: "São Paulo", coordinates: [-46.63, -23.55] },
    { name: "Sergipe", coordinates: [-37.07, -10.91] },
    { name: "Tocantins", coordinates: [-48.36, -10.25] },
  ];

  function filterStatesByRegionsAndNames(regions, names) {
    const regionStates = {
      Norte: [
        "Acre",
        "Amapá",
        "Amazonas",
        "Pará",
        "Rondônia",
        "Roraima",
        "Tocantins",
      ],
      Nordeste: [
        "Alagoas",
        "Bahia",
        "Ceará",
        "Maranhão",
        "Paraíba",
        "Pernambuco",
        "Piauí",
        "Rio Grande do Norte",
        "Sergipe",
      ],
      "Centro-Oeste": [
        "Distrito Federal",
        "Goiás",
        "Mato Grosso",
        "Mato Grosso do Sul",
      ],
      Sudeste: [
        "Espírito Santo",
        "Minas Gerais",
        "Rio de Janeiro",
        "São Paulo",
      ],
      Sul: ["Paraná", "Rio Grande do Sul", "Santa Catarina"],
    };

    let filteredStates = [];

    regions.forEach((region) => {
      filteredStates = filteredStates.concat(
        allStates.filter((state) => regionStates[region].includes(state.name))
      );
    });

    names.forEach((name) => {
      let state = allStates.find((state) => state.name === name);
      if (state) filteredStates.push(state);
    });

    return filteredStates;
  }

  function createMap(targetId, centerCoordinates, states) {
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

    return map;
  }

  var brasilCentralizado = [-47.9292, -15.7801];
  var mapAdmin = createMap(
    "map-admin",
    brasilCentralizado,
    filterStatesByRegionsAndNames(["Nordeste"], ["Santa Catarina", "São Paulo"])
  );
  var mapGestao = createMap(
    "map-gestao",
    brasilCentralizado,
    filterStatesByRegionsAndNames(
      ["Sul", "Sudeste", "Nordeste", "Centro-Oeste"],
      []
    )
  );
  var mapDigital = createMap("map-digital", brasilCentralizado, allStates);

  function handleResize() {
    var maps = [mapAdmin, mapGestao, mapDigital];
    var disableInteractions = window.innerWidth <= 767;

    maps.forEach(function (map) {
      map.getInteractions().forEach(function (interaction) {
        if (
          interaction instanceof ol.interaction.DragPan ||
          interaction instanceof ol.interaction.MouseWheelZoom ||
          interaction instanceof ol.interaction.DoubleClickZoom ||
          interaction instanceof ol.interaction.PinchZoom
        ) {
          interaction.setActive(!disableInteractions);
        }
      });
    });
  }

  window.addEventListener("resize", handleResize);
  handleResize();
});
