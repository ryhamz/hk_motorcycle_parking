var distance = require('google-distance');
//distance.apiKey = process.env.distanceMatrixKey

const motorcycle_spaces = [
    "Siu Sai Wan Sports Ground",
    "HEALTHY STREET EAST",
    "Anne Black Health Centre",
    "Tsat Tsz Mui Road",
    "HING FAT STREET",
    "Lai King Mansion",
    "Shau Kei Wan Road",
    "Lee Chung Street",
    "Java Road near North Point Road",
    "North Point Vehicluar Ferry Pier Playground"
]
function findParking(destination, fn) {
    
    distance.get(
    {
      origin: 'Prosperity Millenia Plaza',
      destinations: motorcycle_spaces,
      mode: "walking"
    },
    function(err, data) {
      if (err) return console.log(err);
      data.sort(function(a, b) {
        return parseFloat(a.durationValue) - parseFloat(b.durationValue);
    });
      
      fn(data);
    });
    
}

module.exports = {
    findParking
};