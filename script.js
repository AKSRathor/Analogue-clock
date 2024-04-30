// while(true){
//     console.log(date.getMinutes())
// }
let angle_min = 0;
let date = new Date();
angle_min = -2 + 6*date.getMinutes() 
document.querySelector('#minute').style.transform = 'rotate('+angle_min +'deg'+ ')'

let angle_hour = 0;
store_angle_hour = -44 + 30*date.getHours() + 0.5*date.getMinutes()
document.querySelector('#hour').style.transform = 'rotate('+store_angle_hour +'deg'+ ')'

let angle_second = 0;
angle_second = 6*date.getSeconds() 
document.querySelector('#second').style.transform = 'rotate('+angle_second +'deg'+ ')'

let store_angle_second = angle_second;

setInterval(() => {
    date = new Date();s
    console.log(date.getMinutes())
    angle_min = -2 + 6*date.getMinutes() 
    document.querySelector('#minute').style.transform = 'rotate('+angle_min +'deg'+ ')'


}, 300);

setInterval(() => {
    store_angle_hour += 0.5 
    document.querySelector('#hour').style.transform = 'rotate('+store_angle_hour +'deg'+ ')'


}, 60000);

setInterval(() => {
    store_angle_second +=6
    document.querySelector('#second').style.transform = 'rotate('+store_angle_second +'deg'+ ')'


}, 1000);