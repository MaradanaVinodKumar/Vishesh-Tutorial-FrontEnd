function loads(){
    
    studentDetails(localStorage.getItem("userName"));
    
    document.getElementById("bar_bg").addEventListener("click",()=>{document.getElementById("back_side_bar").style.display="block";document.getElementById("side_bar_bg").style.display="block";setTimeout(()=>{document.getElementById("side_bar_bg").style.left="0px"},1)})
    document.getElementById("back_side_bar").addEventListener("click",()=>{document.getElementById("side_bar_bg").style.left="-400px";setTimeout(()=>{document.getElementById("back_side_bar").style.display="none";document.getElementById("side_bar_bg").style.display="none";},300)});
    document.getElementById("Profile-photo").addEventListener("mouseover",()=>{document.getElementById("Edit_profile").style.display="block"})
    document.getElementById("Profile-photo").addEventListener("mouseout",()=>{document.getElementById("Edit_profile").style.display="none"})
    document.getElementById("Edit_profile").addEventListener("click",()=>{document.getElementById("photo_editer_bg").style.display="block";document.getElementById("photo_editer_bg").style.display="flex"})
    document.getElementById("close_photo_editer").addEventListener("click",()=>{document.getElementById("photo_editer_bg").style.display="none"})
    document.getElementById("upload_file").addEventListener("change",(event)=>{document.getElementById("prev_image").src=URL.createObjectURL(event.target.files[0]);document.getElementById("image_save_bg").style.display="block";document.getElementById("photo_editer").style.backgroundColor="#d4dce5";document.getElementById("prev_image").style.borderColor="white";document.getElementById("prev_image").style.borderRadius="300px"});
    document.getElementById("logout_button").addEventListener("click",()=>{var value=confirm("Do you want to logout!");if(value){localStorage.removeItem("userName");setTimeout(()=>{window.open("index.html", "_self")},2)}});

    document.getElementById("imageForm").addEventListener( "submit",(e)=> {
        e.preventDefault();
       const imageFile = document.getElementById("upload_file").files[0];
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
                document.getElementById("user-name").innerHTML=json.name;
                document.getElementById("user-phoneNumber").innerHTML=json.phoneNumber;
                document.getElementById("user-Email").innerHTML=json.emailId;
                document.getElementById("Profile-photo").style.backgroundImage="url(data:image/png;base64,"+json.image+")";
                document.getElementById("prev_image").src="data:image/png;base64,"+json.image;
                document.getElementById("user").style.backgroundImage="url(data:image/png;base64,"+json.image+")";
                console.log(json.image);
                setTimeout(()=>{document.getElementById("back_side_bar").style.display="block";document.getElementById("side_bar_bg").style.display="block";setTimeout(()=>{document.getElementById("side_bar_bg").style.left="0px"},1)},500);
            }
            else{
                window.open("error404.html", "_self");
            }
        })
        // .catch(()=>{
        //     window.open("error404.html", "_self");
        // })

}


