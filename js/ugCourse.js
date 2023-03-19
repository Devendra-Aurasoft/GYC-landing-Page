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
    const result
      = await getDataHandler(`get_colleges_by_course_name.php?course=${coursename}`, {}, 'GET');
    await getDataByReadClickHandler(result.colleges);
  }
}

/**
 * update College Data
 * @param {*} colleges 
 */
const getDataByReadClickHandler = async (colleges = []) => {
  console.log('colleges : ', colleges);
  let html = ``;
  colleges.map((item) => {
    let imageSrc = "img/dummy_image.jpg";
    if (item.college_img_path && item.college_image) {
      imageSrc = item.college_img_path + item.college_image;
    }
    html += `<div class="col-sm-4">
      <div class="card" style="wcollege_idth: 18rem;">
        <div class="college-image" >
          <img src=${imageSrc}></img>
        </div>
      <div class="card-body">
        <h5 class="card-title">${item.college_name} </h5>
        <p class="card-text small_disc">${item.seo_description}</p>
        <button class="btn btn-primary" id="myButton" onclick='getDataByClick("${item.college_slug}")'>Read More</button>
      </div>
    </div>
  </div>`;
  });
  const courseContainer = document.getElementById("course-container");
  courseContainer.innerHTML = html ? html : 'No data available for this category';
}