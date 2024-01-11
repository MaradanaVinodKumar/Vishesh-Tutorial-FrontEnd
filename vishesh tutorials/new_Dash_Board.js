
var prev=-1;
var reload=-1;
function optionButton(value){
    var Button=document.getElementsByClassName("bar_options");
    
    if(prev!=-1)
    {
        Button[prev].style.backgroundColor="transparent";
        Button[prev].style.boxShadow="none"; 
        Button[prev].style.color="White";
        Button[prev].style.fontWeight="600";
    }

    Button[value].style.backgroundColor="White";
    Button[value].style.boxShadow=" 0 0 40px rgb(81, 8, 104)"; 
    Button[value].style.color="rgb(162, 0, 255)";
    Button[value].style.fontWeight="800";
    document.getElementById("optionName").innerHTML=Button[value].innerHTML;
    
    prev=value;

    if(reload==7)
    {
        location.reload();
    }
    if(value==7)
    {
        reload=7;
    }
    

}

function studentDetails(userName){
    fetch("http://localhost:8081/v1/student/studentDetails",{
        method:"post",
        body:JSON.stringify({userId:userName}),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response=>response.json())
    .then(json=>{
        if(json.status!=500){

            document.getElementById("Profile_photo").style.backgroundImage="url(data:image/png;base64,"+json.image+")";
            document.getElementById("User_Name").innerHTML=json.name;
            document.getElementById("User_Class").innerHTML=json.className;
        }
        else{
            window.open("error404.html", "_self");
        }
    })
    // .catch(()=>{
    //     window.open("error404.html", "_self");
    // })

}

function loads(){
    document.getElementById("Logout").addEventListener("click",()=>{var value=confirm("Do you want to logout!");if(value){localStorage.removeItem("userName");setTimeout(()=>{window.open("index.html", "_self")},2)}});
}