import React, { useEffect, useState } from 'react';

import { Pagination, Space, Table } from 'antd';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { GetColor, SetColor } from '../../../app/reducers/color/color.reducer';
import { ColorAPI } from '../../../apis/quan-ly/color/color.api';


export default function QuanLyColor() {
    const [current, setCurrent] = useState(1);
    const [search, setSearch] = useState("");
    const [total, setTotal] = useState(0);
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        ColorAPI.fetchAll(
            {
                page: current - 1
            }
        ).then((response) => {
            dispatch(SetColor(response.data.data.data))
            console.log(response.data.data.data);
            setTotal(response.data.data.totalPages)
        });
      },  [dispatch]); 
    const data = useAppSelector(GetColor);
    const columns = [
        {
          title: 'Name',
          dataIndex: 'stt',
          key: 'stt',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Age',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'code',
          key: 'code',
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <a>Invite {record.name}</a>
              <a>Delete</a>
            </Space>
          ),
        },
      ];

    return (
    <>
        <div className="p-10 bg-white rounded-xl mt-5 shadow-md shadow-indigo-500/40 hover:shadow-indigo-500/50 ease-in-out" >
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
    )
};