//PHẦN 1: Gọi ra 3 giá trị thẻ a(tên), thẻ img, thẻ strong(tiền)
//Bước1:Hàm document.querySelectorAll("button") gọi tất cả giá trị thẻ button ra.
let kiemtraButton = document.querySelectorAll("button")
// console.log(kiemtraButton);
// -------------------------------------------- 
// Bước 2:Gọi lại biến kiemtraButton vừa khai báo:, dùng hàm forEach để lấy giá trị và vị trí từ thẻ (kiemtraButton)button ra,
// +1:button.addEventListener("click",function(event) {
// +2:let btnItem = event.target =>:Khi chúng ta Click vào phải chọn đúng phần tử dùng even.target
// +3:let product =btnItem.parentElement: Đã truy suất ra thẻ div boxAnhtong là thẻ cha parentElement
// +4:Từ thẻ cha: truy xuất vào thẻ con img, Hàm let productImg = product.querySelector("img").src : truy suất đối tượng ảnh ra (src)
// +5:Từ thẻ cha: truy xuất vào thẻ a,Hàm let productThea = product.querySelector("a").innerText  : truy suất tên của thẻ a ra (innerText)
// +6:Từ thẻ cha: truy xuất vào thẻ strong, Hàm let productStrong = product.querySelector("strong").innerText: truy xuất giá tiền strong ra (innerText)
kiemtraButton.forEach(function(button,index){
    button.addEventListener("click",function(event){
        let btnItem = event.target
        let product =btnItem.parentElement
        let productImg = product.querySelector("img").src
        let productThea = product.querySelector("a").innerText
        let productStrong = product.querySelector("strong").innerText
        // console.log(productImg,productThea,productStrong); check xem đã nhận được chưa;
        //Bước 3:Xong bước này: Đến lướt thêm xuống giỏ hàng bằng quy tắc các thẻ tr>td như cũ
        //+1: Khởi tạo hàm addGioHang(productImg,productThea,productStrong) lưu 3 giá trị lấy được, Thẻ Img: ảnh, thẻ a:Lấy tên ra; thẻ strong: lấy giá tiền
        addGioHang(productImg,productThea,productStrong)
    });
});
function addGioHang(productImg,productThea,productStrong){
    
    //--------------PHẦN 3 GIỚI HẠN SẢN PHẨM KHI KÍCH 2 LẦN SẺ HIỂN THỊ THÔNG BÁO-----
    //Bước1: Truy xuất các phần tử thứ tự ra từ thẻ <tbody> <tr>
    //+Lọc số phần tử[i]ra kiemtraGioiHan.length ; khai báo biến tenThea = tên thẻ a được gán trong (".title")tương đương với(productThea)
    //+Lọc điều kiện tenThea thêm phần tử vị trị : tenThea[i].innerHTML tương đương với(productThea). ==  productThea;
    //+Thì hiện thông báo ra và return để trả về giá trị;  
    let kiemtraGioiHan = document.querySelectorAll("tbody tr")
    for(let i=0; i<kiemtraGioiHan.length;i++){
        let tenThea = document.querySelectorAll(".title")
        if(tenThea[i].innerHTML == productThea){
            alert("SẢN PHẨM ĐÃ LỰA CHỌN, VUI LÒNG CHỌN SỐ LƯỢNG!")
            return;
        } 
    }




    //Bước4:Tạo biến con lưu thẻ  <tr>
    //Bước4:Tạo biến cha lưu thẻ  <tr> vào thẻ cha <tbody> 
    // let addThetr = document.createElement("tr"
    let addThetr = document.createElement("tr")  
    let kiemtraTbody = document.querySelector("tbody")
    // console.log(kiemtraTbody);
    //Bước5:(Lấy biến (kiemtraTbody) tbody. dùng thẻ append(addThetr) để thêm thẻ <tr></tr> vào kiemtraTbody )
    kiemtraTbody.append(addThetr)
    //Bước6: tạo biến lưu tất cả Img,Thea,Strong lại: Coppy phần bố cục bên thẻ tr td đã làm, gán lại vào hàm addAll
    //Thay đổi các giá trị ở trong 3 thẻ để đổi ảnh các thẻ tương ứng;
    //Gọi các giá trị bằng (inner.HTML)  =addThetr.innerHTML = addAll
    let addAll = '<tr> <td style="display: flex; align-items: center;  margin-left: -12px; "><img src="'+productImg+'" style="width: 150px;" alt=""><span class="title">'+productThea+'</span>  </td> <td><span><strong>'+productStrong+'</strong>$</span></td>   <td><input type="number" style="width: 40px; outline: none;" value="1" min="1"></td>   <td style="cursor: pointer;"> <i class="far fa-trash-alt" style="font-size: 25px;"></i></td></tr>'
    addThetr.innerHTML = addAll

    //PHẦN 2: Gọi hàm carttotol() tính tổng; tiền
    carttotol()

    //PHẦN4: GỌI HÀM deleteCart() xóa remove lại sản phẩm
    deleteCart()
}

