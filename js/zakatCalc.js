var nissabe=705500.00;
var foo=nissabe;
var agro=675;//500kg
var silver=595;//595g
var karats18=113;
var karats21=97;
var karats24=85;

// function defaultn(){
//     console.log(nissabe);}

// nissabe=5000

function setnissab(){
    var a,b;
    a=document.getElementById("niss").value;
    // document.getElementById("nissa").value("<span>nissab</span>");
    // <div class=' mt-5 col-md alert alert-success ' style="background-color:#3a763e; color: white ; " value="" dir="ltr">  دج
    // </div>
    // console.log(a);
    nissabe=a;
    b=document.getElementById("nissa").innerHTML=a+"     دج";
    // console.log(b);
    // c=b.append("<div class=' mt-5 alert'></div>");
    // console.log(c);
    // if (Modernizr.localstorage) {
    //     localStorage.setItem("nissabee", a);
    //     foo = localStorage.getItem("nissabee");
    // } else {
    //     // local storage unavailable
    // }
    // return foo;
console.log("new nissabe is"+a);
}
//  foo=setnissab();
 function getnissab(){
     foo=nissabe;
    console.log(foo);}
// function key() {
//     if ((event.keyCode<48)||(event.keyCode>57)(event!=".")) 
//     event.returnValue=false;}


// function calcmoneyzakat(){
// console.log(0);

// }

//**************************money ***************************************************************
function test(){
    var money=document.getElementById("mon").value;

    if(Math.sign(money)==-1)
    return false;

}
function calcmoneyzakat(foo){
console.log(foo);
var zakat,money=document.getElementById("mon").value;
let b=document.getElementById("da").innerHTML="0000.00";

if (money>=foo ){
    zakat=money*2.5/100;
    console.log(zakat);


    let b=document.getElementById("da").innerHTML=zakat;

    document.getElementById("enter").style.display="none";
    document.getElementById("alnis").style.display="none";
    // document.getElementById("nissa").style.direction="rtl";
console.log(b);
}
else if(money<foo && money>0)
{    document.getElementById("enter").style.display="none";
    document.getElementById("alnis").style.display="block";

}


else if(money==0)
{document.getElementById("alnis").style.display="none";
document.getElementById("enter").style.display="block";}

}
//************************************************************** */


//**************************agricol***************************************************************
// function test(){
//     var money=document.getElementById("mon").value;

//     if(Math.sign(money)==-1)
//     return false;

// }
function calcagrozakat(agro){
console.log(agro);
var water_ar=false,water_na=false,water,zakat,kg=document.getElementById("mon").value;
water=document.getElementsByClassName('ray');
document.getElementById("da").innerHTML="0000.00";







if (kg>=agro ){
 if(water[0].checked)
 water_ar=true;
 if(water[1].checked)
 water_na=true;
 if(water_ar && water_na){
    zakat=kg*7.5/100;
    console.log(zakat);


    let b=document.getElementById("da").innerHTML=zakat;

    document.getElementById("enter").style.display="none";
    document.getElementById("alnis").style.display="none";
    document.getElementById("raytype").style.display="none";

    // document.getElementById("nissa").style.direction="rtl";
console.log(b);
}
else if(water_ar){
    zakat=kg*5/100;
    console.log(zakat);


    let b=document.getElementById("da").innerHTML=zakat;

    document.getElementById("enter").style.display="none";
    document.getElementById("alnis").style.display="none";
    document.getElementById("raytype").style.display="none";

    // document.getElementById("nissa").style.direction="rtl";
console.log(b);
}
else if(water_na){
    zakat=kg*10/100;
    console.log(zakat);


    let b=document.getElementById("da").innerHTML=zakat;

    document.getElementById("enter").style.display="none";
    document.getElementById("alnis").style.display="none";
    document.getElementById("raytype").style.display="none";

    // document.getElementById("nissa").style.direction="rtl";
console.log(b);
}

else if(!water_na && !water_ar){
    


    document.getElementById("enter").style.display="none";
    document.getElementById("alnis").style.display="none";
    document.getElementById("raytype").style.display="block";

    // document.getElementById("nissa").style.direction="rtl";
}
}


else if(kg<agro && kg>0)
{    document.getElementById("enter").style.display="none";
document.getElementById("raytype").style.display="none";

    document.getElementById("alnis").style.display="block";

}


else if(kg==0)
{
document.getElementById("raytype").style.display="none";
document.getElementById("alnis").style.display="none";
document.getElementById("enter").style.display="block";}

}
//************************************************************** */



/// metal zakat  ***********************************************

