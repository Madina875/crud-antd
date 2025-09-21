import { memo, useState } from "react";
import type { FormProps } from "antd";

import {
  Button,
  Card,
  Checkbox,
  Form,
  Input,
  InputNumber,
  Modal,
  Popconfirm,
  Skeleton,
} from "antd";
import { usePhone } from "../../api/hooks/usePhone";

type FieldType = {
  title: string;
  price: number;
  image?: string;
  hasDelivery?: boolean;
  memories: [];
  id?: string;
};

const FormInput = () => {
  const { getPhone, deletePhone, createPhone, updatePhone } = usePhone();
  const { data, isLoading } = getPhone();
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [edittingItem, setEdittingItem] = useState<FieldType | any>(null);

  const [form] = Form.useForm<FieldType>();

  const showModal = () => {
    setEdittingItem(null);
    form.resetFields(); //agar yangi yaratilsa eskisi reset
    setOpen(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 500);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setEdittingItem(null);
    setOpen(false);
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values: any) => {
    if (edittingItem) {
      updatePhone.mutate({ id: edittingItem.id, body: values });
    } else {
      createPhone.mutate(values);
    }
    setOpen(false);
    form.resetFields();
  };

  const handleDelete = (id: string) => {
    deletePhone.mutate(id);
  };

  const handleUpdate = (body: FieldType) => {
    console.log(body);
    setEdittingItem(body);
    form.setFieldsValue(body);
    setOpen(true);
  };

  return (
    <>
      <div className=" container flex items-center bg-gray-100 rounded-2xl   shadow my-8 p-5">
        <div className="flex w-full gap-5">
          <button
            onClick={showModal}
            className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold hover:opacity-90 hover:scale-105 transition rounded-2xl p-6 shadow-lg"
          >
            <span className="text-4xl">🚀</span>
            <p>Create Phone</p>
          </button>
          <button
            onClick={showModal}
            className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold hover:opacity-90 hover:scale-105 transition rounded-2xl p-6 shadow-lg"
          >
            <span className="text-4xl">🚀</span>
            <p>Create Phone</p>
          </button>
          <button
            onClick={showModal}
            className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold hover:opacity-90 hover:scale-105 transition rounded-2xl p-6 shadow-lg"
          >
            <span className="text-4xl">🚀</span>
            <p>Create Phone</p>
          </button>
          <button
            onClick={showModal}
            className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold hover:opacity-90 hover:scale-105 transition rounded-2xl p-6 shadow-lg"
          >
            <span className="text-4xl">🚀</span>
            <p>Create Phone</p>
          </button>
        </div>
        <Modal
          title="Phone"
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <Form
            className="flex flex-col px-5 w-[100%]"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
            form={form}
          >
            <p>Title</p>
            <Form.Item<FieldType>
              name="title"
              rules={[
                { required: true, message: "Please input title of the phone!" },
              ]}
            >
              <Input className="h-10" />
            </Form.Item>

            <p>Price</p>
            <Form.Item<FieldType>
              name="price"
              rules={[
                { required: true, message: "Please input price of the phone!" },
              ]}
            >
              <InputNumber className="h-10" style={{ width: "100%" }} />
            </Form.Item>

            <p>Image Url</p>
            <Form.Item<FieldType> name="image">
              <Input className="h-10" />
            </Form.Item>

            <p>Memories</p>
            <Form.Item<FieldType>
              name="memories"
              rules={[
                {
                  required: true,
                  message: "Please input memories of the phone!",
                },
              ]}
            >
              <Input className="h-10" />
            </Form.Item>

            <Form.Item<FieldType>
              name="hasDelivery"
              valuePropName="checked"
              label={null}
            >
              <Checkbox>Has Delivery? </Checkbox>
            </Form.Item>

            <Form.Item label={null}>
              <Button type="primary" htmlType="submit">
                send
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
      <div className="container grid grid-cols-4 gap-5 my-5">
        {isLoading && <Skeleton active />}
        {isLoading && <Skeleton active />}
        {isLoading && <Skeleton active />}
        {isLoading && <Skeleton active />}

        {data?.map((e: any) => (
          <Card key={e.id} loading={false}>
            <div className="bg-gray-200 h-40 w-full ">
              <img src={e.image} alt="" />
            </div>
            <Card.Meta
              description={
                <>
                  <h2 className="text-2xl mt-5 text-gray-700 italic">
                    title: {e?.title}
                  </h2>

                  <strong className="text-[18px]">price: ${e?.price}</strong>

                  <p className="mt-2">
                    includes:{" "}
                    <strong className="text-gray-600 pt-20">
                      {e?.hasDelivery ? "🚗" : "❌"}
                    </strong>
                  </p>

                  <div className="flex mt-[5%] gap-[4%]">
                    <Popconfirm
                      title="Delete the task"
                      description="Are you sure to delete this task?"
                      onConfirm={() => handleDelete(e.id)}
                      okText="Yes"
                      cancelText="No"
                    >
                      <Button>Delete</Button>
                    </Popconfirm>
                    <Button onClick={() => handleUpdate(e)}>update</Button>
                  </div>
                </>
              }
            />
          </Card>
        ))}
      </div>
    </>
  );
};

export default memo(FormInput);
