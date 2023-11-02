import React, { useState } from "react";
import { Breadcrumb, Space, Table, Tag, Modal, Select } from "antd";
import { Link } from "react-router-dom";
import "./style.scss";

// const columns = [
//   {
//     title: "#",
//     dataIndex: "number",
//     key: "number",
//   },
//   {
//     title: "F.I.Sh",
//     dataIndex: "fish",
//     key: "fish",
//   },
//   {
//     title: "Telefon",
//     dataIndex: "telefon",
//     key: "telefon",
//   },
//   {
//     title: "Kurs",
//     dataIndex: "kurs",
//     key: "kurs",
//   },
//   {
//     title: "Ro'yxatdan o'tgan vaqt",
//     dataIndex: "register",
//     key: "register",
//   },
//   {
//     title: "Holat",
//     dataIndex: "holat",
//     key: "x",
//     render: () => <a>Active</a>,
//   },
//   {
//     title: "Tahrirlash",
//     dataIndex: "",
//     key: "x",
//     render: () => <a onClick={showModal}>Edit</a>,
//   },
// ];

const handleChange = (value) => {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
};
const data = [
  {
    key: 1,
    number: 1,
    fish: "Thomas Müller",
    telefon: "+998999999999",
    kurs: "Bootcamp Foundation",
    register: "01.11.2023",
  },
  {
    key: 2,
    number: 2,
    fish: "Thibaut Courtois",
    telefon: "+998888888888",
    kurs: "Bootcamp Full Stack",
    register: "01.11.2023",
  },
  {
    key: 3,
    number: 3,
    fish: "Cristiano Ronaldo",
    telefon: "+998777777777",
    kurs: "React Standart",
    register: "01.11.2023",
  },
  {
    key: 4,
    number: 4,
    fish: "Tohir Abiy",
    telefon: "+998993086639",
    kurs: "Stand Up Show",
    register: "17.04.2023",
  },
  {
    key: 5,
    number: 5,
    fish: "Abdunazarov Abdunazar",
    telefon: "+998993086639",
    kurs: "Bootcamp Frontend Online",
    register: "17.04.2023",
  },
];

const index = () => {
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
