// import { useEffect } from "react";
import { useAppSelector } from "../../../app/hooks";
import { GetDemo } from "../../../app/reducers/quan-ly/chuc-nang-1/man-1-demo.reducer";
import { Button, Space, Table, Tooltip } from "antd";
import {
    PlusOutlined,
    SearchOutlined,
    EditOutlined,
    DeleteOutlined,
    FormOutlined
  } from '@ant-design/icons';
import ModalDemo from "./modal";
import { useState } from "react";

export default function Contact() {

    const [showModal, setShowModal] = useState(false);

    const data = useAppSelector(GetDemo);

    const columns = [
        {
          title: 'Mã',
          dataIndex: 'ma',
          key: 'ma',
          render: (text) => <span>{text}</span>,
        },
        {
          title: 'Tên',
          dataIndex: 'ten',
          key: 'ten',
        },
        {
          title: 'Tuổi',
          dataIndex: 'tuoi',
          key: 'tuoi',
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
                <Tooltip title="Update demo">
                    <Button type="primary" className="bg-green-400 text-white hover:bg-green-300" ><EditOutlined /></Button>
                </Tooltip>
                <Tooltip title="Delete demo">
                    <Button type="primary" className="bg-green-400 text-white hover:bg-green-300" ><DeleteOutlined /></Button>
                </Tooltip>
                <Tooltip title="Detail demo">
                    <Button type="primary" className="bg-green-400 text-white hover:bg-green-300" ><FormOutlined /></Button>
                </Tooltip>
            </Space>
          ),
        },
      ];

    return (
      <>
      {showModal && (
        <ModalDemo modalOpen={showModal} setModalOpen={setShowModal} />
      )}
        <div className="p-10 bg-white rounded-xl mt-5 shadow-md shadow-indigo-500/40 hover:shadow-indigo-500/50 ease-in-out" >
            <div className="flex justify-between h-20">
                <div className="leading-10">
                    <h1 className="text-2xl font-black">Table Demo</h1>
                </div>
                <div className="leading-10">
                    <div>
                        <span>
                            <Tooltip title="Add demo">
                                <Button type="primary" className="bg-green-400 text-white hover:bg-green-300"
                                    onClick={() => {
                                    setShowModal(true);
                                  }}
                                ><PlusOutlined /></Button>
                            </Tooltip>
                        </span>
                        <span>
                            <Tooltip title="Search demo">
                                <Button type="primary" className="bg-orange-500 text-white hover:bg-orange-300" ><SearchOutlined /></Button>
                            </Tooltip>
                        </span>
                    </div>
                </div>
            </div>
            <Table columns={columns} dataSource={data} rowKey="id" />
        </div>
      </>
    );
  }