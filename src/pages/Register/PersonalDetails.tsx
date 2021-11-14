import React from "react";
import Input from "../../sharedComponents/input/Input";
import { AiOutlineUser, AiOutlineMobile } from "react-icons/ai";
import { FaRegAddressCard } from "react-icons/fa";
import { BiBuildingHouse } from "react-icons/bi";
import { MdPersonPinCircle } from "react-icons/md";
import { MdOutlineRealEstateAgent } from "react-icons/md";

export default function PersonalDetails() {
  return (
    <div>
     
        <div className="text-center  text-yellow-700 from-on-primary-dark text-3xl">
          Registration
        </div>
        <div className="border  border-gray-400 rounded-lg space-y-3	m-16 p-3">
        <div className="flex flex-col justify-around sm:flex-row ">
          <div className="flex flex-col -space-y-0  ">
            <label className="text-sm  hidden sm:block font-bold">
              First name*
            </label>
            <Input name="firstname" type="text" placeholder="Akarsh">
              <AiOutlineUser />
            </Input>
          </div>
          <div className="flex flex-col -space-y-0  ">
            <label className="text-sm hidden sm:block font-bold">
              Middle name
            </label>
            <Input name="middlename" type="text" placeholder="Singh">
              <AiOutlineUser />
            </Input>
          </div>
          <div className="flex flex-col  -space-y-0 ">
            <label className="text-sm  hidden sm:block font-bold">
              Last name*
            </label>
            <Input name="lastname" type="text" placeholder="Gangwar">
              <AiOutlineUser />
            </Input>
          </div>
        </div>

        <div className="flex flex-col md:flex-row -space-y-0 justify-around">
          <div className="flex flex-col">
            <label className="hidden text-sm sm:block font-bold">DOB*</label>
            <Input name="mobile" type="text" placeholder="DOB">
              <AiOutlineMobile />
            </Input>
          </div>
          <div className=" mx-auto sm:mx-0 space-y-3">
            <label className="hidden  sm:block text-sm font-bold ">
              Gender*
            </label>
            <input className="" type="radio" name="gender" value="Male"></input>
            <span>Male</span>
              <input
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
            <Input name="Address" type="text" placeholder="Flat no./area">
              <BiBuildingHouse />
            </Input>
          </div>
          <div className=" flex flex-col">
            <label className=" hidden text-sm sm:block font-bold">
              District*
            </label>
            <Input name="district" type="text" placeholder="District">
              <FaRegAddressCard />
            </Input>
          </div>

          <div className=" flex flex-col">
            <label className=" hidden text-sm sm:block font-bold">
              Pincode*
            </label>
            <Input name="pincode" type="text" placeholder="Pincode">
              <MdPersonPinCircle />
            </Input>
          </div>
        </div>

        {/* contact */}

        <div className="flex flex-col justify-around sm:flex-row">
          <div className=" flex flex-col">
            <label className=" hidden text-sm sm:block font-bold">Phone*</label>
            <Input name="mobile" type="text" placeholder="mobile">
              <AiOutlineMobile />
            </Input>
          </div>

          <div className=" flex flex-col">
            <label className=" hidden text-sm sm:block font-bold">State*</label>
            <Input name="state" type="text" placeholder="State">
              <MdOutlineRealEstateAgent />
            </Input>
          </div>
        </div>
      </div>
    </div>
  );
}
