var map1 = new ol.Map({
  target: "map",
  layers: [
    new ol.layer.Title({
      source: new ol.source.OSM(),
    }),
  ],
  view: new ol.view({
    center: ol.proj.fromLonLat([-51.9253, -14.235]), // Centro do Brasil
    zoom: 4,
  }),
});

function createMarker(coordinate) {
  return new ol.Feature({
    geometry: new ol.geom.Point(coordinate),
  });
}

// Coordenadas dos estados onde você deseja adicionar alfinetes
var saoPauloCoordinate = ol.proj.fromLonLat([-46.6333, -23.5505]); // São Paulo
var rioDeJaneiroCoordinate = ol.proj.fromLonLat([-43.1729, -22.9068]); // Rio de Janeiro

// Cria os marcadores
var saoPauloMarker = createMarker(saoPauloCoordinate);
var rioDeJaneiroMarker = createMarker(rioDeJaneiroCoordinate);

// Fonte de vetor que contém os marcadores
var vectorSource = new ol.source.Vector({
  features: [saoPauloMarker, rioDeJaneiroMarker],
});

// Estilo para os marcadores
var markerStyle = new ol.style.Style({
  image: new ol.style.Icon({
    anchor: [0.5, 1],
    src: "https://openlayers.org/en/latest/examples/data/icon.png",
  }),
});

// Camada de vetor para os marcadores
var markerLayer = new ol.layer.Vector({
  source: vectorSource,
  style: markerStyle,
});

// Adiciona a camada de marcadores ao mapa
map.addLayer(markerLayer);
