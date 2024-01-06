import React from "react";

interface UserInfos {
  text: string;
  icon: string;
}

function UserInfoComponent({ icon, text }: UserInfos) {
  return (
    <>
      <div className="separator-text-component">
        <div className="actionIcon">
          <p>
            <i className={"fa fa-" + icon} aria-hidden="true" /> {text}
          </p>
        </div>
      </div>
    </>
  );
}

export default UserInfoComponent;
