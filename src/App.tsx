import React, { useState } from "react";
import UserDatas from "./shared/userdatas/Userdatas";
import UserInfoComponent from "./shared/userInfo/UserInfo";

import "./App.css";

const users = [
  {
    id: 1,
    name: "Giuliano",
    surname: "Salerno",
    email: "iamgiul82@gmail.com",
    address: "Via dei Re 117, Rocca Priora(RM)",
    hours: 200,
    hourlyWage: "10 €",
    salary: "2000 €",
    company: "Azienda del monte",
    phone: "06-5654121456",
    city: "Roma",
  },
  {
    id: 2,
    name: "Eleonora",
    surname: "Baroni",
    email: "ilabar@gmail.com",
    address: "Via Cristoforo Colombo 117, Roma(RM)",
    hours: 50,
    hourlyWage: "10  €",
    salary: "500 €",
    company: "Azienda del monte",
    phone: "06-5654121456",
    city: "Roma",
  },
  {
    id: 3,
    name: "Ted",
    surname: "Carter",
    email: "ted.carter@gmail.com",
    address: "Via Libero Leonardi 117, Roma(RM)",
    hours: 30,
    hourlyWage: "10  €",
    salary: "300 €",
    company: "Azienda del monte",
    phone: "06-5654121456",
    city: "Roma",
  },
];

function App() {
  const [indexUser, setIndexUser]: any = useState(0);
  const selectedUser: any = users[indexUser];
  const data = [
    {
      title: "Dati Utente",
      ico: "user-circle-o",
      info: [
        {
          label: "Nome",
          ico: "user",
          field: "name",
        },
        {
          label: "Cognome",
          ico: "user",
          field: "surname",
        },
        {
          label: "Email",
          ico: "envelope-o",
          field: "email",
        },
        {
          label: "Indirizzo",
          ico: "map",
          field: "address",
        },
      ],
    },
    {
      title: "Dati Lavoro",
      ico: "briefcase",
      info: [
        {
          label: "Ore di lavoro",
          ico: "clock-o",
          field: "hours",
        },
        {
          label: "Paga oraria",
          ico: "money",
          field: "hourlyWage",
        },
        {
          label: "Totale",
          ico: "money",
          field: "salary",
        },
        {
          label: "Azienda",
          ico: "building",
          field: "company",
        },
        {
          label: "Telefono",
          ico: "phone",
          field: "phone",
        },
        {
          label: "Città",
          ico: "location-arrow",
          field: "city",
        },
      ],
    },
  ];
  const decrementIndex = () => {
    setIndexUser(indexUser - 1);
  };
  const incrementIndex = () => {
    setIndexUser(indexUser + 1);
  };
  return (
    <>
      <div className="container">
        <h1 className="text-center">
          {selectedUser.name} {selectedUser.surname}
        </h1>
        {data.map((ele: any) => (
          <div>
            <UserInfoComponent text={ele.title} icon={ele.ico} />
            <div className="row">
              {ele.info.map((inf: any) => (
                <div className="col-4">
                  <UserDatas
                    icon={inf.ico}
                    label={inf.label}
                    text={selectedUser[inf.field]}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="mt-3 text-center">
          <button
            className="btn btn-primary m-3"
            disabled={indexUser < 1}
            onClick={decrementIndex}
          >
            Indietro
          </button>
          <button
            className="btn btn-primary m-3"
            disabled={indexUser >= users.length - 1}
            onClick={incrementIndex}
          >
            Prossimo
          </button>
        </div>
      </div>
    </>
  );
}
export default App;
