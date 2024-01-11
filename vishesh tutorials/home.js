function load(){
       
       if(localStorage.getItem("userName"))
       {
                window.open("new_Dash_Board.html","_self");
       }
        document.getElementById("dots").addEventListener("click",()=>{document.getElementById('dot_bar_items_back').style.display="block",document.getElementById('dot_bar_items').style.display="block"})
        document.getElementById("dot_bar_items_back").addEventListener("click",()=>{document.getElementById('dot_bar_items_back').style.display="none",document.getElementById('dot_bar_items').style.display="none"})
        document.getElementById("home").addEventListener("click",()=>{document.getElementById("section2").style.display="none";document.getElementById("home_content").style.display="block";});
        document.getElementById("selfRegistration").addEventListener("click",()=>{document.getElementById("section2").style.display="block";;document.getElementById("home_content").style.display="none";document.getElementById("leftImage").style.display="block";document.getElementById("body_bg").style.display="block";document.getElementById("mask").style.display="block";document.getElementById("Login").style.display="none",document.getElementById("Registration").style.display="block"})
        document.getElementById('login').addEventListener("click",()=>{document.getElementById("section2").style.display="block";document.getElementById("home_content").style.display="none";document.getElementById("leftImage").style.display="block";document.getElementById("body_bg").style.display="block";document.getElementById("mask").style.display="none";document.getElementById("Registration").style.display="none",document.getElementById("Login").style.display="block"})

        // document.getElementById('phoneNumber').addEventListener("change",()=>{document.getElementById("phoneDiv").style.display="block"; document.getElementById("phone_bg_div_one").style.textAlign="right"})
        // document.getElementById('emailId').addEventListener("change",()=>{document.getElementById("emailDiv").style.display="block";document.getElementById("email_bg_div_one").style.textAlign="right"})

        document.getElementById("otpSendOne").addEventListener("click",()=>{document.getElementById("otpSendOne").style.visibility="hidden",document.getElementById("refreshOne").style.display="block",document.getElementById("PhoneOtpStatus").innerHTML="",sendOtpToPhone()})
        document.getElementById("otpSendTwo").addEventListener("click",()=>{document.getElementById("otpSendTwo").style.visibility="hidden",document.getElementById("refreshTwo").style.display="block",document.getElementById("EmailOtpStatus").innerHTML="",sendOtpToMail()})

        // document.getElementById("otpOne").addEventListener("change",()=>{document.getElementById("otpSubmitOne").style.visibility='visible'})
        // document.getElementById("otpTwo").addEventListener("change",()=>{document.getElementById("otpSubmitTwo").style.visibility='visible'})


        document.getElementById("phoneOtpDigitOne").addEventListener("keyup",(event)=>{if(!(event.key==="Backspace"))document.getElementById("phoneOtpDigitTwo").focus()});//phoneOtpDigitTwo
        document.getElementById("phoneOtpDigitTwo").addEventListener("keyup",(event)=>{if(!(event.key==="Backspace"))document.getElementById("phoneOtpDigitThree").focus()});//phoneOtpDigitTwo
        document.getElementById("phoneOtpDigitThree").addEventListener("keyup",(event)=>{if(!(event.key==="Backspace"))document.getElementById("phoneOtpDigitFour").focus();});
        document.getElementById("phoneOtpDigitFour").addEventListener("keyup",(event)=>{if(!(event.key==="Backspace"))validationOtpForPhone();});

        document.getElementById("emailOtpDigitOne").addEventListener("keyup",(event)=>{if(!(event.key==="Backspace"))document.getElementById("emailOtpDigitTwo").focus()});//phoneOtpDigitTwo
        document.getElementById("emailOtpDigitTwo").addEventListener("keyup",(event)=>{if(!(event.key==="Backspace"))document.getElementById("emailOtpDigitThree").focus()});//phoneOtpDigitTwo
        document.getElementById("emailOtpDigitThree").addEventListener("keyup",(event)=>{if(!(event.key==="Backspace"))document.getElementById("emailOtpDigitFour").focus();});
        document.getElementById("emailOtpDigitFour").addEventListener("keyup",(event)=>{if(!(event.key==="Backspace"))validationOtpForEmail();});
        
        document.getElementById("loginOtpDigitOne").addEventListener("keyup",(event)=>{if(!(event.key==="Backspace"))document.getElementById("loginOtpDigitTwo").focus()});//phoneOtpDigitTwo
        document.getElementById("loginOtpDigitTwo").addEventListener("keyup",(event)=>{if(!(event.key==="Backspace"))document.getElementById("loginOtpDigitThree").focus()});//phoneOtpDigitTwo
        document.getElementById("loginOtpDigitThree").addEventListener("keyup",(event)=>{if(!(event.key==="Backspace"))document.getElementById("loginOtpDigitFour").focus();});
        document.getElementById("loginOtpDigitFour").addEventListener("keyup",(event)=>{if(!(event.key==="Backspace"))validateLoginOtp(condition);});//validationOtpForEmail();

        
        
        document.getElementById("phoneNumber").addEventListener("keyup",()=>{if(((document.getElementById("phoneNumber").value).length)==10){validatePhoneNumber();document.getElementById("otpSendOne").focus();}})
        // document.getElementById("emailId").addEventListener("keyup",()=>{
        //         if((document.getElementById("emailId").value).match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)){
        //                 validateEmailId();document.getElementById("otpSendTwo").focus()
        //         }
        // })



        ///login form
        document.getElementById("useotp").addEventListener("click",()=>{loginWithPassword=false;document.getElementById("Login_input").style.display="block";document.getElementById("login_nav").style.display="none",document.getElementById("login_type_password").style.display="none",document.getElementById("back_to_password_login").style.display="block";})
        document.getElementById("usePassword").addEventListener("click",()=>{loginWithPassword=true;document.getElementById("login_type_password").style.display='block',document.getElementById("login_nav").style.display="none";document.getElementById("Login_input").style.display="block";document.getElementById("back_to_password_nav").style.display="block"});
        document.getElementById("back_to_password_login").addEventListener("click",()=>{document.getElementById("Login_input").style.display="none";document.getElementById("login_type_otp").style.display="none",document.getElementById("back_to_password_login").style.display="none",document.getElementById("login_nav").style.display="block"})
        document.getElementById("back_to_password_nav").addEventListener("click",()=>{document.getElementById("back_to_password_nav").style.display="none",document.getElementById("login_type_password").style.display="none",document.getElementById("login_nav").style.display="block";document.getElementById("Login_input").style.display="none"})


        document.getElementById("login_send_otp").addEventListener("click",()=>{document.getElementById("login_send_otp_bg").style.display="none",document.getElementById("refreshThree").style.display="block",document.getElementById("otpStatus").innerHTML = "",LoginOtpSend()})       
        document.getElementById("login_to_register").addEventListener("click",()=>{document.getElementById("Login").style.display="none",document.getElementById("Registration").style.display="block"});
        document.getElementById("resendOtp").addEventListener("click",()=>{document.getElementById("resend").style.display="none",document.getElementById("refreshThree").style.display="block",document.getElementById("otpStatus").innerHTML = "",document.getElementById("Login_otp").style.display="none",LoginOtpSend()});


       // var inputArr=document.getElementsByTagName("input").addEventListener("change",()=>{var value=document.getElementsByTagName("input").value;value=value.charAt(0).toUpperCase() + value.slice(1);document.getElementsByTagName("input").value=value;});
       document.getElementById("firstName").addEventListener("change",()=>{var value=document.getElementById("firstName").value;value=value.charAt(0).toUpperCase() + value.slice(1);document.getElementById("firstName").value=value;})
       document.getElementById("lastName").addEventListener("change",()=>{var value=document.getElementById("lastName").value;value=value.charAt(0).toUpperCase() + value.slice(1);document.getElementById("lastName").value=value;document.getElementById("mask").style.top="450px"})
       document.getElementById("className").addEventListener("change",()=>{var value=document.getElementById("className").value;value=value.charAt(0).toUpperCase() + value.slice(1);document.getElementById("className").value=value;})
       document.getElementById("schoolName").addEventListener("change",()=>{var value=document.getElementById("schoolName").value;value=value.charAt(0).toUpperCase() + value.slice(1);document.getElementById("schoolName").value=value;document.getElementById("mask").style.top="500px"})


       document.getElementById("con_password").addEventListener("change",()=>{if(document.getElementById("new_password").value==document.getElementById("con_password").value){document.getElementById("con_password").style.borderColor="green";document.getElementById("mask").style.top="800px"}else{document.getElementById("con_password").style.borderColor="red"}})
}


