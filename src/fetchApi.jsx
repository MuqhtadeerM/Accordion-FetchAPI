import { useEffect, useState } from "react";
import ButtonItems from "./Button";
import "./App.css";

export const AccordianButton = () => {
  const [accord, setAccord] = useState(true);
  const [open, setOpen] = useState([0]);
  const [userData, setUserData] = useState(null);

  // create an aarray  that fetch data from api
  const items = [
    {
      title: userData ? userData.firstName : "Loading...",
      content: userData ? userData.email : "Loading email...",
    },
    {
      title: "Item 2",
      content: "this is the second email",
    },
    {
      title: "Item 3",
      content: "this is the third email",
    },
  ];

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    //add try to catch the error
    try {
      const url = "https://dummyjson.com/users";
      let response = await fetch(url);
      response = await response.json();

      console.log(response);

      setUserData(response.users[0]); // only get first user data
    } catch (e) {
      console.error("Failed to fetch", e.message);
    }
  };

  // open close index manually and like accordian
  const handleClick = (index) => {
    // it works like accordian open and close
    if (accord) {
      setOpen([index === open[0] ? -1 : index]);
    } else {
      // here it is manually
      setOpen((pre) => {
        return pre.includes(index)
          ? pre.filter((i) => i !== index)
          : [...pre, index];
      });
    }
  };

  const isItemOpen = (index) => open.includes(index);

  return (
    <div className="accordian">
      <h2>Handle Button</h2>
      <button className="toggle" onClick={() => setAccord(!accord)}>
        {accord ? "Enable" : "Disable"}
      </button>
      {items.map((item, index) => (
        <ButtonItems
          key={index}
          title={item.title}
          content={item.content}
          isOpen={isItemOpen(index)}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default AccordianButton;
