var i = 0;
function startUp(){
var t = document.getElementsByClassName("top");
var m = document.getElementsByClassName("middle");
var b = document.getElementsByClassName("bottom");
var l = document.getElementsByClassName("logo");
var lc = document.getElementsByClassName("logoClass");
var n = document.getElementsByClassName("name");
var por = document.getElementsByClassName("portriat");
var wia = document.getElementsByClassName("whoIAm");
var wiat = document.getElementsByClassName("whoIAmText");
var e = document.getElementsByClassName("education");
var et = document.getElementsByClassName("educationText");
var pdt = document.getElementsByClassName("PDT");
var pdtt = document.getElementsByClassName("PDTText");
var doe = document.getElementsByClassName("DoE");
var doet = document.getElementsByClassName("DoEText");
var ll = document.getElementsByClassName("liveLightly");
var llt = document.getElementsByClassName("liveLightlyText");
var f = document.getElementsByClassName("foot");
var ci = document.getElementsByClassName("contactInfo");
var li = document.getElementsByClassName("linkedIn");


if(i==0) {
	
	
    m[0].style.display="inline-flex";
	m[0].style.position="fixed";
	m[0].style.marginTop="15vh";
	//m[0].style.top="15vh";
	m[0].style.left="0vw";
	m[0].style.height="35vh";
	m[0].style.width="99vw";
	
    b[0].style.display="inline-flex";
	b[0].style.position="fixed";
	b[0].style.marginTop="0vh";
	b[0].style.top="50vh";
	b[0].style.left="0vw";
	b[0].style.height="34vh";
	b[0].style.width="99vw";
	
	f[0].style.display="block";
	f[0].style.position="fixed";
	f[0].style.left="0vw";
	f[0].style.borderTop="solid";
	f[0].style.borderColor="#CFB53B";
	f[0].style.height="15vh";
	f[0].style.width="100vw";
	f[0].style.top="85vh";
	f[0].style.backgroundColor="#0a0a0a";
	
	
	t[0].style.display="inline-flex";
	t[0].style.position="fixed";
	t[0].style.top="5vh";
	t[0].style.left="0vw";
	t[0].style.height="10vh";
	t[0].style.width="99vw";

	
    

	
	
	n[0].style.display="inline";
		n[0].innerHTML="<img src='kayla.png' height='100%' width='100%'></img>";
	n[0].style.position="inline-flex";
	n[0].style.height="6vh";
	n[0].style.width="10vw";
	n[0].style.marginTop=".3vh";
	

    lc[0].style.height="100%";
    lc[0].style.width="100%";
    
	
	l[0].style.border="none";
	l[0].style.height="6vh";
	l[0].style.width="2vw"; 
	l[0].style.display="inline-flex";
	l[0].style.marginTop="0vh";
	//l[0].style.zIndex="-1";

    por[0].innerHTML="<img src='selfie3.png' height='100%' width='100%'></img>";
	por[0].style.display="inline";
    por[0].style.width="12vw";
    por[0].style.height="25vh";
    por[0].style.align="center";
    por[0].style.border="solid";
    por[0].style.borderColor="#AE2325";
	por[0].style.padding="0";
	
	por[0].style.marginLeft="6vw";
	por[0].style.marginRight="0vw";
	por[0].style.marginTop="6vh";

 //p[0].innerHTML="<img src='selfie3.png' height='100%' width='100%'></img>";
	//p[0].style.display="inline";
    //p[0].style.width="18vw";
    //p[0].style.height="25vh";
    //p[0].style.align="center";
    //p[0].style.border="solid";
    //p[0].style.borderColor="red";
	//p[0].style.padding="0";
	
//	p[0].style.marginLeft="4vw";
	//p[0].style.marginRight="4vw";
	//p[0].style.marginTop="4vh";

	
	


    wia[0].innerHTML="<img src='box.png' height='100%' width='100%'></img>";
	wia[0].style.position="relative";
	wia[0].style.display="inline";
	wia[0].style.width="38vw";
	wia[0].style.height="55vh";
	wia[0].style.padding="0";
	wia[0].style.marginTop="-8vh";
	wia[0].style.marginLeft="6vw";
	wia[0].style.marginRight="1vw";
	//wia[0].style.zIndex="-1";
	
	
		wiat[0].innerHTML="<p1>Who I am:</p1>";
	//wiat[0].style.position="absolute";
	wiat[0].style.paddingTop="1vh";
	wiat[0].style.paddingLeft="1vw";
	wiat[0].style.marginTop="6.2vh";
	wiat[0].style.marginLeft="-28.9vw";
	wiat[0].style.marginRight="-4vw";
	wiat[0].style.width="16.5vw";
	wiat[0].style.height="22.2vh";
	wiat[0].style.backgroundColor="#345049";
	
	
	
	//wia[0].innerHTML="<img src='box.png' height='100%' width='100%'></img>";
	//wia[0].style.position="relative";
	//wia[0].style.display="inline";
	//wia[0].style.width="30vw";
	//wia[0].style.height="55vh";
	//wia[0].style.padding="0";
	//wia[0].style.marginTop="-8vh";
	//wia[0].style.marginLeft="10vw";
	//wia[0].style.marginRight="2.5vw";
	
	
		//wiat[0].innerHTML="<p1>Who I am:</p1>";
	//wiat[0].style.postion="absolute";
	//wiat[0].style.paddingTop="1vh";
	//wiat[0].style.paddingLeft="1vh";
	//wiat[0].style.marginTop="6.2vh";
	//wiat[0].style.marginLeft="-24.5vw";
	//wiat[0].style.marginRight="-4vh";
	//wiat[0].style.width="13.2vw";
	//wiat[0].style.height="22.2vh";
	//wiat[0].style.backgroundColor="#345049";
	
	e[0].innerHTML="<img src='box.png' height='100%' width='100%'></img>";
	e[0].style.position="relative";
	e[0].style.display="inline";
	e[0].style.width="38vw";
	e[0].style.height="55vh";
	e[0].style.padding="0";
	e[0].style.marginTop="-8vh";
	e[0].style.marginLeft="1vw";
	e[0].style.marginRight="2.5vw";
	

	et[0].innerHTML="<p3>Education</p3><br></br><p1>Chemeketa Community College</p1><br><p2>Associates of Arts Oregon Transfer<p2><br><p1>University of Oregon</p1><br><p2>Bachelors of Art: Digital Art Focus</p2><br><p1>University of Oregon</p1><br><p2>Certificate UX/UI Design</p2>";
    //et[0].style.position="absolute";
	et[0].style.paddingTop="1vh";
	et[0].style.paddingLeft="0vw";
	et[0].style.marginTop="6.4vh";
	et[0].style.marginLeft="-30.3vw";
	et[0].style.marginRight="-4vw";
	et[0].style.width="17.4vw";
	et[0].style.height="22.2vh";
	et[0].style.textAlign="center";
	et[0].style.alignItems="top";
	et[0].style.justifyContent="center";
	et[0].style.backgroundColor="#345049";
	et[0].style.lineHeight="2vw";

    //justify-content: center;
  //align-items: top;



	
	//wia[0].innerHTML="<img src='box.png' height='100%' width='100%'></img>";
	//wia[0].style.position="relative";
	//wia[0].style.display="inline";
	//wia[0].style.width="30vw";
	//wia[0].style.height="55vh";
	//wia[0].style.padding="0";
	//wia[0].style.marginTop="-8vh";
	//wia[0].style.marginLeft="10vw";
	//wia[0].style.marginRight="2.5vw";
	
	
		//wiat[0].innerHTML="<p1>Who I am:</p1>";
	
	//wiat[0].style.paddingTop="1vh";
	//wiat[0].style.paddingLeft="1vh";
	//wiat[0].style.marginTop="6.2vh";
	//wiat[0].style.marginLeft="-24.5vw";
	//wiat[0].style.marginRight="-4vh";
	//wiat[0].style.width="13.2vw";
	//wiat[0].style.height="22.2vh";
	//wiat[0].style.backgroundColor="#345049";
	 

        pdt[0].innerHTML="<img src='box.png' height='100%' width='100%'></img>";
   // pdt[0].style.color="#CFB53B";
	pdt[0].style.position="relative";
	pdt[0].style.display="inline";
    pdt[0].style.width="25vw";
    pdt[0].style.height="55vh";
    //pdt[0].style.align="center";
	pdt[0].style.padding="0";
	pdt[0].style.marginTop="-6vh";
	pdt[0].style.marginLeft="27.5vw";
	pdt[0].style.marginRight="0vw";
	
	
	pdtt[0].innerHTML="<p4>PDT</p4>";
	pdtt[0].style.textAlign="center";
	pdtt[0].style.paddingTop="8vh";
	pdtt[0].style.paddingLeft="0vw";
	pdtt[0].style.marginTop="8.5vh";
	pdtt[0].style.marginLeft="-18.3vw";
	pdtt[0].style.marginRight="-6vw";
	pdtt[0].style.width="11.4vw";
	pdtt[0].style.height="15vh";
	pdtt[0].style.backgroundColor="#345049";
//display: inline-flex;
  //justify-content: center;
  //align-items: top;
  
  
  //wia[0].innerHTML="<img src='box.png' height='100%' width='100%'></img>";
	//wia[0].style.position="relative";
	//wia[0].style.display="inline";
	//wia[0].style.width="30vw";
	//wia[0].style.height="55vh";
	//wia[0].style.padding="0";
	//wia[0].style.marginTop="-8vh";
	//wia[0].style.marginLeft="10vw";
	//wia[0].style.marginRight="2.5vw";
	
	
		//wiat[0].innerHTML="<p1>Who I am:</p1>";
	
	//wiat[0].style.paddingTop="1vh";
	//wiat[0].style.paddingLeft="1vh";
	//wiat[0].style.marginTop="6.2vh";
	//wiat[0].style.marginLeft="-24.5vw";
	//wiat[0].style.marginRight="-4vh";
	//wiat[0].style.width="13.2vw";
	//wiat[0].style.height="22.2vh";
	//wiat[0].style.backgroundColor="#345049";

        doe[0].innerHTML="<img src='box.png' height='100%' width='100%'></img>";
    //doe[0].style.color="#CFB53B";
	//doe[0].style.backgroundColor="green";
	doe[0].style.positon="relative";
	doe[0].style.display="inline";
    doe[0].style.width="25vw";
    doe[0].style.height="55vh";
    doe[0].style.align="center";
	doe[0].style.padding="0";
	doe[0].style.marginTop="-6vh";
	doe[0].style.marginLeft="3vw";
	doe[0].style.marginRight="0vw";
	
	
	
	doet[0].innerHTML="<p4>DoE</p4>";
	doet[0].style.textAlign="center";
	doet[0].style.paddingTop="8vh";
	doet[0].style.paddingLeft="0vw";
	doet[0].style.marginTop="8.5vh";
	doet[0].style.marginLeft="-18.3vw";
	doet[0].style.marginRight="4vw";
	doet[0].style.width="11.4vw";
	doet[0].style.height="15vh";
	doet[0].style.backgroundColor="#345049";

    ll[0].innerHTML="<img src='box.png' height='100%' width='100%'></img>";
    ll[0].style.color="#CFB53B";
	ll[0].style.position="relative";
	ll[0].style.display="inline";
    ll[0].style.width="25vw";
    ll[0].style.height="55vh";
    ll[0].style.align="center";
	ll[0].style.padding="0";
	ll[0].style.marginLeft="-6.8vw";
	ll[0].style.marginRight="4vw";
	ll[0].style.marginTop="-6vh";
	
	
   // pdt[0].style.color="#CFB53B";
	
	
    
    
    //pdt[0].style.align="center";
	
	
	
	
	
	
	
	
	
	
	llt[0].innerHTML="<p4>Live Lightly</p4>";
	llt[0].style.textAlign="center";
	llt[0].style.paddingTop="8vh";
	llt[0].style.paddingLeft="0vw";
	llt[0].style.marginTop="8.5vh";
	llt[0].style.marginLeft="-22.3vw";
	llt[0].style.marginRight="-6vw";
	llt[0].style.width="11.4vw";
	llt[0].style.height="15vh";
	llt[0].style.backgroundColor="#345049";
	
	ci[0].innerHTML="<p2>Contact<br>Kayleblum1991@gmail.com</p2>"; 
	ci[0].style.color="#FEF1E8";
	ci[0].style.marginLeft="15vw";
	ci[0].style.display="block";
	ci[0].style.lineHeight="2vw";
	
	li[0].innerHTML="<img src='linkedInBlack.png' height='100%' width='100%'></img>";
	li[0].style.display="block";
	li[0].style.height="3vh";
	li[0].style.width="2vw";
	li[0].style.marginTop="4vh";
	li[0].style.marginLeft="15vw";



    i += 1;
} else if (i ==1) {
m[0].style.display="none";
b[0].style.display="none";
f[0].style.display="none";
    t[0].style.display="block";
	t[0].style.top="0vh";
	t[0].style.marginTop="auto";

// 	  lc[0].style.height="100%";
//    lc[0].style.width="100%";

	
//	l[0].style.border="none";
//	l[0].style.height="5vh";
//	l[0].style.width="10vw"; 
//	l[0].style.display="inline-flex";
//	l[0].style.marginTop="0vh";
  
  //logo
 //background-color: transparent;
 // margin-top: 30vh;
  //margin-left: 36vw;
  //height: 40vh;
 // width: 14vw;
  
  //logoClass
  //background-color: transparent;
   // height: 100%;
    //width: 100%;
  
	lc[0].style.height="100%";
    lc[0].style.width="100%";
    
	l[0].style.marginTop="30vh";
	l[0].style.marginLeft="36.5vw";
	l[0].style.height="40vh";
	l[0].style.width="14vw"; 
	
	
  
        

        n[0].style.display="none";
        n[0].innerHTML=null;

       // por[0].innerHTML=null;
        //por[0].style.display="none";
        //wia[0].innerHTML=null;
        //wia[0].style.display="none";
		
		//e[0].innerHTML=null;	
		//e[0].style.display="none";
        //pdt[0].innerHTML=null;
        //pdt[0].style.display="none";
        //doe[0].innerHTML=null;
        //doe[0].style.display="none";
        //ll[0].innerHTML=null;
        //ll[0].style.display="none";
		//f[0].innerHTML='<div class="contactInfo"></div><div class="linkedIn"></div>';
		//ci[0].innerHTML=null;
		//li[0].innerHTML=null;
	
	 





        i = i - 1;
    }
};