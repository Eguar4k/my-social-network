import React, { useState, useEffect } from "react";
// import Preloader from "../../Common/PreLoader/Preloader";
// import s from "./ProfileStatus.module.css";

type PropsType ={
  updateStatus: (statusLocal:string)=> void
  status: string
  isOwner: boolean
}


const ProfileStatusWithHooks: React.FC<PropsType> = React.memo(
  ({ updateStatus, status, isOwner }) => {
    // console.log(props);
    let [editMode, setEditMode] = useState<boolean>(false);
    let [statusLocal, setStatus] = useState<string>(status);
    // let arr = useState(false);
    // let editMode = arr[0];
    // let setEditMode = arr[1];
    // console.log("status render");
    useEffect(() => {
      setStatus(status);
    }, [status]);

    const activatEditMode = () => {
      isOwner && setEditMode(true);
    };

    const deActivatEditMode = () => {
      setEditMode(false);
      // props.updateStatus(status);
      updateStatus(statusLocal);
    };

    const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setStatus(e.currentTarget.value);
    };

    return (
      <div>
        {!editMode && (
          <div>
            <b>Status : </b>
            <span onDoubleClick={activatEditMode}>{status || "No status"}</span>
          </div>
        )}
        {editMode && (
          <div>
            <input
              onChange={onStatusChange}
              autoFocus={true}
              onBlur={deActivatEditMode}
              value={statusLocal}
            />
          </div>
        )}
      </div>
    );
  }
);

export default ProfileStatusWithHooks;