var condition=true;
var loginWithPassword=false;
function OtpTimer(id,time=60,blockid){
        var i=time;
        document.getElementById(id).style.display="block";
        var timer=setInterval(()=>{document.getElementById(id).innerHTML="Resend Otp :"+i--;if(i==-1){clearInterval(timer);document.getElementById(id).style.display="none";document.getElementById(blockid).style.display="block"}},1000);
}

// OtpTimer("loginOtpTimer",60);
function postDetails(){
        var firstName=document.getElementById("firstName").value;
        var lastName=document.getElementById("lastName").value;
        var className=document.getElementById("className").value;
        var schoolName=document.getElementById("schoolName").value;
        var phoneNumber=document.getElementById("phoneNumber").value;
        var emailId=document.getElementById("emailId").value;
        var password=document.getElementById("con_password").value;
        var obj=new Object({firstName:firstName,lastName:lastName,className:className,schoolName:schoolName,phoneNumber:phoneNumber,emailId:emailId,password:password});
        console.log("obj: ",obj);
        fetch("http://localhost:8081/v1/student/register", {
                 method: "POST",
                 body: JSON.stringify(obj),
                 headers: {
                 "Content-type": "application/json; charset=UTF-8"
                 }
        })
        .then(response => response.json())
        .then(json =>{ 
                console.log("return post data :",json);
                var msg=document.getElementById("para");
                if(json.message){
                         msg.style.display="none";
                         setTimeout(()=>{msg.style.display="block"},1);
                         msg.style.color="red"; msg.innerHTML=json.message;
                }
                else{
                         msg.style.color="green";msg.innerHTML=" Successfully Registered ";
                         document.getElementById("Login").style.display="block";
                         document.getElementById("Registration").style.display="none";
                }
        })
       return false;
}

