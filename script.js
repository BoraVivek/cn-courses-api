let fetchCourses = $('#fetch-courses');
let courseContainer = $('.course-container');

fetchCourses.click(function () {
    $.ajax({
        url: "https://codingninjas.in/api/v3/courses",
        method: 'GET',
        success: function (data) {
            let courses = data.data.courses;

            courses.forEach(function (course) {
                if (course.preview_image_url !== "") {
                    courseContainer.append(`
                        <a href="https://www.codingninjas.in/courses/${course.online_title}" target="_blank">
                            <div class="course-details">
                                <div class="head-img">
                                    <img src="${course.preview_image_url}" alt="${course.name}">
                                </div>
                                <div class="course-name">
                                    ${course.name}
                                </div>
                                <div class="course-level">
                                    ${course.level}
                                </div>
                            </div>
                        </a>
                    `);
                }
            });

            // let template = `<div class="course-details">
            //            <div class="head-img">
            //                <img src="https://files.codingninjas.in/0000000000001177.png" alt="Premium Full Stack Web Development">
            //            </div>
            //            <div class="course-name">
            //                Premium Full Stack Web Development
            //            </div>
            //            <div class="course-level">
            //                Foundation Courses
            //            </div>
            //        </div>`;

        }
    }).fail(function () {
        console.log("Failed to Fetch Courses");
    });
});

