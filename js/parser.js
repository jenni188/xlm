window.addEventListener("load", loadXML);



function loadXML(){
    let ajax = new XMLHttpRequest();
    ajax.onload = function(){
        parseXML(this.responseXML);
    }
    ajax.open("GET", "data.xml", true);
    ajax.send();
}

function parseXML(xml){
    const elokuva = xml.getElementsByTagName("elokuva");
    let htmlData = ""

    for(let i = 0; i < elokuva.length; i++){
        htmlData += "<h2>" + elokuva[i].getElementsByTagName("nimi")[0].childNodes[0].nodeValue + "</h2>";
        htmlData += "<p>" + elokuva[i].getElementsByTagName("ohjaaja")[0].childNodes[0].nodeValue + "</p>";
        htmlData += "<p>" + elokuva[i].getElementsByTagName("vuosi")[0].childNodes[0].nodeValue + "</p>";
        htmlData += "<p>" + elokuva[i].getElementsByTagName("genre")[0].childNodes[0].nodeValue + "</p>";
        htmlData += "<p>" + elokuva[i].getElementsByTagName("ika")[0].childNodes[0].nodeValue + "</p>";
        htmlData += "<p>" + elokuva[i].getElementsByTagName("yms")[0].childNodes[0].nodeValue + "</p>";
    }
    document.getElementById("elokuva").innerHTML = htmlData;
}

