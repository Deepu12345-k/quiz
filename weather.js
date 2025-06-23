let SearchBox=document.getElementById("searchbox")
let SearchButton=document.getElementById("searchbutton")
let City=document.getElementById("cityname")
let Temp=document.getElementById("temp")
let Sky=document.getElementById("sky")
let Wind=document.getElementById("wind")

SearchButton.addEventListener('click',()=>{
    let name=SearchBox.value;
    searchweather(name);
})
searchweather=(Name)=>{
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+Name+"&appid=af746b626f4ce39b695e79dbfc564c53&units=metric")
        .then((res)=>{
            return res.json();
        }).then((data)=>{
            updatepage(data);
        }).catch((err)=>{
            console.log(err);
        })
}
let updatepage=(Data)=>{
    let weatherData=Data;
    console.log(Data);
    let temperature=weatherData.main.temp
    let NameofCity=weatherData.name
    let Clouds=weatherData.weather[0].description
    let Speed=weatherData.wind.speed
    Temp.innerHTML=temperature;
    City.innerHTML=NameofCity;
    Sky.innerHTML=Clouds;
    Wind.innerHTML="wind speed"+Speed+"m/s";
}
