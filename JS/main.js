function domGetEl(id) {
    return document.getElementById(id);
};
/**
 * Quản Lý Tuyển Sinh
 * + Input: 
 * - nhập : monToan, monVan, monAnh, diemChuan, diemUuTien
 * - diemTongKet = ?
 * + Progress: 
 * - Tính : 
 *  > diemUuTien = Khu Vực A (+2), B (+1), C(+0.5);
 *                 Đối Tượng 1 (+ 2.5), 2(+ 1.5), 3(+1);
 *  > diemTongKet = monToan + monVan + monAnh + diemUuTien
 * + Output: 
 * - xuất diemTongKet
 *          50 điểm , Đậu.
 * 
 */
function diemKhuVucUuTien(a, b) {
    var b = 0;
    if (a == "A") {
        b = 2;
    } else if (a == "B") {
        b = 1;
    } else if (a == "C") {
        b = 0.5;
    } else {
        b = 0;
    }
    return b;
    // console.log(diemKVUuTien);
}
function diemDoiTuongUuTien(c, d) {
    var d = 0;
    if (c == "1") {
        d = 2.5;
    } else if (c == "2") {
        d = 1.5;
    } else if (c == "3") {
        d = 1;
    } else {
        d = 0;
    }
    return d;
    // console.log(diemDoiTuongUT);
}
function tinhDiemTuyenSinh() {
    var monToan = domGetEl("monToan").value * 1;
    var monVan = domGetEl("monVan").value * 1;
    var monAnh = domGetEl("monAnh").value * 1;
    var diemChuan = domGetEl("diemChuan").value * 1;

    var khuVucUT = domGetEl("khuVucUT").value;
    var doiTuongUT = domGetEl("doiTuongUT").value;

    var diemKVUuTien = 0;
    var diemDoiTuongUT = 0;
    var diemTongKet = 0;
    var content = "";

    diemKVUuTien = diemKhuVucUuTien(khuVucUT, diemKVUuTien);

    diemDoiTuongUT = diemDoiTuongUuTien(doiTuongUT, diemDoiTuongUT);

    diemTongKet = monToan + monVan + monAnh + diemKVUuTien + diemDoiTuongUT;
    // console.log(diemTongKet);

    if (diemTongKet >= diemChuan) {
        if (monToan > 0 && monVan > 0 && monAnh > 0) {
            content += "<p> Tổng Điểm Đạt Được : " + diemTongKet + " đ </p>";
            content += "<p> Chúc Mừng Thí Sinh Đã Đậu" + "</p>";
        } else {
            content += "<p> Tổng Điểm Đạt Được : " + diemTongKet + " đ </p>";
            content += "<p> Thí Sinh Đã Rớt (Do Có 1 Môn 0đ). Chúc Bạn May Mắn Lần Sau" + "</p>";
        }
    } else {
        content += "<p> Tổng Điểm Đạt Được : " + diemTongKet + " đ </p>";
        content += "<p> Thí Sinh Đã Rớt. Chúc Bạn May Mắn Lần Sau" + "</p>";
    }

    domGetEl("xuatDiemThiSinh").innerHTML = content;
};


/**
 * Tính Tiền Điện
 * + Input:
 * - tenHo = ?
 * - soKw = ?
 * + Progress
 * - 0 -> 50kw (soKw1): soKw * 500d  
 * - 51 -> 100kw (soKw2): (50 * 500) + (soKw - 50) * 650d
 * - 101 -> 200kw (soKw3): (50 * 500) + (50 * 650) + (soKw - 100) * 850
 * - 201 -> 350kw (soKw4): (50 * 500) + (50 * 650) + (100 * 850) +
 *                         (soKw - 200) * 1100 
 * - 351 trở lên (soKw5): (50 * 500) + (50 * 650) + (100 * 850) +
 *                         (150 * 1100) + (soKw - 350)*1300
 * - tienThanhToan = soKw1 + soKw2 + soKw3 + soKw4 + soKw5
 * + Output:
 * - Xuất tienThanhToan 
 * 
 *        Họ và Tên : Nguyễn Văn A
 *        Tổng Tiền Thanh Toán Kỳ này là : 300.000 vnđ
 */
