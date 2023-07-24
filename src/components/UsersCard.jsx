import React from "react";

const UsersCard = ({ user, deleteUsers, setUpdateInfo,openModal}) => {

  const handleDelete=()=>{
    deleteUsers('/users', user.id)
  }

  const hanldeUpdate =()=>{
    setUpdateInfo(user)
    openModal()
  }
  return (
    <article className="card">
      <h2>{user.first_name} <br /><br />{user.last_name}</h2>
      <hr />
      <ul>
        <li>
          <span className="card__ul__li__date">Email</span>
          <span className="card__ul__li__res">{user.email}</span>
        </li>
        <li>
          <span className="card__ul__li__date">Birthday</span>
          <span className="card__ul__li__res">{user.birthday}</span>
        </li>
      </ul>
      <hr />
      <footer>
        <button className="footer__btn_trash" onClick={handleDelete}><i className=' bx bx-trash bx-sm'></i></button>
        <button className="footer__btn_update" onClick={hanldeUpdate}><i className='bx bx-pencil bx-sm' ></i></button>
      </footer>
    </article>
  );
};

export default UsersCard;
