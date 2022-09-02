 function hideMission(){
    document.getElementById("mission").style.display="none";
    document.getElementById("vision").style.display="block";
 }
 function nextCall(){
    if (document.getElementById("vision").style.display =="block"){
        document.getElementById("vision").style.display="none";
        document.getElementById("mission").style.display="block";
    } 
 }



function previousCall(){
    if (document.getElementById("mission").style.display =="block"){
        document.getElementById("mission").style.display="none";
        document.getElementById("vision").style.display="block";
    } 
 }




 function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "#191970";
  }