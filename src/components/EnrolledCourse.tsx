import React from 'react'
import Button from '../sharedComponents/button/Button'

export default function EnrolledCourse() {
    return (
        <div className=" flex flex-col    p-3 border-black border-2   space-y-1">
         
            
             
               <div className="flex  justify-between  p-3 space-x-2 items-center shadow-stacked rounded-lg ">
                   <div className="flex space-x-1">
                <div>
                    Tue
                </div>

                <div>|</div>

                <div>
                     12:30
                </div>
            </div>
                <Button title="Enroll" theme="primary">
                </Button>

            </div>
           

                
           


            <div className="flex justify-between  p-3 space-x-2 items-center shadow-stacked rounded-lg">
            <div className="flex space-x-1">

                <div>
                    Sat
                </div>

                <div>|</div>

                <div>
                     06:00
                </div>
                </div>

                <Button title="Enroll" theme="primary">
                </Button>

            </div>


            <div className="flex  justify-between  p-3 space-x-2 items-center shadow-stacked rounded-lg">
            <div className="flex space-x-1">
                <div>
                    Sun
                </div>

                <div>|</div>

                <div>
                     10:50
                </div>
                </div>
                <Button title="Enroll" theme="primary">
                </Button>
            </div>
            


           
           </div>
    )
}