function sendOtpToPhone(){
        var phoneNumber="+91"+document.getElementById("phoneNumber").value;
       
        var data=fetch("http://localhost:8081/otp/sendOtpToPhoneNumber", {
                method: "POST",
                body: JSON.stringify({username:phoneNumber,phoneNumber:phoneNumber}),
                headers: {
                "Content-type": "application/json; charset=UTF-8"
                }
       })
       .then(response => response.json())
       .then(json =>{ 
               console.log(json);
               
               if(json.status=="FAILED"){
                        document.getElementById("PhoneOtpStatus").innerHTML="not send!"
                        document.getElementById("refreshOne").style.display="none";
                        document.getElementById("otpSendOne").style.visibility="visible";
               }
               else{       
                        document.getElementById("phoneOtpInput").style.display="block"
                        
                        document.getElementById("phoneOtpDigitOne").focus()
                        
                        document.getElementById("refreshOne").style.display="none";
                        document.getElementById("PhoneOtpStatus").innerHTML="sended";
                        // OtpTimer("phoneOtpTimer",60,"otpSendOne");

                        var i=60;
                        document.getElementById("phoneOtpTimer").style.display="block";
                        document.getElementById("mask").style.top="530px";
                        var timer=setInterval(()=>{document.getElementById("phoneOtpTimer").innerHTML="Resend Otp :"+i--;if(i==-1){clearInterval(timer);document.getElementById("phoneOtpTimer").style.display="none"; document.getElementById("otpSendOne").style.visibility="visible";document.getElementById("phoneOtpInput").style.display="none",document.getElementById("PhoneOtpStatus").innerHTML="Time Out Please Resend";}},1000);

                }
       })      
}

function sendOtpToMail(){
        
        var mail=document.getElementById("emailId").value;
        console.log(mail);
        var data=fetch("http://localhost:8081/otp/sendOtpToEmail", {
                method: "POST",
                body:JSON.stringify({email:mail}),
                headers: {
                "Content-type": "application/json; charset=UTF-8"
                }
       })
       .then(response => response.json())
       .then(json =>{ 
               console.log(json);
               
              if(!json){
                       document.getElementById("EmailOtpStatus").innerHTML="not send!"//ch
                       document.getElementById("refreshTwo").style.display="none";
                       document.getElementById("otpSendTwo").style.visibility="visible";
              }
              else{
                    
                       document.getElementById("emailOtpInput").style.display="block"
                       
                       document.getElementById("emailOtpDigitOne").focus()
                       
                       document.getElementById("refreshTwo").style.display="none";
                       document.getElementById("EmailOtpStatus").innerHTML="sended";
                //        OtpTimer("emailOtpTimer",60,"otpSendTwo");

                       var i=60;
                       document.getElementById("emailOtpTimer").style.display="block";
                       document.getElementById("mask").style.top="630px";
                       var timer=setInterval(()=>{document.getElementById("emailOtpTimer").innerHTML="Resend Otp :"+i--;if(i==-1){clearInterval(timer);document.getElementById("emailOtpTimer").style.display="none"; document.getElementById("otpSendTwo").style.visibility="visible",document.getElementById("emailOtpInput").style.display="none",document.getElementById("EmailOtpStatus").innerHTML="Time Out Please Resend";}},1000);

               }
       })

       
}

