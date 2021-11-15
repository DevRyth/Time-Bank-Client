import React from "react";
import Input from "../sharedComponents/input/Input";
import { AiOutlineUser, AiOutlineMobile } from "react-icons/ai";
import { FaRegAddressCard } from "react-icons/fa";
import { BiBuildingHouse } from "react-icons/bi";
import { MdPersonPinCircle } from "react-icons/md";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { Formik, FormikProps, FormikValues } from 'formik';
import axios from "axios";
import { useHistory } from "react-router";
import Button from "../sharedComponents/button/Button";

interface Props {
  className?: string;
}

const PersonalDetails: React.FC<Props> = ({className}) => {

  const history = useHistory();

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
    phone_number: ""
  }

  let day = ["Day"];
  for (let i = 1; i < 32; i++) day.push(i.toString());

  let month = ["Month"];
  for (let i = 1; i < 13; i++) month.push(i.toString());

  let year = ["Year"];
  for (let i = 1971; i < 2016; i++) year.push(i.toString());

  return (
    <div className={className}>
      <div className="text-center  text-yellow-700 from-on-primary-dark text-3xl">
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
              phone_number: values.phone_number
            },
            token: localStorage.getItem("token")
          }
          // const url = "https://fierce-shore-21287.herokuapp.com/register";
          const url = "http://localhost:4000/register";
          const response: any = await axios.post(url, mappedValues);
          if (response.status === 200) {
            history.push("/dashboard");
          }
          // console.log(mappedValues);
          helper.setSubmitting(false);
        }}>
        {(formikProps: FormikProps<FormikValues>) => (
          <form onSubmit={formikProps.handleSubmit} className="flex flex-col justify-center">
            <div className="border  border-gray-400 rounded-lg space-y-3	m-16 p-3">
              <div className="flex flex-col justify-around sm:flex-row ">
                <div className="flex flex-col -space-y-0  ">
                  <label className="text-sm  hidden sm:block font-bold">
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
                <div className="flex flex-col -space-y-0  ">
                  <label className="text-sm hidden sm:block font-bold">
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
                <div className="flex flex-col  -space-y-0 ">
                  <label className="text-sm  hidden sm:block font-bold">
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

              <div className="flex flex-col md:flex-row -space-y-0 justify-around">
                <div className="flex flex-col">
                  <label className="hidden text-sm sm:block font-bold">DOB*</label>
                  <div className="flex">
                    <select
                      onChange={formikProps.handleChange}
                      name="birth_date"
                    >
                      {day.map((value, index) => {
                        return <option key={index}>{value}</option>
                      })}
                    </select>
                    <select
                      onChange={formikProps.handleChange}
                      name="birth_month"
                    >
                      {month.map((value, index) => {
                        return <option key={index}>{value}</option>
                      })}
                    </select>
                    <select
                      onChange={formikProps.handleChange}
                      name="birth_year"
                    >
                      {year.map((value, index) => {
                        return <option key={index}>{value}</option>
                      })}
                    </select>
                  </div>
                </div>
                <div className=" mx-auto sm:mx-0 space-y-3">
                  <label className="hidden  sm:block text-sm font-bold ">
                    Gender*
                  </label>
                  <input
                    onChange={formikProps.handleChange}
                    className=""
                    type="radio"
                    name="gender"
                    value="Male"
                  >
                  </input>
                  <span>Male</span>
                  <input
                    onChange={formikProps.handleChange}
                    className=""
                    type="radio"
                    name="gender"
                    value="Female"
                  ></input>
                  <span>Female</span>
                </div>
              </div>
            </div>
            <div className="border border-gray-400 rounded-lg	m-16 p-3">
              {/* address */}

              <div className="flex flex-col justify-around sm:flex-row">
                <div className=" flex flex-col">
                  <label className="hidden sm:block text-sm font-bold ">
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
                <div className=" flex flex-col">
                  <label className=" hidden text-sm sm:block font-bold">
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

                <div className=" flex flex-col">
                  <label className=" hidden text-sm sm:block font-bold">
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

              {/* contact */}

              <div className="flex flex-col justify-around sm:flex-row">
                <div className=" flex flex-col">
                  <label className=" hidden text-sm sm:block font-bold">Phone Number*</label>
                  <Input
                    onChange={formikProps.handleChange}
                    name="phone_number"
                    type="text"
                    placeholder="Phone Number"
                  >
                    <AiOutlineMobile />
                  </Input>
                </div>

                <div className=" flex flex-col">
                  <label className=" hidden text-sm sm:block font-bold">State*</label>
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
}

 export default React.memo(PersonalDetails);