function congThucTinhTienDien(x,y){
    var y = 0;
    if (0 < x && x <= 50) {
        y = x * 500;
    } else if (50 < x && x <= 100) {
        y = (50 * 500) + (x - 50) * 650;
    } else if (100 < x && x <= 200) {
        y = (50 * 500) + (50 * 650) + (x - 100) * 850;
    } else if (200 < x && x <= 350) {
        y = (50 * 500) + (50 * 650) + (100 * 850) + (x - 200) * 1100;
    } else if (x > 350) {
        y = (50 * 500) + (50 * 650) + (100 * 850) + (150 * 1100) + (x - 350) * 1300;
    } else {
        alert("Vui Lòng Nhập Đúng Dữ Liệu");
    }
    return y;
}
function tinhTienDien() {
    // console.log("123")
    var tenHo = domGetEl("tenHo").value;
    var soKw = domGetEl("soKw").value * 1;
    var tongTienKw = 0;
    var contentTD = "";
    var numFormat = new Intl.NumberFormat("VN-vn");
    // console.log(tenHo);
    
    tongTienKw = congThucTinhTienDien(soKw,tongTienKw);

    contentTD += "<p> Chủ Hộ : " + tenHo + "</p>"
    contentTD += "<p> Tổng Chi Phí Tiền Điện Phải Trả : " + numFormat.format(tongTienKw) + " vnđ </p>"
    domGetEl("xuatTienDien").innerHTML = contentTD;
    // console.log(tongTienKw);
}

/**
 * Tính Thuế Thu Nhập Cá Nhân
 * + Input: hoVaTen, thuNhapNam, soNguoiPhuThuoc
 * + Progress:
 * - Tính
 *  thuNhapChiuThue = thuNhapNam  - 4tr - (soNguoiPhuThuoc * 1tr6)
 *  thuNhapCaNhan = thuNhapChiuThue * %
 * - từ 0 - 60tr (thue1): thuNhapChiuThue * 5%
 * - trên 60tr - 120tr (thue2): (60 * 5%) + (thuNhapChiuThue - 60)*10%
 * - trên 120tr - 210tr (thue3): (60 * 5%) + (60 * 10%) + (thuNhapChiuThue - 120)*15%
 * - trên 210tr - 384tr (thue4): (60 * 5%) + (60 * 10%) + (90 * 15%) + (thuNhapChiuThue - 210)*20%
 * - trên 384tr - 624tr (thue4): (60 * 5%) + (60 * 10%) + (90 * 15%) + (174 * 20%) + (thuNhapChiuThue - 384)*25%
 * - trên 624tr - 960tr (thue5): (60 * 5%) + (60 * 10%) + (90 * 15%) + (174 * 20%) + (240 * 25%) + (thuNhapChiuThue - 624) * 30%
 *  - trên 960tr (thue6): (60 * 5%) + (60 * 10%) + (90 * 15%) + (174 * 20%) + (240 * 25%) + (336 * 30%) + (thuNhapChiuThue - 960) * 35%
 *  thuNhapCaNHan = thue1 + thue2 + thue3 + thue4 + thue5 + thue6  
 * Output: 
 * - xuất: thuNhapCaNhan 
 *            Thuế Thu Nhập Cá Nhân Phải Chịu là : 20tr vnđ 1.000tr vnđ
 */
function congThucTinhThue(u,i){
    var i = 0
    if (u <= 60) {
        i = u * 0.05;
    } else if (60 < u && u <= 120) {
        i = (60 * 0.05) + (u - 60) * 0.1;
    } else if (120 < u && u <= 210) {
        i = (60 * 0.05) + (60 * 0.1) + (u - 120) * 0.15;
    } else if (210 < u && u <= 384) {
        i = (60 * 0.05) + (60 * 0.1) + (90 * 0.15) + (u - 210) * 0.2;
    } else if (384 < u && u <= 624) {
        i = (60 * 0.05) + (60 * 0.1) + (90 * 0.15) + (174 * 0.2) + (u - 384) * 0.25;
    } else if (624 < u && u <= 960) {
        i = (60 * 0.05) + (60 * 0.1) + (90 * 0.15) + (174 * 0.2) + (240 * 0.25) + (u - 624) * 0.3;
    } else if (960 < u) {
        i = (60 * 0.05) + (60 * 0.1) + (90 * 0.15) + (174 * 0.2) + (336 * 0.3) + (u - 960) * 0.35;
    } else {
        alert("Vui Lòng Nhập Chính Xác Số Tiền");
    };
    return i;
}
function thueCaNhan() {
    var hoVaTen = domGetEl("hoVaTen").value;
    var thuNhapNam = domGetEl("thuNhapNam").value * 1;
    var soNguoiPhuThuoc = domGetEl("soNguoiPhuThuoc").value * 1;
    var thuNhapChiuThue = 0;
    var thuePhaiTra = 0;
    var numFormat = new Intl.NumberFormat("VN-vn");
    var contentThue = "";
    // console.log(thuNhapNam);
    thuNhapChiuThue = thuNhapNam - 4 - (soNguoiPhuThuoc * 1.6);

    thuePhaiTra = congThucTinhThue(thuNhapChiuThue,thuePhaiTra);

    contentThue += "<p> Họ Và Tên : " + hoVaTen + "</p>";
    contentThue += "<p> Thuế Thu Nhập Cá Nhân Phải Chi Trả : " + numFormat.format(parseFloat(thuePhaiTra * 1000000)) + " VNĐ</p>";
    domGetEl("xuatThueCaNhan").innerHTML = contentThue;
}

