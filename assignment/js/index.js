var slide = document.getElementById('slider');

//khai báo mảng chứa ảnh trong slide
var anh = [
    'bannerass.jpeg',
    'img1.png',
    'img2.png',
    'img3.png',
    'img4.png',
    'img5.png',
    


];

// Độ dài của mảng
var len = anh.length;
// Tạo 1 biến đếm lưu vị trí của ảnh
var dem = 0;
// Thư mục ảnh
var dir_img = "img/"
// Function next
function next() {
    if (dem == len - 1){
        dem = 0;
        slide.src = dir_img + anh[dem];
    }else{
        dem++;
        slide.src =dir_img + anh[dem];
    }
}
function previous(){
    if (dem == 0) {
        dem = len -1;
        slide.src = dir_img + anh[dem];

    } else {
        dem --;
        slide.src = dir_img + anh[dem];
    }
}
// tự động chạy
function playSlide(){
    t=setInterval(function ()
    {
        next();
    },2000);
}
// DỪng
function stopSlide(){
    clearInterval(t);
}
