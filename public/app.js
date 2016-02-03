var initialize = function(){
  console.log('App started');
  var url = 'https://restcountries.eu/rest/v1';
  var request = new XMLHttpRequest();
  var countryList = new Dropdown();


  var dropdown = document.getElementById('Countrylist')
  var section = document.getElementById('info')

  request.open('GET', url);

  request.onload = function() {
    countryList.buildCountryList(request);
  }

  dropdown.onchange = function(){
    var countryName = this.value;
    var countryIndex = null;

    for(index in countryNameList){
      var testCountryName = countryNameList[index];
      if(testCountryName === countryName){
        var countryIndex = index;
        console.log(countryIndex);
        displayCountry(countryIndex);
      }
    }
  }

  var displayCountry = function(index){
    var name = countriesData[index]['name'];
    var capital = countriesData[index]['capital'];
    var population = countriesData[index]['population'];

    console.log(name, capital, population);

    localStorage.setItem('Last country', index)

    var blockquote = document.createElement('blockquote')
    blockquote.innerText = (name + ' - ' + capital + ' - ' + Number(population).toLocaleString());

    section.appendChild(blockquote)
  }

  request.send(null);

};

window.onload = initialize;