/**
 * Tính Tiền Cáp
 * + Input: maKH, loaiKH, soKetNoi, soKenhCaoCap
 * - nhaDan : phiHdDan, phiCanBanDan, phiCaoCapDan
 * - doanhNghiep: phiHdDN, phiCanBanDN, phiCaoCapDN
 * + Progress
 *     nhaDan:
 * - phiCaoCapDan = 7.5 * soKenhCaoCap
 * - tongChiPhiDan = phiHdDan + phiDvDan + phiCaoCapDan
 *     doanhNghiep:
 * - phiCanBanDN = 75 + (soKetNoi - 10)* 5 
 * - phiCaoCapDN = 50 * soKenhCaoCap
 * - tongChiPhiDN = phiHdDN + phiCanBanDN + phiCaoCapDN
 * + Output: 
 * xuất: tongChiPhiDan , tongChiPhiDN
 *  vd : Chi phí tiền cáp của khách hàng có mã số maKH là : 240$ 
 */

domGetEl("loaiKH").onclick = function () {
    // console.log("123");
    var loaiKH = domGetEl("loaiKH").value;
    var divKetNoi = domGetEl("divKetNoi");

    if (loaiKH == "ND") {
        divKetNoi.style.display = "none";
    } else {
        divKetNoi.style.display = "block";
    };
}

function tinhTienCap() {
    // console.log("123");
    var maKH = domGetEl("maKH").value;
    var loaiKH = domGetEl("loaiKH").value;
    // var nhaDan = domGetEl("nhaDan");
    // var doanhNghiep = domGetEl("doanhNghiep");

    var soKetNoi = domGetEl("soKetNoi").value * 1;
    var soKenhCaoCap = domGetEl("soKenhCaoCap").value * 1;
    var contentTCap = "";
    var tongchiPhiCap = 0;
    // Dân
    var phiHdDan = 4.5;
    var phiCanBanDan = 20.5;
    var phiCaoCapDan = 7.5 * soKenhCaoCap;

    // Doanh Nghiệp
    var phiHdDN = 15;
    var phiCanBanDN = 0;
    var phiCaoCapDN = 50 * soKenhCaoCap;
    // 75 + (soKetNoi - 10)*5 ;


    if (loaiKH == "ND") {
        tongchiPhiCap = phiHdDan + phiCanBanDan + phiCaoCapDan;
        loaiKH = "Nhà Dân";
    } else if (loaiKH == "DN") {
        if (soKetNoi > 10) {
            phiCanBanDN = 75 + (soKetNoi - 10) * 5;
        } else {
            alert("Vui Lòng Nhập Đúng");
        };
        tongchiPhiCap = phiHdDN + phiCanBanDN + phiCaoCapDN;
        loaiKH = "Doanh Nghiệp";
    } else {
        alert("Vui Lòng Nhập Đúng Thông Tin");
    };

    contentTCap += "<p> Khách Hàng Có Mã KH là : " + maKH + "</p>";
    contentTCap += "<p> Loại Khách Hàng : " + loaiKH + "</p>";
    contentTCap += "<p> Tổng Tiền Cáp Cần Phải Trả : " + tongchiPhiCap + "$</p>";
    // console.log(contentTCap);

    domGetEl("xuatTienCap").innerHTML = contentTCap;
}