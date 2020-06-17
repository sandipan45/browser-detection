import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import * as rdd from 'react-device-detect'

const os = require('os'); 

const getRes = require('get-res');
//console.log(getRes()); 
getRes().then(data => {
    //console.log(data);
});



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <table className="table table-bordered w3-table-all">
  <thead>
    <tr>
       <th colSpan="2" scope="row">
	   <td align="center">General Data</td>

	  </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th width="35%" scope="row">Ip Address :</th>
      <td width="65%" id="ipaddress" className="valueRed"></td>
    </tr>
    <tr>
      <th scope="row">Country :</th>
      <td className="valueRed" id="country"></td>
    </tr>
	<tr>
      <th scope="row">Country Code :</th>
      <td className="valueRed" id="countryCode"></td>
    </tr>
	<tr>
      <th scope="row">Country Capital :</th>
      <td className="valueRed" id="countryCapital"></td>
    </tr>
	<tr>
      <th scope="row">Country Calling Code :</th>
      <td className="valueRed" id="countryCallingCode"></td>
    </tr>
	<tr>
      <th scope="row">Country ISO Code :</th>
      <td className="valueRed" id="countryIso"></td>
    </tr>
    <tr>
      <th scope="row">City :</th>
      <td className="valueRed" id="city"></td>
    </tr>
    <tr>
      <th scope="row">Zip/Postal Code :</th>
      <td className="valueRed" id="zip"></td>
    </tr>
    <tr>
      <th scope="row">ISP :</th>
      <td className="valueRed" id="isp"></td>
    </tr>
    <tr>
      <th scope="row">Timezone :</th>
      <td className="valueRed" id="timezone"></td>
    </tr>
  </tbody>
</table>
	

	
	
	
		<table className="table table-bordered w3-table-all">
  <thead>
    <tr>
       <th colSpan="2" scope="row">
      <td align="center">Header Data</td>
	  </th>
    </tr>
  </thead>
  <tbody id="dump">
  </tbody>
</table>


