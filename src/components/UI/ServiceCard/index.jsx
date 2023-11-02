import React, { useState } from 'react';
import { Form, Input, Select, Modal,} from "antd";
import './style.scss';
const MyFormItemContext = React.createContext([]);


const ServicesCard = ({ state: { title, description, image, createdAt, users } }) => {
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

  const onFinish = (value) => {
    console.log(value);
  };
  function toArr(str) {
    return Array.isArray(str) ? str : [str];
  }
  const MyFormItemGroup = ({ prefix, children }) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatPath = React.useMemo(
      () => [...prefixPath, ...toArr(prefix)],
      [prefixPath, prefix]
    );
    return (
      <MyFormItemContext.Provider value={concatPath}>
        {children}
      </MyFormItemContext.Provider>
    );
  };
  const MyFormItem = ({ name, ...props }) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatName =
      name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
    return <Form.Item name={concatName} {...props} />;
  };

  const onChange = (value) => {
    // console.log(selected ${value});
  };
  const onSearch = (value) => {
    // console.log('search:', value);
  };

  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
    return (
      <div className="service_card shadow-md hover:shadow-xl duration-300">
        <div className="service_card-header">
          <img src={`https://api.webhub.uz${image}`} alt="Service Card image" />
        </div>

        <div className="service_card_body">
          <div className="service_card_body-top">
            <p className="students">{users.length} Students</p>
            <p className="time">{createdAt}</p>
          </div>

          <h4 title={description}>
            {description.length > 50
              ? String(description).slice(0, 50) + "..."
              : description}
          </h4>

          <div className="service_card_body-bottom">
            <p className="price">$1999.99</p>
            <i className="bx bx-cart-alt" onClick={() => showModal()}></i>
          </div>
        </div>
        <Modal
          open={isModalOpen}
          cancelText="Cancel"
          onCancel={handleCancel}
          okText="Send"
          onOk={handleOk}
        >
          <div className="modal_top">
            <span>Services</span>
          </div>
          <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
            <MyFormItemGroup prefix={["user"]}>
              <MyFormItemGroup prefix={["name"]}>
                <MyFormItem
                  name="firstName"
                  label="Please enter your name and surname"
                >
                  <Input placeholder="Your name" required />
                </MyFormItem>
                <MyFormItem name="pnone_number" label="Phone number">
                  <Input placeholder="+998..." />
                </MyFormItem>
                <MyFormItem name="type" label="Choose service">
                  <Select
                    showSearch
                    placeholder="Select..."
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={filterOption}
                    options={[
                      {
                        value: "service1",
                        label: "Create web site",
                      },
                      {
                        value: "service2",
                        label: "Create mobile app",
                      },
                    ]}
                  />
                </MyFormItem>
              </MyFormItemGroup>
            </MyFormItemGroup>
          </Form>
        </Modal>
      </div>
    );
}

export default ServicesCard