import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { Button, Pagination, Space, Table, Tooltip } from "antd";
import {
    PlusOutlined,
    SearchOutlined,
    EditOutlined,
    FormOutlined
  } from '@ant-design/icons';
import { CategoryAPI } from "../../../apis/quan-ly/category/category.api";
import { GetCategory, SetCategory } from "../../../app/reducers/category/category.reducer";
import { useEffect, useState } from "react";
import DeleteConfirm from "./Popconfirm";
import ModalThem from "./ModalThem";

export default function QuanLyCategory () {
  
  const [showModal, setShowModal] = useState(false);
  const [detailCategory, setDetailCategory] = useState()
  const dispatch = useAppDispatch();
  const [current, setCurrent] = useState(1);
  const [search, setSearch] = useState("");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    CategoryAPI.fetchAll().then((response) => {
      console.log(response.data.data);
      dispatch(SetCategory(response.data.data.data))
      setTotal(response.data.data.totalPages)
    });
  }, [dispatch])

  useEffect(() => {
    fetchData(); 
  }, [current], [search]); 
  
  const fetchData = () => { 
    CategoryAPI.fetchAll({
      name: search,
      page: current - 1
    }).then((response) => {
      dispatch(SetCategory(response.data.data.data))
    });
  }

    const data = useAppSelector(GetCategory);

    const columns = [
        {
          title: 'Stt',
          dataIndex: 'stt',
          key: 'stt',
        },
        {
          title: 'Code',
          dataIndex: 'code',
          key: 'code',
          render: (text) => <span>{text}</span>,
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
                <Tooltip title="Update demo">
                    <Button type="primary" onClick={() => {
                                    setDetailCategory(record)
                                    setShowModal(true);
                                  } } className="bg-green-400 text-white hover:bg-green-300" ><EditOutlined /></Button>
                </Tooltip>
                <DeleteConfirm id = {record.id}></DeleteConfirm>
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
          <ModalThem modalOpen={showModal} setModalOpen={setShowModal} category={detailCategory} SetCategory = {setDetailCategory} />
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
                                      setDetailCategory(null)
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
          <Table columns={columns} dataSource={data} rowKey="id" pagination={false} />
          <div className="mt-10">
            <Pagination
              simple
              current={current}
              onChange={(value) => {
                setCurrent(value); 
              }}
              total={total * 10} />
          </div>
        </div>
      </>
    );
  }