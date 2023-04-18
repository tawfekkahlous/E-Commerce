import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "@/components/input";
import Button from "@/components/button";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  TiSocialFacebook,
  TiSocialGooglePlus,
  TiSocialLinkedin,
} from "react-icons/ti";
import Icon from "@/components/icon";
import { CiUser } from "react-icons/ci";
import { useLoginMutation } from "@/api/product-api/auth";
import Divider from "@/components/break";
const Login = () => {
  const router = useRouter();
  const [lock, setLock] = useState(true);
  const [login, { error, isLoading, data, isSuccess }] = useLoginMutation();
  const handleLock = () => {
    setLock(!lock);
  };
  useEffect(() => {
    if (isSuccess && data) {
      localStorage.setItem("login-token", data?.token);
      router.push("/home");
    }
  }, [data, isSuccess,router]);
  return (
    <div className="flex justify-center items-center h-screen w-full bg-[#ece9e9]  ">
      <div className="w-[400px] h-[550px]  py-[30px] px-[40px] rounded-md bg-white shadow-md m-auto mx-[20px] ">
        <h1 className="font-[500] text-[22px]"> Login</h1>
        <div className="mt-[25px] ">
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            validationSchema={Yup.object({
              username: Yup.string().required("Required"),
              password: Yup.string().required("Required"),
            })}
            onSubmit={(values, { resetForm }) => {
              resetForm();
              login(values);
            }}
          >
            {(formik) => (
              <Form>
                <div className="mb-[10px]">
                  <Input
                    className={"user-name"}
                    name={"username"}
                    type={"text"}
                    placeholder={"User Name"}
                    label={"User Name"}
                    width={"100%"}
                    bg={""}
                    border={"1px solid #ccc"}
                    borderRadius={"4px"}
                    color={"#444"}
                    fontSize={"16px"}
                    height={""}
                    margin={"0px 0px 0px 0px"}
                    padding={"8px 15px"}
                    id={"username"}
                    iconLable={<CiUser />}
                  />
                  {formik.errors.username && formik.touched.username ? (
                    <div className="text-[red] ">{formik.errors.username}</div>
                  ) : null}
                </div>
                <div className="mb-[10px]">
                  <Input
                    className={"password"}
                    name={"password"}
                    type={`${lock ? "password" : "text"}`}
                    placeholder={"password"}
                    label={"password"}
                    width={"100%"}
                    bg={""}
                    border={"1px solid #ccc"}
                    borderRadius={"4px"}
                    color={"#444"}
                    fontSize={"16px"}
                    height={""}
                    margin={"0px 0px 0px 0px"}
                    padding={"8px 15px"}
                    id={"password"}
                    handleLock={handleLock}
                    lock={lock}
                  />
                  {formik.errors.password && formik.touched.password ? (
                    <div className="text-[red] ">{formik.errors.password}</div>
                  ) : null}
                </div>
                <p className="text-[red]"> {error?.data} </p>
                <Button
                  text={isLoading ? "isLoading..." : "Login"}
                  className={"login-button"}
                  type={"submit"}
                  bg={"#2196F3"}
                  border={"2px solid #2196F3"}
                  borderRadius={"4px"}
                  color={"white"}
                  hoverBg={"blue"}
                  hoverText={"white"}
                  margin={"10px 0px"}
                  padding={"8px 15px"}
                  width={"100%"}
                  fontSize={"18px"}
                  fontWeight={"500"}
                  // borderHover={" 1px solid #D10024"}
                  formik={formik}
                />
              </Form>
            )}
          </Formik>
        </div>
        <Divider
          className={"loginBreak"}
          color={"#686363"}
          width={"100%"}
          height={"1px"}
          hAfter={"30px"}
          wAfter={"30px"}
          lAfter={"50%"}
          tAfter={"-15px"}
          borderRadius={"4px"}
          bg={"#ccc"}
          margin={"50px 0px "}
          bgAfter={"white"}
          borderAfter={"1px solid #ccc"}
        />
        <div className="flex justify-center gap-4 mb-[30px]">
          <Icon
            className={"faceIcon"}
            icon={<TiSocialFacebook />}
            border={"3px solid blue"}
            borderRadius={"50%"}
            color={"blue"}
            padding={"5px"}
            width={"40px"}
            height={"40px"}
            size={"30px"}
            bgHover={"blue"}
            colorHover={"white"}
          />
          <Icon
            className={"googleIcon"}
            icon={<TiSocialGooglePlus />}
            border={"3px solid red"}
            borderRadius={"50%"}
            color={"red"}
            padding={"5px"}
            width={"40px"}
            height={"40px"}
            size={"30px"}
            bgHover={"red"}
            colorHover={"white"}
          />
          <Icon
            className={"linkedIcon"}
            icon={<TiSocialLinkedin />}
            border={"3px solid blue"}
            borderRadius={"50%"}
            color={"blue"}
            padding={"5px"}
            width={"40px"}
            height={"40px"}
            size={"30px"}
            bgHover={"blue"}
            colorHover={"white"}
          />
        </div>
      </div>
      <style>
        {`
        body{
          overFlow:hidden
        }
        `}
      </style>
    </div>
  );
};
export default Login;
Login.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