function change_metal(){
    var a=document.getElementById("selects").value;
    document.getElementById("raytype").style.display="none";
    document.getElementById("alnis").style.display="none";
    document.getElementById("enter").style.display="none";
    if (a == 1) {
        document.getElementById("krt").style.display="block";

    }
    else if(a==2){
        document.getElementById("krt").style.display="none";

    }
}
function calc_metal(){
 var a=document.getElementById("selects").value;
 document.getElementById("da").innerHTML="0000.00";

 if(a==1){



   



    // console.log(a);
    var kr18=false,kr21=false,kr24=false,zakat,kg=document.getElementById("mon").value;
    water=document.getElementsByClassName('kirat');
    console.log(kg);
    if(kg==0)
    {
    document.getElementById("raytype").style.display="none";
    document.getElementById("alnis").style.display="none";
    document.getElementById("enter").style.display="block";
return 0;
}
    
    
    
    
    else if(kg>0){
    if(water[0].checked)
     kr18=true;
     

     if(water[1].checked)
     kr21=true;
     if(water[2].checked)
     kr24=true;
     if(kr18){
        if(kg<karats18 && kg>0)

        {    document.getElementById("enter").style.display="none";
        document.getElementById("raytype").style.display="none";
        
            document.getElementById("alnis").style.display="block";
        
        }
        else{
        zakat=kg*2.5/100;
        console.log(zakat);
    
    
        let b=document.getElementById("da").innerHTML=zakat;
    
        document.getElementById("enter").style.display="none";
        document.getElementById("alnis").style.display="none";
        document.getElementById("raytype").style.display="none";
    
        // document.getElementById("nissa").style.direction="rtl";
    console.log(b);

     

    }}
    else if(kr21){

        if(kg<karats21 && kg>0)

        {    document.getElementById("enter").style.display="none";
        document.getElementById("raytype").style.display="none";
        
            document.getElementById("alnis").style.display="block";
        
        }
        else{
        zakat=kg*2.5/100;
        console.log(zakat);
    
    
        let b=document.getElementById("da").innerHTML=zakat;
    
        document.getElementById("enter").style.display="none";
        document.getElementById("alnis").style.display="none";
        document.getElementById("raytype").style.display="none";
    
        // document.getElementById("nissa").style.direction="rtl";
    console.log(b);
    }}
    else if(kr24){
        if(kg<karats24 && kg>0)

        {    document.getElementById("enter").style.display="none";
        document.getElementById("raytype").style.display="none";
        
            document.getElementById("alnis").style.display="block";
        
        }
        else{

        zakat=kg*2.5/100;
        console.log(zakat);
    
    
        let b=document.getElementById("da").innerHTML=zakat;
    
        document.getElementById("enter").style.display="none";
        document.getElementById("alnis").style.display="none";
        document.getElementById("raytype").style.display="none";
    
        // document.getElementById("nissa").style.direction="rtl";
    console.log(b);
    }}
    
    else if(!kr18 && !kr21 && !kr24){
        
    
    
        document.getElementById("enter").style.display="none";
        document.getElementById("alnis").style.display="none";
        document.getElementById("raytype").style.display="block";
    
        // document.getElementById("nissa").style.direction="rtl";
    }
    
}
     
    
    
  







 }

























    else if(a==2){







        console.log(silver);
        var zakat,money=document.getElementById("mon").value;
        if (money>=silver ){
            zakat=money*2.5/100;
            console.log(zakat);
        
        
            let b=document.getElementById("da").innerHTML=zakat;
        
            document.getElementById("enter").style.display="none";
            document.getElementById("alnis").style.display="none";
            // document.getElementById("nissa").style.direction="rtl";
        console.log(b);
        }
        else if(money<silver && money>0)
        {    document.getElementById("enter").style.display="none";
            document.getElementById("alnis").style.display="block";
        
        }
        
        
        else if(money==0)
        {document.getElementById("alnis").style.display="none";
        document.getElementById("enter").style.display="block";}
        
        }



}

/// animals zakat  ***********************************************

