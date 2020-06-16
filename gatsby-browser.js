/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

const $ = require("jquery")

export const onInitialClientRender = () => {
  $.getJSON('https://ipapi.co/json/', function(data){
	//console.log("browser.render data", data);
    //$("#ipaddress").html(data.ip);
	$("#country").html(data.country_name);
	$("#countryCode").html(data.country_code);
	$("#countryCapital").html(data.country_capital);
	$("#countryCallingCode").html(data.country_calling_code);
	$("#countryIso").html(data.country_code_iso3);
	$("#city").html(data.city);
	$("#zip").html(data.postal);
	$("#isp").html(data.org);
	$("#timezone").html(data.timezone);
  });
  
  $.getJSON('https://api.ipify.org/?format=json', function(data){
	//console.log("browser.render data", data);
    $("#ipaddress").html(data.ip);
  });
		
		var req = new XMLHttpRequest();
		req.open('GET', document.location, false);
		req.send(null);
		
		// associate array to store all values
		var data = new Object();
		
		// get all headers in one call and parse each item
		var headers = req.getAllResponseHeaders().toLowerCase();
		var aHeaders = headers.split('\n');
		var i =0;
		for (i= 0; i < aHeaders.length; i++) {
			var thisItem = aHeaders[i];
			var key = thisItem.substring(0, thisItem.indexOf(':'));
			var value = thisItem.substring(thisItem.indexOf(':')+1);
			data[key] = value;
		}	    

		// get referer
		var referer = document.referrer;
		data["Referer"] = referer;

		//get useragent
		var useragent = navigator.userAgent;
		data["UserAgent"] = useragent;

		
		//extra code to display the values in html
		var display = "";
		for(key in data) {
			if (key !== "")
			display += "<tr><th width='35%' scope='row'>" + key + " :</th> <td width='65%' class='valueRed'>" + data[key] + "</td></tr>";
		}
		document.getElementById("dump").innerHTML =  display; 
		
		var widthView = document.documentElement.clientWidth;
		var heightView = document.documentElement.clientHeight;
		document.getElementById("innerWidth").innerHTML = widthView;
		document.getElementById("innerHeight").innerHTML = heightView;
		
		var pyth = (widthView*widthView)+(heightView*heightView);
		var diag = Math.round(Math.sqrt(pyth)/72*10)/10;
		document.getElementById("diagonalScreen").innerHTML = Math.round(widthView/72*10)/10+'" Width<br>'+ Math.round(heightView/72*10)/10+'" Height<br>'+diag+'" Diagonal<br>';
		
		const pixelDensity = require("./dist/pixel-density");
		document.getElementById("pixelDensity").innerHTML = pixelDensity(widthView, heightView, diag);

		


}