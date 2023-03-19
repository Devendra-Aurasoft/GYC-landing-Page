// When document loaded successefully
$(document).ready(async function () {
// Api call
const result = await getDataHandler('get_courses.php?type=2', {}, 'GET');
// call updatecoursesData function
if (result.success) {
    await updatePGCoursesData(result.courses);
}
});
/**
* update courses Data
* @param {array} courses 
*/
const updatePGCoursesData = async (courses) => {
let html = ``;
courses.map((item) => {
    html += ` <li><a class="dropdown-item" onclick='getDataByPGCourseClickHandler("${item.course_name}")'>${item.course_name}</a></li>`;
});
const ugContainer = document.getElementById("pg-container");
ugContainer.innerHTML = html;
getDataByPGCourseClickHandler();
}

  
/**
 * get Data By PGCourse Click Handler
 * @param {*} courseID 
 */
const getDataByPGCourseClickHandler = async (coursename) => {
    if (coursename) {
        // Api call
        const result = await getDataHandler(`get_colleges_by_course_name.php?course=${coursename}`, {}, 'GET');
        await updatePGCourseData(result.colleges);
    }
}
/**
 * update College Data
 * @param {*} colleges 
 */
const updatePGCourseData = async (colleges = []) => {
    let html = ``;
    colleges.map((item) => {
        html += `<div class="col-sm-4">
        <div class="card" style="width: 18rem;">
        <div class="college-image">
        <img  src="${item.college_img_path + item.college_image}"  alt="${item.college_name}"></img>
      </div>
        <div class="card-body">
          <h5 class="card-title">${item.college_name} </h5>
          <p class="card-text">${item.seo_description}</p>
          <button class="btn btn-primary" id="myButton" onclick='getDataByClick("${item.college_slug}")'>Read More</button>
        </div>
      </div>
    </div>`;
    });
    const courseContainer = document.getElementById("course-container");
    courseContainer.innerHTML = html ? html : 'No data available for this category';
}
