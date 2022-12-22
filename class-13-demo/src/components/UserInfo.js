import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function UserInfo(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState(false);
  const [mNumber, setMNumber] = useState("Volvo");

  const addPerson = async (event) => {
    event.preventDefault();
    const newUserData = {
      name: name,
      email: email,
      country: country,
      mNumber: mNumber,
    };
    props.addUser(newUserData);
    // let res = await axios.post(`http://localhost:3001/user`, newUserData);
    // console.log(res.data);
  };

  return (
    <div className="w-25 p-3" >
      <h2>Add your Information</h2>

      <Form onSubmit={addPerson}>
      <Form.Group className="mb-4">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name"  name="name" onChange={(e) => setName(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" name="email" onChange={(e) => setEmail(e.target.value)} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="country" placeholder="Enter Country" name="country" onChange={(e) => setCountry(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="mNumber" placeholder="Enter Mobile Number" name="mNumber" onChange={(e) => setMNumber(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <br/>

      {/* <form onSubmit={addPerson}>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <input
          type="text"
          placeholder="Enter your email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <input
          type="text"
          placeholder="Enter your Country"
          name="country"
          onChange={(e) => setCountry(e.target.value)}
        />
        <br />

        <input
          type="text"
          placeholder="Enter your mobile number"
          name="mNumber"
          onChange={(e) => setMNumber(e.target.value)}
        />
        <br />

        <button type="submit">Add</button>
      </form> */}
    </div>
  );
}

export default UserInfo;
