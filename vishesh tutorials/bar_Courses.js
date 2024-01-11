function loads() {
    fetch("http://localhost:8081/v1/StudentCourses/Courses")
        .then(
            (res) => {
                res.json()
                    .then((data) => {
                        console.log(data[0].courseName);
                        var code = "";
                        for (let i = 0; i < data.length; i++) {
                            code += `<div class="col-3 coursesItemBackground">
                            <div class="coursesItem"  onclick="coursesClicks(${data[i].courseId}, 'courses')"  >
                                <div>
                                    <span class="coursesTitle">${data[i].courseName}</span>
                                    <span class="coursesLanguage">${data[i].courseLanguage}</span>
                                </div>
                                <div class="coursesDetails">
                                ${data[i].courseDetails}
                                </div>
                                <div class="coursesFooter">
                                    <div class="row">
                                        <div class="col-4">
                                            <i class="coursesIcon fa fa-group" aria-hidden="true"></i>  ${data[i].courseActiveLearners}
                                        </div>
                                        <div class="col-3">
                                            <i class="coursesIcon fa fa-star-o" aria-hidden="true"></i>  ${data[i].courseRating}
                                        </div>
                                        <div class="col-5">
                                            <Button class="coursesButton">
                                                View More
                                            </Button>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`
                        }


                        document.getElementById("coursesBody").innerHTML = code;
                    })
            }
        )
    // console.log("vinod");
    // document.getElementById("courses").style.display="none"
    // document.getElementById("coursesIndetails").style.display="none"
    // document.getElementById("coursesCart").style.display="block"

}

function coursesClicks(courseId, from) {
    localStorage.setItem("courseId", JSON.stringify({ "courseId": courseId, "from": from }));
    window.location.assign("bar_CoursesIndetails.html");
    // window.history.back();

}

function coursesIndetails() {

    // document.getElementById("courses").style.display = "none";
    // document.getElementById("coursesIndetails").style.display = "block";
    const data = new FormData();
    const loac = JSON.parse(localStorage.getItem("courseId"));
    console.log(loac)
    data.append("courseId", loac.courseId)
    fetch("http://localhost:8081/v1/StudentCourses/Courses", {
        method: "post",
        body: data
    })
        .then((res) => {
            res.json()
                .then((data) => {
                    const path = () => { if (loac.from == 'cart') { return "Cart/" } else { return " " } }
                    console.log(data.courseDetails);
                    document.getElementById("coursesPath").innerHTML = "Courses/" + path() + data.courseName;
                    document.getElementById("coursesTitle").innerHTML = data.courseName;
                    document.getElementById("ActiveLearners").innerHTML = data.courseActiveLearners;
                    document.getElementById("coursePrice").innerHTML = "" + data.coursePrice + "/-"
                    document.getElementById("priceCross").innerHTML = "" + (parseInt(data.coursePrice) + 1000) + "/-";
                    document.getElementById("Details").innerHTML = data.courseDetails
                    document.getElementById("language").innerHTML = data.courseLanguage
                    var code = "";
                    for (let i = 0; i < parseInt(data.courseRating); i++) {
                        code += `<i class="fa fa-star start" aria-hidden="true"></i>`
                    }
                    document.getElementById("Rating").innerHTML = code;


                    const Body = new FormData();
                    Body.append("userId", localStorage.getItem("userName"));
                    Body.append("userCourseId", data.courseId);
                    fetch("http://localhost:8081/v1/StudentCourses/studentCourseExistInCart", {
                        method: "post",
                        body: Body
                    })
                        .then((res) => {
                            console.log(res);
                            if (res.status == 500) {
                                document.getElementById("AddToCart").innerHTML = `<button style='background-color: rgb(145, 0, 7);'  class="button" onclick="removeToCartByCoursesIndetails(${data.courseId})">Remove to Cart</button>`
                            }
                            else {
                                document.getElementById("AddToCart").innerHTML = `<button  class="button"  onclick="AddToCart(${localStorage.getItem('userName')},${data.courseId})">Add to Cart</button>`
                            }

                        })
                })
        })

    document.getElementById("back").addEventListener('click', () => {
        if (loac.from == 'cart') {
            window.location.assign("bar_Cart.html");
        }
        else if (loac.from == 'courses') {
            window.location.assign("bar_Courses.html");
        }
        else {
            window.history.back();
        }

    })
}

function AddToCart(userId, userCourseId) {
    const cart = new FormData();
    cart.append("userId", userId);
    cart.append("userCourseId", userCourseId);
    console.log(cart.userId);
    fetch("http://localhost:8081/v1/StudentCourses/studentCourseAddToCart", {
        method: "post",
        body: cart
    })
        .then((res) => {
            // console.log(res);
            res.json()
                .then((data) => {
                    console.log(data);
                    coursesIndetails();
                    // alert("added to cart");
                })
        })
}

function removeToCartByCoursesIndetails(userCourseId) {
    const data = new FormData();
    data.append("userId", localStorage.getItem("userName"));
    data.append("userCourseId ", userCourseId)
    fetch("http://localhost:8081/v1/StudentCourses/studentCourseRemoveToCart", {
        method: 'post',
        body: data
    })
        .then(() => {
            document.getElementById("AddToCart").innerHTML = `<button  class="button"  onclick="AddToCart(${localStorage.getItem('userName')},${data.courseId})">Add to Cart</button>`
        })
}
