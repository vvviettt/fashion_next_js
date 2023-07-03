"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import axios from "axios";
import { useEffect, useState } from "react";
import classNames from "classnames";

const schema = yup.object({
  name: yup.string().required("Tên là bắt buộc."),
  email: yup.string().email("Email là bắt buộc.").required("Email là bắt buộc"),
  phone: yup
    .string()
    .matches(
      /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
      "Số điện thoại không đúng."
    )
    .required("Số điện thoại là bắt buộc."),
  address: yup.string().required("Địa chỉ là bắt buộc."),
  province: yup.number().required("Tỉnh là bắt buộc."),
  district: yup.number().required("Huyện là bắt buộc."),
  ward: yup.number().required("Xã/Phường  là bắt buộc."),
});

export type LoginFormData = yup.InferType<typeof schema>;

interface Place {
  code: string;
  name: string;
}

const PaymentInfoForm = () => {
  const { control, getValues } = useForm({ resolver: yupResolver(schema) });
  const [listProvince, setListProvince] = useState<Place[]>([]);
  const [province, setProvince] = useState<string>("");
  const [listDistricts, setListDistricts] = useState<Place[]>([]);
  const [district, setDistrict] = useState<string>("");
  const [listWard, setListWard] = useState<Place[]>([]);

  const getPlace = async () => {
    const province = await axios.get(
      "https://vn-public-apis.fpo.vn/provinces/getAll?limit=-1"
    );
    setListProvince(province.data.data.data);
  };

  const getDistricts = async (code: string) => {
    const province = await axios.get(
      `https://vn-public-apis.fpo.vn/districts/getByProvince?provinceCode=${code}&limit=-1`
    );
    setListDistricts(province.data.data.data);
  };

  const getWard = async (code: string) => {
    const province = await axios.get(
      `https://vn-public-apis.fpo.vn/wards/getByDistrict?districtCode=${code}&limit=-1`
    );
    setListWard(province.data.data.data);
  };
  useEffect(() => {
    getPlace();
  }, []);

  useEffect(() => {
    if (province !== "") {
      getDistricts(province);
    }
  }, [province]);

  useEffect(() => {
    if (district !== "") {
      getWard(district);
    }
  }, [district]);

  return (
    <form className="pr-[50px]">
      <h1>Thông tin thanh toán</h1>
      <div className="my-10"></div>
      <div className="mb-5">
        <p
          className="text-[#8a8a8f] text-[14px] mb-[5px]"
          style={{ color: "#8a8a8f", marginBottom: "5px" }}
        >
          Họ
        </p>
        <Controller
          name="name"
          control={control}
          render={({ fieldState: { error }, field: { onChange, value } }) => (
            <>
              <input
                className="block outline-none border w-full px-4 py-2  mt-[10px]"
                type="text"
                name="name"
                onChange={onChange}
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
      <div className="flex justify-between">
        <div className="mb-5 w-[60%]">
          <p
            className="text-[#8a8a8f] text-[14px] mb-[5px]"
            style={{ color: "#8a8a8f", marginBottom: "5px" }}
          >
            Địa chỉ email
          </p>
          <Controller
            name="email"
            control={control}
            render={({ fieldState: { error }, field: { onChange, value } }) => (
              <>
                <input
                  className="block outline-none border w-full px-4 py-2  mt-[10px]"
                  type="text"
                  name="email"
                  onChange={onChange}
                  value={value}
                  placeholder="Địa chỉ email"
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
        <div className="mb-5 w-[30%]">
          <p
            className="text-[#8a8a8f] text-[14px] mb-[5px]"
            style={{ color: "#8a8a8f", marginBottom: "5px" }}
          >
            Số điện thoại
          </p>
          <Controller
            name="phone"
            control={control}
            render={({ fieldState: { error }, field: { onChange, value } }) => (
              <>
                <input
                  className="block outline-none border w-full px-4 py-2  mt-[10px]"
                  type="text"
                  name="phone"
                  onChange={onChange}
                  value={value}
                  placeholder="Số điện thoại"
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
      </div>
      <div className="mb-5">
        <p
          className="text-[#8a8a8f] text-[14px] mb-[5px]"
          style={{ color: "#8a8a8f", marginBottom: "5px" }}
        >
          Địa chỉ nhận hàng
        </p>
        <Controller
          name="address"
          control={control}
          render={({ fieldState: { error }, field: { onChange, value } }) => (
            <>
              <input
                className="block outline-none border w-full px-4 py-2  mt-[10px]"
                type="text"
                name="address"
                onChange={onChange}
                value={value}
                placeholder="Địa chỉ nhận hàng"
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
      <div className=" flex justify-between">
        <div className="w-1/4">
          <div className="mb-5">
            <p
              className="text-[#8a8a8f] text-[14px] mb-[5px]"
              style={{ color: "#8a8a8f", marginBottom: "5px" }}
            >
              Địa chỉ nhận hàng
            </p>
            <Controller
              name="province"
              control={control}
              render={({
                fieldState: { error },
                field: { onChange, value },
              }) => (
                <div className="px-3  overflow-hidden border">
                  <select
                    defaultValue={""}
                    onChange={(e) => {
                      onChange(parseInt(e.currentTarget.value));
                      setProvince(e.currentTarget.value);
                    }}
                    className={classNames(" outline-none block h-[42px]", {
                      "text-[#8a8a8f]": !value,
                    })}
                  >
                    <option className="text-[#8a8a8f]" value={""} disabled>
                      Tỉnh
                    </option>
                    {listProvince.map((pr) => {
                      return (
                        <option
                          className="text-[#8a8a8f]"
                          key={pr.code}
                          value={pr.code}
                        >
                          {pr.name}
                        </option>
                      );
                    })}
                  </select>
                  {error && (
                    <p className=" text-red-400 text-[14px] mt-2">
                      {error?.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>
        </div>
        <div className="w-1/4">
          <div className="mb-5">
            <p
              className="text-[#8a8a8f] text-[14px] mb-[5px]"
              style={{ color: "#8a8a8f", marginBottom: "5px" }}
            >
              Huyện
            </p>
            <Controller
              name="district"
              control={control}
              render={({
                fieldState: { error },
                field: { onChange, value },
              }) => (
                <div className="px-3  overflow-hidden border">
                  <select
                    defaultValue={""}
                    onChange={(e) => {
                      onChange(parseInt(e.currentTarget.value));
                      setDistrict(e.currentTarget.value);
                    }}
                    className={classNames(" outline-none block h-[42px]", {
                      "text-[#8a8a8f]": !value,
                    })}
                  >
                    <option className="text-[#8a8a8f]" value={""} disabled>
                      Huyện
                    </option>
                    {listDistricts.map((pr) => {
                      return (
                        <option
                          className="text-[#8a8a8f]"
                          key={pr.code}
                          value={pr.code}
                        >
                          {pr.name}
                        </option>
                      );
                    })}
                  </select>
                  {error && (
                    <p className=" text-red-400 text-[14px] mt-2">
                      {error?.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>
        </div>
        <div className="w-1/4">
          <div className="mb-5">
            <p
              className="text-[#8a8a8f] text-[14px] mb-[5px]"
              style={{ color: "#8a8a8f", marginBottom: "5px" }}
            >
              Xã/Phường
            </p>
            <Controller
              name="ward"
              control={control}
              render={({
                fieldState: { error },
                field: { onChange, value },
              }) => (
                <div className="px-3  overflow-hidden border">
                  <select
                    defaultValue={""}
                    onChange={(e) => {
                      onChange(parseInt(e.currentTarget.value));
                    }}
                    className={classNames(" outline-none block h-[42px]", {
                      "text-[#8a8a8f]": !value,
                    })}
                  >
                    <option className="text-[#8a8a8f]" value={""} disabled>
                      Xã/Phường
                    </option>
                    {listWard.map((pr) => {
                      return (
                        <option
                          className="text-[#8a8a8f]"
                          key={pr.code}
                          value={pr.code}
                        >
                          {pr.name}
                        </option>
                      );
                    })}
                  </select>
                  {error && (
                    <p className=" text-red-400 text-[14px] mt-2">
                      {error?.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default PaymentInfoForm;
