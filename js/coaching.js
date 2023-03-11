
// When document loaded successefully
$(document).ready(async function () {
  // Api call
  const result = await getDataHandler('get_courses.php?type=3', {}, 'GET');
  // call updatecoursesData function
  if (result.success) {
    await updateCoachingData(result.courses);
  }
});
/**
* update courses Data
* @param {array} courses 
*/
const updateCoachingData = async (courses) => {
  let html = ``;
  courses.map((item) => {
    html += ` <li><a class="dropdown-item"  onclick='getDataByCoachingClickHandler("${item.course_name}")'>${item.course_name}</a></li>`;
  });
  const ugContainer = document.getElementById("coaching-container");
  ugContainer.innerHTML = html;
  getDataByCoachingClickHandler();
}


/**
 * get Data By coursesID Click Handler
 * @param {*} courseID 
 */
const getDataByCoachingClickHandler = async (coursename) => {
  if (coursename) {
    // Api call
    const result = await getDataHandler(`get_colleges_by_course_name.php?course=${coursename}`, {}, 'GET');
    await updateCoachingsData(result.colleges);
  }
}
/**
 * update College Data
 * @param {*} colleges 
 */
const updateCoachingsData = async (colleges = []) => {
  let html = ``;
  colleges.map((item) => {
    html += `<div class="col-sm-4">
        <div class="card" style="width: 18rem;">
        <div class="college-image">          
         <img  src="${item.college_img_path + item.college_image}"  alt="${item.college_name}"></img>
        </div>
        <div class="card-body">
          <h5 class="card-title">${item.college_name} ${item.college_type}</h5>
          <p class="card-text">${item?.description ? window.atob(item.description) : 'No Description Data'}</p>
          <a href="#" class="btn btn-primary">Read More</a>
        </div>
      </div>
    </div>`;
  });
  const courseContainer = document.getElementById("course-container");
  courseContainer.innerHTML = html ? html : 'No data available for this category';
}
