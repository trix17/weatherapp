link = "https://api.openweathermap.org/data/2.5/weather?q=Haiti&appid=f9acccabfd38a9f3290516bab10e572e";
var request = new XMLHttpRequest()
request.open('GET',link,true);
request.onload = function(){
    var obj = JSON.parse(this.response);
    console.log(obj);
    document.getElementById('weather').innerHTML = obj.weather[0].description;
    document.getElementById('location').innerHTML = obj.name;
    document.getElementById('temp').innerHTML = (obj.main.temp-221).toPrecision(2)+" °C";
    document.getElementById('icon').src ="http://openweathermap.org/img/w/"+obj.weather[0].icon+".png";

} 
    if (request.status === 200){
        console.log("ERROR");
    }
request.send()
