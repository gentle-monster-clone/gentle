var _inside=_inside||[];var _insideLoaded=_insideLoaded||false;var _insideJQ=_insideJQ||null;(function(){if(_insideLoaded)
return;_insideLoaded=true;var accountKey="IN-1000881";var trackerURL="asia2-track.inside-graph.com";var subsiteId=null;var insideOrderTotal=insideOrderTotal||0;var _insideMaxLoop=25;var _insideCurLoop=0;var _insideFirstLoad=false;var _insideCurrency=null;function processInside(tracker){var searchUrl="/search.php?search_txt=";var searchQueryString=null;var productCategoryUrl=null;var productCategoryQueryString="#product-list";var productUrl=null;var productQueryString=".product-info.jsPrdInfoWrap";var checkoutUrl="/cart|/checkout";var checkoutQueryString=".checkout";var orderConfirmedUrl="/shop/complete_order";var orderConfirmedQueryString=null;function log(){if(typeof(console)!="undefined"&&typeof(console.log)!="undefined"){}}
function validateEmail(tempmail){try{if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(tempmail)){return(true);}}catch(tempex){}
return(false);}
function deferWait(callback,test){if(test()){callback();return;}
var _interval=10;var _spin=function(){if(test()){callback();}
else{_interval=_interval>=1000?1000:_interval*2;setTimeout(_spin,_interval);}};setTimeout(_spin,_interval);}
function keepWait(callback,test){if(test()){callback();if(_insideCurLoop>=_insideMaxLoop){return;}}
var _interval=1000;var _spin=function(){if(test()){_insideCurLoop=_insideCurLoop+1;callback();if(_insideCurLoop>=_insideMaxLoop){return;}}
setTimeout(_spin,_interval);};setTimeout(_spin,_interval);}
var indexOf=[].indexOf||function(prop){for(var i=0;i<this.length;i++){if(this[i]===prop)
return i;}
return-1;};function myTrim(text){try{if(typeof(text)!="undefined"&&text!=null)
return typeof(text.trim)==="function"?text.trim():text.replace(/^\s+|\s+$/gm,'');}catch(trimex){}
return text;}
function isNumber(o){return!isNaN(o-0)&&o!==null&&o!==""&&o!==false;}
function isNumeric(n){try{return!isNaN(parseFloat(n))&&isFinite(n);}
catch(tempex){}
return false;}
function setCookie(cname,cvalue,exdays){var hostName=window.location.hostname;var siteNameFragments=hostName.split(".");var siteName=siteNameFragments[1];var domain=siteNameFragments.slice(1,siteNameFragments.length).join(".");var d=new Date();d.setTime(d.getTime()+(exdays*24*60*60*1000));var expires="expires="+d.toGMTString();document.cookie=cname+"="+cvalue+"; "+expires+";path=/"+";domain=."+domain;}
function getCookie(cname){var name=cname+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=myTrim(ca[i]);if(c.indexOf(name)==0)
return c.substring(name.length,c.length);}
return null;}
function deleteCookie(cname){document.cookie=cname+"="+0+"; "+"expires=01 Jan 1970 00:00:00 GMT"+";path=/";}
function roundToTwo(num){if(Math!="undefined"&&Math.round!="undefined")
return+(Math.round(num+"e+2")+"e-2");else
return num;}
function getSearchParameters(){var prmstr=window.location.search.substr(1);return prmstr!=null&&prmstr!=""?transformToAssocArray(prmstr):[];}
function transformToAssocArray(prmstr){var params=[];var prmarr=prmstr.split("&");for(var i=0;i<prmarr.length;i++){params[i]=prmarr[i];}
return params;}
function randomIntFromInterval(min,max){try{return Math.floor(Math.random()*(max-min+1)+min);}
catch(tempex){}
return min;}
function getDecimalSign(number){try{var tempnum=myTrim(number);if(number.length>3){return number.charAt(number.length-3);}}
catch(signex){}
return ".";}
function getViewData(){try{var data={};data.action="trackView";data.type="article";data.url=window.location.href;data.name="Unknown Page: "+window.location.href;var tempurl=window.location.href.toLowerCase();var temppath=window.location.pathname;var temp_loc=temppath.split("/");var page="";var add_tags=[];var params=getSearchParameters();var searchterm="Search";if(params!=null&&params.length>0){for(var i=0;i<params.length;i++){if(params[i].indexOf("search_txt=")==0){searchterm=params[i].split("search_txt=")[1];}
else if(params[i].indexOf("term=")==0){searchterm=params[i].split("term=")[1];}}}
for(var i=1;i<temp_loc.length;i++){if(temp_loc[i]!=null&&temp_loc[i].length>0)
page=temp_loc[i];}
var curpage=page.split("?")[0];var temppagetype="other";if(typeof(window.pagetype)!="undefined"&&window.pagetype!=null&&window.pagetype.length>0){temppagetype=window.pagetype.toLowerCase();}
if((temppath=="/"||curpage=="index.php"||curpage.toLowerCase()=="us"||curpage.toLowerCase()=="kr"||curpage.toLowerCase()=="ae")&&temp_loc.length<4){data.type="homepage";}
else if(temppagetype=="homepage"){data.type="homepage";}
else if(temppagetype=="search"){data.type="search";}
else if(temppagetype=="category"){data.type="productcategory";}
else if(tempurl.search("/login|/account_register|/ver1_login|/register_new")>-1){data.type="login";}
if(productCategoryUrl!=null){if(tempurl.indexOf(productCategoryUrl.toLowerCase())>-1){data.type="productcategory";}}
if(productCategoryQueryString!=null){var tempelem=_insideJQ(productCategoryQueryString);if(tempelem!=null&&tempelem.length>0){data.type="productcategory";}}
if(searchUrl!=null){if(tempurl.indexOf(searchUrl.toLowerCase())>-1||tempurl.indexOf("/search?term")!=-1){data.type="search";}}
if(searchQueryString!=null){var tempelem=_insideJQ(searchQueryString);if(tempelem!=null&&tempelem.length>0){data.type="search";}}
if(productUrl!=null){if(tempurl.indexOf(productUrl.toLowerCase())>-1){data.type="product";}}
if(productQueryString!=null){var tempelem=_insideJQ(productQueryString);if(tempelem!=null&&tempelem.length>0){data.type="product";}}
if(checkoutUrl!=null){if(tempurl.search(checkoutUrl.toLowerCase())>-1){data.type="checkout";}}
if(checkoutQueryString!=null){var tempelem=_insideJQ(checkoutQueryString);if(tempelem!=null&&tempelem.length>0){data.type="checkout";}}
if(orderConfirmedUrl!=null){if(tempurl.indexOf(orderConfirmedUrl.toLowerCase())>-1){data.type="orderconfirmed";}}
if(orderConfirmedQueryString!=null){var tempelem=_insideJQ(orderConfirmedQueryString);if(tempelem!=null&&tempelem.length>0){data.type="orderconfirmed";}}
try{if(typeof(_insideData)!="undefined"&&_insideData!=null&&_insideData.order&&_insideData.order.total&&_insideData.order.id){data.type="orderconfirmed";}
if(typeof(dataLayer)!="undefined"&&dataLayer!=null&&dataLayer.length>0){for(var i=0;i<dataLayer.length;i++){if(typeof(dataLayer[i])!="undefined"&&dataLayer[i]!=null&&dataLayer[i].length>2&&typeof(dataLayer[i][0])!="undefined"&&dataLayer[i][0]!=null&&dataLayer[i][0].toLowerCase()=="event"&&typeof(dataLayer[i][1])!="undefined"&&dataLayer[i][1]!=null&&dataLayer[i][1].toLowerCase()=="purchase"&&typeof(dataLayer[i][2])!="undefined"&&dataLayer[i][2]!=null){data.type="orderconfirmed";}}}}catch(tempex){}
switch(data.type){case "homepage":data.name="Home";break;case "search":data.name="Search Result Page";if(searchterm!=null&&searchterm.length>0){data.name=decodeURIComponent(searchterm);if(data.name.indexOf("+")!=-1){data.name=data.name.replace(/\+/g,' ');}}
data.node=7;break;case "productcategory":var tempcat=getCategory();if(tempcat!=null&&tempcat.length>0){if(tempcat.length>149)
tempcat=tempcat.substring(0,149);data.category=tempcat;}
var tempPageName=getPageName();if(tempPageName!=null&&tempPageName.length>0)
data.name=tempPageName;data.node=8;break;case "product":var tempPageName=getPageName();if(tempPageName!=null&&tempPageName.length>0)
data.name=tempPageName;tempPageName=getProductName();if(tempPageName!=null&&tempPageName.length>0)
data.name=tempPageName;var tempcat=getCategory();if(tempcat!=null&&tempcat.length>0){if(tempcat.length>149)
tempcat=tempcat.substring(0,149);data.category=tempcat;}
var tempval=getProductImage();if(tempval!=null&&tempval.length>0)
data.img=tempval;else{data.type="other";}
var tempsku=getProductSku();if(tempsku!=null&&tempsku.length>0){data.sku=tempsku;}
var tempprice=getProductPrice();if(tempprice!=null&&tempprice>0)
data.price=tempprice;try{var temprand=randomIntFromInterval(0,10);if(temprand<5){data.node=5;}
else
data.node=6;}catch(nodex){}
break;case "orderconfirmed":data.name="Order Confirmed";data.node=3;break;case "checkout":var tempPageName=getPageName();if(tempPageName!=null&&tempPageName.length>0)
data.name=tempPageName;data.node=3;break;default:var tempPageName=getPageName();if(tempPageName!=null&&tempPageName.length>0)
data.name=tempPageName;try{var temprand=randomIntFromInterval(0,10);if(temprand<5){data.node=1;}
else
data.node=2;}catch(nodex){}}
if(add_tags.length>0){data.tags=add_tags.join(",");}
return data;}
catch(ex){if(typeof(console)!="undefined"&&typeof(console.log)!="undefined")
log("getViewData error: ",ex);return null;}}
function getPageName(){try{var content=document.getElementsByTagName("title");if(typeof(content)!="undefined"&&content!=null&&content.length>0){var result=content[0].textContent||content[0].innerText;if(typeof(result)!="undefined"&&result!=null&&result.length>0){return myTrim(result);}}}catch(pagenameex){}
return null;}
function getProductName(){try{if(typeof(dataLayer)!="undefined"&&dataLayer!=null&&dataLayer.length>0){for(var i=0;i<dataLayer.length;i++){if(typeof(dataLayer[i])!="undefined"&&dataLayer[i]!=null&&dataLayer[i]&&dataLayer[i].ecommerce&&dataLayer[i].ecommerce.product&&dataLayer[i].ecommerce.product.name){return dataLayer[i].ecommerce.product.name;}}}}catch(tempex){}
try{var tempname=myTrim(_insideJQ(".product-info .product-name").first().text());if(tempname.length>0)
return tempname;}catch(tempex){}
return null;}
function getProductImage(){try{var tempimg=_insideJQ(".detail__content .detail-imgs__item  img.detail-imgs__image:first");if(tempimg.length>0){return tempimg.get(0).currentSrc;}}
catch(tempex){}
try{var metaTags=document.getElementsByTagName("meta");var fbAppIdContent="";for(var i=0;i<metaTags.length;i++){if(metaTags[i].getAttribute("property")=="og:image"){fbAppIdContent=metaTags[i].getAttribute("content");if(fbAppIdContent=="https://www.gentlemonster.com/data/item/"){var tempimg=_insideJQ(".detail__content .detail-imgs__item  img.detail-imgs__image:first");if(tempimg.length>0){return tempimg.get(0).currentSrc;}
else{tempimg=_insideJQ(".detail-imgs__item .detail-imgs__content:first");if(tempimg.length>0){var img_link=tempimg.get(0).style.backgroundImage.split('"')[1];return img_link;}}}
return fbAppIdContent;}}}
catch(tempex){}
return null;}
function getProductPrice(){try{var tempprice=parseFloat(_insideJQ(".product-info .product-price").first().text().replace(/[^0-9\.\-\+]/g,""));if(isNumeric(tempprice))
return tempprice;}catch(tempex){}
return null;}
function getProductSku(){try{if(typeof(dataLayer)!="undefined"&&dataLayer!=null&&dataLayer.length>0){for(var i=0;i<dataLayer.length;i++){if(typeof(dataLayer[i])!="undefined"&&dataLayer[i]!=null&&dataLayer[i]&&dataLayer[i].ecommerce&&dataLayer[i].ecommerce.product&&dataLayer[i].ecommerce.product.name&&dataLayer[i].ecommerce.product.sku){return dataLayer[i].ecommerce.product.sku;}}}}catch(tempex){}
try{var tempname=myTrim(_insideJQ(".product-info .product-name").first().text());if(tempname.length>0)
return tempname;}catch(tempex){}
return null;}
function getCategory(){try{var breadcrumbs=_insideJQ(".breadcrumbs");if(breadcrumbs!=null&&breadcrumbs.length>0){breadcrumbs=breadcrumbs[0].getElementsByTagName("li");if(breadcrumbs!=null&&breadcrumbs.length>0){var path="";for(var i=1;i<breadcrumbs.length;i++){var temp=breadcrumbs[i].innerText||breadcrumbs[i].textContent;var tempelem=breadcrumbs[i].getElementsByTagName("a");if(tempelem!=null&&tempelem.length>0){temp=tempelem[0].innerText||tempelem[0].textContent;}
temp=myTrim(temp);if(temp!="/")
path+=(path!=""?" / ":"")+temp;}
if(path!="")
return path;}}}
catch(tempex){}
return null;}
function getOrderData(){try{var data=[];var totalprice=0;var orderId="auto";if(typeof(_insideData)!="undefined"&&_insideData!=null&&_insideData.cart&&_insideData.cart.items){if(_insideData.cart.items.length>0){_insideJQ.each(_insideData.cart.items,function(tempindex,tempitem){var insideitem={};insideitem.action="addItem";insideitem.orderId=orderId;if(tempitem.name&&tempitem.price&&tempitem.qty&&tempitem.sku){insideitem.name=tempitem.name;insideitem.price=parseFloat(tempitem.price);insideitem.qty=parseFloat(tempitem.qty);insideitem.sku=tempitem.sku;insideitem.img=tempitem.img;try{if(tempitem.category){insideitem.category=tempitem.category;if(insideitem.category.length>149)
insideitem.category=insideitem.category.substring(0,149);}}catch(tempex){}
if(tempitem.itemurl){insideitem.url=tempitem.itemurl;}
totalprice=totalprice+(insideitem.qty*insideitem.price);}
else if(tempitem.product&&tempitem.prices){insideitem.name=tempitem.product.name;insideitem.price=parseFloat(tempitem.prices.price.value);insideitem.qty=parseFloat(tempitem.quantity);insideitem.sku=tempitem.product.sku;try{if(tempitem.product.image&&tempitem.product.image.url)
insideitem.img=tempitem.product.image.url;if(tempitem.product.categories){insideitem.category=tempitem.product.categories.map(x=>x.name).join(' / ');if(insideitem.category.length>149)
insideitem.category=insideitem.category.substring(0,149);}}catch(tempex){}
if(tempitem.itemurl){insideitem.url=tempitem.itemurl;}
totalprice=totalprice+(insideitem.qty*insideitem.price);}
data.push(insideitem);});}}
else if(typeof(_insideData)!="undefined"&&_insideData!=null&&_insideData.cart&&_insideData.cart.item){if(_insideData.cart.item.length>0){_insideJQ.each(_insideData.cart.item,function(tempindex,tempitem){var insideitem={};insideitem.action="addItem";insideitem.orderId=orderId;insideitem.name=tempitem.name;insideitem.price=parseFloat(tempitem.price);insideitem.qty=parseFloat(tempitem.qty);insideitem.sku=tempitem.sku;insideitem.img=tempitem.img;insideitem.category=tempitem.category;if(tempitem.itemurl){insideitem.url=tempitem.itemurl;}
totalprice=totalprice+(insideitem.qty*insideitem.price);data.push(insideitem);});}}
if(data.length>0){try{if(typeof(_insideData)!="undefined"&&_insideData!=null&&_insideData.cart&&_insideData.cart.total&&isNumeric(_insideData.cart.total))
totalprice=_insideData.cart.total;}catch(totalex){}
try{if(typeof(_insideData)!="undefined"&&_insideData!=null&&_insideData.cart&&_insideData.cart.prices&&_insideData.cart.prices.grand_total&&isNumeric(_insideData.cart.prices.grand_total))
totalprice=_insideData.cart.prices.grand_total;}catch(totalex){}
data.push({"action":"trackOrder","orderId":orderId,"orderTotal":totalprice});sessionStorage.setItem("insideordertotal",totalprice);return data;}}
catch(ex){log("getOrderData error. ",ex);}
try{var data=[];var totalprice=0;var orderId="auto";if(typeof(_insideData)!="undefined"&&_insideData!=null&&_insideData.product){if(_insideData.product.length>0){_insideJQ.each(_insideData.product,function(tempindex,tempitem){if(tempitem.name&&tempitem.price&&tempitem.qty){var insideitem={};insideitem.action="addItem";insideitem.orderId=orderId;insideitem.name=tempitem.name;insideitem.price=parseFloat(tempitem.price);insideitem.qty=parseFloat(tempitem.qty);insideitem.sku=tempitem.sku;insideitem.img=tempitem.image;try{if(tempitem.category){insideitem.category=tempitem.category;if(insideitem.category.length>149)
insideitem.category=insideitem.category.substring(0,149);}}catch(tempex){}
if(tempitem.itemurl){insideitem.url=tempitem.itemurl;}
totalprice=totalprice+(insideitem.qty*insideitem.price);data.push(insideitem);}});}}
if(data.length>0){data.push({"action":"trackOrder","orderId":orderId,"orderTotal":totalprice});sessionStorage.setItem("insideordertotal",totalprice);return data;}}
catch(ex){log("getOrderData error. ",ex);}
return null;}
function orderConfirmProcess(){try{var data=[];var tempcurrency=null;var detail=null;if(typeof(_insideData)!="undefined"&&_insideData!=null&&_insideData.order&&_insideData.order.total&&_insideData.order.id){detail=_insideData.order;}
if(detail!=null){var totalprice=detail.total;var orderID=detail.id;var temppurchasedata={};if(typeof(detail.shipping)!="undefined"&&detail.shipping!=null){temppurchasedata.shipping=detail.shipping;}
if(typeof(detail.tax)!="undefined"&&detail.tax!=null){temppurchasedata.tax=detail.tax;}
if(tempcurrency!=null){temppurchasedata.currency=tempcurrency;}
if(typeof(orderID)!="undefined"&&orderID!=null&&orderID.length>0&&orderID!="auto"){try{var lastOrderID=sessionStorage.getItem("insidelastorderid");if(lastOrderID==orderID){return null;}}
catch(orderidex){}
data.push({"action":"trackOrder","orderId":"auto","newOrderId":orderID,"orderTotal":totalprice,"data":temppurchasedata,"update":true,"complete":true});return data;}}}
catch(ex){log("orderConfirmProcess error. ",ex);}
try{var data=[];var tempcurrency=null;var detail=null;if(typeof(dataLayer)!="undefined"&&dataLayer!=null&&dataLayer.length>0){for(var i=0;i<dataLayer.length;i++){if(typeof(dataLayer[i])!="undefined"&&dataLayer[i]!=null&&dataLayer[i].length>2&&typeof(dataLayer[i][0])!="undefined"&&dataLayer[i][0]!=null&&dataLayer[i][0].toLowerCase()=="event"&&typeof(dataLayer[i][1])!="undefined"&&dataLayer[i][1]!=null&&dataLayer[i][1].toLowerCase()=="purchase"&&typeof(dataLayer[i][2])!="undefined"&&dataLayer[i][2]!=null){detail=dataLayer[i][2];}}}
if(detail!=null){var totalprice=detail.value;var orderID=detail.transaction_id;var temppurchasedata={};if(typeof(detail.shipping)!="undefined"&&detail.shipping!=null){temppurchasedata.shipping=detail.shipping;}
if(typeof(detail.tax)!="undefined"&&detail.tax!=null){temppurchasedata.tax=detail.tax;}
if(tempcurrency!=null){temppurchasedata.currency=tempcurrency;}
if(typeof(orderID)!="undefined"&&orderID!=null&&orderID.length>0&&orderID!="auto"){try{var lastOrderID=sessionStorage.getItem("insidelastorderid");if(lastOrderID==orderID){return null;}}
catch(orderidex){}
data.push({"action":"trackOrder","orderId":"auto","newOrderId":orderID,"orderTotal":totalprice,"data":temppurchasedata,"update":true,"complete":true});}
return data;}}
catch(ex){log("orderConfirmProcess error. ",ex);}
try{var data=[];var detail=myTrim(_insideJQ(".order_confirmation .id_order p").text());if(detail&&detail.indexOf("#")!=-1){var orderID=detail.split("#")[1];if(typeof(orderID)!="undefined"&&orderID!=null&&orderID.length>0&&orderID!="auto"){try{var lastOrderID=sessionStorage.getItem("insidelastorderid");if(lastOrderID==orderID){return null;}}
catch(orderidex){}
data.push({"action":"trackOrder","orderId":"auto","newOrderId":orderID,"update":true,"complete":true});return data;}}}
catch(ex){log("orderConfirmProcess error. ",ex);}
return null;}
function getVisitorId(){try{if(typeof(_insideData.user.id)!="undefined"&&_insideData.user.id!=null&&typeof(_insideData.user.email)!="undefined"&&_insideData.user.email!=null&&validateEmail(_insideData.user.email))
return _insideData.user.id;}
catch(visitidex){}
return null;}
function getVisitorName(){try{if(typeof(_insideData.user.id)!="undefined"&&_insideData.user.id!=null&&typeof(_insideData.user.email)!="undefined"&&_insideData.user.email!=null&&validateEmail(_insideData.user.email)){if(_insideData.user.name){return _insideData.user.name;}}}
catch(visitidex){}
return null;}
function getVisitorData(){try{var tempdata={};var templang=_insideJQ("html").attr("lang");if(templang){tempdata.language=templang;}
if(typeof(_insideData)!="undefined"&&_insideData!=null&&typeof(_insideData.website)!="undefined"&&_insideData.website!=null){if(_insideData.website.country){tempdata.country=_insideData.website.country;}
if(_insideData.website.language){tempdata.language=_insideData.website.language;}
if(_insideData.website.currency){tempdata.currency=_insideData.website.currency;}
var tempuserid=getVisitorId();var tempusername=getVisitorName();if(tempuserid!=null&&tempuserid.length>0&&tempusername!=null&&tempusername.length>0){tempdata.user_name=tempusername;tempdata.user_email=_insideData.user.email;}}
try{if(tempdata.country.toLowerCase()=="cn"&&tempdata.language.toLowerCase()=="cn")
tempdata.language="zh";}catch(templanguage){}
return tempdata;}
catch(visitidex){}
return null;}
function insertInsideTag(){try{_insideGraph.processQueue();}
catch(tempex){}}
function sendToInside(){try{tracker.url=window.location.href;var visitorId=getVisitorId();if(visitorId!=null&&visitorId.length>0){tracker.visitorId=visitorId;}
var visitorName=getVisitorName();if(visitorName!=null&&visitorName.length>0){tracker.visitorName=visitorName;}
var visitorData=getVisitorData();if(visitorData!=null){tracker.visitorData=visitorData;}
var view=getViewData();if(view!=null){if(view.type=="orderconfirmed"){var tempconfirm=orderConfirmProcess();if(tempconfirm!=null&&tempconfirm.length>0){for(var i=0;i<tempconfirm.length;i++){_inside.push(tempconfirm[i]);try{if(tempconfirm[i].action=="trackOrder")
if(typeof(tempconfirm[i].newOrderId)!="undefined"&&tempconfirm[i].newOrderId!=null)
sessionStorage.setItem("insidelastorderid",tempconfirm[i].newOrderId);}
catch(tempex){}}}}
else{var orderData=getOrderData();if(orderData!=null&&orderData.length>0){for(var i=0;i<orderData.length;i++){_inside.push(orderData[i]);if(orderData[i].action=="trackOrder"){view.orderId=orderData[i].orderId;view.orderTotal=orderData[i].orderTotal;insideOrderTotal=orderData[i].orderTotal;}}}
else{try{if(view.url.indexOf("/cart")!=-1){sessionStorage.removeItem("insideordertotal");}
else{var tempcartcount=parseFloat(myTrim(_insideJQ(".n-header__cart  .cart-count").text()));if(isNumeric(tempcartcount)&&tempcartcount>0){var temptotal=sessionStorage.getItem("insideordertotal");if(temptotal!=null){view.orderId="auto";view.orderTotal=temptotal;}}}}catch(tempex){}}}
try{if(typeof(_insideData)!="undefined"&&_insideData.website&&_insideData.website.currency&&_insideData.website.currency.length==3){_insideCurrency=_insideData.website.currency;}
if(_insideCurrency){if(_inside!=null&&_inside.length>0){for(var i=0;i<_inside.length;i++){if(_inside[i].action=="trackOrder"){if(typeof(_inside[i].data)=="undefined"||_inside[i].data==null){_inside[i].data={};}
if(typeof(_inside[i].data.currency)=="undefined"||_inside[i].data.currency==null){_inside[i].data.currency=_insideCurrency;}}}}
if(typeof(view.data)=="undefined"||view.data==null){view.data={};}
view.data.currency=_insideCurrency;if(typeof(tracker.visitorData)=="undefined"||tracker.visitorData==null){tracker.visitorData={};}
tracker.visitorData.currency=_insideCurrency;}}catch(currencyex){}
_inside.push(view);log("Inside Debug: ",_inside);}}
catch(sendex){_inside=[];_inside.push({"action":"trackView","type":"other","name":"Check: "+window.location.href});log(sendex);}
insertInsideTag();if(!_insideFirstLoad)
_insideFirstLoad=true;}
var tempview=getViewData();if(tempview!=null&&typeof(tempview.type)!="undefined"&&tempview.type!=null&&tempview.type=="orderconfirmed"){deferWait(sendToInside,function(){var tempconfirm=orderConfirmProcess();if(tempconfirm!=null&&tempconfirm.length>0){return true;}
return document.readyState!='loading'&&document.readyState!='interactive';});}
else{deferWait(sendToInside,function(){if(document.readyState!='loading'&&document.readyState!='interactive'){keepWait(sendToInside,function(){if(!_insideFirstLoad)
return false;if(typeof(_insideGraph)!="undefined"&&_insideGraph!=null){var temporderdata=getOrderData();if(temporderdata!=null&&temporderdata.length>0){for(var i=0;i<temporderdata.length;i++){if(temporderdata[i].action=="trackOrder"){if(insideOrderTotal!=temporderdata[i].orderTotal){return true;}}}}
else if(insideOrderTotal>0){insideOrderTotal=0;return true;}}
return false;});return true;}
return false;});}
deferWait(function(){var websiteId=insideFrontInterface.chat.userid.split(':')[1];_insideGraph.loadJS(_insideCDN+'custom/'+websiteId+'-customScript.js?v='+_insideScriptVersion);},function(){return typeof _insideGraph!='undefined'&&_insideGraph.loadJS&&typeof insideFrontInterface!='undefined'&&insideFrontInterface.chat&&insideFrontInterface.chat.userid;});}
if(window.location.href.indexOf("no_insidechat=true")!=-1){return;}
else{if(typeof(_insideGraph)!="undefined"&&_insideGraph!=null&&typeof(_insideGraph.current)!="undefined"&&_insideGraph.current!=null){processInside(_insideGraph.current)}
else{var insideTracker={"action":"getTracker","crossDomain":false,"account":accountKey};try{var subsiteMapping={"kr":"39","ae":"40","us":"42","sg":"44","cn":"45","jp":"54","int":"43"};try{var tempPathArr=window.location.pathname.split("/").filter(function(p){return p!=="";});if(tempPathArr&&tempPathArr.length>0&&subsiteMapping[tempPathArr[0]])
subsiteId=subsiteMapping[tempPathArr[0]];}catch(tempex){}
if(typeof(_insideData)!="undefined"&&_insideData!=null&&_insideData.website&&_insideData.website.country){var tempdatacountry=_insideData.website.country.toLowerCase();if(subsiteMapping[tempdatacountry])
subsiteId=subsiteMapping[tempdatacountry];}}catch(subsiteex){}
if(typeof(subsiteId)!="undefined"&&subsiteId!=null)
insideTracker["subsiteId"]=subsiteId;_inside.push(insideTracker);_inside.push({"action":"bind","name":"onload","callback":function(tracker){if(_insideFirstLoad)
return;_insideJQ=_insideGraph.jQuery;processInside(tracker);try{var tempcursubsite=sessionStorage.getItem("insidecurrentsubsite");if(tempcursubsite){if(tempcursubsite!=subsiteId){_insideGraph.defer(function(){setTimeout(function(){if(insideFrontInterface.currentChatId){insideChatPane.frame.contentWindow.insideWorkflows.stopWorkflowIfNeeded();insideChatPane.showSystemMessage("Conversation ended due to region change");_insideGraph.jQuery.inside.server.stopChat(insideFrontInterface.currentChatId);}},1000)},function(){return typeof insideChatPane!="undefined"&&insideChatPane!=null&&insideChatPane.showSystemMessage&&_insideGraph.jQuery.inside&&_insideGraph.jQuery.inside.server},500);}}
sessionStorage.setItem("insidecurrentsubsite",subsiteId);}catch(subsitechangeex){}}});(function(w,d,s,u){a=d.createElement(s),m=d.getElementsByTagName(s)[0];a.async=1;a.src=u;m.parentNode.insertBefore(a,m);})(window,document,"script","//"+trackerURL+"/ig.js");}}})();