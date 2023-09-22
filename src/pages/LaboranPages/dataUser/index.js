import { useState, useEffect } from "react";
// import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
// import { useNavigate, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import NavLink from "react-bootstrap/esm/NavLink";
import { PiPencilSimpleBold } from "react-icons/pi";
import { BiTrashAlt } from "react-icons/bi";
import React /* , { useContext } */ from "react";
import { getDataUsersApi, getSevimaDataUsersApi } from "../../../api/users/usersApi";
import { Link } from 'react-router-dom';
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);
  
  // const axiosPrivate = useAxiosPrivate();
  // const navigate = useNavigate();
  // const location = useLocation();
  // const { dataUser: data } = useContext(DataContext);

  // const getSevimaDataUsers = async () => {
  //   setLoading(false);
  //   try {
  //     const result = await getSevimaDataUsersApi();
  //     setUsers(result?.data?.data);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const getDataUsers = async () => {
    try {
      const result = await getDataUsersApi();
      setUsers(result?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataUsers();
    // getSevimaDataUsers();
  }, []);


  const deleteUser  = async (id) => {
    try {
      await axios.delete(`https://api-staging-labtif.cyclic.cloud/v1/users/${id}`) 
      getDataUsers([]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section id="teams" className="block teams-block">
        <Container fluid>
          <div className="title-holder">
            <h2 className="fw-bold">Daftar User</h2>
            <hr />
            <div className="subtitle">LAB TIF</div>
          </div>
            {/* <button
                  type="button"
                  onClick={() => getSevimaDataUsers()}
                  className="btn btn-warning col-4 mx-auto mb-2 text-white"
                  id="submit"
                >
                  {loading ? "Loading..." : "Update Data"}
                </button> */}
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
                  <h3 className="fw-bold">Daftar User</h3>
                </th>
              </tr>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Foto</th>
                <th scope="col">Username</th>
                <th scope="col">Role</th>
                <th scope="col">Email</th>
                <th scope="col">No Hp</th>
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
              {users && users.map((user, index) => (
                  <tr key={user.user_id}>
                    <td>{index + 1}</td>
                    <td>{user.img_url}</td>
                    <td>{user.username}</td>
                    <td>{user.role}</td>
                    <td>{user.email}</td>
                    <td>{user.no_hp}</td>
                    <td>
                    <Link 
                    to={`Edit/${user.id}`} 
                    className='btn btn-warning mx-2 text-white'>
                      <PiPencilSimpleBold />
                    </Link>
                    <button 
                    onClick={e => deleteUser (user.id)} 
                    className='btn btn-danger'>
                      <BiTrashAlt />
                    </button>
                  </td>
                  </tr>
              ))}
                  {/* {users?.length ? (
                      <tr>
                        {users.map((user, index) => ( 
                           <td key={index}>{user?.username}</td>
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
                     )} */}
              
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

export default UserList;