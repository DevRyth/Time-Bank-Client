import React from "react";
import Input from "../sharedComponents/input/Input";
import { AiOutlineUser, AiOutlineMobile } from "react-icons/ai";
import { FaRegAddressCard } from "react-icons/fa";
import { BiBuildingHouse } from "react-icons/bi";
import { MdPersonPinCircle } from "react-icons/md";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { Formik } from "formik";
import Button from "../sharedComponents/button/Button";
import Select from "../sharedComponents/Select";
import homeImage from "../Images/home.png";
import { store, useAppSelector } from "../Store/store";
import { registerUserWithInfo } from "../actions/register.action";
import { registerError, registerLoading } from "../selectors/register.selector";
import Alert from "../sharedComponents/Alert/Alert";

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

  let day: string[] = [];
  for (let i = 1; i < 32; i++) day.push(i.toString());

  let month: string[] = [];
  for (let i = 1; i < 13; i++) month.push(i.toString());

  let year: string[] = [];
  for (let i = 1971; i < 2016; i++) year.push(i.toString());

  const isLoading = useAppSelector(registerLoading);
  const errorMessage = useAppSelector(registerError);

  return (
    <div className={`py-6 ${className}`}>
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
          // const url = BASE_URL + "/register";
          // const response: any = await axios.post(url, mappedValues);
          // if (response.status === 200) {
          //   window.location.href = "/dashboard";
          // }
          // console.log(mappedValues);
          // helper.setSubmitting(false);
          store.dispatch(registerUserWithInfo(mappedValues));
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center"
          >
            {errorMessage && (
              <Alert
                className="rounded-3xl absolute inset-x-0 mx-auto max-w-max text-xs pt-2 pb-2 pl-4 pr-4 md:text-base md:px-6 md:py-2"
                containsIcon={false}
              >
                {errorMessage}
              </Alert>
            )}
            <div className="border border-gray-400 rounded-lg space-y-7 m-7 p-6">
              <div className="flex flex-col sm:flex-row justify-around items-center sm:items-stretch">
                <div className="border border-black w-28 h-32 md:w-36 md:h-40 rounded-lg p-3 sm:pb-0 text-center flex items-center sm:mt-5">
                  Click here to upload Profile Photo
                </div>
                <div className="flex flex-col space-y-7 mt-5">
                  <div className="flex flex-row items-center space-x-2">
                    <label className="text-sm md:text-base hidden sm:block font-bold">
                      First name*
                    </label>
                    <Input
                      onChange={handleChange}
                      name="first_name"
                      type="text"
                      placeholder="First Name"
                    >
                      <AiOutlineUser />
                    </Input>
                  </div>

                  <div className="flex flex-row items-center space-x-2">
                    <label className="hidden sm:block font-bold">
                      Middle name
                    </label>
                    <Input
                      onChange={handleChange}
                      name="middle_name"
                      type="text"
                      placeholder="Middle Name"
                    >
                      <AiOutlineUser />
                    </Input>
                  </div>

                  <div className="flex flex-row items-center space-x-2">
                    <label className="hidden sm:block font-bold">
                      Last name*
                    </label>
                    <Input
                      onChange={handleChange}
                      name="last_name"
                      type="text"
                      placeholder="Last Name"
                    >
                      <AiOutlineUser />
                    </Input>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-around items-center pb-3">
                <div className="flex flex-row space-x-2 items-center">
                  <label className="hidden sm:block font-bold">DOB*</label>
                  <div className="flex justify-center space-x-2">
                    <Select
                      label="Day"
                      value={values.birth_date}
                      name="birth_date"
                      options={day}
                      onChange={handleChange}
                    />
                    <Select
                      label="Month"
                      name="birth_month"
                      value={values.birth_month}
                      options={month}
                      onChange={handleChange}
                    />
                    <Select
                      label="Year"
                      name="birth_year"
                      value={values.birth_year}
                      options={year}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-3 pt-4 md:pt-0 flex flex-row items-center space-x-2">
                  <label className="hidden sm:block font-bold">Gender*</label>
                  <div className="flex flex-row space-x-7 items-center">
                    <div className="flex flex-row space-x-2 items-center">
                      <span>Male</span>
                      <input
                        onChange={handleChange}
                        className=""
                        type="radio"
                        name="gender"
                        value="Male"
                      ></input>
                    </div>
                    <label className="flex flex-row space-x-2 items-center">
                      <span>Female</span>
                      <input
                        onChange={handleChange}
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
                    <label className="hidden sm:block font-bold">
                      Address*
                    </label>
                    <Input
                      onChange={handleChange}
                      name="address"
                      type="text"
                      placeholder="Flat no./area"
                    >
                      <BiBuildingHouse />
                    </Input>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center space-x-2">
                    <label className="hidden sm:block font-bold">
                      District*
                    </label>
                    <Input
                      onChange={handleChange}
                      name="district"
                      type="text"
                      placeholder="District"
                    >
                      <FaRegAddressCard />
                    </Input>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center space-x-2">
                    <label className=" hidden sm:block font-bold">
                      Pincode*
                    </label>
                    <Input
                      onChange={handleChange}
                      name="pincode"
                      type="text"
                      placeholder="Pincode"
                    >
                      <MdPersonPinCircle />
                    </Input>
                  </div>
                </div>
                <div className="hidden rounded-full w-1/2 sm:flex justify-center">
                  <img
                    src={homeImage}
                    className="w-full max-w-md"
                    alt="address"
                  ></img>
                </div>
              </div>

              {/* contact */}

              <div className="flex flex-col justify-around sm:flex-row pb-3 space-y-2 sm:space-y-0">
                <div className="flex flex-col sm:flex-row items-center space-x-2">
                  <label className=" hidden sm:block font-bold">
                    Phone Number*
                  </label>
                  <Input
                    onChange={handleChange}
                    name="phone_number"
                    type="text"
                    placeholder="Phone Number"
                  >
                    <AiOutlineMobile />
                  </Input>
                </div>

                <div className=" flex flex-col sm:flex-row items-center space-x-2">
                  <label className="hidden sm:block font-bold">State*</label>
                  <Input
                    onChange={handleChange}
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
              <Button title="Submit" theme="primary" isSubmitting={isLoading} />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default React.memo(PersonalDetails);
