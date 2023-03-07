// When document loaded successefully
$(document).ready(async function () {
    // Api call
    const result = await getDataHandler('/get_testimonials.php', {}, 'GET');
    console.log('result : ', result);
    // call updatecourseData function
    if (result.success){
        await updatecourseData(result.testimonials);
    }
});
/**
 * update Testimonials Data
 * @param {*} testimonial 
 */
const updatecourseData = async (testimonial) => {
    let html = ``;
    testimonial.map((item) => {
        html += `<div class="testimonial-item">
                                <p class="fs-4 fw-normal"><i class="fa fa-quote-left text-secondary me-3"></i>${item.description}</p>
                                <div class="d-flex align-items-center">
                                    <div class="ps-3">
                                        <h3>${item.title}</h3>
                                    </div>
                                </div>
                            </div>
                        `;

    });
    const testimonialContainer = document.getElementById("testimonial-container");
    testimonialContainer.innerHTML = html;
}
