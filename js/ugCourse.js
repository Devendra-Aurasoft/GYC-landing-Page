// When document loaded successefully
$(document).ready(async function () {
  // Api call
  const result = await getDataHandler('get_courses.php?type=1', {}, 'GET');
  // call updatecoursesData function
  if (result.success) {
    await updateUGCoursesData(result.courses);
  }
});
/**
 * update courses Data
 * @param {array} courses 
*/
const updateUGCoursesData = async (courses) => {
  let html = ``;
  courses.map((item) => {
    html += ` <li><a class="dropdown-item" onclick='getDataByUGCourseClickHandler("${item.course_name}")'>${item.course_name}</a></li>`;
  });
  const ugContainer = document.getElementById("ug-container");
  ugContainer.innerHTML = html;
  getDataByUGCourseClickHandler();
}


/**
 * get Data By coursesID Click Handler
 * @param {*} courseID 
 */
const getDataByUGCourseClickHandler = async (coursename) => {
  if (coursename) {
    // Api call
    const result = await getDataHandler(`get_colleges_by_course_name.php?course=${coursename}`, {}, 'GET');
    await updateCollegesData(result.colleges);
  }
}
/**
 * update College Data
 * @param {*} colleges 
 */
const updateCollegesData = async (colleges = []) => {
  console.log('colleges : ', colleges);
  let html = ``;
  colleges.map((item) => {
    html += `<div class="col-sm-4">
        <div class="card" style="width: 18rem;">
        <div class="college-image" >
          <img  src="${item.college_img_path + item.college_image}"  alt="${item.college_name}"></img>
        </div>
        <div class="card-body">
          <h5 class="card-title">${item.college_name} ${item.college_type}</h5>
          <p class="card-text small_disc">${item?.description ? window.atob(item.description) : 'No Description Data'}</p>
          <a href="#" class="btn btn-primary">Read More</a>
        </div>
      </div>
    </div>`;
  });
  const courseContainer = document.getElementById("course-container");
  courseContainer.innerHTML = html ? html : 'No data available for this category';
}