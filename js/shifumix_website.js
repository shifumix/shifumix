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

    document.getElementById("iframe_tester").src = domain+"/tutoriel.html?withMessage=true&delay=30&screens=1&size=150&ihm=" + type_profil;
    document.getElementById("profil").classList.toggle("invisible");
}



// function openTemplates(){
//     var add_url="";
//     if(type_profil=="pro")add_url="&ihm=pro";
//     window.open(domain+"/demo_template2.html?delay=30"+add_url);
// }


function openScreen(template){
    var url="";target="_blank";
    if(window.innerWidth<800){
        url="http://app.shifumix.com";
        target="_self";
    }else{
        url=domain+"/demo_template2.html?sel="+template;
        // if(template==2)url=domain+"/template.html?postItMessage=false&duration=480&autologin=2&title=Eren%20Titan%20Form%20party&widgets=musicOnly&public=false&noprompt=true&autorun=1&dest=HomePage&ihm=perso&activities=music,message,photo&flyer=https://www.thebostoncalendar.com/system/events/photos/000/026/871/original/Party_Dream_Color_party.jpg?1443946618";
        // if(template==3)url=domain+"/template.html?postItMessage=false&duration=180&autologin=2&title=Afficher%20les%20messages%20partag%C3%A9s%20en%20mode%20g&widgets=message_cursor&public=false&noprompt=true&autorun=1&dest=MessagesPage&ihm=perso&activities=message&flyer=https://shifumixweb.appspot.com/assets/img/ezgif.com-resize.gif";
        // if(template==8)url=domain+"/template.html?postItMessage=false&duration=60&autologin=2&title=Brainstorm&widgets=pelemele&public=false&noprompt=true&autorun=1&dest=MessagesPage&ihm=perso&postItMessage=true&activities=photo,message&flyer=https://zeboute.files.wordpress.com/2018/06/fin_post_it_design_thinking_intelligence_collaborative.jpg";
        // if(template==9)url=domain+"/template.html?postItMessage=false&duration=480&autologin=2&title=My%20meeting&widgets=presentation&public=false&noprompt=true&autorun=1&dest=PresentationPage&ihm=perso&activities=presentation,message,survey&flyer=https://cdn.forbes.com.mx/2015/04/Internet-negocios-siluetas.jpg";
        // if(template==12)url=domain+"/demo_template2.html";

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
        document.getElementById("iframe_tester").src="https://shifumixweb.appspot.com/tutoriel.html?withMessage=true&delay=30&screens=1&size=150&ihm=perso";
        setTimeout(function(){
            document.getElementById("iframe_tester").style.display="inline-block";
            document.getElementById("hourglass").style.display="none";
    },5000);
    },1000);

});