function validationOtpForPhone(){

        var phoneNumber=document.getElementById("phoneNumber").value;
        var otpValue=document.getElementById("phoneOtpDigitOne").value+document.getElementById("phoneOtpDigitTwo").value+document.getElementById("phoneOtpDigitThree").value+document.getElementById("phoneOtpDigitFour").value;

        fetch("http://localhost:8081/otp/phoneNumberOtpValidate", {
                method: "POST",
                body: JSON.stringify({username:"+91"+phoneNumber,otpNumber:otpValue}),
                headers: {
                "Content-type": "application/json; charset=UTF-8"
                }
       })
       .then(response => response.json())
       .then(json =>{ 
               console.log(json);
               var conf=document.getElementById("otpConformOne");
               conf.style.visibility="visible";
               if(json){
                         conf.style.color="green";
                         conf.style.fontSize="20px";
                        conf.innerHTML=` Phone Number Is Valid <i class="fa fa-check-circle-o" aria-hidden="true">`;

                        document.getElementById("phoneOtpTimer").style.display="none";
                        
                        document.getElementById("phoneOtpInput").style.display="none";
                        document.getElementById("PhoneOtpStatus").style.display="none";
                        document.getElementById("otpSendOne").style.display="none";
                        document.getElementById("mask").style.top="600px"
                        

               }
               else{
                        conf.style.color="red";
                        conf.style.fontSize="20px";
                        conf.innerHTML=`<i class="fa fa-remove" aria-hidden="true"></i>`;
               }
       })
}

function validationOtpForEmail(){

        var emailId=document.getElementById("emailId").value;
        var otpValue=document.getElementById("emailOtpDigitOne").value+document.getElementById("emailOtpDigitTwo").value+document.getElementById("emailOtpDigitThree").value+document.getElementById("emailOtpDigitFour").value;
        fetch("http://localhost:8081/otp/validateOtpForEmail", {
                method: "POST",
                body: JSON.stringify({otp:otpValue}),
                headers: {
                "Content-type": "application/json; charset=UTF-8"
                }
       })
       .then(response => response.json())
       .then(json =>{ 
               console.log(json);
                var conf=document.getElementById("otpConformTwo");
                conf.style.visibility="visible";
                if(json){
                        conf.style.color="green";
                        conf.style.fontSize="20px";
                        conf.innerHTML=`E-mail Id Is Valid <i class="fa fa-check-circle-o" aria-hidden="true">`;
                        
                        document.getElementById("emailOtpTimer").style.display="none";
                        
                        document.getElementById("emailOtpInput").style.display="none";
                        document.getElementById("EmailOtpStatus").style.display="none";
                        document.getElementById("otpSendTwo").style.display="none";
                        document.getElementById("mask").style.top="700px"
               }
               else{
                        conf.style.color="red";
                        conf.style.fontSize="20px";
                        conf.innerHTML=`<i class="fa fa-remove" aria-hidden="true"></i>`;
               }
       })
}

function validatePhoneNumber(){
        
        var phoneNumber=document.getElementById("phoneNumber").value;
        fetch("http://localhost:8081/v1/student/phoneNumberValidation", {
                method: "POST",
                body: JSON.stringify({userId:phoneNumber}),
                headers: {
                "Content-type": "application/json; charset=UTF-8"
                }
       })
       .then(response => response.json())
       .then(json =>{ 
                 phoneNumber=document.getElementById("phoneNumber")
               console.log(json);
                if(json.message){
                           // phoneNumber.style.outline=" red solid 3px";
                           phoneNumber.style.borderColor="red";
                           phoneNumber.style.borderWidth="3px";
                           var msg=document.getElementById("para");
                           msg.style.display="none";
                           setTimeout(()=>{msg.style.display="block"},1);
                           msg.style.color="red"; msg.innerHTML=json.message;
                           
                           document.getElementById("phoneDiv").style.display="none";
                           document.getElementById("phone_bg_div_one").style.textAlign="center"; 
                           document.getElementById("phone_bg_div_one").style.marginRight="155px";

                           
               }
               else{ 
                        phoneNumber.style.borderColor="green";
                        phoneNumber.style.borderWidth="3px";

                        var msg=document.getElementById("para");
                        msg.style.display="none";
                        setTimeout(()=>{msg.style.display="block"},1);
                        msg.style.color="green";
                         msg.innerHTML=""; 

                         document.getElementById("phoneDiv").style.display="block";
                        document.getElementById("phone_bg_div_one").style.textAlign="right";
                        document.getElementById("phone_bg_div_one").style.marginRight="100px";
               }
       })

}

