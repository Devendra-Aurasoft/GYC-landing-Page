function getDataFromLocalStorageByName(name) {
    let data = JSON.parse(localStorage.getItem(name));
    return data;
}
function setDataFromLocalStorageByName(name, data) {
    localStorage.setItem(name, JSON.stringify(data));
}
const getDataByClick = (college_slug)=>{
    if(college_slug) location.replace(`/readMore.html?college_slug=${college_slug}`);
    else console.log('college_slug not available');
    }