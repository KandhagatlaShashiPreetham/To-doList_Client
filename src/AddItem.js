import Axios from "axios";
import React from "react";
import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Navigation from "./Navigation";
function AddItem() {
  const [Name, setName] = useState("");
  const [ListName, setListName] = useState("");
  const [RemindOn, setRDate] = useState("");

  function reset(e) {
    setName("");
    setListName("");
    setRDate("");
  }

  const onAdding = (e) => {
    e.preventDefault();
    const Details = JSON.stringify({
      Name: Name,
      RDate: RemindOn,
      ListName: ListName,
    });
    Axios.post("http://localhost:3001/Items/addItem", Details, {
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        alert("Item added to list");
      })
      .catch((err) => {
        console.log("Err:" + err);
      });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Navigation />
      <div
        style={{
          height: "100vh",
          width: "100vw",
          //backgroundImage: `url(${back})`,
          paddingLeft: "50px",
          paddingRight: "50px",
          paddingTop: "60px",
          paddingBottom: "60px",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container
          fluid
          style={{
            backgroundColor: "whitesmoke",
            height: "100%",
            borderRadius: "10px",
            boxShadow:
              "0 20px 20px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <div class="container">
            <br />
            {/* <!-- Nav tabs --> */}
            <ul class="nav nav-tabs" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#home">
                  Existing List
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#menu1">
                  New List
                </a>
              </li>
            </ul>

            {/* <!-- Tab panes --> */}
            <div class="tab-content">
              <div id="home" class="container tab-pane active">
                <form
                  onSubmit={(e) => {
                    onAdding(e);
                    reset(e);
                  }}
                >
                  <br />
                  <input
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Item Name"
                    style={{ maxWidth: "250px", marginBottom: "15px" }}
                  />
                  <br />
                  <input
                    value={ListName}
                    onChange={(e) => setListName(e.target.value)}
                    type="text"
                    placeholder="List Name"
                    style={{ maxWidth: "250px", marginBottom: "15px" }}
                  />
                  <br />
                  <input
                    value={RemindOn}
                    onChange={(e) => setRDate(e.target.value)}
                    type="text"
                    placeholder="Reminder Date"
                    style={{ maxWidth: "250px", marginBottom: "15px" }}
                  />
                  <br />
                  <Button type="submit" value="Login">
                    Add Item to EL
                  </Button>
                </form>
              </div>
              <div id="menu1" class="container tab-pane fade">
                <form
                  onSubmit={(e) => {
                    onAdding(e);
                    reset(e);
                  }}
                >
                  <br />
                  <input
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Item Name"
                    style={{ maxWidth: "250px", marginBottom: "15px" }}
                  />
                  <br />
                  <input
                    value={ListName}
                    onChange={(e) => setListName(e.target.value)}
                    type="text"
                    placeholder="List Name"
                    style={{ maxWidth: "250px", marginBottom: "15px" }}
                  />
                  <br />
                  <input
                    value={RemindOn}
                    onChange={(e) => setRDate(e.target.value)}
                    type="text"
                    placeholder="Reminder Date"
                    style={{ maxWidth: "250px", marginBottom: "15px" }}
                  />
                  <br />
                  <Button type="submit" value="Login">
                    Add Item to NL
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default AddItem;
