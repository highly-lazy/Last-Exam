import React, { useState } from 'react';
import { Modal } from 'antd';
import './style.scss';

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
    return (
        <div className='service_card shadow-md hover:shadow-xl duration-300'>
            <div className='service_card-header'>
                <img src ={`https://api.webhub.uz${image}`} alt="Service Card image" />
            </div>

            <div className='service_card_body'>
                <div className='service_card_body-top'>
                    <p className='students'>{users.length} Students</p>
                    <p className='time'>{createdAt}</p>
                </div>

                <h4 title={description}>
                    {description.length > 50 ? String(description).slice(0, 50) + '...' : description}
                </h4>

                <div className='service_card_body-bottom'>
                    <p className='price'>$1999.99</p>
                    <i className='bx bx-cart-alt' onClick={() => showModal()}></i>
                </div>
            </div>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div >
    )
}

export default ServicesCard