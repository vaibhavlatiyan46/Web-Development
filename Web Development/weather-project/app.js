const express=require("express");
const app=express();
const https=require("https");
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
    const city=req.body.cityName;
    const url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="YOUR_API_KEY"&units=metric";
    https.get(url,function(response){

        response.on("data",function(data){
            const weatherData=JSON.parse(data);
            const temp=weatherData.main.temp;
            const image=weatherData.weather[0].icon;
            const imageURL="http://openweathermap.org/img/wn/"+image+"@2x.png";
            res.write("<h1>The current tempearture in "+ city +" is "+Number(temp)+"</h1>");
            res.write("<p>But, it feels like "+Number(weatherData.main.feels_like)+"</p>");
            res.write("<img src="+imageURL+">");
            res.send();
        });
    });
});

app.listen(3000,function(req,res){
    console.log("Server is running at port 3000");
});