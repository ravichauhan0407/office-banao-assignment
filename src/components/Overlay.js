import React from "react";
import { Drawer, Button,Select, Input, Space, Form } from "antd";
import { CloseOutlined } from "@ant-design/icons";
const { Option } = Select;
export const Overlay = (props) => {
  
 const [form] = Form.useForm();

  const onSave=(value)=>
  {
      console.log(value)
      form.resetFields()
      props.onClose()
  }


  return (
    
    <Drawer
      style={{ borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px" ,height:'100vh'}}
      title="Workorder"
      placement="right"
      width={500}
      
      open={props.open}
      onClose={props.onClose}
      closable={false}
      extra={
        <Space>
          <CloseOutlined style={{ fontSize: "30px" }} onClick={props.onClose} />
        </Space>
      }
    >
    <div style={{height:'100%'}}>
      <Form layout="vertical" onFinish={onSave} form={form} >
        <Form.Item label="Client" name="Client">
          <Select
           style={{
              width: '100%',
            }}
            placeholder='Client Name'
          >
            {['A','B','C'].map((item) => (
              <Option key={item} value={item}>
                {item}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Date of Commencement" name="Date of Commencement">
          <Input  placeholder="dd/mm/yyyy" />
        </Form.Item>
        <Form.Item label="Date of Completion" name="Date of Completion">
          <Input  placeholder="dd/mm/yyyy" />
        </Form.Item>
        <Form.Item label="RFQ Code">
          <Input placeholder="RFQ Code"  name="RFQ Code"/>
        </Form.Item>
        <div className="btn-container">
        <Button htmlType="submit"  style={{width:'150px',fontWeight:'bold'}} type="primary"  >Save</Button>
        </div>
      </Form>
      </div>
    </Drawer>

  );
};
