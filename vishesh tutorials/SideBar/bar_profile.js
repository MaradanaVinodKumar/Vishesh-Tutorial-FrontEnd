function Profile(){
    userName=localStorage.getItem("userName");
    fetch("http://localhost:8081/v1/student/studentDetails",{
            method:"post",
            body:JSON.stringify({value:userName}),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response=>response.json())
        .then(json=>{
            if(json.status!=500){
                console.log(json)
                 document.getElementById("user_name").innerHTML=json.name;
                 document.getElementById("user-name-table").innerHTML=json.name;
                document.getElementById("class-name").innerHTML=json.className;
                document.getElementById("user-phone-table").innerHTML=json.phoneNumber;
                document.getElementById("user-class-table").innerHTML=json.className;
                document.getElementById("user-email-table").innerHTML=json.emailId;
                document.getElementById("school-Name").innerHTML=json.schoolName;
                // document.getElementById("Profile-photo").style.backgroundImage="url(data:image/png;base64,"+json.image+")";
                document.getElementById("profile_photos").src="data:image/png;base64,"+json.image;
                // document.getElementById("user").style.backgroundImage="url(data:image/png;base64,"+json.image+")";
                // console.log(json.image);
                // setTimeout(()=>{document.getElementById("back_side_bar").style.display="block";document.getElementById("side_bar_bg").style.display="block";setTimeout(()=>{document.getElementById("side_bar_bg").style.left="0px"},1)},500);
            }
            else{
                window.open("error404.html", "_self");
            }
        })
        // .catch(()=>{
        //     window.open("error404.html", "_self");
        // })
}