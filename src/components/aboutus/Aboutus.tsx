import React from "react";
interface Props {}
const Aboutus: React.FC<Props> = () => {
  return (
    <div className="h-screen">
      <div className="h-1/3 border-2 border-secondary-lite text-center pt-20 font-extrabold text-primary-dark text-3xl">
        Our Company
      </div>
      <div className="h-full">
        <div className="m-4 mt-10 min-h-screen text-3xl font-extrabold text-center text-primary-dark flex flex-col lg:mt-20">
          You Teach You Learn
          <div className=" mt-4 mb-8 text-center text-sm lg:mt-10 text-secondary-dark">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
            nihil harum natus, esse cum saepe ducimus libero repellendus veniam
            reprehenderit aperiam dolorem incidunt quos, illo tempora omnis!
            Minima, excepturi minus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Atque, magnam tempore, temporibus animi porro
            maiores ipsum expedita deserunt, repellat quibusdam ipsam molestiae
            possimus sed? Magni, ducimus! Natus dolorem quasi rem!
          </div>
          <div className="mt-20 text-center text-3xl">Members</div>
          <div className="text-lg text-center mt-6 text-secondary-dark">
            <div className="">Shivam Yadav</div>
            <div className="">Abhishek Kumar Singh</div>
            <div className="">Utkarsh Gangwar</div>
            <div className="">Akarsh Gangwar</div>
            <div className="">Divyanshu Sinha</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Aboutus;
