import React, { useEffect, useState } from "react";
import { Breadcrumb, Input } from "antd";
import "./style.scss";
import { Link } from "react-router-dom";
import userApi from "./../../service/user/index";

const User = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    userApi
      .getMe()
      .then((res) => {
        setUser(res.data.admin);
        localStorage.setItem("user", res.data.admin.fullName);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(user);
  return (
    <div className="settings">
      <div className="settings_header">
        <h3>Sozlamalar</h3>
        <Breadcrumb
          items={[
            {
              title: (
                <Link to="/dashboard" className="text-[#000]  ">
                  Bosh sahifa
                </Link>
              ),
            },
            {
              title: (
                <Link to="/dashboard/user" className="text-[#000] ">
                  Sozlamalar
                </Link>
              ),
            },
          ]}
        />
      </div>

      <div className="settings_body">
        <div className="inputs border-b">
          <div className="input">
            <p>User's name</p>
            <input
              placeholder="Full name"
              className="focus:outline-purple-500"
              defaultValue={user.fullName}
              style={{ background: "#d7dade", margin: "10px 0" }}
            />
          </div>

          <div className="input">
            <p>User's status</p>
            <input
              placeholder="Username"
              className="focus:outline-purple-500"
              defaultValue={user.username}
              style={{ background: "#d7dade", margin: "10px 0" }}
            />
          </div>
          <div className="input">
            <p>User's password</p>
            <input
              placeholder="Password"
              className="focus:outline-purple-500"
              defaultValue={user.password}
              style={{ background: "#d7dade", margin: "10px 0" }}
            />
          </div>
        </div>
        <div className="settings_footer">
          <button className="active:shadow-xl duration-300 shadow-blue-500">
            Tahrirlash
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
