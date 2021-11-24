import React from 'react'
import Button from '../sharedComponents/button/Button'

export default function EnrolledCourse() {
    return (
        <div className=" flex flex-col  font-extrabold   p-4 border-black border-2   space-y-1">
         
            
             
               <div className="flex  justify-between  p-3 space-x-2 items-center shadow-stacked rounded-lg ">
                   <div className="flex space-x-1">
                <div className="mr-3">
                    Tuesday
                </div>

                <div>|</div>

                <div className="pl-3">
                     12:30
                </div>
            </div>
                <Button title="Enroll" theme="primary">
                </Button>

            </div>
           

                
           


            <div className="flex justify-between  p-3 space-x-2 items-center shadow-stacked rounded-lg">
            <div className="flex space-x-1">

                <div className="mr-3">
                    Saturday
                </div>

                <div>|</div>

                <div className="pl-3">
                     06:00
                </div>
                </div>

                <Button title="Enroll" theme="primary">
                </Button>

            </div>


            <div className="flex  justify-between  p-3 space-x-2 items-center shadow-stacked rounded-lg">
            <div className="flex space-x-1">
                <div className="mr-3">
                    Thursday
                </div>

                <div>|</div>

                <div className="pl-3">
                     10:50
                </div>
                </div>
                <Button title="Enroll" theme="primary">
                </Button>
            </div>
            


           
           </div>
    )
}
