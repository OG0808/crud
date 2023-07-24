import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const FormUsers = ({ createUser, updateInfo, updateUser, setUpdateInfo, closeModal}) => {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    reset(updateInfo);
  }, [updateInfo]);

  const submit = (data) => {
    if (updateInfo) {
      updateUser("/users", updateInfo.id, data);
      setUpdateInfo();
      closeModal()
    } else {
      createUser("/users", data);
      closeModal()
    }
    reset({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birthday: "",
    });
  };

  return (
    <form className="formuser" onSubmit={handleSubmit(submit)}>
      <h2 className="formuser__title">{updateInfo ? "Update " : "New user"}</h2>
      <div className="formuser__container">
        <label className="formuser__label" htmlFor="first_name">
          First Name
        </label>
        <input
          className="formuser__input"
          {...register("first_name")}
          type="text"
          id="first_name"
        />
      </div>
      <div className="formuser__container">
        <label className="formuser__label" htmlFor="last_name">
          Last Name
        </label>
        <input
          className="formuser__input"
          {...register("last_name")}
          type="text"
          id="last_name"
        />
      </div>
      <div className="formuser__container">
        <label className="formuser__label" htmlFor="email">
          Email
        </label>
        <input
          className="formuser__input"
          {...register("email")}
          type="email"
          id="email"
        />
      </div>
      <div className="formuser__container">
        <label className="formuser__label" htmlFor="password">
          Password
        </label>
        <input
          className="formuser__input"
          {...register("password")}
          type="password"
          id="password"
        />
      </div>
      <div className="formuser__container">
        <label className="formuser__label" htmlFor="birthday">
          Birthday
        </label>
        <input
          className="formuser__input"
          {...register("birthday")}
          type="date"
          id="birthday"
        />
      </div>
       
      <button  className="formuser__btn">{updateInfo ? "Update User" : "Add a new user"}</button>
    </form>
  );
};

export default FormUsers;