function validateEmailId(){
        
        var emailId=document.getElementById("emailId").value;
        fetch("http://localhost:8081/v1/student/emailIdValidation", {
                method: "POST",
                body: JSON.stringify({userId:emailId}),
                headers: {
                "Content-type": "application/json; charset=UTF-8"
                }
       })
       .then(response => response.json())
       .then(json =>{ 
                emailId=document.getElementById("emailId")
                console.log(json);
                if(json.message){
                           // phoneNumber.style.outline=" red solid 3px";
                           emailId.style.borderColor="red";
                           emailId.style.borderWidth="3px";
                           var msg=document.getElementById("para");
                           msg.style.display="none";
                           setTimeout(()=>{msg.style.display="block"},1);
                           msg.style.color="red"; msg.innerHTML=json.message; 

                           document.getElementById("emailDiv").style.display="none";
                           document.getElementById("email_bg_div_one").style.textAlign="center";
               }
               else{ 
                        emailId.style.borderColor="green";
                        emailId.style.borderWidth="3px";

                        var msg=document.getElementById("para");
                        msg.style.display="none";
                        setTimeout(()=>{msg.style.display="block"},1);
                        msg.style.color="green";
                         msg.innerHTML=""; 

                        document.getElementById("emailDiv").style.display="block";
                        document.getElementById("email_bg_div_one").style.textAlign="right";
               }
       })

}

function  postDetailsForPasswords(){
                
        var phoneNumber=document.getElementById("phoneNumber").value;
        var emailId=document.getElementById("emailId").value;
        var password=document.getElementById("new_password").value;
        var conf_password=document.getElementById("con_password").value;
       
        if(password==conf_password)
        {
                console.log("vinod");
                
                fetch("http://localhost:8081/v1/student/userPasswordDetatils", {
                        method: "POST",
                        body: JSON.stringify({phone:phoneNumber,password:password,email:emailId}),
                        headers: {
                        "Content-type": "application/json; charset=UTF-8"
                        }
                })
                .then(response => response.json())
                .then(json =>{ 
                        var conf_password=document.getElementById("con_password").style.borderColor="green";
                        console.log("return post data :",json);
                        var msg=document.getElementById("para3");
                        if(json.message){
                                msg.style.display="none";
                                setTimeout(()=>{msg.style.display="block"},1);
                                msg.style.color="red"; msg.innerHTML=json.message;
                        }
                        else{
                                msg.style.color="green";msg.innerHTML=" Successfully creat password";
                                document.getElementById("Login").style.display="block";
                                document.getElementById("password").style.display="none";
                                
                        }
                })
        }
        else{
                var conf_password=document.getElementById("con_password").style.borderColor="red";
        }
       return false;
}

