import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import Input from '../sharedComponents/input/Input'


export default function Appointment() {
    const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const min=[];
    for(let i=1;i<=59;i++)
    min.push(i);
    return (
        <div>
            <div className="border border-gray-900 w-1/3 	 ">
                <div className="p-1"><AiOutlinePlusCircle/></div> <h1 className="text-center font-bold">Appointment Details</h1>
                <div className="flex space-x-5 justify-center " >
                <select name="days">
                    <option selected>Days</option>
                    {
                        days.map(item => (
                            <option >{item}</option>
                        ))
                    }
                </select>
                <select name="min">
                <option selected>min</option>
                {
                    min.map(item =>(
                        <option>{item}</option>
                    ))

                }
                 
                 </select>

                 <select name="sec">
                <option selected>sec</option>
                {
                    min.map(item =>(
                        <option>{item}</option>
                    ))

                }
                 
                 </select>

                </div>
                </div>
        </div>
    )
}
