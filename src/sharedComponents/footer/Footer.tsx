import React from "react";
// import { BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";
interface Props {
  path?: string;
}
const Footer: React.FC<Props> = ({ path }) => {
  return (
    <div className=" bg-primary-dark relative pt-1 border-b-8 text-secondary-dark">
      <div className="container mx-auto px-6">
        <div className="sm:flex sm:mt-8 md:justify-between">
          <div className="sm:flex flex-col md:flex-row">
            <div className="flex flex-col mb-6">
              <div className=" text-2xl mb-2">Time Bank</div>
              <div className="w-2/3">
                Lorem ndv mndfvbjhdf vjkdbvkajd vkjd dvbbolo
              </div>
            </div>

            <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-around ">
              <div className="flex flex-col">
                <div className="font-bold text-secondary-dark uppercase mb-2">
                  header 1
                </div>
                <div className="my-2">
                  <div className="text-secondary-dark  text-md hover:text-blue-500">
                    <Link to={"https://www.google.com/"}>link 1</Link>
                  </div>
                </div>
                <div className="my-2">
                  <div className="text-secondary-dark  text-md hover:text-blue-500">
                    <Link to={"https://www.google.com/"}>link 2</Link>
                  </div>
                </div>
                <div className="my-2">
                  <div className="text-secondary-dark  text-md hover:text-blue-500">
                    <Link to={"https://www.google.com/"}>link 3</Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="font-bold text-secondary-dark uppercase mt-4 md:mt-0 mb-2">
                  header 2
                </div>
                <div className="my-2">
                  <div className="text-secondary-dark  text-md hover:text-blue-500">
                    <Link to={"https://www.google.com/"}>link 4</Link>
                  </div>
                </div>
                <div className="my-2">
                  <div className="text-secondary-dark  text-md hover:text-blue-500">
                    <Link to={"https://www.google.com/"}>link 5</Link>
                  </div>
                </div>
                <div className="my-2">
                  <div className="text-secondary-dark  text-md hover:text-blue-500">
                    <Link to={"https://www.google.com/"}>link 6</Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="font-bold text-secondary-dark uppercase mt-4 md:mt-0 mb-2">
                  header 3
                </div>
                <div className="my-2">
                  <div className="text-secondary-dark  text-md hover:text-blue-500">
                    <Link to={"https://www.google.com/"}>link 7</Link>
                  </div>
                </div>
                <div className="my-2">
                  <div className="text-secondary-dark  text-md hover:text-blue-500">
                    <Link to={"https://www.google.com/"}>link 8</Link>
                  </div>
                </div>
                <div className="my-2">
                  <div className="text-secondary-dark  text-md hover:text-blue-500">
                    <Link to={"https://www.google.com/"}>link 9</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-start md:flex-row justify-around">
          <div className="sm:w-2/3 text-left py-6">
            <div className="md:flex flex-row justify-around">
              <div className="text-sm text-secondary-dark font-bold mb-2">
                © 2020
              </div>
              <div className="text-sm text-secondary-dark font-bold mb-2">
                {" "}
                Terms of Service
              </div>
              <div className="text-sm text-secondary-dark font-bold mb-2">
                {" "}
                Privacy Policy
              </div>
              <div className="text-sm text-secondary-dark font-bold mb-2">
                {" "}
                Cookie Policy
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
