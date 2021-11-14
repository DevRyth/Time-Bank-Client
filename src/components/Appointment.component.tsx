import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import Input from '../sharedComponents/input/Input'


export default function Appointment() {
    return (
        <div>
            <div className="border border-gray-900 w-1/3 	 ">
                <div className="p-1"><AiOutlinePlusCircle/></div> <h1 className="text-center font-bold">Appointment Details</h1>
                <div className="flex space-x-5 justify-center " >
                <label>Date</label>
                <Input type="date" children={undefined} name="appointment-date"  ></Input>
                </div>
                </div>
        </div>
    )
}
