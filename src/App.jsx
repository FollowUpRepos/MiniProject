import AddContact from "./components/AddContact";
import "./App.css";
import ContactList from "./components/ContactList";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    setContacts([...contacts, contact]);
  };
  return (
    <>
      <div className="w-9/12 ml-8">
        <Header />
        <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} />
      </div>
    </>
  );
}

export default App;
