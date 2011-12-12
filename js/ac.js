function ac () {
    var canvasContext = document.getElementById("ac").getContext("2d");
    canvasContext.fillStyle = "rgba(200,200,200,0.0)";
    var dx=8;
    var alto=32;
    var a=new Array();
    var b=new Array();
    for (var i = 0; i < 41; i += 1) a[i]=Math.round(Math.random());
    for (var j = 0; j < alto; j += 1)
        for (var i = 0; i < a.length; i += 1) {
            canvasContext.fillRect(i*dx,j*dx,dx-1,dx-1);
        };
    canvasContext.fillStyle = "rgba(200,200,200,0.8)";
    var alpha=0.9;
    for (var j = 0; j < alto; j += 1){
        for (var i = 0; i < a.length; i += 1) b[i]=a[i];
        for (var i = 0; i < a.length; i += 1) {
            bj=b[(i+1)%a.length];
            bk=b[i];
            bl=b[(i+a.length-1)%a.length];
            a[i]=r110(bj,bk,bl);
            if (a[i]==1) {
                canvasContext.fillRect(i*dx,j*dx,dx-1,dx-1);
            }
        };
        alpha-=0.01;
        canvasContext.globalAlpha=alpha;
    }
}
function r110 (j,k,l) {
    // [rule 110](http://en.wikipedia.org/wiki/Rule_110)
    if( j==1 && k == 1 && l==1) return 0;
    if( j==1 && k == 1 && l==0) return 1;
    if( j==1 && k == 0 && l==1) return 1;
    if( j==1 && k == 0 && l==0) return 0;
    if( j==0 && k == 1 && l==1) return 1;
    if( j==0 && k == 1 && l==0) return 1;
    if( j==0 && k == 0 && l==1) return 1;
    if( j==0 && k == 0 && l==0) return 0;
}
