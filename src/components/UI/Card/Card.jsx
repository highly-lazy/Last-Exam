import { useState } from "react";
import "./style.scss";
import { Modal,Input, Form } from "antd";
import React from "react";



const Card = ({ state: { title, image, description } }) => {
const MyFormItemContext = React.createContext([]);
  
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
    <div className="card">
      <div className="card-header">
        <img
          src={image}
          alt="Image"
          className=" rounded-t-[20px] object-contain w-full"
        />
      </div>

      <div className="about__card">
        <div className="title__card--about">
          <p>5,957 Students</p>
          <p>01h 49m</p>
        </div>
        <h1>{description.split(" ").slice(0, 2).join(" ")}</h1>

        <div className="card__price">
          <p>$1999.99</p>
          <button onClick={() => showModal()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <path
                d="M22.75 4.33336H2.16663V6.50003H4.65829L8.21163 16.25C8.43513 16.8822 8.8487 17.4298 9.39564 17.8177C9.94258 18.2056 10.5961 18.4148 11.2666 18.4167H20.5833V16.25H11.2666C11.044 16.2499 10.8268 16.1812 10.6446 16.0533C10.4624 15.9254 10.324 15.7444 10.2483 15.535L9.74996 14.0834H19.8033C20.2735 14.0827 20.7307 13.9291 21.1059 13.6457C21.4811 13.3623 21.754 12.9646 21.8833 12.5125L23.8333 5.7092C23.8773 5.56694 23.8916 5.41712 23.8751 5.26912C23.8586 5.12111 23.8118 4.97809 23.7376 4.84898C23.6634 4.71987 23.5634 4.60744 23.4438 4.51873C23.3242 4.43001 23.1875 4.36691 23.0425 4.33336C22.9456 4.31759 22.8468 4.31759 22.75 4.33336ZM19.7708 11.9167H8.93746L6.96579 6.50003H21.3091L19.7708 11.9167Z"
                fill="#5E6775"
              />
              <path
                d="M11.375 22.75C12.2725 22.75 13 22.0225 13 21.125C13 20.2275 12.2725 19.5 11.375 19.5C10.4775 19.5 9.75 20.2275 9.75 21.125C9.75 22.0225 10.4775 22.75 11.375 22.75Z"
                fill="#5E6775"
              />
              <path
                d="M17.875 22.75C18.7725 22.75 19.5 22.0225 19.5 21.125C19.5 20.2275 18.7725 19.5 17.875 19.5C16.9775 19.5 16.25 20.2275 16.25 21.125C16.25 22.0225 16.9775 22.75 17.875 22.75Z"
                fill="#5E6775"
              />
            </svg>
          </button>
        </div>
      </div>

      <Modal
        open={isModalOpen}
        cancelText="Bekor qilish"
        onCancel={handleCancel}
        onOk={handleOk}
        okText="Jo'natish"
      >
        <div className="modal_top">
          <span>Kurslar</span>
        </div>
        <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
          <MyFormItemGroup prefix={["user"]}>
            <MyFormItemGroup prefix={["name"]}>
              <MyFormItem name="firstName" label="Enter your name">
                <Input placeholder="Your name" required />
              </MyFormItem>
              <MyFormItem name="pnone_number" label="Phone number">
                <Input placeholder="+998..." />
              </MyFormItem>
            </MyFormItemGroup>
          </MyFormItemGroup>
        </Form>
      </Modal>
    </div>
  );
};

export default Card;
