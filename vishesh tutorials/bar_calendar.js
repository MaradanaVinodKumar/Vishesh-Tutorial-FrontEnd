function createCalendar(){
	fetch("http://localhost:8081/v1/student/Schedule")
	.then((res)=>{
		res.json()
		.then((data)=>{
			console.log(data);
			var date=new Date();
			const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
			console.log(date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate());
			
			console.log(data[0].scheduleDate);
			var code ="";
			var day=0;
			let monthFull = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
			document.getElementById("month").innerHTML=monthFull[date.getMonth()] +" "+date.getFullYear();
			for(i=0;day!=daysInMonths[date.getMonth()];i++)
			{
				if(5>i){
					code+=`<li class="LiVisiblity"></li>`;
				}
				else{

					if((day+1)==date.getDate())
					{
						code+=`<li class="today"><div class="date">${++day}</div><div class="col-12 Schedule_bg" >`
					}
					else{
						code+=`<li><div class="date">${++day}</div><div class="col-12 Schedule_bg" >`
					}
					for(j=0;j<data.length;j++){
						var today_date=day;
						if(day<10)
						{
							today_date="0"+day;
						}
						var  today=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ today_date;
						// console.log(today,data[j].scheduleDate);
						if(today==data[j].scheduleDate)
						{
							
						code+=`<div class="Schedule">
								<div class="row">
									<div class="col">${data[j].subjectName}</div>
									<div class="col">${data[j].scheduleTime.slice(0,5)}</div>
								</div>
								<div class="title">
									<div class="row">
										<div class="col">
										Subject Name   </div>
										<div class="col">: ${data[j].subjectName}</div>
									</div>
									<div class="row">	
										<div class="col">Teacher Name</div>
										<div class="col">: ${data[j].teacherName}</div>
									</div>
									<div class="row">
										<div class="col">Started Class   </div>
										<div class="col">: ${data[j].scheduleTime.slice(0,5)} min.</div>
									</div>
									<div class="row">
										<div class="col">Class Duration  </div>
										<div class="col">: ${data[j].classDuration}</div>
									</div>
								</div>
							</div>`
						}
					}	
					code+=`</div></li>`;
				}
			}
			document.getElementById("calendar").innerHTML=code;
		})
	})
}