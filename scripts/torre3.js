

document.getElementsByTagName("BODY")
[0].style.backgroundColor="rgb(188,240,22)";
   
document.getElementsByTagName("BODY")
[0].style.backgroundColor="linear-gradient(0deg, rgba(188,240,22,0.48036888233129527) 0%, rgba(253,187,45,1) 100%)";


//----enchufe----------------------

document.write("haychahaymay")


//-------boton_menu_uno_-----------------

document.getElementById("uno")
.style.backgroundColor="none";



document.getElementById("uno")
.style.border=("0.1px solid none");

document.getElementById("uno")
.onclick=function()
{
    myfunc1()
};



//-----------------------------------------------

document.getElementById("uno1")
.style.backgroundColor="none";

document.getElementById("uno1")
.onclick="myfunc1";




//-------------------------------------

var 
pri = document.getElementById("uno0"),
sec = document.getElementById("uno1"),
cont = 0;


function myfunc1()
{
    
    if(cont==0)
        {
        document.getElementById("uno1")
        .style.display="grid";
        cont=1;
        }
   
        else
        {
        document.getElementById("uno1")
        .style.display="none";
        cont=0;
        }
}


//-------------------------------------





//-------------------------------------------
