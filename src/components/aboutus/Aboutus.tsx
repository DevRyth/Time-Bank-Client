import React from "react";
interface Props {}
const Aboutus: React.FC<Props> = () => {
  return (
    <div className="h-screen bg-primary-dark">
      <div className="h-1/3  border-2 border-secondary-lite text-center pt-20 font-extrabold text-secondary-dark text-4xl">
        {" "}
        Our Company
      </div>
      <div className="h-full  bg-secondary-dark">
        <div className=" m-4  mt-10 min-h-screen bg-primary-dark text-4xl text-center text-secondary-dark flex flex-col lg:mt-20">
          You Teach You Learn
          <div className=" mt-4 mb-8 text-center text-xl lg:mt-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
            nihil harum natus, esse cum saepe ducimus libero repellendus veniam
            reprehenderit aperiam dolorem incidunt quos, illo tempora omnis!
            Minima, excepturi minus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Atque, magnam tempore, temporibus animi porro
            maiores ipsum expedita deserunt, repellat quibusdam ipsam molestiae
            possimus sed? Magni, ducimus! Natus dolorem quasi rem!
          </div>
          <div className="mt-20 text-center text-2xl">Members</div>
          <div className="text-center text-sm">Shivam yadav</div>
          <div className="text-center text-sm">Abhishek kumar singh</div>
          <div className="text-center text-sm">Utkarsh gangwar</div>
          <div className="text-center text-sm">Akarsh gangwar</div>
          <div className="text-center text-sm">Divyanshu sinha</div>
        </div>
      </div>
    </div>
  );
};
export default Aboutus;
