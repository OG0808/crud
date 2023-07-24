import useFetch from "./hooks/useFetch";
import "./App.css";
import { useEffect, useState } from "react";
import UsersCard from "./components/UsersCard";
import FormUsers from "./components/FormUsers";
import Modal from 'react-modal'
function App() {

  // Manejo del modal del formulario:
  // esto formulario lo saque de chatgpt con la libreria de react-modal
  // pense hacerlo con un renderizado condicional pero esta libreria es un poco mas facil
  // de hacerlo sin muchas complicaciones

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  // === === === /// === === === /// === === === /// === === === /// 



  const [updateInfo, setUpdateInfo] = useState(undefined)

  const baseUrl = "https://users-crud.academlo.tech";

  const [users, getUsers, createUser, deleteUsers, updateUser] =
    useFetch(baseUrl);
  console.log(users);

  useEffect(() => {
    getUsers("/users");
  }, []);

  return (
    <div className="main__container">
      <header>
      <h1>Users</h1>
      {/* <div className="header__btn_container"> */}
      
      <button className="header__btn" onClick={openModal}> <i class='bx bx-plus bx-md'></i> Crear nuevo usuario</button>
      {/* </div> */}
      </header>
      <section className="modal__container">
     <Modal 
     className="modal_container"
       isOpen={modalIsOpen}
       onRequestClose={closeModal}
       contentLabel="My Form"
       ariaHideApp={false}>
      <FormUsers
      createUser={createUser}
      updateInfo={updateInfo}
      updateUser={updateUser}
      setUpdateInfo={setUpdateInfo}
      
      closeModal={closeModal}

      />
       </Modal>
       </section>
      <section className="section__container__cards">
      {users?.map((user) => (
        <UsersCard key={user.id} 
        user={user}
        deleteUsers={deleteUsers}
        setUpdateInfo={setUpdateInfo}
        openModal={openModal}
         />
      ))}
      </section>
    </div>
  );
}

export default App;
