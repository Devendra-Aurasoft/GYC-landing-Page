// When document loaded successefully
$(document).ready(async function () {
    const params = new URL(window.location.href).searchParams;
    const college_slug = params.get('college_slug');
            // Api call
            const result = await getDataHandler(`get_college_by_id.php?collegeid=${college_slug}&slug=1`, {}, 'GET');
            console.log('result:',result);
            // call updateMoreData function
            if (result.success) {
                await updateReadMoreData(result.college);
          }
    });
    /**
     * update College Data
     * @param {*} college 
     */
    const updateReadMoreData = async (college = []) => {
  console.log('college : ', college);
        let html = ``;
        college.map((item) => {
            html += `<div class="col-12">
            <div class="card" style="width: 100%;">
            <div class="college-image">
            <img  src="${item.college_img_path + item.college_image}"  alt="${item.college_name}"></img>
          </div>
            <div class="card-body">
              <h5 class="card-title">${item.college_name} </h5>
              <p class="card-text">${item?.description ? window.atob(item.description) : 'No Description Data'}</p>
            </div>
          </div>
        </div>`;
        });
        const readDataContainer = document.getElementById("course-container");
        readDataContainer.innerHTML = html ? html : 'No data available for this category';
    }
    