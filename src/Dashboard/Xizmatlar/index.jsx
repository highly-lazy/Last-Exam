import React, { useEffect, useState } from 'react';
import { Space, Table, Breadcrumb, Modal, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import serviceApi from '../../service/services/index';
import './style.scss';

const { TextArea } = Input;

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [srData, setSrData] = useState([
    {
      id: "",
      name: "",
      count: "",
      time: "",
    },
  ]);

  useEffect(() => {
    serviceApi.getAll()
      .then((res) => {
        res.data.services.forEach((object) => {
          setSrData((prevData) => [
            ...prevData,
            {
              id: object._id,
              name: object.title,
              count: object.users.length,
              time: object.createdAt,
            },
          ]);
        });
      }).catch((err) => {
        console.log(err)
      });
  }, []);


  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [order, setOrder] = useState("");
  const [about, setAbout] = useState("");
  const [name, setName] = useState("");
  const [imageLink, setimageLink] = useState("");
  const [editModalVisible, setEditModalVisible] = useState(false);


  const columns = [
    {
      title: "#",
      dataIndex: "order",
      key: "order",
    },
    {
      title: 'Kurs id',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Kurs nomi',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Buyurtmachilar soni',
      dataIndex: 'count',
      key: 'count',
    },
    {
      title: 'Yaratilgan vaqt',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Tahrirlash',
      key: 'tags',
      dataIndex: 'tags',
      render: () => (
        <>
          <i onClick={() => showModal()} className='bx bxs-edit text-white text-2xl bg-yellow-400 px-1 rounded-md cursor-pointer'></i>
        </>
      ),
    },
  ];


  return (
    <div className='main'>
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
                <Link to="/dashboard/xizmatlar" className="text-[#000] ">
                  Xizmatlar
                </Link>
              ),
            },
          ]}
        />
      </div>
      <div className="table">
        <Table columns={columns} dataSource={srData} />
      </div>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Space direction="vertical" style={{ marginBottom: 16, width: "100%" }}>
          <Input
            placeholder="Tartib raqami"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          />

          <Input
            placeholder="Kurs nomi"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextArea
            rows={4}
            value={about}
            placeholder="Kurs haqida"
            onChange={(e) => setAbout(e.target.value)}
          />
          <Input
            placeholder="Rasm linki"
            value={imageLink}
            onChange={(e) => setimageLink(e.target.value)}
          />
          <Button>Add</Button>
        </Space>
      </Modal>
    </div>
  )
};
export default App;