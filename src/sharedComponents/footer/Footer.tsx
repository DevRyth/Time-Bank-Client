import React from "react";
import { AiFillInstagram } from "react-icons/ai";

import { FaFacebook, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
// import { BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";
interface Props {
  path?: string;
}
const Footer: React.FC<Props> = ({ path }) => {
  return (
    <div className=" bg-primary-dark relative pt-1 border-b-8 text-secondary-dark">
      <div className="container mx-auto px-6">
        {/* <div className="sm:flex sm:mt-8"> */}
        <div className="sm:flex flex-col pt-6 md:flex-row justify-between ">
          <div className="flex flex-col mb-6 sm:flex items-center">
            <div className=" text-2xl font-extrabold mb-2">Time Bank</div>
            <div className="w-2/3 text-sm text-center">
              Lorem ndv mndfvbjhdf vbolo
            </div>
            <div className="hidden space-x-2  md:flex flex-row mt-6">
              <FaFacebook className="hover:-translate-y-1 transform" />
              <AiFillInstagram className="hover:-translate-y-1 transform" />
              <FaTwitterSquare className="hover:-translate-y-1 transform" />
              <FaLinkedin className="hover:-translate-y-1 transform" />
            </div>
          </div>

          <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col  md:flex-row justify-around mr-auto">
            <div className="flex flex-col sm:flex items-center">
              <div className="font-extrabold text-secondary-dark uppercase mb-2">
                header 1
              </div>
              <div className="my-2">
                <div className="text-secondary-dark  text-md hover:text-white">
                  <Link to={"https://www.google.com/"}>link 1</Link>
                </div>
              </div>
              <div className="my-2">
                <div className="text-secondary-dark  text-md hover:text-white">
                  <Link to={"https://www.google.com/"}>link 2</Link>
                </div>
              </div>
              <div className="my-2">
                <div className="text-secondary-dark  text-md hover:text-white">
                  <Link to={"https://www.google.com/"}>link 3</Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex items-center">
              <div className="font-extrabold text-secondary-dark uppercase mt-4 md:mt-0 mb-2">
                header 2
              </div>
              <div className="my-2">
                <div className="text-secondary-dark  text-md hover:text-white">
                  <Link to={"https://www.google.com/"}>link 4</Link>
                </div>
              </div>
              <div className="my-2">
                <div className="text-secondary-dark  text-md hover:text-white">
                  <Link to={"https://www.google.com/"}>link 5</Link>
                </div>
              </div>
              <div className="my-2">
                <div className="text-secondary-dark  text-md hover:text-white">
                  <Link to={"https://www.google.com/"}>link 6</Link>
                </div>
              </div>
            </div>
          </div>

          <div className=" mt-10 flex flex-row justify-center md:invisible">
            <FaFacebook className="hover:-translate-y-1 transform" />
            <AiFillInstagram className="hover:-translate-y-1 transform" />
            <FaTwitterSquare className="hover:-translate-y-1 transform" />
            <FaLinkedin className="hover:-translate-y-1 transform" />
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className="container mx-auto px-6">
        <div className="sm:flex items-center mt-16 border-t-2 border-gray-300 flex flex-col md:flex-row justify-around ">
          <div className="sm:w-2/3 text-left py-6">
            <div className="md:flex flex-row justify-around">
              <div className="sm:text-center text-sm text-secondary-dark font-bold mb-2 hover:text-white">
                <Link to={"https://www.google.com/"}>
                  ©2020 All rights are reserved
                </Link>
              </div>
              <div className="sm:text-center text-sm text-secondary-dark font-bold mb-2 hover:text-white">
                <Link to={"https://www.google.com/"}>Terms of Use</Link>
              </div>
              <div className="sm:text-center text-sm text-secondary-dark font-bold mb-2 hover:text-white">
                <Link to={"https://www.google.com/"}>Privacy Policy</Link>
              </div>
              <div className="sm:text-center text-sm text-secondary-dark font-bold mb-2 hover:text-white">
                <Link to={"https://www.google.com/"}>Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
