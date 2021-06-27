function changecontent(){
   let x= document.getElementById("know-more");
   if(x.style.display=="block") 
   {
       x.style.display="none";
   }
   else{
       x.style.display="block";
   }
}
function validation(){
    if(document.getElementById("name-input").value=="")
    {
        document.getElementById("name-validation").style.display="block"
    }
    if(document.getElementById("email-input").value=="")
    {
        document.getElementById("email-validation").style.display="block"
    }
    if(document.getElementById("batch-input").value=="")
    {
        document.getElementById("batch-validation").style.display="block"
  
    }
    return false;
}
