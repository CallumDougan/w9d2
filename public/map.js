var Map = function(latLng, zoomLevel, icon){
  this.googleMap = new google.maps.Map(document.getElementById('map'), {
    center: latLng,
    zoom: zoomLevel,
    icon: icon,
  });
}