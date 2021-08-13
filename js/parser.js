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
    console.log(elokuva);
}

b