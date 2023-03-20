// When document loaded successefully
$(document).ready(async function () {
    // Api call
    const result = await getDataHandler('/get_testimonials.php', {}, 'GET');
   
    // call updateTestimonialsData function
    if (result.success) {
        await updateTestimonialsData(result.testimonials);
        // initialized Testimonial Carousel Function call
        initializedTestimonialCarousel();
    }
});
/**
 * update Testimonials Data
 * @param {*} testimonial 
 */
const updateTestimonialsData = async (testimonial) => {
    // let testimonial = [
    //     {
    //         id: 1,
    //         name: 'Dhananjy Gupta',
    //         img: 'https://getyourcollege.in/gyc_admin/uploads/testimonials/1653375464.png',
    //         details: 'I had a really good experience at Get Your College. Alisha maam is really helpful and supported me at every step.I would recommend GYC to students worried about college admissions'
    //     },
    // ]

    let html = ``;
    testimonial.map((item) => {
        
        html += `<div class="testimonial-item">
                                <p class="fs-4 testimonial-text  fw-normal"><i class="fa fa-quote-left text-secondary me-3"></i>${item.description}</p>
                                <div class="d-flex align-items-center">
                                <img class="img-fluid p-1 bg-secondary" src=${item.imagepath + item.image} alt="">
                                    <div class="ps-3 ">
                                        <h3 class="testimonial_name">${item.title}</h3>
                                    </div>
                                </div>
                            </div>
                        `;

    });
    const testimonialContainer = document.getElementById("testimonial-container");
    testimonialContainer.innerHTML = html;
}
/**
 * initialized Testimonial Carousel Function
*/
const initializedTestimonialCarousel = () => {
    $(".testimonial-carousel").owlCarousel({
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