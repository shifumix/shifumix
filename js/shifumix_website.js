var type_profil="";
var domain=document.location.protocol+"//"+document.location.hostname+":8080";
if(domain.indexOf("www.shifumix.com")>-1)domain="https://shifumixweb.appspot.com";
var handle;

function setprofil(i) {
    $("#myModal").modal('hide');
    clearTimeout(handle);

    type_profil="pro";
    if(i==1)type_profil="perso";

    if (type_profil == 'perso') document.getElementById("services_pro").style.display="none";
    if (type_profil == 'pro') document.getElementById("services_perso").style.display = "none";

    for(var i=0;i<15;i++){
        var elt=document.getElementById("slide"+i);
        if(elt!=null && elt.attributes.tag!=null && elt.attributes.tag.value.indexOf(type_profil)==-1){
            elt.parentElement.removeChild(elt);
        }
    }

    var config="simple";
    if(type_profil=='perso')config="nightclub";
    if(type_profil=='pro')config="barwithtv";
    if(type_profil==2)config="conference";

    document.getElementById("iframe_tester").src = domain+"/tutoriel.html?config="+config+"&delay=30&size=150&ihm=" + type_profil;
    document.getElementById("profil").classList.toggle("invisible");
}


function openScreen(template){
    var url="";target="_blank";
    if(window.innerWidth<800){
        url="http://app.shifumix.com";
        target="_self";
    }else{
        url=domain+"/demo_template2.html?sel=_"+template;
        url=url+"&now="+new Date().getTime();
    }

    window.open(url,target,"left=0,top=0,resizable=0,scrollbars=0,titlebar=0,status=0,width="+screen.availWidth+",height="+screen.availHeight);
}


function activaTab(tab){
    var elt=$('.faq-nav a[href="#' + tab + '"]');
    elt.tab('show');
}


$(document).ready(function() {

    var ua=navigator.userAgent.toLowerCase();
    if(ua.indexOf("android")>-1){
        if(location.href.indexOf("#")>-1){
            var param=location.href.split("#")[1];
            if(param!=null)param=param.split("?")[0];
            var elt=document.getElementById(param);
            if(elt!=null){
                var section=elt.parentElement.parentElement.parentElement.id;
                activaTab(section);
                document.getElementById("_"+param).classList.toggle("show");
            }
        }
    }

    handle=setTimeout(function(){
        $("#myModal").modal()
    },20000);

    setTimeout(function(){
        document.getElementById("iframe_tester").src="https://shifumixweb.appspot.com/tutoriel.html?withMessage=true&delay=30&config=simple&size=150&ihm=perso";
        setTimeout(function(){
            document.getElementById("iframe_tester").style.display="inline-block";
            document.getElementById("hourglass").style.display="none";
    },4000);
    },100);

});

