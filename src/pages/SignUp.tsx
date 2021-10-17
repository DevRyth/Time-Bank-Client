import React from "react";
import { Link } from "react-router-dom";

const SignUp: React.FC = () => {
  return (
    <div className="bg-background-lite h-screen w-screen">
      <div className="text-center p-10">
        <h1 className="text-center text-4xl">Get Started</h1>
        <p className="tracking-wider pt-4">
          Already have an account?{" "}
          <Link className="text-secondary-dark underline" to="/">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default React.memo(SignUp);
