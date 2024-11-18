import React from "react";
import { assets } from "../assets/assests";
import { Link } from "react-router-dom";

const SignIn = () => {
  const BgStyle = {
    backgroundImage: `url(${assets.bgImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPostion: "center",
    backgroundSize: "cover",
  };
  return (
    <div
      className="relative flex h-screen w-screen items-center justify-between p-10"
      style={BgStyle}
    >
      <div>
        <p className="pb-5 text-2xl font-bold">Sign Up</p>
        <form className="flex flex-col gap-4" action="">
          <div className="flex w-[600px] gap-3 rounded-md border border-black/60 p-3">
            <img className="h-7 w-7" src={assets.usernameImg} alt="" />
            <input
              className="outline-0"
              type="password"
              placeholder="Enter Username"
            />
          </div>
          <div className="flex w-[600px] gap-3 rounded-md border border-black/60 p-3">
            <img className="h-7 w-7" src={assets.passwordImg} alt="" />
            <input
              className="outline-0"
              type="password"
              placeholder="Enter Last Name"
            />
          </div>

          <div className="space-x-5">
            <input type="checkbox" name="" id="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <button className="mb-4 w-20 rounded-sm bg-[#FF9090] p-3 text-white">
            Login
          </button>
        </form>
        <div className="mb-5 flex items-center gap-5">
          <p>Or, Login with</p>
          <div className="flex gap-3">
            <img src={assets.fbImg} alt="" />
            <img src={assets.googleImg} alt="" />
            <img src={assets.twitterImg} alt="" />
          </div>
        </div>
        <p>
          Don't have an account?{" "}
          <span className="text-[#008BD9] lg:cursor-pointer">
            <Link to="/signup">Create One</Link>
          </span>
        </p>
      </div>
      <div className="absolute -bottom-8 right-10 w-[500px]">
        <img className="" src={assets.signinImg} alt="" />
      </div>
    </div>
  );
};

export default SignIn;
