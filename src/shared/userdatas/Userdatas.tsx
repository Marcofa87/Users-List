import React from "react";
import "./index.scss";

interface UserDatasProp {
  text?: string;
  label?: string;
  icon?: string;
}

function UserDatas({ icon, text, label }: UserDatasProp) {
  return (
    <div className="single-info-component">
      {label && (
        <p className="labelSingleInfo">
          <em>{label}</em>
        </p>
      )}
      {text && (
        <p className="textSingleInfo">
          <span>{text}</span>
        </p>
      )}
      {icon && <i className={"fa fa-" + icon} />}
    </div>
  );
}
export default UserDatas;
