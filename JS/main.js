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
 *                         (200 * 1100) + (soKw - 350)*1300
 * - tienThanhToan = soKw1 + soKw2 + soKw3 + soKw4 + soKw5
 * + Output:
 * - Xuất tienThanhToan 
 * 
 *        Họ và Tên : Nguyễn Văn A
 *        Tổng Tiền Thanh Toán Kỳ này là : 300.000 vnđ
 */


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