function change_animal(){
    var a=document.getElementById("selects").value;
    // console.log(a);
    if (a == 0) {
let b=document.getElementById("dj").innerHTML="من الغنم";
document.getElementById("da").innerHTML="0000";

    }
    else if(a==1){
        let b=document.getElementById("dj").innerHTML="من البقر";
        document.getElementById("da").innerHTML="0000";

    }

    else if(a==2){
        let b=document.getElementById("dj").innerHTML="من الابل";
        document.getElementById("da").innerHTML="0000";

    }
}
function calc_animal(){
 var   zakat,money, a=document.getElementById("selects").value;

 if(a==0){
    money=document.getElementById("mon").value;
    if(money==0)
    {document.getElementById("alnis").style.display="none";
    document.getElementById("enter").style.display="block";

    let b=document.getElementById("da").innerHTML="0000";
}

    else if(money<40)
    {document.getElementById("alnis").style.display="block";
    document.getElementById("enter").style.display="none";
    let b=document.getElementById("da").innerHTML="0000";
}
    else if(money>=40 && money<=120)
    {document.getElementById("alnis").style.display="none";
    document.getElementById("enter").style.display="none";

    zakat="شاة";
    console.log(zakat);


    let b=document.getElementById("da").innerHTML=zakat;

}

else if(money>120 && money<=200)
{document.getElementById("alnis").style.display="none";
document.getElementById("enter").style.display="none";

zakat="شاتان";
console.log(zakat);


let b=document.getElementById("da").innerHTML=zakat;

}

else if(money>200 && money<=300)
{document.getElementById("alnis").style.display="none";
document.getElementById("enter").style.display="none";

zakat=3+" شاة";
console.log(zakat);


let b=document.getElementById("da").innerHTML=zakat;

}

else if(money>300)
{document.getElementById("alnis").style.display="none";
document.getElementById("enter").style.display="none";

zakat=parseInt(money/100)+" شاة";
console.log(zakat);


let b=document.getElementById("da").innerHTML=zakat;

} 


}

else if(a==1){
var modules,zakat1=0,zakat2=0;
    money=document.getElementById("mon").value;
    if(money==0)
    {document.getElementById("alnis").style.display="none";
    document.getElementById("enter").style.display="block";
    let b=document.getElementById("da").innerHTML="0000";
}
    else if(money>=0 && money<30)
    {document.getElementById("alnis").style.display="block";
    document.getElementById("enter").style.display="none";
    let b=document.getElementById("da").innerHTML="0000";
}
    else if(money==30)
    {document.getElementById("alnis").style.display="none";
    document.getElementById("enter").style.display="none";
    
    zakat="تبيع";
    console.log(zakat);
    
    
    let b=document.getElementById("da").innerHTML=zakat;
    
    } 
    else if(money>=40)
    {document.getElementById("alnis").style.display="none";
    document.getElementById("enter").style.display="none";
    
    zakat1=parseInt(money/40) +"مسنة";
    console.log(zakat1);
    zakat=zakat1+" ";

    modules=money % 40;
    if(modules>=30)
    {
        zakat2=parseInt(modules/30) +"تبيع";
        zakat=zakat1+" "+zakat2;

    }
    

    let b=document.getElementById("da").innerHTML=zakat;
    
    } 


   

}






else if (a==2){

    money=document.getElementById("mon").value;
    if(money==0)
    {document.getElementById("alnis").style.display="none";
    document.getElementById("enter").style.display="block";
    document.getElementById("dj").innerHTML="من الابل";

    let b=document.getElementById("da").innerHTML="0000";
}

    else if(money<5)
    {document.getElementById("alnis").style.display="block";
    document.getElementById("enter").style.display="none";
    let b=document.getElementById("da").innerHTML="0000";
    document.getElementById("dj").innerHTML="من الابل";

}
    else if(money>=5 && money<=24)
    {document.getElementById("alnis").style.display="none";
    document.getElementById("enter").style.display="none";
     b=document.getElementById("dj").innerHTML="من الغنم";

    zakat="شاة";
    console.log(zakat);


    let bb=document.getElementById("da").innerHTML=zakat;

}

else if(money>=25 && money<=35)
{document.getElementById("alnis").style.display="none";
document.getElementById("enter").style.display="none";
document.getElementById("dj").innerHTML="من الابل";

zakat="بنت مخاض";
console.log(zakat);


let b=document.getElementById("da").innerHTML=zakat;

}

else if(money>=36 && money<=45)
{document.getElementById("alnis").style.display="none";
document.getElementById("enter").style.display="none";
document.getElementById("dj").innerHTML="من الابل";

zakat="بنت لبون";
console.log(zakat);


let b=document.getElementById("da").innerHTML=zakat;

}
else if(money>=46 && money<=60)
{document.getElementById("alnis").style.display="none";
document.getElementById("enter").style.display="none";
document.getElementById("dj").innerHTML="من الابل";

zakat="حقة";
console.log(zakat);


let b=document.getElementById("da").innerHTML=zakat;

}

else if(money>=61 && money<=75)
{document.getElementById("alnis").style.display="none";
document.getElementById("enter").style.display="none";
document.getElementById("dj").innerHTML="من الابل";

zakat="جدعة";
console.log(zakat);


let b=document.getElementById("da").innerHTML=zakat;

}
else if(money>=76 && money<=90)
{document.getElementById("alnis").style.display="none";
document.getElementById("enter").style.display="none";
document.getElementById("dj").innerHTML="من الابل";

zakat="بنتا لبون";
console.log(zakat);


let b=document.getElementById("da").innerHTML=zakat;

}

else if(money>=91 && money<=120)
{document.getElementById("alnis").style.display="none";
document.getElementById("enter").style.display="none";
document.getElementById("dj").innerHTML="من الابل";

zakat="حقتان";
console.log(zakat);


let b=document.getElementById("da").innerHTML=zakat;

}

else if(money>=121)
{document.getElementById("alnis").style.display="none";
document.getElementById("enter").style.display="none";
document.getElementById("dj").innerHTML="من الابل";

zakat=parseInt(money/40)+" بنت لبون";
console.log(zakat);


let b=document.getElementById("da").innerHTML=zakat;

} 






}











}







