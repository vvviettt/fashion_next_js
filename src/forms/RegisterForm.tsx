"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object({
  firstName: yup.string().required("Họ là bắt buộc."),
  lastName: yup.string().required("Tên là bắt buộc."),
  email: yup.string().email("Email chưa hợp lệ.").required("Email là bắt buộc"),
  phone: yup
    .string()
    .matches(
      /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
      "Số điện thoại không đúng."
    )
    .required("Số điện thoại là bắt buộc."),
  password: yup
    .string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/,
      "Mật khẩu phải dài ít nhất 6 kí tự trong đó có ít nhất 1 chữ hoa ,  1 chữ thường , 1 chữ số và 1 ký tự đặc biệt."
    )
    .required("Mật khẩu là bắt buộc"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Mật khẩu không khớp"),
});

export type LoginFormData = yup.InferType<typeof schema>;
const RegisterForm = () => {
  const { control } = useForm({ resolver: yupResolver(schema) });
  return (
    <form className="py-6">
      <div className="mb-5">
        <p
          className="text-[#8a8a8f] text-[14px] mb-[5px]"
          style={{ color: "#8a8a8f", marginBottom: "5px" }}
        >
          Họ
        </p>
        <Controller
          name="firstName"
          control={control}
          render={({ fieldState: { error }, field: { onChange, value } }) => (
            <>
              <input
                className="block outline-none border w-full px-4 py-2  mt-[10px]"
                type="text"
                name="firstName"
                onChange={onChange}
                value={value}
                placeholder="Họ"
              />
              {error && (
                <p className=" text-red-400 text-[14px] mt-2">
                  {error?.message}
                </p>
              )}
            </>
          )}
        />
      </div>
      <div className="mb-5">
        <p
          className="text-[#8a8a8f] text-[14px] mb-[5px]"
          style={{ color: "#8a8a8f", marginBottom: "5px" }}
        >
          Tên
        </p>
        <Controller
          name="lastName"
          control={control}
          render={({ fieldState: { error }, field: { onChange, value } }) => (
            <>
              <input
                className="block outline-none border w-full px-4 py-2  mt-[10px]"
                type="text"
                onChange={onChange}
                name="lastName"
                value={value}
                placeholder="Tên"
              />
              {error && (
                <p className=" text-red-400 text-[14px] mt-2">
                  {error?.message}
                </p>
              )}
            </>
          )}
        />
      </div>
      <div className="mb-5">
        <p
          className="text-[#8a8a8f] text-[14px] mb-[5px]"
          style={{ color: "#8a8a8f", marginBottom: "5px" }}
        >
          Email
        </p>
        <input
          className="block outline-none border w-full px-4 py-2  mt-[10px]"
          type="text"
          name="email"
          placeholder="Email"
        />
      </div>
      <div className="mb-5">
        <p
          className="text-[#8a8a8f] text-[14px] mb-[5px]"
          style={{ color: "#8a8a8f", marginBottom: "5px" }}
        >
          Số điện thoại
        </p>
        <input
          className="block outline-none border w-full px-4 py-2  mt-[10px]"
          type="text"
          name="phone"
          placeholder="Số điện thoại"
        />
      </div>
      <div className="mb-5">
        <p
          className="text-[#8a8a8f] text-[14px] mb-[5px]"
          style={{ color: "#8a8a8f", marginBottom: "5px" }}
        >
          Mật khẩu
        </p>
        <input
          className="block outline-none border w-full px-4 py-2  mt-[10px]"
          type="text"
          name="password"
          placeholder="Mật khẩu"
        />
      </div>
      <div className="mb-5">
        <p
          className="text-[#8a8a8f] text-[14px] mb-[5px]"
          style={{ color: "#8a8a8f", marginBottom: "5px" }}
        >
          Xác nhận mật khẩu
        </p>
        <input
          className="block outline-none border w-full px-4 py-2  mt-[10px]"
          type="text"
          hidden
          name="confirmPassword"
          placeholder="Nhập lại mật khẩu"
        />
      </div>
      <button type="submit" className="bg-black w-full py-3 mt-4">
        <span className="text-white ">Đăng ký</span>
      </button>
    </form>
  );
};

export default RegisterForm;
