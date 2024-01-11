function loads(){
    studentDetails(localStorage.getItem("userName"));
    document.getElementById("image").addEventListener( "change",(e)=> {
        e.preventDefault();
       const imageFile = document.getElementById("image").files[0];
       const formData=new FormData();
       formData.append('file',imageFile);
       formData.append('userId',localStorage.getItem("userName"));
       
        fetch("http://localhost:8081/v1/student/addImage", {
            method: 'POST',
            body: formData,
            // headers: {'Content-Type': 'multipart/form-data'}
        }).then(res=>{
            console.log(res);
                 location.reload();
                 
                alert('Image has Saved !');
                
        })
        .catch(error=>{console.log("not saved image",error);alert("Image has Not Saved !")})
    })
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

            document.getElementById("circle").style.backgroundImage="url(data:image/png;base64,"+json.image+")";
            document.getElementById("User_Name").innerHTML=json.name;
            document.getElementById("User_Class").innerHTML=json.className;

            document.getElementById("User_Email").innerHTML=json.emailId;
            document.getElementById("User_Phone").innerHTML=json.phoneNumber;
            document.getElementById("User_School").innerHTML=json.schoolName;
        }
        else{
            window.open("error404.html", "_self");
        }
    })
    // .catch(()=>{
    //     window.open("error404.html", "_self");
    // })

}