function postDetailsForNewPasswords(){
        var userType=document.getElementById("userType").value;
        var emailId=document.getElementById("emailId").value;
        var new_password=document.getElementById("new_password_login").value;
        var conf_password=document.getElementById("con_password_login").value;
        
        if(new_password==conf_password)
        {
                if(userType.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
                        fetch("http://localhost:8081/v1/student/emailIdForgotPassword", {
                        method: "POST",
                        body: JSON.stringify({emailId:userType,newPassword:new_password}),
                        headers: {
                        "Content-type": "application/json; charset=UTF-8"
                        }
                        })
                        .then(response => response.json())
                        .then(json =>{ 
                                var conf_password=document.getElementById("con_password_login").style.borderColor="green";
                                console.log("return post data :",json);
                                var msg=document.getElementById("para4");
                                if(json.message){
                                        msg.style.display="none";
                                        setTimeout(()=>{msg.style.display="block"},1);
                                        msg.style.color="red"; msg.innerHTML=json.message;
                                }
                                else{
                                        msg.style.color="green";msg.innerHTML=" Successfully creat password";
                                        document.getElementById("change_Password").style.display="none";
                                        document.getElementById("Login").style.display="block";
                                        
                                        document.getElementById("login_type_otp").style.display="none";
                                        
                                        
                                        document.getElementById("back_to_password_login").style.display="none"
                                        document.getElementById("login_type_password").style.display="block"
                                }
                        })
                }
                else if(userType.match(/^[6-9][0-9]{9}$/)){
                        fetch("http://localhost:8081/v1/student/phoneNumberForgotPassword", {
                        method: "POST",
                        body: JSON.stringify({phoneNumber:userType,newPassword:new_password}),
                        headers: {
                        "Content-type": "application/json; charset=UTF-8"
                        }
                        })
                        .then(response => response.json())
                        .then(json =>{ 
                                var conf_password=document.getElementById("con_password_login").style.borderColor="green";
                                console.log("return post data :",json);
                                var msg=document.getElementById("para4");
                                if(json.message){
                                        msg.style.display="none";
                                        setTimeout(()=>{msg.style.display="block"},1);
                                        msg.style.color="red"; msg.innerHTML=json.message;
                                }
                                else{
                                        msg.style.color="green";msg.innerHTML=" Successfully creat password";
                                        document.getElementById("change_Password").style.display="none";
                                        document.getElementById("Login").style.display="block";
                                                                                
                                        
                                        document.getElementById("login_type_otp").style.display="none";
                                        
                                        document.getElementById("back_to_password_login").style.display="none"
                                        document.getElementById("login_type_password").style.display="block" 
                                }
                        })
                }

        }
        else{
                var conf_password=document.getElementById("con_password_login").style.borderColor="red";
        }
        
        return false;       
}

function loginValidation(){
        var userType=document.getElementById("userType").value;
        if(userType.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
                
                var emailId=document.getElementById("userType").value;
                fetch("http://localhost:8081/v1/student/loginEmailIdValidation", {
                        method: "POST",
                        body: JSON.stringify({userId:emailId}),
                        headers: {
                        "Content-type": "application/json; charset=UTF-8"
                        }
               })
               .then(response => response.json())
               .then(json =>{ 
                        emailId=document.getElementById("userType")
                        console.log(json);
                        if(json.message){
                                   // phoneNumber.style.outline=" red solid 3px";
                                   emailId.style.borderColor="red";
                                   emailId.style.borderWidth="3px";
                                   var msg=document.getElementById("para2");
                                   msg.style.display="none";
                                   setTimeout(()=>{msg.style.display="block"},1);
                                   msg.style.color="red"; msg.innerHTML=json.message; 

                                   document.getElementById("login_type_otp").style.display="none";
                                   document.getElementById("login_nav").style.display="none"
                       }
                       else{ 
                                emailId.style.borderColor="green";
                                emailId.style.borderWidth="3px";
        
                                var msg=document.getElementById("para2");
                                msg.style.display="none";
                                setTimeout(()=>{msg.style.display="block"},1);
                                msg.style.color="green";
                                 msg.innerHTML=""; 

                                 if(loginWithPassword)
                                 {
                                        document.getElementById("forgetPassword").addEventListener("click",()=>{document.getElementById("login_type_otp").style.display="block",document.getElementById("login_type_password").style.display="none",condition=false;})
                                        
                                 }
                                 else{
                                        document.getElementById("login_type_otp").style.display="block";
                                 }         
                       }
               })
        }
        else if(userType.match(/^[6-9][0-9]{9}$/)){

                var phoneNumber=document.getElementById("userType").value;
                fetch("http://localhost:8081/v1/student/loginPhoneNumberValidation", {
                        method: "POST",
                        body: JSON.stringify({userId:phoneNumber}),
                        headers: {
                        "Content-type": "application/json; charset=UTF-8"
                        }
               })
               .then(response => response.json())
               .then(json =>{ 
                         phoneNumber=document.getElementById("userType")
                       console.log(json);
                        if(json.message){
                                   // phoneNumber.style.outline=" red solid 3px";
                                   phoneNumber.style.borderColor="red";
                                   phoneNumber.style.borderWidth="3px";
                                   var msg=document.getElementById("para2");
                                   msg.style.display="none";
                                   setTimeout(()=>{msg.style.display="block"},1);
                                   msg.style.color="red";
                                   msg.innerHTML=json.message;
                                   
                                   document.getElementById("login_type_otp").style.display="none";
                                   document.getElementById("login_nav").style.display="none"
                                  
                       }
                       else{ 
                                phoneNumber.style.borderColor="green";
                                phoneNumber.style.borderWidth="3px";
        
                                var msg=document.getElementById("para2");
                                msg.style.display="none";
                                setTimeout(()=>{msg.style.display="block"},1);
                                msg.style.color="green";
                                 msg.innerHTML=""; 
                                 
                                 if(loginWithPassword)
                                 {
                                        
                                        document.getElementById("forgetPassword").addEventListener("click",()=>{document.getElementById("login_type_otp").style.display="block",document.getElementById("login_type_password").style.display="none",condition=false;})
                                 }
                                 else{
                                        document.getElementById("login_type_otp").style.display="block";
                                 }
                       }
               })
        }
        else{
                var msg=document.getElementById("para2");
                msg.style.display="none";
                setTimeout(()=>{msg.style.display="block"},1);
                emailId=document.getElementById("userType");
                emailId.style.borderColor="red";
                emailId.style.borderWidth="3px";
                msg.style.color="red"; 
                msg.innerHTML="undefined type"; 
                document.getElementById("forgetPassword").removeEventListener("click",()=>{document.getElementById("login_type_otp").style.display="block",document.getElementById("login_type_password").style.display="none",document.getElementById("back_to_password_login").style.display="block",condition=false;});
                document.getElementById("login_type_otp").style.display="none";
                document.getElementById("login_nav").style.display="none"
        }
}

