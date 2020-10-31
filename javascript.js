link = "https://api.openweathermap.org/data/2.5/weather?q=RepublicofHaiti&appid=f9acccabfd38a9f3290516bab10e572e";
var request = new XMLHttpRequest()
request.open('GET',link,true);
request.onload = function(){
    var obj = JSON.parse(this.response);
    console.log(obj);
}else{
    console.log("Error occured or city not existing");
}
request.send()
