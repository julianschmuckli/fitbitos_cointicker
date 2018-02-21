import * as messaging from "messaging";
import { settingsStorage } from "settings";

console.log("Companion Started");

// Message socket opens
messaging.peerSocket.onopen = () => {
  console.log("Companion Socket Open");
  restoreSettings();
};

// Message socket closes
messaging.peerSocket.close = () => {
  console.log("Companion Socket Closed");
};

// A user changes settings
settingsStorage.onchange = evt => {
  restoreSettings();
};

// Restore any previously saved settings and send to the device
function restoreSettings() {
  try{
    var coin_one = (JSON.parse(settingsStorage.getItem("coin_one"))).values[0].name;
    var coin_two = (JSON.parse(settingsStorage.getItem("coin_two"))).values[0].name;
    var coin_three = (JSON.parse(settingsStorage.getItem("coin_three"))).values[0].name;
  }catch(e){
    coin_one=null;
    coin_two=null;
    coin_three=null;
  }
  
  if(coin_one==null||coin_two==null||coin_three==null){
    console.log("Coins are not defined in the settings.");
    sendVal({error:true, message:"coins_not_defined"});
  }else{
    console.log("Retrieving data from CoinMarketCap.");
    fetchData(coin_one, coin_two, coin_three);
    var interval = setInterval(function(){ fetchData(coin_one, coin_two, coin_three) }, 30000);
  }
}

function fetchData(symbol_one, symbol_two, symbol_three){
  fetch("https://api.coinmarketcap.com/v1/ticker/?limit=2000")
  .then(function (response) {
      response.json()
      .then(function(data) {
        var ticker_data = [];
        var ia = 0;
        for(var i=0;i<data.length;i++){
          if(data[i]["symbol"]==symbol_one || data[i]["symbol"]==symbol_two || data[i]["symbol"]==symbol_three){
            ticker_data[ia] = data[i];
            ia++;
          }
        }
        console.log(JSON.stringify(ticker_data));
        sendVal(ticker_data)
      });
  })
  .catch(function (err) {
    console.log("Error fetching data from internet: " + err);
  });
}

// Send data to device using Messaging API
function sendVal(data) {
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    messaging.peerSocket.send(data);
  }
}
