var type_profil="";
var domain=document.location.protocol+"//"+document.location.hostname+":8080";
if(domain.indexOf("www.shifumix.com")>-1)domain="https://shifumixweb.appspot.com";
var handle;

$('#tab').on('shown.bs.tab', function(e) {
    // start videos in new tab
    $(e.target).find('video').each(function() {
        this.play();
    });

    // stop videos in old tab
    $(e.relatedTarget).find('video').each(function() {
        this.stop();
    });
});

function setprofil(idxProfil) {
    if(idxProfil==null)return null;
    $("#myModal").modal('hide');
    clearTimeout(handle);

    type_profil=idxProfil;
    if(type_profil=="bar")type_profil="public";
    if(type_profil!="pro" && type_profil!="public")type_profil="perso";

    var service_elts=document.getElementsByName("services");
    service_elts.forEach(function(service_elt){
        if(service_elt.dataset.tag.indexOf(type_profil)==-1)service_elt.style.display="none";
    });

    var videos_tuto=document.getElementsByName("videos_tuto");
    videos_tuto.forEach(function(elt){
        if(elt.dataset.tag.indexOf(type_profil)==-1)elt.parentNode.removeChild(elt);
    });

    //Fait disparaitre les slides
    for(var i=0;i<15;i++){
        var elt=document.getElementById("slide"+i);
        if(elt!=null && elt.dataset.tag!=null && elt.dataset.tag.indexOf(type_profil)==-1){
            elt.parentElement.removeChild(elt);
        }
    }

    var config="simple";
    debugger
    if(type_profil=="perso")config="nightclub";
    if(type_profil=="public")config="barwithtv";
    if(type_profil=="pro")config="conference";

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

function getParam() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
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

    if(getParam().profil==null){
        handle=setTimeout(function(){
            $("#myModal").modal()
        },10000);
    } else
        setprofil(getParam().profil);


    setTimeout(function(){
        document.getElementById("iframe_tester").src="https://shifumixweb.appspot.com/tutoriel.html?withMessage=true&delay=30&config=simple&size=150&ihm=perso";
        setTimeout(function(){
            document.getElementById("iframe_tester").style.display="inline-block";
            document.getElementById("hourglass").style.display="none";
    },4000);
    },100);

});

