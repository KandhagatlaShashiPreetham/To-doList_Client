import Navigation from "./Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Axios from "axios";
import { Button, Table } from "react-bootstrap";
import { useState, useEffect } from "react";

function List() {
  const [Items, SetItems] = useState([]);
  const [Lists, SetLists] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/Items/getLists").then((response) => {
      SetLists(response.data);
    });
  }, []);
  const onApproval = (ListName) => {
    Axios.get(`http://localhost:3001/Items/getItems/${ListName}`).then(
      (response) => {
        SetItems(response.data);
      }
    );
  };
  return (
    <div>
      <Navigation />

      <div class="accordion" id="accordionExample">
        {Lists.map((list) => {
          return (
            <div class="card">
              <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    onClick={(e) => {
                      onApproval(list.ListName);
                    }}
                  >
                    {list.ListName}
                  </button>
                </h5>
              </div>
              {/* Code for card body */}
              <div
                id="collapseOne"
                class="collapse"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  {/* Table of items */}

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div>
                      <Table
                        className="tstyle"
                        style={{ marginTop: "10px" }}
                        responsive
                        hover
                      >
                        <tbody>
                          {Items.map((item) => {
                            return (
                              <tr key={item._id}>
                                <td>{item.Name}</td>
                                <td>{item.RDate}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default List;
