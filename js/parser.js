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
    let htmlData = ";"

    for(let i = 0; i < elokuva.length; i++){
        htmlData += "<h2>" + elokuva[i].getElementsByTagName("genre")[0].childNodes[0].nodeValue + "</h2>";
        htmlData += "<p>" + elokuva[i].getElementsByTagName("nimi")[0].childNodes[0].nodeValue + "</p>";
    }
    document.getElementById("elokuva").innerHTML = htmlData;
}

