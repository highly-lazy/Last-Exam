import React, { useState, useEffect } from "react";
import { Breadcrumb, Table, Modal, Select } from "antd";
import { Link } from "react-router-dom";
import "./style.scss";
import studentApi from "../../service/students";

const index = () => {
  const [stdData, setStdData] = useState([])
  const handleChange = (value) => {
    console.log(value);
  };

  const data = stdData.map((item) => {
    const data = {
      fish: item.fullName,
      telefon: item.phoneNumber,
      kurs: item.courseId.title,
      register: item.createdAt,
    }
    return data
  })


  const columns = [
    {
      title: "#",
      dataIndex: "number",
      key: "number",
    },
    {
      title: "F.I.Sh",
      dataIndex: "fish",
      key: "fish",
    },
    {
      title: "Telefon",
      dataIndex: "telefon",
      key: "telefon",
    },
    {
      title: "Kurs",
      dataIndex: "kurs",
      key: "kurs",
    },
    {
      title: "Ro'yxatdan o'tgan vaqt",
      dataIndex: "register",
      key: "register",
    },
    {
      title: "Holat",
      dataIndex: "holat",
      key: "x",
      render: () => <a>Active</a>,
    },
    {
      title: "Tahrirlash",
      dataIndex: "",
      key: "x",
      render: () => <a className="edit" onClick={showModal}>Edit</a>,
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    studentApi.getAllStudent().then((res) => {
      console.log(res.data);
      setStdData(res.data.students);
    }).catch((err) => {
      console.log(err);
    })
  }, [])


  return (
    <div className="std">
      <div className="main__up">
        <Breadcrumb
          items={[
            {
              title: (
                <Link to="/dashboard" className="text-[#000]  ">
                  Bosh sahifa
                </Link>
              ),
            },
            {
              title: (
                <Link to="/dashboard/oquvchilar" className="text-[#000] ">
                  O'quvchilar
                </Link>
              ),
            },
          ]}
        />
      </div>

      <div className="table">
        <Table columns={columns} dataSource={data} />
      </div>

      <Modal
        title="O'quvchi Statusini o'zgartirish"
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <h1 className="text-[#323a85] text-[24px] font-semibold my-5 border-t-[1px] border-[#0000001c]">
          Holatni tanlang
        </h1>

        <Select
          labelInValue
          defaultValue={{
            value: "tanlang",
            label: "Tanlang",
          }}
          style={{
            width: "100%",
          }}
          onChange={handleChange}
          options={[
            {
              value: "o'qiydi",
              label: "O'qiydi",
            },
            {
              value: "o'qimaydi",
              label: "O'qimaydi",
            },
          ]}
        />
        <button className="p-2 text-[32px] rounded-md" onClick={() => handleOk()}>
          <i className="bx bxs-save text-[#286b28]"></i>
        </button>
      </Modal>
    </div>
  );
};

export default index;