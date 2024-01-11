function loades() {
    const Body = new FormData();
    Body.append("userId", localStorage.getItem("userName"));
    fetch("http://localhost:8081/v1/StudentCourses/studentCoursesInCart", {
        method: 'post',
        body: Body
    })
        .then((res) => {
            res.json()
                .then((data) => {
                    console.log(data);
                    var code = "";
                    for (let i = 0; i < data.length; i++) {
                        code += ` <div class="coursesCartBackground">
                        <div>
                            <span class="coursesTitle">${data[i].courseName}</span>
                            <span class="coursesLanguage">${data[i].courseLanguage}</span>
                        </div>
                        <div class="coursesDetails" style="height: 60px;">
                        ${data[i].courseDetails}
                        </div>
                        <div class="coursesFooter">
                            <div class="row">
                                <div class="col-4">
                                    <i class="coursesIcon fa fa-group" aria-hidden="true"></i>  ${data[i].courseActiveLearners}
                                </div>
                                <div class="col-3">
                                    <i class="coursesIcon fa fa-star-o" aria-hidden="true"></i> ${data[i].courseRating}
                                </div>
                                <div class="col-5">
                                    <Button class="coursesButton" id="ViewMore" onclick="courses(${data[i].courseId})">
                                        View More
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 center" style="margin-top: 10px;">
                            <button id="RemoveToCart" onclick="removeToCart(${data[i].courseId})" >Remove to Cart</button>
                            <button id="Bay">Buy</button>
                        </div>
                    </div>`;
                    }
                    document.getElementById("coursesCartBody").innerHTML = code;
                })
        })

    // document.getElementById("backFromCart").addEventListener("click", () => { window.history.back() })
}

function removeToCart(userCourseId) {
    const data = new FormData();
    data.append("userId", localStorage.getItem("userName"));
    data.append("userCourseId ", userCourseId)
    fetch("http://localhost:8081/v1/StudentCourses/studentCourseRemoveToCart", {
        method: 'post',
        body: data
    })
        .then(() => {
            loades()
        })
}

function courses(courseId) {
    coursesClicks(courseId, "cart")
    window.location.assign("bar_CoursesIndetails.html");

}