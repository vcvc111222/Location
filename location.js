var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  var x_now = 0;
  var y_now = 0;
  function success(pos) {
    var crd = pos.coords;

    console.log('Your current position is:');
    console.log('Latitude : ' + crd.latitude);
    console.log('Longitude: ' + crd.longitude);
    console.log('More or less ' + crd.accuracy + ' meters.');
    x_now = crd.longitude;
    y_now = crd.latitude;
    
  };
  
  function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };
//上面是定位的程式
// x_now = 經度   y_now = 緯度


  var button = document.getElementById("button");
  var scooter1 = document.getElementById("scooter1");
  var scooter2 = document.getElementById("scooter2");
  var scooter3 = document.getElementById("scooter3");
  var scooter4 = document.getElementById("scooter4");
  var scooter5 = document.getElementById("scooter5");
  //把全部的圖示塞進這個陣列
  var scooter = [scooter1, scooter2, scooter3, scooter4, scooter5];
  //把全部的座標依序塞進這個陣列
  var scooter_position = [{"longitude":120.217778, "latitude":23.002279}, {"longitude":120.220981, "latitude":23.001520}, {"longitude":120.216225, "latitude":23.000224}, {"longitude":120.220592, "latitude":22.999822}, {"longitude":120.222534, "latitude":22.997097}];


  button.addEventListener("click", function(){
    var result = 0;
    var shortest_now = 10000;
    
    for(var i in scooter_position){
      var x_distance = Math.pow(scooter_position[i]["longitude"] - x_now, 2);
      var y_distance = Math.pow(scooter_position[i]["latitude"] - y_now, 2);
      var distance = Math.sqrt(x_distance + y_distance);
      console.log(distance);
      if(distance < shortest_now){
        result = i;
      }
    }
    scooter[i].style.backgroundColor = "Red";
    
    result++;  //方便理解
    console.log(result);
  })

  navigator.geolocation.getCurrentPosition(success, error, options);