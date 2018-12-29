var setprofil=function(i) {
    debugger
    var type_profil="pro";
    if(i==1)type_profil="perso";

    if (type_profil == 'perso') document.getElementById("services_pro").innerHTML="";
    if (type_profil == 'pro') document.getElementById("services_perso").innerHTML = "";

    document.getElementById("iframe_tester").src = "https://shifumixweb.appspot.com/tutoriel.html?screens=1&size=150&ihm=" + type_profil;
    document.getElementById("profil").classList.toggle("invisible");
};