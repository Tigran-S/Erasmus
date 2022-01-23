import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { user } from "../login/loginData";

export default function Settings() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.password.value);
    user.USERNAME = e.target.email.value;
    user.PASSWORD = e.target.password.value;
  };
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Type your email here..."
            name="email"
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Type your new password here..."
            name="password"
          />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
