import React, { useContext } from "react";
import "../../assets/styles/account.css";
import { GiTwoCoins } from "react-icons/gi";
import { FaTree } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import Avatar from "react-avatar";

export default function Profile() {
  const { userLogin, users } = useContext(DataContext);
  const navigate = useNavigate();

  // const findUser = users?.find((user) => user?.user_id === userLogin?.user_id);

  return (
    <>
      <div className="profile-container">
        <div className="header-profile">
          <img src={userLogin?.background_url} alt="" />
        </div>
        <div className="id-profile">
          <div className="profile-picture">
            {userLogin?.image_url ? (
              <Avatar src={userLogin?.image_url} id="img-profile" />
            ) : (
              <Avatar name={userLogin?.username} id="img-profile" />
            )}
            {/* <img src={userLogin?.image_url} alt="" /> */}
          </div>
          {/* <div className="col-lg-2 col-md-2 space-profile"></div> */}
          <div className="name-usn col-lg-6 col-md-6 col-sm-6">
            <h1>{userLogin?.fullname}</h1>
            <p>@{userLogin?.username}</p>
          </div>
          <div className="btn-edit-profile col-lg-3 col-md-3 col-sm-6">
            <button
              onClick={() => {
                navigate.push("/editProfile");
              }}
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
}