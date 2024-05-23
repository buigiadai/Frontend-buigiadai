// Thông tin chung
import React from "react";
import "./index.css";

const GeneralInformation: React.FC = () => {
  return (
    <div className="box-df snipcss-DL1w9">
      <div className="row">
        <div className="col-md-3">
          <div className="portlet">
            <div className="portlet portlet-body light">
              <div className="profile-userpic">
                <img src="" />
              </div>
              <br />
              <div className="form-group">
                <div className="control-label">
                  <span lang="thongtinsinhvien-mssv">MSSV</span>:{" "}
                  <b>20102181</b>
                </div>
              </div>
              <div className="form-group">
                <div className="control-label">
                  <span lang="thongtinsinhvien-hovaten">Họ tên</span>:{" "}
                  <b>Bùi Gia Đại</b>
                </div>
              </div>
              <div className="form-group">
                <div className="control-label">
                  <span lang="thongtinsinhvien-gioitinh">Giới tính</span>:{" "}
                  <b>Nam</b>
                </div>
                <div className="clearfix" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="portlet">
            <div className="portlet-title">
              <div className="caption">
                <span
                  className="caption-subject  bold"
                  lang="thongtinsinhvien-thongtinhocvan"
                >
                  Thông tin học vấn
                </span>
              </div>
            </div>
            <div className="portlet-body">
              <div className="col-md-12">
                <form className="form-horizontal">
                  <div className="form-body">
                    <div className="form-group">
                      <label className="col-md-3">
                        <span lang="thongtinsinhvien-trangthai">
                          Trạng thái
                        </span>
                        : <span className="bold">Đang học</span>
                      </label>
                      <label className="col-md-3">
                        <span lang="thongtinsinhvien-mahoso">Mã hồ sơ</span>:{" "}
                        <span className="bold">20NV117605761</span>
                      </label>
                      <label className="col-md-6">
                        <span lang="thongtinsinhvien-ngayvaotruong">
                          Ngày vào trường
                        </span>
                        : <span className="bold">09/10/2020</span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="col-md-6">
                        <span lang="thongtinsinhvien-lophoc">Lớp học</span>:{" "}
                        <span className="bold">DHKTPM16A</span>
                      </label>
                      <label className="col-md-6">
                        <span lang="thongtinsinhvien-coso">Cơ sở</span>:{" "}
                        <span className="bold">
                          Cơ sở 1 (Thành phố Hồ Chí Minh)
                        </span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="col-md-6">
                        <span lang="thongtinsinhvien-bacdaotao">
                          Bậc đào tạo
                        </span>
                        : <span className="bold">Đại học</span>
                      </label>
                      <label className="col-md-6">
                        <span lang="thongtinsinhvien-loaidaotao">
                          Loại hình đào tạo
                        </span>
                        : <span className="bold">Chính quy</span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="col-md-6">
                        <span lang="thongtinsinhvien-khoa">Khoa</span>:{" "}
                        <span className="bold">Khoa Công nghệ Thông tin</span>
                      </label>
                      <label className="col-md-6">
                        <span lang="thongtinsinhvien-nganh">Ngành</span>:{" "}
                        <span className="bold">Kỹ thuật phần mềm </span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="col-md-6">
                        <span lang="thongtinsinhvien-chuyennganh">
                          Chuyên ngành
                        </span>
                        :{" "}
                        <span className="bold">
                          Kỹ thuật phần mềm - 7480103
                        </span>
                      </label>
                      <label className="col-md-6">
                        <span lang="thongtinsinhvien-khoahoc">Khóa học</span>:{" "}
                        <span className="bold">2020 - 2021</span>
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />
        <div className="col-md-12">
          <div className="portlet">
            <div className="portlet portlet-title light">
              <div className="caption">
                <span
                  className="caption-subject bold"
                  lang="thongtinsinhvien-thongtincanhan"
                >
                  Thông tin cá nhân
                </span>
              </div>
              <div className="clearfix" />
            </div>
            <div className="clearfix" />
            <div className="portlet portlet-body light">
              <div className="form-horizontal">
                <div className="form-body">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="col-md-4 col-xs-12">
                        <span lang="thongtinsinhvien-ngaysinh">Ngày sinh</span>:{" "}
                        <span className="bold">30/06/2002</span>
                      </label>
                      <label className="col-md-2 col-xs-12">
                        <span lang="thongtinsinhvien-dantoc">Dân tộc</span>:{" "}
                        <span className="bold">Kinh</span>
                      </label>
                      <label className="col-md-3 col-xs-12">
                        <span lang="thongtinsinhvien-tongiao">Tôn giáo</span>:{" "}
                        <span className="bold" />
                      </label>
                      <label className="col-md-3 col-xs-12">
                        <span lang="thongtinsinhvien-khuvuc">Khu vực</span>:{" "}
                        <span className="bold">Khu vực 1</span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="col-md-4 col-xs-12">
                        <span lang="thongtinsinhvien-socmnd">Số CCCD</span>:{" "}
                        <span className="bold">231390412</span>
                      </label>
                      <label className="col-md-2 col-xs-12">
                        <span lang="thongtinsinhvien-ngaycap">Ngày cấp</span>:{" "}
                        <span className="bold" />
                      </label>
                      <label className="col-md-6 col-xs-12">
                        <span lang="thongtinsinhvien-noicap">Nơi cấp</span>:{" "}
                        <span className="bold">Tỉnh Gia Lai</span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="col-md-4 col-xs-6">
                        <span lang="thongtinsinhvien-doituong">Đối tượng</span>:{" "}
                        <span className="bold" />
                      </label>
                      <label className="col-md-8 col-xs-6">
                        <span lang="thongtinsinhvien-dienchinhsach">
                          Diện chính sách
                        </span>
                        : <span className="bold" />
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="col-md-4 col-xs-6">
                        <span lang="thongtinsinhvien-ngayvaodoan">
                          Ngày vào Đoàn
                        </span>
                        : <span className="bold" />
                      </label>
                      <label className="col-md-8 col-xs-6">
                        <span lang="thongtinsinhvien-ngayvaodang">
                          Ngày vào Đảng
                        </span>
                        : <span className="bold" />
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="col-md-4 col-xs-6">
                        <span lang="thongtinsinhvien-sdt">Điện thoại</span>:{" "}
                        <span className="bold">0344127681</span>
                      </label>
                      <label className="col-md-8 col-xs-6">
                        <span lang="thongtinsinhvien-email">Email</span>:{" "}
                        <span className="bold">dai.gamail.com@gmail.com</span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="col-md-12 col-xs-12">
                        <span lang="thongtinsinhvien-diachilienlac">
                          Địa chỉ liên hệ
                        </span>
                        : <span className="bold" />
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="col-md-12 col-xs-12">
                        <span lang="thongtinsinhvien-noisinh">Nơi sinh</span>:{" "}
                        <span className="bold">Tỉnh Gia Lai</span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="col-md-12 col-xs-12">
                        <span lang="thongtinsinhvien-hktt">
                          Hộ khẩu thường trú
                        </span>
                        :{" "}
                        <span className="bold">
                          Làng GRang, Xã Ia Phìn, Huyện Chư Prông, Tỉnh Gia Lai.
                        </span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="col-md-6 col-xs-6">
                        <span lang="thongtinsinhvien-tennganhang">
                          Tên ngân hàng
                        </span>
                        :{" "}
                        <span className="bold">
                          Ngân hàng Ngoại Thương Việt Nam - Vietcombank
                        </span>
                      </label>
                      <label className="col-md-6 col-xs-6">
                        <span lang="thongtinsinhvien-tenchinhanh">
                          Tên chi nhánh
                        </span>
                        : <span className="bold">Chi nhánh Gia Lai</span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="col-md-6 col-xs-6">
                        <span lang="thongtinsinhvien-chutaikhoan">
                          Tên chủ tài khoản
                        </span>
                        : <span className="bold">Bùi Gia Đại</span>
                      </label>
                      <label className="col-md-6 col-xs-6">
                        <span lang="thongtinsinhvien-sotaikhoan">
                          Số tài khoản
                        </span>
                        : <span className="bold">1014449544</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="portlet">
            <div className="portlet portlet-title light">
              <div className="caption">
                <span
                  className="caption-subject  bold"
                  lang="thongtinsinhvien-qhgd"
                >
                  Quan hệ gia đình
                </span>
              </div>
              <div className="clearfix" />
            </div>
            <div className="portlet portlet-body light">
              <div className="col-md-12">
                <div className="form-horizontal">
                  <div className="form-body">
                    <div className="form-group">
                      <label className="col-md-4 col-xs-12">
                        <span lang="thongtinsinhvien-gdhotencha">
                          Họ tên Cha
                        </span>
                        : <span className="bold"> Bùi Xuân Trọng</span>
                      </label>
                      <label className="col-md-4 col-xs-12">
                        <span lang="thongtinsinhvien-gdnamsinh">Năm sinh</span>:{" "}
                        <span className="bold"> 1970</span>
                      </label>
                      <label className="col-md-4 col-xs-12">
                        <span lang="thongtinsinhvien-gdnghenghiep">
                          Nghề nghiệp
                        </span>
                        : <span className="bold"> Làm nông</span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="col-md-4 col-xs-12">
                        <span lang="thongtinsinhvien-quoctich">Quốc tịch</span>:{" "}
                        <span className="bold"> </span>
                      </label>
                      <label className="col-md-4 col-xs-12">
                        <span lang="thongtinsinhvien-dantoc">Dân tộc</span>:{" "}
                        <span className="bold"> </span>
                      </label>
                      <label className="col-md-4 col-xs-12">
                        <span lang="thongtinsinhvien-tongiao">Tôn giáo</span>:{" "}
                        <span className="bold"> </span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="col-md-4 col-xs-12">
                        <span lang="thongtinsinhvien-coquan">
                          Cơ quan công tác
                        </span>
                        : <span className="bold"> </span>
                      </label>
                      <label className="col-md-4 col-xs-12">
                        <span lang="thongtinsinhvien-chucvu">Chức vụ</span>:{" "}
                        <span className="bold"> </span>
                      </label>
                      <label className="col-md-4 col-xs-12">
                        <span lang="thongtinsinhvien-gdsdt">Số điện thoại</span>
                        : <span className="bold"> 0979041861 </span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="col-md-12 col-xs-12">
                        <span lang="thongtinsinhvien-hokhau">Hộ khẩu</span>:{" "}
                        <span className="bold"> </span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="col-md-12 col-xs-12">
                        <span lang="thongtinsinhvien-diachihiennay">
                          Chỗ ở hiện nay
                        </span>
                        : <span className="bold"> </span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="col-md-4 col-xs-12">
                        <span lang="thongtinsinhvien-gdhotenme">Họ tên Mẹ</span>
                        : <span className="bold"> Đỗ Thị Huệ</span>
                      </label>
                      <label className="col-md-4 col-xs-12">
                        <span lang="thongtinsinhvien-gdnamsinh">Năm sinh</span>:{" "}
                        <span className="bold"> 1973</span>
                      </label>
                      <label className="col-md-4 col-xs-12">
                        <span lang="thongtinsinhvien-gdnghenghiep">
                          Nghề nghiệp
                        </span>
                        : <span className="bold"> Làm nông</span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="col-md-4 col-xs-12">
                        <span lang="thongtinsinhvien-quoctich">Quốc tịch</span>:{" "}
                        <span className="bold"> </span>
                      </label>
                      <label className="col-md-4 col-xs-12">
                        <span lang="thongtinsinhvien-dantoc">Dân tộc</span>:{" "}
                        <span className="bold"> </span>
                      </label>
                      <label className="col-md-4 col-xs-12">
                        <span lang="thongtinsinhvien-tongiao">Tôn giáo</span>:{" "}
                        <span className="bold"> </span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="col-md-4 col-xs-12">
                        <span lang="thongtinsinhvien-coquan">
                          Cơ quan công tác
                        </span>
                        : <span className="bold"> </span>
                      </label>
                      <label className="col-md-4 col-xs-12">
                        <span lang="thongtinsinhvien-chucvu">Chức vụ</span>:{" "}
                        <span className="bold"> </span>
                      </label>
                      <label className="col-md-4 col-xs-12">
                        <span lang="thongtinsinhvien-gdsdt">Số điện thoại</span>
                        : <span className="bold"> 0344127681 </span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="col-md-12 col-xs-12">
                        <span lang="thongtinsinhvien-hokhau">Hộ khẩu</span>:{" "}
                        <span className="bold"> </span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="col-md-12 col-xs-12">
                        <span lang="thongtinsinhvien-diachihiennay">
                          Chỗ ở hiện nay
                        </span>
                        : <span className="bold"> </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralInformation;
