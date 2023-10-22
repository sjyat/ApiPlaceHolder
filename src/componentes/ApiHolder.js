import React, { useState, useEffect } from "react";

const ApiHolder = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getPersonaje();
  }, []);

  const getPersonaje = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(users);
  return (
    <div className="card mb-3" style={{ maxWidth: 1140 }}>
      <h1 className="text-center">ApiHolder</h1>
      <p className="text-center">Bienvenidos TeemProfesional</p>

      {users.map((item) => (
        <div className="row no-gutters py-5 mx-5" key={item.id}>
          <div className="card col-md-4">
            <img
              className="shadow bg-body rounded rounded-circle"
              src={require("../img/perfil.png")}
              width="250"
              height="250"
            />
          </div>
          <div className="card col-md-8 ">
            <div className="card-body">
              <h5 className="card-title">
                <h5 className="cardcard-title">{item.name}</h5>
                <p className="card-text">{item.username}</p>
                <p className="card-text">{item.email}</p>
              </h5>
              <div className="card col-md-8">
                <p className="card-text">
                  <p className="card-title">{item.address.street}</p>
                  <p className="card-text">{item.address.city}</p>
                  <p className="card-text">{item.address.zipcode}</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ApiHolder;
