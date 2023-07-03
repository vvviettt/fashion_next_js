"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email().required("Email là bắt buộc"),
  password: yup
    .string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/,
      "Mật khẩu phải dài ít nhất 6 kí tự trong đó có ít nhất 1 chữ hoa ,  1 chữ thường , 1 chữ số và 1 ký tự đặc biệt."
    )
    .required("Mật khẩu là bắt buộc"),
});

export type LoginFormData = yup.InferType<typeof schema>;

const LoginForm = () => {
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
    // mode: "onSubmit",
  });
  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="py-6">
      <div className="mb-5">
        <p
          className="text-[#8a8a8f] text-[14px] mb-[5px]"
          style={{ color: "#8a8a8f", marginBottom: "5px" }}
        >
          Email
        </p>
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <input
                className="block outline-none border w-full px-4 py-2  mt-[10px] rounded-md"
                type="text"
                name="email"
                value={value}
                onChange={onChange}
                placeholder="Email"
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
        <h1
          className=" text-[14px] mb-[5px]"
          style={{ color: "#8a8a8f", marginBottom: "5px" }}
        >
          Mật khẩu
        </h1>
        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <div className="flex">
                <input
                  className="block outline-none border w-full px-4 py-2 rounded-md"
                  type="password"
                  name="password"
                  value={value}
                  onChange={onChange}
                  placeholder="Mật khẩu"
                />
              </div>
              {error && (
                <p className=" text-red-400 text-[14px] mt-2">
                  {error?.message}
                </p>
              )}
            </>
          )}
        />
      </div>
      <button className="bg-black w-full py-3 mt-4">
        <span className="text-white ">Đăng nhập</span>
      </button>
    </form>
  );
};

export default LoginForm;
