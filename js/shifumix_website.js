var type_profil="";

function setprofil(i) {
    type_profil="pro";
    if(i==1)type_profil="perso";

    if (type_profil == 'perso') document.getElementById("services_pro").innerHTML="";
    if (type_profil == 'pro') document.getElementById("services_perso").innerHTML = "";

    for(var i=0;i<10;i++){
        var elt=document.getElementById("slide"+i);
        if(elt!=null && elt.tag!=null && type_profil.indexOf(elt.tag)==-1)
            document.removeChild(elt);
    }


    document.getElementById("iframe_tester").src = "https://shifumixweb.appspot.com/tutoriel.html?screens=1&size=150&ihm=" + type_profil;
    document.getElementById("profil").classList.toggle("invisible");
};

function openTemplates(){
    var add_url="";
    if(type_profil=="pro")add_url="?ihm=pro";
    window.open("https://shifumixweb.appspot.com/demo_template2.html"+add_url);
}

function openScreen(template){
    var url="";
    if(document.location.href.indexOf("127.0.0.1")==-1 && document.location.href.indexOf("localhost")==-1){
        if(template==1)url="https://goo.gl/o4UUTq";
        if(template==2)url="https://goo.gl/QWSsQT";
        if(template==3)url="https://goo.gl/uDzjt9";
        if(template==8)url="https://goo.gl/zB4R8s";
    } else {
        if(template==1)url="https://goo.gl/giM8HG";
        if(template==2)url="http://localhost:8080/widgets/freeScreen.html?eventcode=557394&sc=1547055085317&widget=musicOnly&event=event1547055085317&user=event_owner&message=Cette%20%C3%A9cran%20vous%20permet%20de%20partager%20votre%20%C3%A9v%C3%A9nement%20avec%20l%27ensemble%20des%20participants&1547055086050";
    }
    window.open(url,"_blank","left=0,top=0,resizable=0,scrollbars=0,titlebar=0,status=0,width="+screen.availWidth+",height="+screen.availHeight);
}