function LoginOtpSend(){
        var userType=document.getElementById("userType").value;
        if(userType.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
                var mail = document.getElementById("userType").value;
                console.log(mail);
                var data = fetch("http://localhost:8081/otp/sendOtpToEmail", {
                        method: "POST",
                        body: JSON.stringify({ email: mail }),
                        headers: {
                                "Content-type": "application/json; charset=UTF-8"
                        }
                })
                .then(response => response.json())
                .then(json => {
                        console.log(json);

                        if (!json) {
                                document.getElementById("otpStatus").innerHTML = "not send!"
                                document.getElementById("refreshThree").style.display="none";

                                document.getElementById("resend").style.display="block";
                        }
                        else {
                                document.getElementById("Login_otp").style.display="block"
                                document.getElementById("loginOtpDigitOne").focus()
                                document.getElementById("refreshThree").style.display="none";
                                document.getElementById("login_send_otp").style.display="none";
                               
                                document.getElementById("resend").style.display="none"; 
                                document.getElementById("loginOtpTimer_bg").style.display="block";
                                OtpTimer("loginOtpTimer",60,"resend");
                        }
                })
        } else if (userType.match(/^[6-9][0-9]{9}$/)) {
                var phoneNumber="+91"+document.getElementById("userType").value;
       
                console.log(phoneNumber);
                var data=fetch("http://localhost:8081/otp/sendOtpToPhoneNumber", {
                        method: "POST",
                        body: JSON.stringify({username:phoneNumber,phoneNumber:phoneNumber}),
                        headers: {
                        "Content-type": "application/json; charset=UTF-8"
                        }
               })
               .then(response => response.json())
               .then(json =>{ 
                       console.log(json);
                       
                       if(json.status=="FAILED"){
                                document.getElementById("otpStatus").innerHTML = "not send!"
                                document.getElementById("refreshThree").style.display="none";

                                document.getElementById("resend").style.display="block";
                       }
                       else{
                                document.getElementById("Login_otp").style.display="block"
                               
                                document.getElementById("loginOtpDigitOne").focus()
                                document.getElementById("refreshThree").style.display="none";
                                document.getElementById("login_send_otp").style.display="none";

                                document.getElementById("resend").style.display="none"; 
                                document.getElementById("loginOtpTimer_bg").style.display="block";
                                OtpTimer("loginOtpTimer",60,"resend");
                        }
               })
        }
}

