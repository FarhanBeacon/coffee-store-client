import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../providers/AuthProvider";
import swal from "sweetalert";
import logo1 from "../assets/logo1.png";

const Header = () => {
  const { signOutUser, user } = useContext(AuthContext);
  const handleSignOut = () => {
    signOutUser().then(() => {
      swal("Logout", "Logout from the site successfully", "success");
    });
  };
  return (
    <>
      <div className="font-rancho border-b-4 border-[#9f7f33]" id="header-bg">
        <div className="flex justify-between items-center px-6">
          <div className="flex justify-center items-center gap-2 p-2">
            <img
              src={logo1}
              alt="logo"
              width="65px"
              height="80px"
            />
            <h2 className="text-5xl text-center text-[#FFF]">Coffee Store</h2>
          </div>
          <div id="banner-actions" className="space-x-2">
            <NavLink
              to={"/users"}
              className="btn btn-outline hover:bg-[black] text-xl border-[white] text-[white]"
            >
              Users
            </NavLink>
            {user ? (
              <Link
                to={""}
                onClick={handleSignOut}
                className="btn text-xl px-6"
              >
                LogOut
              </Link>
            ) : (
              <Link to={"/login"} className="btn text-xl px-6">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
