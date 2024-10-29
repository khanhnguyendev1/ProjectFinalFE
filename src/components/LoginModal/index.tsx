import { Form, Modal } from "antd";
import type { FormProps } from "antd";
import { useForm } from "antd/es/form/Form";

import logo from "@/assets/logo.svg";
import { BaseButton, BaseInput } from "@/components";
import { useTranslation } from "react-i18next";

type FieldType = {
  username: string;
  password: string;
};

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: IProps) => {
  const { t } = useTranslation();
  const [form] = useForm<FieldType>(); // Create a form instance

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    onClose(); // Close modal on successful submission
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Modal
      title={t("login")}
      open={isOpen}
      onCancel={() => {
        form.resetFields();
        onClose();
      }}
      footer={[
        <BaseButton
          onClick={() => form.submit()}
          label={t("login")}
          type="primary"
        />,
        <BaseButton
          onClick={() => {
            form.resetFields();
            onClose();
          }}
          label={t("cancel")}
        />,
      ]}
    >
      <div className="flex justify-center mb-4">
        <img src={logo} alt="Logo" className="h-[48px]" />
      </div>
      <Form
        form={form}
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label={t("username")}
          name="username"
          rules={[{ required: true, message: t("input_username_error") }]}
        >
          <BaseInput />
        </Form.Item>

        <Form.Item<FieldType>
          label={t("password")}
          name="password"
          rules={[{ required: true, message: t("input_password_error") }]}
        >
          <BaseInput inputType="password" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default LoginModal;
