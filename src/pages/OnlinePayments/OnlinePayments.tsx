//Thanh toán trực tuyến
import React from "react";
import "./index.css";
import { QrcodeOutlined } from "@ant-design/icons";

const OnlinePayments: React.FC = () => {
  return (
    <div className="box-df snipcss-13YW3">
      <div className="portlet">
        <div className="portlet-title">
          <div className="caption">
            <span className="caption-subject bold">Thanh toán trực tuyến</span>
          </div>
          <div className="actions">
            <div id="style-TEmLQ" className="style-TEmLQ">
              <span lang="dot-label" id="style-SDPM5" className="style-SDPM5">
                Đợt
              </span>{" "}
              <select
                className="form-control"
                id="cboIDDotThanhToan"
                itemID="thanhtoanonline-dotthanhtoan-combobox"
                name="cboIDDotThanhToan"
                aria-placeholder="Tất cả"
              >
                <option value="">Tất cả</option>
                <option value={37}>HK1 (2020-2021)</option>
                <option value={38}>HK2 (2020-2021)</option>
                <option value={39}>HK3 (2020-2021)</option>
                <option value={40}>HK1 (2021-2022)</option>
                <option value={41}>HK2 (2021-2022)</option>
                <option value={42}>HK3 (2021-2022)</option>
                <option value={43}>HK1 (2022-2023)</option>
                <option value={44}>HK2 (2022-2023)</option>
                <option value={45}>HK3 (2022-2023)</option>
                <option value={46}>HK1 (2023-2024)</option>
                <option value={56}>HK2 (2023-2024)</option>
                <option value={57}>HK3 (2023-2024)</option>
                <option value={58}>HK1 (2024-2025)</option>
                <option value={59}>HK2 (2024-2025)</option>
                <option value={60}>HK3 (2024-2025)</option>
              </select>
            </div>
          </div>
          <div className="clearfix" />
        </div>
        <div id="box_congnothanhtoan">
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"
          />
          <input
            id="txtMessLockThanhToan"
            name="txtMessLockThanhToan"
            type="hidden"
            defaultValue=""
          />
          <div className="table-responsive">
            <table
              className="table-pointer table-custom table table-bordered text-center"
              width="100%"
              role="grid"
              id="ThanhToanOl"
            >
              <thead>
                <tr role="row">
                  <td style={{ width: 40 }}>
                    <input
                      type="checkbox"
                      id="chkAll"
                      // onclick="checkAll(this); sumKhoanNop();"
                      defaultChecked
                    />
                  </td>
                  <th lang="thanhtoanonline-stt">STT</th>
                  <th lang="thanhtoanonline-ma">Mã</th>
                  <th lang="thanhtoanonline-noidungthu">Nội dung thu</th>
                  <th lang="thanhtoanonline-tinchi">Tín chỉ</th>
                  <th lang="thanhtoanonline-batbuoc">Bắt buộc</th>
                  <th lang="thanhtoanonline-sotien">Số tiền (VND)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">
                    <input
                      defaultChecked
                      className="chkKTT"
                      data-allowcheck="True"
                      data-bankid=""
                      data-batbuoc="True"
                      data-dongiabgvat="False"
                      data-dot={56}
                      data-id={363}
                      data-idcongno=""
                      data-idcongnonoitru=""
                      data-iddangkyhocphan=""
                      data-iddangkythilai=""
                      data-iddangkythitotnghiep=""
                      data-iddukienthu=""
                      data-idkehoachthuchung="Rnqd5higJzjMlfwOjo-giQ"
                      data-idloaithu="9jZsNbbF7Eduwkz6f6TnOw"
                      data-idsub="qOD4AsGAVmCsDBDBQqqxVw"
                      data-idthu="Rnqd5higJzjMlfwOjo-giQ"
                      data-ma="TN"
                      data-mucnop={1000000}
                      data-noidungthu="Hoc phi tot nghiep"
                      data-sotien={1000000}
                      data-trandate=""
                      data-transid=""
                      id="ckbThanhToan3630"
                      name="ckbThanhToan3630"
                      // onclick="sumKhoanNop()"
                      type="checkbox"
                      defaultValue="true"
                    />
                    <input
                      name="ckbThanhToan3630"
                      type="hidden"
                      defaultValue="false"
                    />
                  </td>
                  <td
                  // onclick="chonKhoanThu('ckbThanhToan' + 3630)"
                  >
                    1
                  </td>
                  <td
                  // onclick="chonKhoanThu('ckbThanhToan' + 3630)"
                  >
                    TN
                  </td>
                  <td
                    className="text-left"
                    //   onclick="chonKhoanThu('ckbThanhToan' + 3630)"
                  >
                    Hoc phi tot nghiep
                  </td>
                  <td />
                  <td>
                    <div>
                      <div className="check" />
                    </div>
                  </td>
                  <td className="text-right">1.000.000</td>
                </tr>
                <tr>
                  <td className="text-center">
                    <input
                      // defaultChecked="checked"
                      className="chkKTT"
                      data-allowcheck="True"
                      data-bankid=""
                      data-batbuoc="True"
                      data-dongiabgvat="False"
                      data-dot={57}
                      data-id={8780995}
                      data-idcongno=""
                      data-idcongnonoitru=""
                      data-iddangkyhocphan="N7Iw9eO3AmRjKdhOArYivw"
                      data-iddangkythilai=""
                      data-iddangkythitotnghiep=""
                      data-iddukienthu=""
                      data-idkehoachthuchung=""
                      data-idloaithu="ngAdyNBuG_uKVf4Z4ITRZw"
                      data-idsub="fpKUm9gsUWe3IWdyRYefNQ"
                      data-idthu="N7Iw9eO3AmRjKdhOArYivw"
                      data-ma={420300242105}
                      data-mucnop={1980000}
                      data-noidungthu="Tieng Anh 2"
                      data-sotien={1980000}
                      data-trandate=""
                      data-transid=""
                      id="ckbThanhToan87809951"
                      name="ckbThanhToan87809951"
                      // onclick="sumKhoanNop()"
                      type="checkbox"
                      defaultValue="true"
                    />
                    <input
                      name="ckbThanhToan87809951"
                      type="hidden"
                      defaultValue="false"
                    />
                  </td>
                  <td
                  // onclick="chonKhoanThu('ckbThanhToan' + 87809951)"
                  >
                    2
                  </td>
                  <td
                  // onclick="chonKhoanThu('ckbThanhToan' + 87809951)"
                  >
                    420300242105
                  </td>
                  <td
                    className="text-left"
                    //   onclick="chonKhoanThu('ckbThanhToan' + 87809951)"
                  >
                    Tieng Anh 2
                  </td>
                  <td>3</td>
                  <td>
                    <div>
                      <div className="check" />
                    </div>
                  </td>
                  <td className="text-right">1.980.000</td>
                </tr>
                <tr>
                  <td className="text-center">
                    <input
                      defaultChecked
                      className="chkKTT"
                      data-allowcheck="True"
                      data-bankid=""
                      data-batbuoc="True"
                      data-dongiabgvat="False"
                      data-dot={57}
                      data-id={8785386}
                      data-idcongno=""
                      data-idcongnonoitru=""
                      data-iddangkyhocphan="U50i7LSciPDZ7fsmC-BLEQ"
                      data-iddangkythilai=""
                      data-iddangkythitotnghiep=""
                      data-iddukienthu=""
                      data-idkehoachthuchung=""
                      data-idloaithu="ngAdyNBuG_uKVf4Z4ITRZw"
                      data-idsub="fpKUm9gsUWe3IWdyRYefNQ"
                      data-idthu="U50i7LSciPDZ7fsmC-BLEQ"
                      data-ma={420300362101}
                      data-mucnop={3010000}
                      data-noidungthu="Lap trinh WWW (Java)"
                      data-sotien={3010000}
                      data-trandate=""
                      data-transid=""
                      id="ckbThanhToan87853861"
                      name="ckbThanhToan87853861"
                      // onclick="sumKhoanNop()"
                      type="checkbox"
                      defaultValue="true"
                    />
                    <input
                      name="ckbThanhToan87853861"
                      type="hidden"
                      defaultValue="false"
                    />
                  </td>
                  <td
                  //  onclick="chonKhoanThu('ckbThanhToan' + 87853861)"
                  >
                    3
                  </td>
                  <td
                  // onclick="chonKhoanThu('ckbThanhToan' + 87853861)"
                  >
                    420300362101
                  </td>
                  <td
                    className="text-left"
                    //   onclick="chonKhoanThu('ckbThanhToan' + 87853861)"
                  >
                    Lap trinh WWW (Java)
                  </td>
                  <td>4</td>
                  <td>
                    <div>
                      <div className="check" />
                    </div>
                  </td>
                  <td className="text-right">3.010.000</td>
                </tr>
                <tr>
                  <td colSpan={6} className="text-right">
                    <p className="bold">
                      <span lang="thanhtoanonline-tongthanhtoan">
                        Tổng thanh toán
                      </span>
                      :
                    </p>
                  </td>
                  <td className="text-right">
                    <p className="bold">
                      <span
                        id="balanceSum"
                        data-tongtien={5990000}
                        className="total"
                      >
                        5.990.000
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan={7} id="style-Z5Qzb" className="style-Z5Qzb">
                    <p>
                      1.{" "}
                      <span lang="thanhtoanonline-internetbanking-warning-atm-dkonline">
                        Để thanh toán trực tuyến qua ngân hàng{" "}
                        <strong id="style-Exqew" className="style-Exqew">
                          thẻ ATM
                        </strong>{" "}
                        phải đăng ký{" "}
                        <strong id="style-xlVV2" className="style-xlVV2">
                          Thanh toán online
                        </strong>
                        .
                      </span>
                    </p>
                    <p style={{ padding: "5px 0" }}>
                      2.{" "}
                      <span lang="thanhtoanonline-internetbanking-warning-hanmucthe">
                        Vui lòng kiểm tra
                        <strong id="style-TlSPy" className="style-TlSPy">
                          {" "}
                          HẠN MỨC THẺ{" "}
                        </strong>
                        trước khi thanh toán
                      </span>
                    </p>
                    <p>
                      3.{" "}
                      <span lang="thanhtoanonline-internetbanking-huongdan-thanhtoan">
                        Xem hướng dẫn thanh toán
                      </span>{" "}
                      <a
                        target="_blank"
                        style={{ color: "deepskyblue" }}
                        href="https://ascvn.com.vn/huong-dan-thao-tac-sinh-vien-thanh-toan-hoc-phi-online.html"
                      >
                        <span lang="cm-here">tại đây</span>
                      </a>
                    </p>
                    <p>
                      {" "}
                      4.{" "}
                      <span lang="thanhtoanonline-huygiaodich">
                        Để hủy giao dịch chờ gạch nợ, vui lòng bấm
                      </span>{" "}
                      <a
                        href="/phieu-thu.html"
                        style={{ color: "deepskyblue" }}
                      >
                        <span lang="cm-here">vào đây</span>
                      </a>
                      .{" "}
                    </p>
                    <div id="style-fQ2b3" className="style-fQ2b3">
                      <p>
                        5.{" "}
                        <span lang="thanhtoanonline-internetbanking-recommend-atm-noidia">
                          Khuyến cáo thanh toán qua các loại thẻ ATM nội địa,
                          QR-Code.
                        </span>
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={7}>
                    <div>
                      <div id="boxPhiDVThanhToanOnline" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={7} id="style-MgUbG" className="style-MgUbG">
                    <div className="col-md-4 style-lknVQ" id="style-lknVQ">
                      <span
                        lang="thanhtoanonline-chon-nganhang"
                        id="style-NOtZ4"
                        className="style-NOtZ4"
                      >
                        Chọn ngân hàng thanh toán
                      </span>
                    </div>
                    <div className="col-md-8 style-U2rmD" id="style-U2rmD">
                      <button
                        type="button"
                        //   onclick="checkShowPopupChonThongTinXuatHDDT(null, true)"
                        className="btn btn-success btn-qr-custom btn-bank-custom"
                      >
                        <span id="thanhtoanonline-checkout-qr-button">
                        <QrcodeOutlined />   Thanh toán QR-Code
                        </span>
                      </button>
                      <button
                        //   onclick="checkShowPopupChonThongTinXuatHDDT()"
                        className="btn btn--m block first btn-bank-custom btn-thanhtoan-disabled btn-atm-custom"
                        lang="thanhtoanonline-checkout-button"
                      >
                        THANH TOÁN
                      </button>
                    </div>
                  </td>
                </tr>
                <tr style={{ background: "#f9f9f9" }}>
                  <td colSpan={7}>
                    <div
                      className="main-list-bank style-ooPz7"
                      id="style-ooPz7"
                    >
                      <div className="content-list-bank">
                        <input
                          type="radio"
                          name="radBank"
                          className="radio-bank-cb"
                          data-isqrcode="False"
                          data-isatm="True"
                          data-manganhang="VIETCOMBANK"
                          defaultValue={2}
                          data-tgtt={1}
                          data-phidv={0}
                          data-phidvphantram="0,000"
                          data-messphidv=""
                        />
                        <div className="radio-bank-img">
                          <img
                            className="img-list-bank"
                            src="https://mobile2.ascvn.com.vn/Logo/Banks2/vietcombank.png"
                            alt="VietcomBank"
                          />
                        </div>
                      </div>
                      <div className="content-list-bank">
                        <input
                          type="radio"
                          name="radBank"
                          className="radio-bank-cb"
                          data-isqrcode="False"
                          data-isatm="True"
                          data-manganhang="VNPAY"
                          defaultValue={999}
                          data-tgtt={1}
                          data-phidv={0}
                          data-phidvphantram="0,000"
                          data-messphidv=""
                        />
                        <div className="radio-bank-img">
                          <img
                            className="img-list-bank"
                            src="https://mobile2.ascvn.com.vn/Logo/Banks2/vietinbank.png"
                            alt="VNPAY"
                          />
                        </div>
                      </div>
                      <div className="content-list-bank">
                        <input
                          type="radio"
                          name="radBank"
                          className="radio-bank-cb"
                          data-isqrcode="True"
                          data-isatm="False"
                          data-manganhang="VIETINBANK"
                          defaultValue={1}
                          data-tgtt={2}
                          data-phidv={0}
                          data-phidvphantram="0,000"
                          data-messphidv=""
                        />
                        <div className="radio-bank-img">
                          <img
                            className="img-list-bank"
                            src="https://mobile2.ascvn.com.vn/Logo/Banks2/vietinbank_qr.png"
                            alt="VIETINBANK"
                          />
                        </div>
                      </div>
                      <div className="content-list-bank">
                        <input
                          type="radio"
                          name="radBank"
                          className="radio-bank-cb"
                          data-isqrcode="False"
                          data-isatm="True"
                          data-manganhang="NAMABANK"
                          defaultValue={7}
                          data-tgtt={2}
                          data-phidv={0}
                          data-phidvphantram="0,000"
                          data-messphidv=""
                        />
                        <div className="radio-bank-img">
                          <img
                            className="img-list-bank"
                            src="https://mobile2.ascvn.com.vn/Logo/Banks2/namabank.png"
                            alt="NAMABANK"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div id="boxQRCodeThanhToan"></div>
      </div>
    </div>
  );
};
export default OnlinePayments;
