// When document loaded successefully
$(document).ready(async function () {
    // Api call
    const result = await getDataHandler('get_college_category.php?type=1', {}, 'GET');
    // call updateCategoryData function
    if (result.success) {
        await updateCategoryData(result.college_category);
    }
});
/**
 * update Category Data
 * @param {array} categories 
*/
const updateCategoryData = async (categories) => {
    let html = ``;
    categories.map((item) => {
        html += `<button class="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary Mui-selected css-1h9z7r5-MuiButtonBase-root-MuiTab-root"
        tabindex="0" type="button" role="tab" aria-selected="true" onclick='getDataByCategoryIDClickHandler(${item.categoryID})'>${item.category_name}<span
            class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span></button>`;
    });
    const categoryContainer = document.getElementById("category-container");
    categoryContainer.innerHTML = html;
    getDataByCategoryIDClickHandler();
}
/**
 * get Data By CategoryID Click Handler
 * @param {*} categoryID 
 */
const getDataByCategoryIDClickHandler = async (categoryID = 1) => {
    if (categoryID) {
        // Api call
        const result = await getDataHandler(`get_college_by_category.php?category=${categoryID}`, {}, 'GET');
        await updateCollegeData(result.colleges);
    }
}
/**
 * update College Data
 * @param {*} college 
 */
const updateCollegeData = async (college = []) => {
    let html = ``;
    college.map((item) => {
        html += `<div class="col-sm-4 mb-md-5 ">
        <div class="card">
            <div class="card-body top_college_card">
                <h5 class="card-title ">${item.college_name}</h5><small>${item.address}</small><br><a href="#"
                    class="btn BG_button mt-2">
            </div>
        </div>
    </div>`;
    });
    const collegeContainer = document.getElementById("college-container");
    collegeContainer.innerHTML = html ? html : 'No data available for this category';
}