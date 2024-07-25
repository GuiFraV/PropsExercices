import React from "react";
import ReactDOM from "react-dom/client";

const userInfo = {
  avatar: "https://example.com/avatar.jpg",
  name: "John Doe",
  job: "Développeur web",
  location: "Paris, France",
};

const UserProfile = () => {
  return (
    <div>
      <User {...userInfo} />
    </div>
  );
};

const User = ({ avatar, name, job, location }) => {
  return (
    <>
      <img src={avatar} alt="User avatar" />
      <h2>{name}</h2>
      <p>{job}</p>
      <p>{location}</p>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<UserProfile />);

export default UserProfile;
