import { Button, Checkbox, Form, Input, Modal, message } from 'antd';
import { AddDemo } from '../../../app/reducers/quan-ly/chuc-nang-1/man-1-demo.reducer';
import { useAppDispatch } from '../../../app/hooks';

const ModalDemo = (props) => {
  const { modalOpen, setModalOpen } = props;  
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();

  const onFinish = () => {
    // call api
    // BlogAPI.put(blog?.id ? { ...formValue, id: blog.id } : formValue)
    //   .then((result) => {
    //     dispatch(PutBlog(result.data));
    const formValues = form.getFieldsValue();
    console.log('Form Values:', formValues);
    dispatch(AddDemo(formValues));
    message.success("Success!");
    setModalOpen(false)
    form.setFieldValue(null)
      // })
      // .catch((err) => {
      //   message.error("Error", err);
      // });
  };
  const onFinishFailed = () => {
    message.error("Error");
  }
  const onCancel = () => {
    setModalOpen(false)
  }

  return (
    <>
      <Modal title="Basic Modal"
        open={modalOpen}
        onCancel={onCancel}
        footer={null}>
        <Form
          form={form}
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          labelCol={{
            span: 3,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
          <Form.Item
            label="Mã"
            name="ma"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Tên"
            name="ten"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          
          <Form.Item
            label="Tuổi"
            name="tuoi"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          > 
            <Button type="primary" onClick={onCancel} className="bg-orange-500 text-white" >Close</Button>
            <Button type="primary" htmlType='submit' className='bg-orange-500'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalDemo;