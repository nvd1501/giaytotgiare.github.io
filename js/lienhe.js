var hoten = document.getElementById('hoten');
var email = document.getElementById('email');
var tieude = document.getElementById('tieude');
var noidung = document.getElementById('noidung');

function validateForm() {
    if(hoten.value == '' || hoten.value.length < 8){
        alert('Bạn cần nhập họ tên có ít nhất 8 ki tự');
        hoten.style = 'border: 1px solid red; background: yellow; outline: none';
        hoten.focus();
        return false;
    }
    //email
    //khai báo
    var reg =/\w+([\.-]?\w+)*@\w+(\.\w{2,3})+$/;
    if (!reg.test(email.value)){
        alert('email ban chua dung');
        email.focus();
        return fales;
    }
}
