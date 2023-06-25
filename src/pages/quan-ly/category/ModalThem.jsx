import { Button, Form, Input, Modal, message } from 'antd';
import { useAppDispatch } from '../../../app/hooks';
import { CategoryAPI } from '../../../apis/quan-ly/category/category.api';
import { SetCategory, UpdateCategory } from '../../../app/reducers/category/category.reducer';

const ModalThem = (props) => {
  const { modalOpen, setModalOpen, category } = props;  
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();

  const fetchAll = () => {
    CategoryAPI.fetchAll().then((response) => {
      dispatch(SetCategory(response.data.data.data))
    });
  }

  form.setFieldsValue(category)

  const onFinish = () => {
    const formValues = form.getFieldsValue();
    // call api
    if (category == null) {
      CategoryAPI.create(formValues)
        .then((result) => {
          // dispatch(AddCategory(result.data.data));
          message.success("Success!");
          setModalOpen(false)
          form.setFieldValue(null)
          fetchAll();
        })
        .catch((err) => {
          message.error("Error", err);
        });
    } else {
      CategoryAPI.update(formValues, category.id)
        .then((response) => { 
          // dispatch(UpdateCategory(response.data.data));
          message.success("Success!");
          setModalOpen(false)
          form.setFieldValue(null)
          fetchAll();
        }, err => { 
          message.error("Error", err);
        })
    }

  };
  const onFinishFailed = () => {
    message.error("Error");
  }
  const onCancel = () => {
    setModalOpen(false)
    form.setFieldValue(null)
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
            label="Code"
            name="code"
            rules={[
              {
                required: true,
                message: 'Làm ơn nhập code',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Tên"
            name="name"
            rules={[
              {
                required: true,
                message: 'Làm ơn nhập tên',
              },
            ]}
          >
            <Input />
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

export default ModalThem;