// ---------------------------TotalStrong------------------------------
// PHẦN2: TÍNH GIÁ TIỀN RA
function carttotol(){
    //Bước 1:Truy xuất các phần tử thứ tự ra từ thẻ <tbody> <tr> ,Thểm giỏ hàng đầu tiền đc tính là 1, tiếp là 2 ...v.v
    //+Tạo biến TotalTong=0  
    let kiemtraTboyTr = document.querySelectorAll("tbody tr")
    let TotalTong=0
    // console.log(kiemtraTboyTr.length);
    //Bước2: Dùng vòng lặp for để duyệt phần tử, để truy xuất tổng sản phẩm ra,i<kiemtraTboyTr.length để duyệt qua mảng [i];
    //+Tạo biến input: truy suất đến phần tử [i] trong (input).value;
    //+Tạo biến Strong: truy suất đến phần tử [i] trong (strong).innerText;
    //+Tạo biến TotalIpStrong lưu tổng : input * strong; 
    //+Tạo biến TotalTong += TotalIpStrong: Cộng lại mặt hàng tiền lên, tất là bao nhiêu thì bấy nhiêu tiền tương ứng
    for(let i=0; i<kiemtraTboyTr.length;i++){
        let inPut = kiemtraTboyTr[i].querySelector("input").value
        let Strong = kiemtraTboyTr[i].querySelector("strong").innerText
        let TotalIpStrong = inPut * Strong
        TotalTong += TotalIpStrong
        // console.log(TotalTong);     
    }
    //Bước 3: truyền giá trị tính Tổng được vào thẻ strong để nó hiện ra chính xác giá trị của nó
    //+Khởi tạo biến timStrong gán giá trị vào TotalTong, thẻ strong sẽ hiện ra theo tổng tiền
    let timStrong = document.querySelector(".price-total strong")
    timStrong.innerHTML =TotalTong

    inputchange();
}
//----------------------PHẦN 4:Sử dụng nút delêt(xóa): dùng hàm remove để delete sản phẩm mình kích vào---------------
//Các nút kích vào điều sử dụng sự kiện, và gọi hàm: let goibienDeLeTe = document.querySelectorAll("i"),
// goibienDeLeTe[i].addEventListener("click", function(event){}
function deleteCart(){
    let  DeLeTe= document.querySelectorAll("tbody tr")
    for(let i=0; i<DeLeTe.length;i++){
        let goibienDeLeTe = document.querySelectorAll("i")
        goibienDeLeTe[i].addEventListener("click", function(event){
            let btnDeleTe = event.target
            let truyenduLieu = btnDeleTe.parentElement.parentElement
            truyenduLieu.remove()
          

            //Khi xóa xong: gọi lại hàm carttotol(): Để tính lại giá trị tiền
            carttotol()
        })
        
    }
}
//-----------------------PHẦN 5:Sử dụng nút hàm gọi tới nút input để cho phép tăng giá trị, và gọi lại hàm carttotol(), để tính toán lại
//Truyền hàm: inputchange() lên hàm:carttotol() lại
function inputchange(){
    let  Input= document.querySelectorAll("tbody tr")
    for(let i=0; i<Input.length;i++){
        let goibienInput =Input[i].querySelector("input");
        goibienInput.addEventListener("click",function(){
            carttotol()
        })
    }
}