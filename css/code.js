function callTime(){
    var date = new Date();
    var d = date.getDate();
    var M = date.getMonth();
    var y = date.getFullYear();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";
    
    if(h==0){
        h==12; //convert railway time to local time
    }
    if(h>12){
        h=h-12;  //convert railway time to local time
        session="PM"
    }

    /* adding 0 when the number is below 10*/
    /*if(h<10){
        h="0"+h;
    }
    if(m<10){
        m="0"+m;
    }
    if(s<10){
        s="0"+s;
    }
    */

    //Using ternary opperator
    h = (h<10)? "0"+h : h;
    m = (m<10)? "0"+m : m;
    s = (s<10)? "0"+s : s;



    /* Adding 0 when day & month are below 10*/
    /*if(d<10){
        d= "0"+d;
    }
    if(M<10){
        M= "0"+M;
    }
    */

    //Using ternary opperator
    d = (d<10)? "0"+d : d;
    M = (M<10)? "0"+M : M;
    y = (y<10)? "0"+y : y;

    document.getElementById("digitalClock").innerHTML = h +":"+ m +":"+ s +""+session +"<br>"+ d+"-"+M+"-"+y;
    setTimeout(callTime,1000);
}
callTime();

