import React from "react";
import Input from "../../sharedComponents/input/Input";
import { AiOutlineUser,AiOutlineMobile } from "react-icons/ai";
import {FaRegAddressCard} from "react-icons/fa";
import {BiBuildingHouse} from "react-icons/bi";
import {MdPersonPinCircle} from "react-icons/md";
import {MdOutlineRealEstateAgent} from "react-icons/md";

export default function PersonalDetails() {
  return (
    <div>
       <div className="text-center  text-yellow-700 from-on-primary-dark text-3xl">
           Registration
       </div>
      <div className="flex flex-col justify-around sm:flex-row ">
        <div className="flex flex-col -space-y-0  ">
          <label className="text-sm  hidden sm:block ">First name</label>
          <Input name="firstname" type="text" placeholder="Akarsh">
            <AiOutlineUser />
          </Input>
        </div>
        <div className="flex flex-col -space-y-0  ">
          <label className="text-sm hidden sm:block ">Middle name</label>
          <Input name="middlename" type="text" placeholder="Singh">
            <AiOutlineUser />
          </Input>
        </div>
        <div className="flex flex-col  -space-y-0 ">
          <label className="text-sm  hidden sm:block">Last name</label>
          <Input name="lastname" type="text" placeholder="Gangwar">
            <AiOutlineUser />
          </Input>
        </div>
      </div>

      <div>
          <div>
          <label className="hidden text-sm">DOB</label>

          <label className=" hidden text-sm sm:block">Ph.</label>
          <Input name="mobile" type="text" placeholder="mobile"><AiOutlineMobile/></Input>

          </div>
          <div>
              
          <label className="hidden sm:block text-sm ">Address</label>
          <Input name="Address" type="text" placeholder="Flat no./area"><BiBuildingHouse/></Input>

          <label className=" hidden text-sm sm:block">District</label>
          <Input name="district" type="text" placeholder="District"><FaRegAddressCard/></Input>

          

          <label className=" hidden text-sm sm:block">Pincode</label>
          <Input name="pincode" type="text" placeholder="Pincode"><MdPersonPinCircle/></Input>

          <label className=" hidden text-sm sm:block">State</label>
          <Input name="state" type="text" placeholder="State"><MdOutlineRealEstateAgent/></Input>

         
          </div>

      </div>
    </div>
  );
}
