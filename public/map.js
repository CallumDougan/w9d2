var Map = function(latLng, zoomLevel, icon){
  this.googleMap = new google.maps.Map(document.getElementById('map'), {
    center: latLng,
    zoom: zoomLevel,
    icon: icon,
  });

  this.addMarker = function(latLng){
    var marker = new google.maps.Marker({
      position: latLng,
      map: this.googleMap,
      icon: this.googleMap.icon,
      animation: google.maps.Animation.DROP,
      title: "placeholder"
    });
    return marker;
  },

  this.bindClick = function(){
    google.maps.event.addListener(this.googleMap, 'click', function(event){
      this.addInfoWindow(
        {lat: event.latLng.lat(), lng: event.latLng.lng()},
        "Javascript: objectively bad",
        this.googleMap.icon);
    }.bind(this));
  },

  this.setCentre = function(latLng){
    this.googleMap.setCenter(latLng);
  },

  this.addInfoWindow = function(latLng, title, icon){
    var marker = this.addMarker(latLng, title, icon);
    marker.addListener('click', function(){
      var infoWindow = new google.maps.InfoWindow({
        content: "<h2>"+this.title+"</h2>"
      });

      infoWindow.open(this.map, marker);
    })
  }
}