function validateLoginOtp(condition){
        var userType=document.getElementById("userType").value;
        
        if(userType.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
                
                var otpValue = document.getElementById("loginOtpDigitOne").value + document.getElementById("loginOtpDigitTwo").value + document.getElementById("loginOtpDigitThree").value + document.getElementById("loginOtpDigitFour").value;
                fetch("http://localhost:8081/otp/validateOtpForEmail", {
                        method: "POST",
                        body: JSON.stringify({ otp: otpValue }),
                        headers: {
                                "Content-type": "application/json; charset=UTF-8"
                        }
                })
                .then(response => response.json())
                .then(json => {
                        console.log(json);
                        var conf = document.getElementById("otpConformLogin");
                        conf.style.visibility = "visible";
                        if (json) {
                                conf.style.color = "green";
                                conf.style.fontSize = "20px";
                                conf.innerHTML = `<i class="fa fa-check-circle-o" aria-hidden="true">`;
                               if(condition)
                               {
                                
                                
                                localStorage.setItem("userName",userType);
                                setTimeout(()=>{document.getElementById("Login").style.display="none",document.getElementById("Wellcome").style.display="block";window.open("new_Dash_Board.html","_self");},400);
                               }else{
                                 document.getElementById("Login").style.display="none";
                                 document.getElementById("change_Password").style.display="block";
                               }
                        }
                        else {
                                conf.style.color = "red";
                                conf.style.fontSize = "20px";
                                conf.innerHTML = `<i class="fa fa-remove" aria-hidden="true"></i>`;                                
                        }
                })
        }
        else if (userType.match(/^[6-9][0-9]{9}$/)) {
                var phoneNumber = document.getElementById("userType").value;
                var otpValue = document.getElementById("loginOtpDigitOne").value + document.getElementById("loginOtpDigitTwo").value + document.getElementById("loginOtpDigitThree").value + document.getElementById("loginOtpDigitFour").value;

                fetch("http://localhost:8081/otp/phoneNumberOtpValidate", {
                        method: "POST",
                        body: JSON.stringify({ username: "+91" + phoneNumber, otpNumber: otpValue }),
                        headers: {
                                "Content-type": "application/json; charset=UTF-8"
                        }
                })
                .then(response => response.json())
                .then(json => {
                        console.log(json);
                        var conf = document.getElementById("otpConformLogin");
                        conf.style.visibility = "visible";
                        if (json) {
                                conf.style.color = "green";
                                conf.style.fontSize = "20px";
                                conf.innerHTML = `<i class="fa fa-check-circle-o" aria-hidden="true">`;
                                if(condition)
                                {
                                   
                                        localStorage.setItem("userName",userType);  
                                     setTimeout(()=>{document.getElementById("Login").style.display="none",document.getElementById("Wellcome").style.display="block";window.open("new_Dash_Board.html","_self");},400);
                                }else{
                                   document.getElementById("Login").style.display="none";
                                   document.getElementById("change_Password").style.display="block";
                                }
                        }
                        else {
                                conf.style.color = "red";
                                conf.style.fontSize = "20px";
                                conf.innerHTML = `<i class="fa fa-remove" aria-hidden="true"></i>`;
                        }
                })
        }
}

function loginDetatilsValidation(){
        var userType=document.getElementById("userType").value;
        var password=document.getElementById("login_password").value;
        if(userType.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
                fetch("http://localhost:8081/v1/student/emailPasswordValidation", {
                        method: "POST",
                        body: JSON.stringify({emailId:userType,password:password }),
                        headers: {
                                "Content-type": "application/json; charset=UTF-8"
                        }
                })
                .then(response => response.json())
                .then(json => {
                        console.log(json);
                        var conf = document.getElementById("otpConformLogin");
                        conf.style.visibility = "visible";
                        if (json) {
                                localStorage.setItem("userName",userType);
                                setTimeout(()=>{document.getElementById("Login").style.display="none",document.getElementById("Wellcome").style.display="block";window.open("new_Dash_Board.html","_self");},400);
                        }
                        else {
                                var msg=document.getElementById("para2");
                                msg.style.display="none";
                                setTimeout(()=>{msg.style.display="block"},1);
                                msg.style.color="red";
                                msg.innerHTML="invalid password";                              
                        }
                })
        }
        else if (userType.match(/^[6-9][0-9]{9}$/)) {

                fetch("http://localhost:8081/v1/student/phonePasswordValidation", {
                        method: "POST",
                        body: JSON.stringify({phoneNumber:userType,password:password }),
                        headers: {
                                "Content-type": "application/json; charset=UTF-8"
                        }
                })
                .then(response => response.json())
                .then(json => {
                        console.log(json);
                        var conf = document.getElementById("otpConformLogin");
                        conf.style.visibility = "visible";
                        if (json) {
                                localStorage.setItem("userName",userType);
                                setTimeout(()=>{document.getElementById("Login").style.display="none",document.getElementById("Wellcome").style.display="block";window.open("new_Dash_Board.html","_self");},400);
                        }
                        else {
                                var msg=document.getElementById("para2");
                                msg.style.display="none";
                                setTimeout(()=>{msg.style.display="block"},1);
                                msg.style.color="red";
                                msg.innerHTML="invalid password";  
                        }
                })
        }

        return false
}

