
var bootstrap = fetchQueryParams['space'];
if (bootstrap) {
    var loc = "//nexus.ensighten.com/adsk/" + bootstrap + "/Bootstrap.js";
    tms = document.createElement('script');
    tms.src = loc;
    console.log('loading the ' + bootstrap + ' Ensighten Bootstrap');
    document.getElementsByTagName('head')[0].appendChild(tms);

    // update the PageName value with Space
    window.digitalData.page.pageName += ':' + bootstrap;
}
else {
    console.log('no Ensighten Bootstrap loaded');
}