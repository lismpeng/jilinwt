window.onload = function() {
    var url=location.hash;

    var show = document.getElementById("showId");
    var aLi = show.getElementsByTagName("li");
    for(var i = 0; i < aLi.length; i++){
        aLi[i].onclick = function(){
            for(var j = 0; j < aLi.length; j++){
                aLi[j].className = "";
            }
            this.className  = "sanjiao";
        };
    }


    var ul = document.getElementById("submenu");
    var aLis = ul.getElementsByTagName("li");
    var aA = ul.getElementsByTagName("a");
    var aTabItem = document.getElementsByClassName("tab-item");
    var aI = ul.getElementsByTagName("i");

    if(url){

    }
    for(var i=0; i<aLis.length; i++){

        aLis[i].index=i;

        aLis[i].onclick=function(){
            for(var j=0; j<aLis.length; j++){

                aTabItem[j].style.display="none";
            }
            aTabItem[this.index].style.display="block";


            for(var l=0 ;l<aA.length; l++){
                aA[l].className="";
            }
            aA[this.index].className="bianse";

            for(var m=0; m<aI.length; m++){
                aI[m].className="";
            }
            aI[this.index].className="hoverNav";
        };


    }

};

var aTabItem = document.getElementsByClassName("tab-item");
function go(hash){

    var ul = document.getElementById("submenu");
    var aA = ul.getElementsByTagName("a");
    var aI = ul.getElementsByTagName("i");
    console.log(hash);
    for(var i=0; i<aTabItem.length; i++){
        aTabItem[i].style.display="none";
    }
    for(var m=0; m<aI.length; m++){
        aI[m].className="";
    }
    for(var l=0 ;l<aA.length; l++){
        aA[l].className="";
    }
    document.getElementById(hash+"_tab").className="bianse";
    document.getElementById(hash+"_i").className="hoverNav";
    document.getElementById(hash).style.display="block";
}

