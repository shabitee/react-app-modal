import UserInfo from "./components/UserInfo";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (newUserData) => {
    setUsers([...users, newUserData]);
  };

  return (
    <>
      <UserInfo addUser={addUser} />

      <h2>Current Users</h2>
      {users.map((user, index) => {
        return (
          <div key={index}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>----------------</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