<table className="table table-bordered w3-table-all">
  <thead>
    <tr>
       <th colspan="2" scope="row">
      <td align="center">Device Tracking Data</td>
	  </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th width="35%" scope="row">Browser :</th>
      <td width="65%" className="valueRed">{rdd.browserName}</td>
    </tr>
    <tr>
      <th scope="row">Browser Version :</th>
      <td className="valueRed">{rdd.browserVersion}</td>
    </tr>
    <tr>
      <th scope="row">Device Type :</th>
      <td className="valueRed">{rdd.deviceType}</td>
    </tr>
	<tr>
      <th scope="row">Engine Name :</th>
      <td className="valueRed">{rdd.engineName}</td>
    </tr>
	<tr>
      <th scope="row">Engine Version :</th>
      <td className="valueRed">{rdd.engineVersion}</td>
    </tr>
	<tr>
      <th scope="row">Full Browser Version :</th>
      <td className="valueRed">{rdd.fullBrowserVersion}</td>
    </tr>
	<tr>
      <th scope="row">UA :</th>
      <td className="valueRed">{rdd.getUA}</td>
    </tr>
    <tr>
      <th scope="row">Isandroid :</th>
      <td className="valueRed">{rdd.isAndroid}</td>
    </tr>
    <tr>
      <th scope="row">Isbrowser :</th>
      <td className="valueRed">{rdd.isBrowser}</td>
    </tr>
    <tr>
      <th scope="row">IsChrome :</th>
      <td className="valueRed">{rdd.isChrome}</td>
    </tr>
    <tr>
      <th scope="row">IsChromium :</th>
      <td className="valueRed">{rdd.isChromium}</td>
    </tr>
    <tr>
      <th scope="row">IsConsole :</th>
      <td className="valueRed">{rdd.isConsole}</td>
    </tr>
    <tr>
      <th scope="row">IsEdge :</th>
      <td className="valueRed">{rdd.isEdge}</td>
    </tr>
	<tr>
      <th scope="row">IsEdgeChromium :</th>
      <td className="valueRed">{rdd.isEdgeChromium}</td>
    </tr>
	<tr>
      <th scope="row">IsElectron :</th>
      <td className="valueRed">{rdd.isElectron}</td>
    </tr>
	<tr>
      <th scope="row">IsFirefox :</th>
      <td className="valueRed">{rdd.isFirefox}</td>
    </tr>
	<tr>
      <th scope="row">IsIE :</th>
      <td className="valueRed">{rdd.isIE}</td>
    </tr>
	<tr>
      <th scope="row">IsIOS :</th>
      <td className="valueRed">{rdd.isIOS}</td>
    </tr>
	<tr>
      <th scope="row">IsIOS13 :</th>
      <td className="valueRed">{rdd.isIOS13}</td>
    </tr>
	<tr>
      <th scope="row">IsIPad13 :</th>
      <td className="valueRed">{rdd.isIPad13}</td>
    </tr>
	<tr>
      <th scope="row">IsIPhone13 :</th>
      <td className="valueRed">{rdd.isIPhone13}</td>
    </tr>
	<tr>
      <th scope="row">IsIPod13 :</th>
      <td className="valueRed">{rdd.isIPod13}</td>
    </tr>
	<tr>
      <th scope="row">IsLegacyEdge :</th>
      <td className="valueRed">{rdd.isLegacyEdge}</td>
    </tr>
	<tr>
      <th scope="row">IsMacOs :</th>
      <td className="valueRed">{rdd.isMacOs}</td>
    </tr>
	<tr>
      <th scope="row">IsMobile :</th>
      <td className="valueRed">{rdd.isMobile}</td>
    </tr>
	<tr>
      <th scope="row">IsMobileOnly :</th>
      <td className="valueRed">{rdd.isMobileOnly}</td>
    </tr>
	<tr>
      <th scope="row">IsMobileSafari :</th>
      <td className="valueRed">{rdd.isMobileSafari}</td>
    </tr>
	<tr>
      <th scope="row">IsOpera :</th>
      <td className="valueRed">{rdd.isOpera}</td>
    </tr>
	<tr>
      <th scope="row">IsSafari :</th>
      <td className="valueRed">{rdd.isSafari}</td>
    </tr>
	<tr>
      <th scope="row">IsSmartTV :</th>
      <td className="valueRed">{rdd.isSmartTV}</td>
    </tr>
	<tr>
      <th scope="row">IsTablet :</th>
      <td className="valueRed">{rdd.isTablet}</td>
    </tr>
	<tr>
      <th scope="row">IsWearable :</th>
      <td className="valueRed">{rdd.isWearable}</td>
    </tr>
	<tr>
      <th scope="row">IsWinPhone :</th>
      <td className="valueRed">{rdd.isWinPhone}</td>
    </tr>
	<tr>
      <th scope="row">IsWindows :</th>
      <td className="valueRed">{rdd.isWindows}</td>
    </tr>
	<tr>
      <th scope="row">IsYandex :</th>
      <td className="valueRed">{rdd.isYandex}</td>
    </tr>
	<tr>
      <th scope="row">MobileModel :</th>
      <td className="valueRed">{rdd.mobileModel}</td>
    </tr>
	<tr>
      <th scope="row">MobileVendor :</th>
      <td className="valueRed">{rdd.mobileVendor}</td>
    </tr>
	<tr>
      <th scope="row">Os Name :</th>
      <td className="valueRed">{rdd.osName}</td>
    </tr>
	<tr>
      <th scope="row">Os Version :</th>
      <td className="valueRed">{rdd.osVersion}</td>
    </tr>
	<tr>
      <th scope="row">Screen Width :</th>
      <td className="valueRed" id="innerWidth"></td>
    </tr>
	<tr>
      <th scope="row">Screen Height :</th>
      <td className="valueRed" id="innerHeight"></td>
    </tr>
	<tr>
      <th scope="row">Diagonal Screen Size :</th>
      <td className="valueRed" id="diagonalScreen"></td>
    </tr>
	<tr>
      <th scope="row">Device Pixel Ratio :</th>
      <td className="valueRed" id="pixelDensity"></td>
    </tr>
	<tr>
      <th scope="row">OS Platform :</th>
      <td className="valueRed">{os.platform()}</td>
    </tr>
	<tr>
      <th scope="row">OS Architecture :</th>
      <td className="valueRed">{os.arch()}</td>
    </tr>
	<tr>
      <th scope="row">Type :</th>
      <td className="valueRed">{os.type()}</td>
    </tr>
	<tr>
      <th scope="row">Total Memory :</th>
      <td className="valueRed">{os.totalmem()}</td>
    </tr>
    <tr>
      <th scope="row">Free Memory :</th>
      <td className="valueRed">{os.freemem()}</td>
    </tr>
	<tr>
      <th scope="row">OS Release :</th>
      <td className="valueRed">{os.release()}</td>
    </tr>
	<tr>
      <th scope="row">Network Effective Type :</th>
      <td className="valueRed" id="networkconnectionType"></td>
    </tr>
	<tr>
      <th scope="row">Network Downlink :</th>
      <td className="valueRed" id="networkDownlink"></td>
    </tr>
	<tr>
      <th scope="row">Network RTT :</th>
      <td className="valueRed" id="networkrtt"></td>
    </tr>
  </tbody>
</table>
  </Layout>
)

export default IndexPage
