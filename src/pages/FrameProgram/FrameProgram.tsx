/* eslint-disable react-hooks/rules-of-hooks */
// Chương trình khung
import React, { useEffect, useState, useRef } from "react";
import "./index.css";
import { PrinterOutlined, SlidersOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

function frameProgram() {
  //data
  const dataChuongTrinhKhung = [
    {
      name: "Học kỳ 1",
      soTC: 11,
      soTCBB: 11,
      soTCTC: 0,
      hocPhanBatBuoc: [
        {
          id: 1,
          name: "Nhập môn Tin học",
          maHP: "4203002009",
          soTC: 2,
          soTietLT: 30,
          soTietTH: 0,
          nhomTuChon: 0,
          soTCNhom: 0,
          pass: true,
          tinhTTTL: true,
          tienQuyet: [
            {
              id: 1,
              name: "Nhập môn Tin học",
              maHP: "4203002009",
              loaiTQ: "a",
            },
            {
              id: 2,
              name: "Chứng chỉ TOEIC 450",
              maHP: "4203002027",
              loaiTQ: "b",
            },
            {
              id: 3,
              name: "Kỹ năng làm việc nhóm",
              maHP: "4203003192",
              loaiTQ: "c",
            },
          ],
        },
        {
          id: 2,
          name: "Chứng chỉ TOEIC 450",
          maHP: "4203002027",
          soTC: 0,
          soTietLT: 0,
          soTietTH: 0,
          nhomTuChon: 0,
          soTCNhom: 0,
          pass: false,
        },
      ],
      hocPhanTuChon: [],
    },
    {
      name: "Học kì 2",
      soTC: 15,
      soTCBB: 11,
      soTCTC: 4,
      hocPhanBatBuoc: [
        {
          id: 1,
          name: "Nhập môn Tin học",
          maHP: "4203002009",
          soTC: 2,
          soTietLT: 30,
          soTietTH: 0,
          nhomTuChon: 0,
          soTCNhom: 0,
          pass: true,
          tinhTTTL: true,
          tienQuyet: [
            {
              id: 1,
              name: "Nhập môn Tin học",
              maHP: "4203002009",
              loaiTQ: "a",
            },
            {
              id: 2,
              name: "Chứng chỉ TOEIC 450",
              maHP: "4203002027",
              loaiTQ: "b",
            },
            {
              id: 3,
              name: "Kỹ năng làm việc nhóm",
              maHP: "4203003192",
              loaiTQ: "c",
            },
          ],
        },
        {
          id: 2,
          name: "Chứng chỉ TOEIC 450",
          maHP: "4203002027",
          soTC: 0,
          soTietLT: 0,
          soTietTH: 0,
          nhomTuChon: 0,
          soTCNhom: 0,
          pass: false,
          tinhTTTL: false,
        },
        {
          id: 3,
          name: "Kỹ năng làm việc nhóm",
          maHP: "4203003192",
          soTC: 2,
          soTietLT: 30,
          soTietTH: 0,
          nhomTuChon: 0,
          soTCNhom: 0,
          pass: true,
        },
        {
          id: 4,
          name: "Giáo dục Quốc phòng và An ninh 1",
          maHP: "4203003242",
          soTC: 4,
          soTietLT: 60,
          soTietTH: 0,
          nhomTuChon: 0,
          soTCNhom: 0,
          pass: true,
        },
        {
          id: 5,
          name: "Toán cao cấp 1",
          maHP: "4203003259",
          soTC: 2,
          soTietLT: 30,
          soTietTH: 0,
          nhomTuChon: 0,
          soTCNhom: 0,
          pass: true,
        },
        {
          id: 6,
          name: "Giáo dục thể chất 1",
          maHP: "4203003307",
          soTC: 2,
          soTietLT: 0,
          soTietTH: 60,
          nhomTuChon: 0,
          soTCNhom: 0,
          pass: true,
        },
      ],
      hocPhanTuChon: [
        {
          id: 1,
          name: "Nhập môn Tin học",
          maHP: "4203002009",
          soTC: 2,
          soTietLT: 30,
          soTietTH: 0,
          nhomTuChon: 0,
          soTCNhom: 0,
          pass: true,
          tinhTTTL: true,
          tienQuyet: [
            {
              id: 1,
              name: "Nhập môn Tin học",
              maHP: "4203002009",
              loaiTQ: "a",
            },
          ],
        },
      ],
    },
  ];

  // Ý tưởng là tạo ra mảng lưu các index(học kì) sẽ hiển thị.
  // Muốn ẩn học kì nào thì mình xoá học kì đó
  // Muốn hiển thị học kì nào thì mình add index học kì đó
  const [isDisplay, setIsDisplay] = useState<number[]>([]);

  //function
  function controllCollapse(index: number) {
    setIsDisplay((prevState) => {
      if (prevState.includes(index)) {
        return prevState.filter((item) => item !== index);
      } else {
        return [...prevState, index];
      }
    });
    console.log(isDisplay);
  }

  function controllCollapseAll() {
    if (isDisplay.length === dataChuongTrinhKhung.length) {
      setIsDisplay([]);
    } else {
      setIsDisplay(dataChuongTrinhKhung.map((_, index) => index));
    }
  }

  // tinhTong
  const tinhTongTCYC = (ds: any) => {
    return ds.reduce((tong: any, ki: any) => tong + ki.soTC, 0);
  };

  const tinhTongTCBB = (ds: any) => {
    return ds.reduce((tong: any, ki: any) => tong + ki.soTCBB, 0);
  };

  const tinhTongTCTC = (ds: any) => {
    return ds.reduce((tong: any, ki: any) => tong + ki.soTCTC, 0);
  };

  //html
  return (
    <div>
      <div className="portlet">
        <div className="portlet-title">
          <div className="caption">
            <span className="caption-subject bold" lang="ctk-pagetitle">
              Chương trình khung
            </span>
          </div>
          <div className="actions">
            <a className="btn btn-action" itemID="ctk-btnIn">
              <PrinterOutlined /> In
            </a>
            <a className="btn btn-action" onClick={controllCollapseAll}>
              <SlidersOutlined />
            </a>
          </div>
        </div>
        <div className="portlet-body">
          <div className="table-responsive">
            <table
              className="table-custom table table-bordered text-center no-footer dtr-inline"
              width="100%"
              role="grid"
            >
              <thead>
                <tr role="row">
                  <th>STT</th>
                  <th style={{ width: "450px" }}> Tên môn học/Học phần </th>
                  <th>Mã Học phần</th>
                  <th>
                    <Tooltip title="Học phần: học trước (a), tiên quyết (b), song hành (c)">
                      <p style={{ color: "#1da1f3" }}>Học phần</p>
                    </Tooltip>
                  </th>
                  <th>Số TC</th>
                  <th>Số tiết LT</th>
                  <th>Số tiết TH</th>
                  <th>
                    Nhóm <br /> tự chọn
                  </th>
                  <th>
                    Số TC bắt buộc <br /> của nhóm
                  </th>
                  <th>Đạt</th>
                </tr>
              </thead>
              {/* ===================================================================================================================== */}
              {/* ===================================================================================================================== */}
              {/* ===================================================================================================================== */}
              {/* tbody */}
              {dataChuongTrinhKhung.map((item, index) => {
                return (
                  <tbody key={index}>
                    <tr
                      role="row"
                      className="row-head "
                      data-toggle="collapse"
                      data-target=".tr-row-1"
                      onClick={() => controllCollapse(index)}
                    >
                      <td colSpan={4} className="text-center">
                        Học kỳ {index + 1}
                      </td>
                      <td className="text-center">
                        <span className="">{item.soTC}</span>
                      </td>
                      <td colSpan={5} />
                    </tr>
                    {/* Bắt buộc */}
                    <tr
                      role="row"
                      className={`row-head tr-row-1 ${
                        isDisplay.includes(index) ? " " : "collapse"
                      }`}
                    >
                      <td colSpan={4} className="text-left bold">
                        <div
                          className={`tr-row-1 ${
                            isDisplay.includes(index) ? " " : "collapse"
                          }`}
                          lang="ctk-hpbatbuoc"
                        >
                          Học phần bắt buộc
                        </div>
                      </td>
                      <td className="text-center">
                        <span
                          className={`tr-row-1 ${
                            isDisplay.includes(index) ? " " : "collapse"
                          }`}
                        >
                          {item.soTCBB}
                        </span>
                      </td>
                      <td colSpan={5} />
                    </tr>
                    {item.hocPhanBatBuoc &&
                      item.hocPhanBatBuoc.map((monHoc) => {
                        return (
                          <tr
                            key={index}
                            role="row"
                            className={`tr-row-1 ${
                              isDisplay.includes(index) ? " " : "collapse "
                            }`}
                            style={
                              monHoc.pass
                                ? { background: "#DDE3E9" }
                                : { background: "#FDF7C8" }
                            }
                          >
                            <td>
                              <div
                                className={`tr-row-1  ${
                                  isDisplay.includes(index) ? " " : "collapse"
                                }`}
                              >
                                {monHoc.id}
                              </div>
                            </td>
                            <td className="text-left">
                              <div
                                className={`tr-row-1  ${
                                  isDisplay.includes(index) ? " " : "collapse"
                                }`}
                              >
                                {monHoc.name}
                                {monHoc.tinhTTTL ? (
                                  <span style={{ color: "red" }}>*</span>
                                ) : (
                                  ""
                                )}
                              </div>
                            </td>
                            <td>
                              <div
                                className={`tr-row-1  ${
                                  isDisplay.includes(index) ? " " : "collapse"
                                }`}
                              >
                                {monHoc.maHP}
                              </div>
                            </td>
                            <td>
                              <div
                                className={`tr-row-1  ${
                                  isDisplay.includes(index) ? " " : "collapse"
                                }`}
                              >
                                {monHoc.tienQuyet &&
                                  monHoc.tienQuyet.map((tq) => (
                                    <Tooltip title={tq.name}>
                                      {tq.maHP}
                                      <span style={{ color: "red" }}>
                                        {" "}
                                        ({tq.loaiTQ}){" "}
                                      </span>
                                      <br></br>
                                    </Tooltip>
                                  ))}
                              </div>
                            </td>
                            <td>
                              <div
                                className={`tr-row-1  ${
                                  isDisplay.includes(index) ? " " : "collapse"
                                }`}
                              >
                                {monHoc.soTC}
                              </div>
                            </td>
                            <td>
                              <div
                                className={`tr-row-1  ${
                                  isDisplay.includes(index) ? " " : "collapse"
                                }`}
                              >
                                {monHoc.soTietLT}
                              </div>
                            </td>
                            <td>
                              <div
                                className={`tr-row-1  ${
                                  isDisplay.includes(index) ? " " : "collapse"
                                }`}
                              >
                                {monHoc.soTietTH}
                              </div>
                            </td>
                            <td>
                              <div
                                className={`tr-row-1  ${
                                  isDisplay.includes(index) ? " " : "collapse"
                                }`}
                              >
                                {monHoc.nhomTuChon}
                              </div>
                            </td>
                            <td>
                              <div
                                className={`tr-row-1  ${
                                  isDisplay.includes(index) ? " " : "collapse"
                                }`}
                              >
                                {monHoc.soTCNhom}
                              </div>
                            </td>
                            <td>
                              <div
                                className={`tr-row-1  ${
                                  isDisplay.includes(index) ? " " : "collapse"
                                }`}
                              >
                                <div
                                  className={monHoc.pass ? "check" : "no-check"}
                                />
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    {/* Tự chọn */}

                    {item.soTCTC == 0 ? (
                      " "
                    ) : (
                      <>
                        <tr
                          role="row"
                          className={`row-head tr-row-1 ${
                            isDisplay.includes(index) ? "" : "collapse"
                          }`}
                        >
                          <td colSpan={4} className="text-left bold">
                            <div
                              className={`tr-row-1 ${
                                isDisplay.includes(index) ? "" : "collapse"
                              }`}
                              lang="ctk-hpbatbuoc"
                            >
                              Học phần tự chọn
                            </div>
                          </td>
                          <td className="text-center">
                            <span
                              className={`tr-row-1 ${
                                isDisplay.includes(index) ? "" : "collapse"
                              }`}
                            >
                              {item.soTCTC}
                            </span>
                          </td>
                          <td colSpan={5} />
                        </tr>
                        {item.hocPhanTuChon &&
                          item.hocPhanTuChon.map((monHoc, subIndex) => (
                            <tr
                              key={subIndex}
                              role="row"
                              className={`tr-row-1 ${
                                isDisplay.includes(index) ? "" : "collapse"
                              }`}
                              style={
                                monHoc.pass
                                  ? { background: "#DDE3E9" }
                                  : { background: "#FDF7C8" }
                              }
                            >
                              <td>
                                <div
                                  className={`tr-row-1 ${
                                    isDisplay.includes(index) ? "" : "collapse"
                                  }`}
                                >
                                  {monHoc.id}
                                </div>
                              </td>
                              <td className="text-left">
                                <div
                                  className={`tr-row-1 ${
                                    isDisplay.includes(index) ? "" : "collapse"
                                  }`}
                                >
                                  {monHoc.name}
                                  {monHoc.tinhTTTL ? (
                                    <span style={{ color: "red" }}>*</span>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              </td>
                              <td>
                                <div
                                  className={`tr-row-1 ${
                                    isDisplay.includes(index) ? "" : "collapse"
                                  }`}
                                >
                                  {monHoc.maHP}
                                </div>
                              </td>
                              <td>
                                <div
                                  className={`tr-row-1 ${
                                    isDisplay.includes(index) ? "" : "collapse"
                                  }`}
                                >
                                  {monHoc.tienQuyet &&
                                    monHoc.tienQuyet.map((tq) => (
                                      <Tooltip title={tq.name}>
                                        {tq.maHP}
                                        <span style={{ color: "red" }}>
                                          {" "}
                                          ({tq.loaiTQ}){" "}
                                        </span>
                                        <br></br>
                                      </Tooltip>
                                    ))}
                                </div>
                              </td>
                              <td>
                                <div
                                  className={`tr-row-1 ${
                                    isDisplay.includes(index) ? "" : "collapse"
                                  }`}
                                >
                                  {monHoc.soTC}
                                </div>
                              </td>
                              <td>
                                <div
                                  className={`tr-row-1 ${
                                    isDisplay.includes(index) ? "" : "collapse"
                                  }`}
                                >
                                  {monHoc.soTietLT}
                                </div>
                              </td>
                              <td>
                                <div
                                  className={`tr-row-1 ${
                                    isDisplay.includes(index) ? "" : "collapse"
                                  }`}
                                >
                                  {monHoc.soTietTH}
                                </div>
                              </td>
                              <td>
                                <div
                                  className={`tr-row-1 ${
                                    isDisplay.includes(index) ? "" : "collapse"
                                  }`}
                                >
                                  {monHoc.nhomTuChon}
                                </div>
                              </td>
                              <td>
                                <div
                                  className={`tr-row-1 ${
                                    isDisplay.includes(index) ? "" : "collapse"
                                  }`}
                                >
                                  {monHoc.soTCNhom}
                                </div>
                              </td>
                              <td>
                                <div
                                  className={`tr-row-1 ${
                                    isDisplay.includes(index) ? "" : "collapse"
                                  }`}
                                >
                                  <div
                                    className={
                                      monHoc.pass ? "check" : "no-check"
                                    }
                                  />
                                </div>
                              </td>
                            </tr>
                          ))}
                      </>
                    )}

                    <tr>
                      <td style={{ backgroundColor: "white" }} colSpan={10} />
                    </tr>
                  </tbody>
                );
              })}

              {/* ===================================================================================================================== */}
              {/* ===================================================================================================================== */}
              {/* ===================================================================================================================== */}
              <tbody>
                <tr role="row" className="row-head">
                  <td colSpan={4} className="text-left" lang="ctk-tongtcyc">
                    Tổng TC yêu cầu
                  </td>
                  <td>
                    <span className="cl-red text-center">
                      {tinhTongTCYC(dataChuongTrinhKhung)}
                    </span>
                  </td>
                  <td colSpan={5} />
                </tr>

                <tr role="row" className="row-head">
                  <td colSpan={4} className="text-left" lang="ctk-tongtcbb">
                    Tổng TC bắt buộc
                  </td>
                  <td>
                    <span className="cl-red text-center">
                      {tinhTongTCBB(dataChuongTrinhKhung)}
                    </span>
                  </td>
                  <td colSpan={5} />
                </tr>
                <tr role="row" className="row-head">
                  <td colSpan={4} className="text-left" lang="ctk-tongtctc">
                    Tổng TC tự chọn
                  </td>
                  <td>
                    <span className="cl-red text-center">
                      {tinhTongTCTC(dataChuongTrinhKhung)}
                    </span>
                  </td>
                  <td colSpan={5} />
                </tr>
              </tbody>
            </table>
            {/* ===================================================================================================================== */}
            {/* ===================================================================================================================== */}
            {/* ===================================================================================================================== */}
            <div className="tableGC table-custom">
              <p style={{ margin: "20px 0" }} lang="ctk-warningGhiChu">
                <i>
                  Ghi chú: Những môn học/Học phần có dấu{" "}
                  <span id="style-HeF38" className="style-HeF38">
                    *
                  </span>{" "}
                  không được tính vào Trung bình chung tích lũy
                </i>
              </p>
              <ul>
                <li>
                  <span className="colorSTLichHoc" />
                  <p style={{ display: "inline-block" }} lang="ctk-mondanghoc">
                    Môn học/Học phần đã (hoặc đang) học
                  </p>
                </li>
                <li>
                  <span style={{ background: "#FDF7C8" }} />
                  <p
                    style={{ display: "inline-block" }}
                    lang="ctk-hocphan-chuadangky"
                  >
                    Môn học sinh viên chưa đăng ký học tập
                  </p>
                </li>
                <li>
                  <span className="check no-border" />
                  <label lang="ctk-pass">Đạt</label>&nbsp;
                </li>
                <li>
                  <span className="no-check" />
                  <label lang="ctk-fail">Không đạt</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default frameProgram;
