// When document loaded successefully
$(document).ready(async function () {
    // Api call
    const result = await getDataHandler('/get_colleges.php', {}, 'GET');
   
    // call updateTestimonialsData function
    if (result.success){
        await updateTestimonialsData(result.colleges);
        // initialized Testimonial Carousel Function call
        initializedTestimonialCarousel();
    }
});
/**
 * update Testimonials Data
 * @param {*} college 
 */
const updateTestimonialsData = async (college) => {
    // let college = [
    //     {
    //         id: 1,
    //         name: 'Dhananjy Gupta',
    //         img: 'https://getyourcollege.in/gyc_admin/uploads/colleges/1653375464.png',
    //         details: 'I had a really good experience at Get Your College. Alisha maam is really helpful and supported me at every step.I would recommend GYC to students worried about college admissions'
    //     },
    // ]

    let html = ``;
    college.map((item) => {
        html += `<div class="col-sm-4 mb-5 ">
        <div class="card">
            <div class="card-body top_college_card">
                <h5 class="card-title ">${item.college_name}</h5><small>${item.college_address}</small><br><a href="#"
                    class="btn BG_button mt-2"> <a
                        href="/Institutions/moreabout/renaissance-university"> Read More</a></a>
            </div>
        </div>
    </div>
                        `;

    });
    const collegeContainer = document.getElementById("college-container");
    collegeContainer.innerHTML = html;
}
/**
 * initialized Testimonial Carousel Function
*/
const initializedTestimonialCarousel = () => {
    $(".college-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        nav: true,
        loop: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });
}