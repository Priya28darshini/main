
     
    
    function validateform(){
        var firn=document.forms["regform"]["First Name"].value;
        var ln=document.forms["regform"]["Lasr Name"].value;
        var fn=document.forms["regform"]["father Name"].value;
        var mn=documnt.forms["regform"]["mother Name"].value;
        var em=document.forms["regform"]["Email Id"].value;
        var atposition=em.indexOf("@");
        var dotposition=em.lastIndexOf(".");
        var mbn=document.forms["regform"]["Mobile Number"].value;
        var gm=document.getElementById("Male").value;
        var gf=document.getElementById("Female").value;
        var adrs=document.forms["regform"]["Address"];
        var cty=document.forms["regform"]["City"].value;
        var pin=document.forms["regform"]["Pincode"].value;
        var state=document.forms["regform"]["State"].value;
        var cntry=document.forms["regform"]["Country"].value;
       
        
        



        if(firn==""){
            alert("first name cannot be blank")
            return false;

        }
        if(firn.lngth<3){
            alert("first name length should be greatr than 3 char")
            return false;
        }
        if(! isNaN(firn)){
            alert("only characters are allowed for first name")
            return false;
        }
        if(ln==""||ln.length<3){
            alert("enter last name,characters length should be >3")
            return false;
        }
        if(! isNaN(ln)){
            alert("only characters are allowed for lastname ");
            return false;
        }
        if(fn=="fn".length<3){
            alert("enter father name and length should be>3");
            return false;

        }
        if(! isNaN(fn)){
            alert("only characters are allowed for father name");
            return false;
        }
        if(mn=="mn".length<3 ){
            alert("enter mother name and length should be>3")
            return false;
        }
        if(! isNaN(mn)){
            alert("only characters are allowed for mother name");
            return false;
        }


        if(atposition<1  || dotposition<atposition || dotposition+2>=em.length){
            alert("please enter a valid email address \n atpostion:"+atposition +"\n dotposition:" +dotposition);

        }
        if(mbn==""||mbn.length<10)
        {
            alert("enter mobile number");
        }
        if(isNaN(mbn)){
            alert("only digits are allowed for mobile number");
            return false;
        }
        if((gm.checked==false)&&(gf.chcked==false)){

            alert("select gender");
            return false;

        }
        if(adrs==""){
            alert("entr your address");
            return false;

        }
        if(cty==""){
            alert("entr your city / enter max 10 char");
            return false;

        }
        if(pin==""){
            alert("entr your pin / should have only 6 digits");
            return false;

      }
      if(isNaN(pin)){
            alert("only digits are allowed fr pincode");
            return false;
            
      }
      if(state==""){
            alert("entr your state");
            return false;

        }
        if(cntry==""){
            alert("entr country");
            return false;

        }
    }


   