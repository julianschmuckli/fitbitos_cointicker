import document from "document";
import * as messaging from "messaging";

let colors = {BTC:"#F78818",ETH:"#8C8C8C",LTC:"#BEBEBE",BCH:"#76C353",XRP:"#0092CC",SNT:"#435FDE",MIOTA:"#FFFFFF",ADA:"#216ED8",NEO:"#74BC2A",XEM:"#2CBAAD",XLM:"#D6D9DB",EOS:"#FFFFFF",DASH:"#0076B9",
             XMR:"#FF6D00",TRX:"#FFFFFF",BTG:"#EAA706",ETC:"#668F73",NANO:"#4B93E2",LSK:"#0B438E",ETN:"#22C3E8",BAR:"#646DA6"};

console.log("App Started");

var message_received = false;

let green = "#009933";
let red = "#D14836";

let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");

let currency_one_title = document.getElementById("currency_one_title");
let currency_one_price = document.getElementById("currency_one_price");
let currency_one_percent_1h = document.getElementById("currency_one_percent_1h");
let currency_one_percent_24h = document.getElementById("currency_one_percent_24h");

let currency_two_title = document.getElementById("currency_two_title");
let currency_two_price = document.getElementById("currency_two_price");
let currency_two_percent_1h = document.getElementById("currency_two_percent_1h");
let currency_two_percent_24h = document.getElementById("currency_two_percent_24h");

let currency_three_title = document.getElementById("currency_three_title");
let currency_three_price = document.getElementById("currency_three_price");
let currency_three_percent_1h = document.getElementById("currency_three_percent_1h");
let currency_three_percent_24h = document.getElementById("currency_three_percent_24h");

two.style.display = "none";
three.style.display = "none";

// Message is received
messaging.peerSocket.onmessage = evt => {
  message_received = true;
  
  if(evt.data.error == true){
    if(evt.data.message=="coins_not_defined"){
      currency_one_title.text = "Not configured";
      currency_one_price.text = "Please define the";
      currency_one_percent_1h.text = "coins in the";
      currency_one_percent_24h.text = "app settings.";
      
      currency_one_price.style.fontSize = 30;
      
      two.style.display = "none";
      three.style.display = "none";
    }
  }else{
    two.style.display = "inline";
    three.style.display = "inline";
    
    var name_0 = evt.data[0].name;
    var symbol_0 = evt.data[0].symbol;
    var price_0 = evt.data[0].price_usd;
    var percent_1h_0 = evt.data[0].percent_change_1h;
    var percent_24h_0 = evt.data[0].percent_change_24h;

    var name_1 = evt.data[1].name;
    var symbol_1 = evt.data[1].symbol;
    var price_1 = evt.data[1].price_usd;
    var percent_1h_1 = evt.data[1].percent_change_1h;
    var percent_24h_1 = evt.data[1].percent_change_24h;

    var name_2 = evt.data[2].name;
    var symbol_2 = evt.data[2].symbol;
    var price_2 = evt.data[2].price_usd;
    var percent_1h_2 = evt.data[2].percent_change_1h;
    var percent_24h_2 = evt.data[2].percent_change_24h;

    currency_one_title.text = name_0 + " ("+symbol_0+")";
    currency_one_title.style.fill = colors[symbol_0];
    currency_one_price.text = price_0 + " $";
    currency_one_percent_1h.text = "1h: "+percent_1h_0+" %";
    currency_one_percent_24h.text = "24h: "+percent_24h_0+" %";

    currency_two_title.text = name_1 + " ("+symbol_1+")";
    currency_two_title.style.fill = colors[symbol_1];
    currency_two_price.text = price_1 + " $";
    currency_two_percent_1h.text = "1h: "+percent_1h_1+" %";
    currency_two_percent_24h.text = "24h: "+percent_24h_1+" %";

    currency_three_title.text = name_2 + " ("+symbol_2+")";
    currency_three_title.style.fill = colors[symbol_2];
    currency_three_price.text = price_2 + " $";
    currency_three_percent_1h.text = "1h: "+percent_1h_2+" %";
    currency_three_percent_24h.text = "24h: "+percent_24h_2+" %";
    
    //Show colors
    if(parseFloat(percent_1h_0) < 0){
      currency_one_percent_1h.style.fill = red;
    }else{
      currency_one_percent_1h.style.fill = green;
    }
    if(parseFloat(percent_24h_0) < 0){
      currency_one_percent_24h.style.fill = red;
    }else{
      currency_one_percent_24h.style.fill = green;
    }
    
    if(parseFloat(percent_1h_1) < 0){
      currency_two_percent_1h.style.fill = red;
    }else{
      currency_two_percent_1h.style.fill = green;
    }
    if(parseFloat(percent_24h_1) < 0){
      currency_two_percent_24h.style.fill = red;
    }else{
      currency_two_percent_24h.style.fill = green;
    }
    
    if(parseFloat(percent_1h_2) < 0){
      currency_three_percent_1h.style.fill = red;
    }else{
      currency_three_percent_1h.style.fill = green;
    }
    if(parseFloat(percent_24h_2) < 0){
      currency_three_percent_24h.style.fill = red;
    }else{
      currency_three_percent_24h.style.fill = green;
    }
  }
};

setInterval(function(){
  if(!message_received){
    currency_one_title.text = "No connection";
    currency_one_price.text = "It seems that you don't";
    currency_one_percent_1h.text = "have a connection";
    currency_one_percent_24h.text = "to your phone.";
    
    currency_one_price.style.fontSize = 30;
    
    two.style.display = "none";
    three.style.display = "none";
  }
}, 10000);

// Message socket opens
messaging.peerSocket.onopen = () => {
  console.log("App Socket Open");
};

// Message socket closes
messaging.peerSocket.close = () => {
  console.log("App Socket Closed");
};