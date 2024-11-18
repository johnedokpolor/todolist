import React from "react";
import { assets } from "../assets/assests";
import { Link } from "react-router-dom";

const SignUp = () => {
  const BgStyle = {
    backgroundImage: `url(${assets.bgImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPostion: "center",
    backgroundSize: "cover",
  };
  return (
    <div
      className="flex h-screen w-screen justify-between pr-10 pt-5"
      style={BgStyle}
    >
      <div className="w-[330px]">
        <img src={assets.signupImg} alt="" />
      </div>
      <div>
        <p className="pb-5 text-2xl font-bold">Sign Up</p>
        <form className="flex flex-col gap-4" action="">
          <div className="flex w-[600px] gap-3 rounded-md border border-black/60 p-3">
            <img className="h-7 w-7" src={assets.firstnameImg} alt="" />
            <input
              className="outline-0"
              type="text"
              placeholder="Enter First Name"
            />
          </div>
          <div className="flex w-[600px] gap-3 rounded-md border border-black/60 p-3">
            <img className="h-7 w-7" src={assets.lastnameImg} alt="" />
            <input
              className="outline-0"
              type="text"
              placeholder="Enter Last Name"
            />
          </div>
          <div className="flex w-[600px] gap-3 rounded-md border border-black/60 p-3">
            <img className="h-7 w-7" src={assets.usernameImg} alt="" />
            <input
              className="outline-0"
              type="text"
              placeholder="Enter Username"
            />
          </div>
          <div className="flex w-[600px] gap-3 rounded-md border border-black/60 p-3">
            <img className="h-7 w-7" src={assets.emailImg} alt="" />
            <input
              className="outline-0"
              type="email"
              placeholder="Enter Email"
            />
          </div>
          <div className="flex w-[600px] gap-3 rounded-md border border-black/60 p-3">
            <img className="h-7 w-7" src={assets.passwordImg} alt="" />
            <input
              className="outline-0"
              type="password"
              placeholder="Enter Password"
            />
          </div>
          <div className="flex w-[600px] gap-3 rounded-md border border-black/60 p-3">
            <img className="h-7 w-7" src={assets.confirmpasswordImg} alt="" />
            <input
              className="outline-0"
              type="password"
              placeholder=" Confirm Password"
            />
          </div>

          <div className="space-x-5">
            <input type="checkbox" name="" id="agree" />
            <label htmlFor="agree">I agree to all terms</label>
          </div>
          <button className="mb-4 w-fit rounded-sm bg-[#FF9090] p-3 text-white">
            Register
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <span className="text-[#008BD9] lg:cursor-pointer">
            <Link to={"/signin"}> Sign In</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
