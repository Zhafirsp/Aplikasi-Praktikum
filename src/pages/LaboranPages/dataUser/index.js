import { useState, useEffect } from "react";
// import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
// import { useNavigate, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import NavLink from "react-bootstrap/esm/NavLink";
import { PiPencilSimpleBold } from "react-icons/pi";
import { BiTrashAlt } from "react-icons/bi";
import React /* , { useContext } */ from "react";

import { getDataUsersApi } from "../../../api/users/usersApi";

export default function DataUser() {
  const [users, setUsers] = useState();
  // const axiosPrivate = useAxiosPrivate();
  // const navigate = useNavigate();
  // const location = useLocation();
  // const { dataUser: data } = useContext(DataContext);

  const getDataUsers = async () => {
    try {
      const result = await getDataUsersApi();
      setUsers([]);
      console.log(result?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataUsers();
  }, []);

  // useEffect(() => {
  //   let isMounted = true;
  //   const controller = new AbortController();

  //   const getUsers = async () => {
  //     try {
  //       const response = await axiosPrivate.get("/v1/users", {
  //         signal: controller.signal,
  //       });
  //       console.log(response.data);
  //       isMounted && setUsers(response.data);
  //     } catch (err) {
  //       console.error(err);
  //       navigate("/login", { state: { from: location }, replace: true });
  //     }
  //   };

  //   getUsers();

  //   return () => {
  //     isMounted = false;
  //     controller.abort();
  //   };
  // }, []);

  return (
    <>
      <section id="teams" className="block teams-block">
        <Container fluid>
          <div className="title-holder">
            <h2 className="fw-bold">Daftar User</h2>
            <hr />
            <div className="subtitle">LAB TIF</div>
          </div>
          <table
            className="table table-bordered text-center"
            style={{
              backgroundColor: "#063554",
              color: "white",
              borderRadius: "10px",
            }}
          >
            <thead>
              <tr>
                <th className="text-center" colSpan={"7"}>
                  <h3 className="fw-bold">Daftar Data User</h3>
                </th>
              </tr>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Foto</th>
                <th scope="col">Username</th>
                <th scope="col">Role</th>
                <th scope="col">Email</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody
              style={{
                backgroundColor: "#fff",
                color: "black",
                borderRadius: "10px",
              }}
            >
              {users?.length ? (
                <tr>
                  {users.map((user, i) => (
                    <td key={i}>{user?.username}</td>
                  ))}
                  <td>
                    <button
                      type="button"
                      className="btn btn-warning mx-2 text-white"
                    >
                      <PiPencilSimpleBold />
                    </button>
                    <button type="button" className="btn btn-danger">
                      <BiTrashAlt />
                    </button>
                  </td>
                </tr>
              ) : (
                <p>No users to display</p>
              )}
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>Jacob</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-warning mx-2 text-white"
                  >
                    <PiPencilSimpleBold />
                  </button>
                  <button type="button" className="btn btn-danger">
                    <BiTrashAlt />
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>@fat</td>
                <td>Thornton</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-warning mx-2 text-white"
                  >
                    <PiPencilSimpleBold />
                  </button>
                  <button type="button" className="btn btn-danger">
                    <BiTrashAlt />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <NavLink
            href="/register"
            className="btn btn-primary col-md-4 offset-md-8 mt-4"
            id="btn-user"
          >
            Tambah User
          </NavLink>
        </Container>
      </section>
    </>
  );
}
