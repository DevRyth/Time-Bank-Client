import React from "react";
import Input from "../sharedComponents/input/Input";
import { AiOutlineUser, AiOutlineMobile } from "react-icons/ai";
import { FaRegAddressCard } from "react-icons/fa";
import { BiBuildingHouse } from "react-icons/bi";
import { MdPersonPinCircle } from "react-icons/md";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { Formik, FormikProps, FormikValues } from "formik";
import axios from "axios";
import Button from "../sharedComponents/button/Button";
import { BASE_URL } from "../constants/constants";
import Select from "../sharedComponents/Select";
import homeImage from "../Images/home.png";

interface Props {
  className?: string;
}

const PersonalDetails: React.FC<Props> = ({ className }) => {
  const initialValues = {
    first_name: "",
    middle_name: "",
    last_name: "",
    gender: "",
    birth_date: "",
    birth_month: "",
    birth_year: "",
    address: "",
    district: "",
    state: "",
    pincode: "",
    phone_number: "",
  };

  let day = ["Day"];
  for (let i = 1; i < 32; i++) day.push(i.toString());

  let month = ["Month"];
  for (let i = 1; i < 13; i++) month.push(i.toString());

  let year = ["Year"];
  for (let i = 1971; i < 2016; i++) year.push(i.toString());

  return (
    <div className={className}>
      <div className="text-center text-yellow-700 from-on-primary-dark text-3xl">
        Registration
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, helper) => {
          helper.setSubmitting(true);
          const mappedValues = {
            user: {
              first_name: values.first_name,
              middle_name: values.middle_name,
              last_name: values.last_name,
              gender: values.gender,
              birth_date: values.birth_date,
              birth_month: values.birth_month,
              birth_year: values.birth_year,
              address: values.address,
              district: values.district,
              state: values.state,
              pincode: values.pincode,
              phone_number: values.phone_number,
            },
          };
          const url = BASE_URL + "/register";
          const response: any = await axios.post(url, mappedValues);
          if (response.status === 200) {
            window.location.href = "/dashboard";
          }
          // console.log(mappedValues);
          helper.setSubmitting(false);
        }}
      >
        {(formikProps: FormikProps<FormikValues>) => (
          <form
            onSubmit={formikProps.handleSubmit}
            className="flex flex-col justify-center"
          >
            <div className="border border-gray-400 rounded-lg space-y-7 m-7 p-2">
              <div className="flex flex-col sm:flex-row justify-around items-center sm:items-stretch">
                <div className="border border-black w-36 h-40 rounded-lg pb-3 sm:pb-0 text-center flex items-center sm:mt-5">Click here to upload Profile Photo</div>
                <div className="flex flex-col space-y-7">
                  <div className="flex flex-row items-center space-x-2">
                    <label className="text-sm  hidden sm:block font-bold md:text-lg lg:text-xl xl:text-2xl">
                      First name*
                    </label>
                    <Input
                      onChange={formikProps.handleChange}
                      name="first_name"
                      type="text"
                      placeholder="Akarsh"
                    >
                      <AiOutlineUser />
                    </Input>
                  </div>

                  <div className="flex flex-row items-center space-x-2">
                    <label className="text-sm hidden sm:block font-bold md:text-lg lg:text-xl xl:text-2xl">
                      Middle name
                    </label>
                    <Input
                      onChange={formikProps.handleChange}
                      name="middle_name"
                      type="text"
                      placeholder="Singh"
                    >
                      <AiOutlineUser />
                    </Input>
                  </div>

                  <div className="flex flex-row items-center space-x-2">
                    <label className="text-sm hidden sm:block font-bold md:text-lg lg:text-xl xl:text-2xl">
                      Last name*
                    </label>
                    <Input
                      onChange={formikProps.handleChange}
                      name="last_name"
                      type="text"
                      placeholder="Gangwar"
                    >
                      <AiOutlineUser />
                    </Input>
                  </div>

                </div>
              </div>

              <div className="flex flex-col sm:flex-row -space-y-0 justify-around items-center pb-3">

                <div className="flex flex-row items-center space-x-2">
                  <label className="hidden text-sm sm:block font-bold md:text-lg lg:text-xl xl:text-2xl">
                    DOB*
                  </label>
                  <div className="flex justify-center space-x-2">
                    <Select label="Day" name="birth_date" options={day} onChange={formikProps.handleChange} />
                    <Select label="Month" name="birth_month" options={month} onChange={formikProps.handleChange} />
                    <Select label="Year" name="birth_year" options={year} onChange={formikProps.handleChange} />
                  </div>
                </div>

                <div className="space-y-3 flex flex-row items-center space-x-2">
                  <label className="hidden  sm:block text-sm font-bold md:text-lg lg:text-xl xl:text-2xl">
                    Gender*
                  </label>
                  <div className="flex flex-row space-x-7 items-center">
                    <label className="flex flex-row space-x-2 items-center">
                      <span>Male</span>
                      <input
                        onChange={formikProps.handleChange}
                        className=""
                        type="radio"
                        name="gender"
                        value="Male"
                      ></input>
                    </label>
                    <label className="flex flex-row space-x-2 items-center">
                      <span>Female</span>
                      <input
                        onChange={formikProps.handleChange}
                        className=""
                        type="radio"
                        name="gender"
                        value="Female"
                      ></input>
                    </label>
                  </div>
                </div>
              </div>
            </div>


            <div className="border border-gray-400 rounded-lg	m-7 p-3">
              {/* address */}
              <div className="flex flex-row justify-center sm:justify-around">
                <div className="flex flex-col justify-around space-y-2 sm:space-y-0">

                  <div className="flex flex-col sm:flex-row items-center space-x-2">
                    <label className="hidden sm:block text-sm font-bold md:text-lg lg:text-xl xl:text-2xl">
                      Address*
                    </label>
                    <Input
                      onChange={formikProps.handleChange}
                      name="address"
                      type="text"
                      placeholder="Flat no./area"
                    >
                      <BiBuildingHouse />
                    </Input>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center space-x-2">
                    <label className=" hidden text-sm sm:block font-bold md:text-lg lg:text-xl xl:text-2xl">
                      District*
                    </label>
                    <Input
                      onChange={formikProps.handleChange}
                      name="district"
                      type="text"
                      placeholder="District"
                    >
                      <FaRegAddressCard />
                    </Input>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center space-x-2">
                    <label className=" hidden text-sm sm:block font-bold md:text-lg lg:text-xl xl:text-2xl">
                      Pincode*
                    </label>
                    <Input
                      onChange={formikProps.handleChange}
                      name="pincode"
                      type="text"
                      placeholder="Pincode"
                    >
                      <MdPersonPinCircle />
                    </Input>
                  </div>
                </div>
                <div className="hidden rounded-full w-1/2 sm:flex justify-center">
                  <img src={homeImage} className="w-full max-w-md"></img>
                </div>
              </div>

              {/* contact */}

              <div className="flex flex-col justify-around sm:flex-row pb-3 space-y-2 sm:space-y-0">
                <div className="flex flex-col sm:flex-row items-center space-x-2">
                  <label className=" hidden text-sm sm:block font-bold md:text-lg lg:text-xl xl:text-2xl">
                    Phone Number*
                  </label>
                  <Input
                    onChange={formikProps.handleChange}
                    name="phone_number"
                    type="text"
                    placeholder="Phone Number"
                  >
                    <AiOutlineMobile />
                  </Input>
                </div>

                <div className=" flex flex-col sm:flex-row items-center space-x-2">
                  <label className=" hidden text-sm sm:block font-bold md:text-lg lg:text-xl xl:text-2xl">
                    State*
                  </label>
                  <Input
                    onChange={formikProps.handleChange}
                    name="state"
                    type="text"
                    placeholder="State"
                  >
                    <MdOutlineRealEstateAgent />
                  </Input>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Button title="Submit" theme="primary" />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default React.memo(PersonalDetails);
