var handle;
var author=null;

var TxtRotate = function(el) {
    this.el = el;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i].text;

    if(fullTxt==null)return;

    var offset=0;

    if(fullTxt.charCodeAt(this.txt.length)>40000)offset=1;
    this.txt = fullTxt.substring(0, this.txt.length + 1+offset);

    this.el.innerHTML = '<span style="border-right: 0.09em solid white;">'+this.txt+'</span>';

    var that = this;
    var delta = 150 - Math.random() * 120;


    if (this.txt === fullTxt) {
        delta = this.period;
    }

    handle=setTimeout(function() {
        that.tick();
    }, delta);
};


function injectTextRotateInCSS (){
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
};
