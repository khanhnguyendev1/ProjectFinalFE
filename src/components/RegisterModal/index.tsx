import { Form, Modal } from "antd";
import type { FormProps } from "antd";
import { useForm } from "antd/es/form/Form";
import { useTranslation } from "react-i18next";

import logo from "@/assets/logo.svg";
import { BaseButton, BaseInput } from "@/components";

type RegisterFieldType = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegisterModal = ({ isOpen, onClose }: IProps) => {
  const { t } = useTranslation();
  const [form] = useForm<RegisterFieldType>();

  const onFinish: FormProps<RegisterFieldType>["onFinish"] = (values) => {
    console.log("Registration Success:", values);
    onClose();
  };

  const onFinishFailed: FormProps<RegisterFieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Registration Failed:", errorInfo);
  };

  return (
    <Modal
      title={t("register")}
      open={isOpen}
      onCancel={onClose}
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
        name="register"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="flex flex-col justify-center"
      >
        <Form.Item<RegisterFieldType>
          label={t("username")}
          name="username"
          rules={[{ required: true, message: t("input_username_error") }]}
        >
          <BaseInput />
        </Form.Item>

        <Form.Item<RegisterFieldType>
          label={t("email")}
          name="email"
          rules={[
            { required: true, message: t("input_email_error") },
            { type: "email", message: t("valid_email_error") },
          ]}
        >
          <BaseInput />
        </Form.Item>

        <Form.Item<RegisterFieldType>
          label={t("password")}
          name="password"
          rules={[{ required: true, message: t("input_password_error") }]}
        >
          <BaseInput inputType="password" />
        </Form.Item>

        <Form.Item<RegisterFieldType>
          label={t("confirm_password")}
          name="confirmPassword"
          dependencies={["password"]}
          rules={[
            { required: true, message: t("confirm_password_error") },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error(t("password_mismatch_error")));
              },
            }),
          ]}
        >
          <BaseInput inputType="password" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default RegisterModal;
