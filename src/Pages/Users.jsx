import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import BackToHomeBtn from "../components/BackToHomeBtn";
import { useLoaderData } from "react-router";
import swal from "sweetalert";

const Users = () => {
  const loadedUsers = useLoaderData();

  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover the data",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const remaining = users.filter((user) => user._id !== id);
            if (data.deletedCount > 0) {
              swal("Poof! The user data has been deleted!", {
                icon: "success",
              });
            }
            setUsers(remaining);
          });
      } else {
        swal("The user data is safe!");
      }
    });
  };
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="w-[75%] mx-auto min-h-screen">
        <BackToHomeBtn />
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>LastSignInTime</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row */}
              {users.map((user) => (
                <tr key={user._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={
                              user.image
                                ? user.image
                                : "/src/assets/userProfile.jpg"
                            }
                            alt="Avatar"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user.name}</div>
                        <div className="text-sm opacity-50">
                          {user.country ? user.country : "country none"}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>{user.lastSignInTime}</td>
                  <th className="space-x-1">
                    <button className="btn btn-xs">edit</button>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn btn-xs"
                    >
                      delete
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Users;
