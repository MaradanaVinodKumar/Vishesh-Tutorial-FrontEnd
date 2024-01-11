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
            const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
            var date=new Date();
            document.getElementById("date").innerHTML=months[date.getMonth()] +" "+date.getDate()+" , "+date.getFullYear();
            var name=json.name.split(" ");
            document.getElementById("welcome_name").innerHTML= "Welcome back "+ name[0] +" ! ";
        }
        else{
            window.open("error404.html", "_self");
        }
    })
    // .catch(()=>{
    //     window.open("error404.html", "_self");
    // })

    fetch("http://localhost:8081/v1/student/todaySchedules")
    .then((res)=>{
        res.json()
        .then((data)=>{
            console.log(data);
            document.getElementById("SCHEDULES").innerHTML="";
            data.forEach(element => {
                document.getElementById("SCHEDULES").innerHTML+=`
                <div class="title_bg">
                    <div class="row ">
                        <div class="col-12 timings">
                        ${convert24To12(element.scheduleTime.slice(0,5))}
                        <span class="timing_name">${element.subjectName}</span>
                        </div>
                    </div>
                
                    <div class="title">
                        <div class="row">
                            <div class="col">
                            Subject Name   </div>
                            <div class="col">: ${element.subjectName}</div>
                        </div>
                        <div class="row">	
                            <div class="col">Teacher Name</div>
                            <div class="col">: ${element.teacherName}</div>
                        </div>
                        <div class="row">
                            <div class="col">Started Class   </div>
                            <div class="col">: ${convert24To12(element.scheduleTime.slice(0,5))}</div>
                        </div>
                        <div class="row">
                            <div class="col">Class Duration  </div>
                            <div class="col">: ${element.classDuration}</div>
                        </div>
                    </div>
                </div>`
                
            });


        })
    }).catch((error)=>{console.log(error)})

}


function convert24To12(timeString) {
    
    if (!/^[0-9]{2}:[0-9]{2}$/.test(timeString)) {
      console.error("Invalid time format:", timeString);
      return timeString;
    }
  
    const [hours, minutes] = timeString.split(":");
  
    let convertedHours = parseInt(hours);
    if (convertedHours > 12) {
      convertedHours -= 12;
    } else if (convertedHours === 0) {
      convertedHours = 12;
    }
  
    const ampm = parseInt(hours) < 12 ? "AM" : "PM";
  
    return `${convertedHours}:${minutes} ${ampm}`;
  }