import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Card from "./components/card/Card";
import SideMenu from './components/sidemenu/SideMenu'
import { Switch, Route, NavLink, Link } from "react-router-dom";

function App() {
  // userData = variable penyimpan data
  // setUserData = function pengubah data

  // data static
  let [userData, setUserData] = useState([
    {
      id: 1,
      image: "https://picsum.photos/seed/13/200",
      username: "irwanrobi",
      name: "Irwan Robi",
      email: "irwanrobi@gmail.com",
      phone: "08123131342",
      website: "www.irwanrobi.com",
    },
    {
      id: 2,
      image: "https://picsum.photos/seed/13/200",
      username: "irwanrobi",
      name: "Irwan Robi",
      email: "irwanrobi@gmail.com",
      phone: "08123131342",
      website: "www.irwanrobi.com",
    },
  ]);

  // data dari api server
  let [apiData, setApiData] = useState([]);

  // menjalankan function sebelum component terrender
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setApiData(data);
      })
      .catch((err) => console.log(err));

    // cleaner function / unsubscribe
    return () => {};
  }, []);

  return (
    <div className="App">
      <Navbar />
      <SideMenu />

      <header className="App-header">

        <Switch>

          <Route path="/contact">
            <h1>Ini halaman contact</h1>
          </Route>

          <Route path="/about">
            <h1>Ini halaman about</h1>
          </Route>

          <Route path="/blog">
            <h1>Ini halaman blog</h1>
          </Route>

          <Route path="/">
            {apiData.map((e) => {
              return (
                <Card
                  key={e.id}
                  image={`https://picsum.photos/seed/${e.phone}/300`}
                  username={e.username}
                  name={e.name}
                  email={e.email}
                  phone={e.phone}
                  website={e.website}
                />
              );
            })}
          </Route>

        </Switch>
      </header>
    </div>
  );
}

export default App;
