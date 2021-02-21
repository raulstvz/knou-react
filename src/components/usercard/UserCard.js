import UserCardReal from "./UserCardReal";
import { useEffect, useState } from "react";

const UserCard = ({ user }) => {
  const [possibleMatches, setPossibleMatches] = useState([]);
  const [current, setCurrent] = useState(0);
  const length = possibleMatches.length;

  const giveLike = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const giveDislike = () => {};
  console.log(current);

  const body = {
    gender: "female",
    orientation: "bisexual", //habria que coger aqui del useContext o localstorage las preferencias del usuario logeado
    age_range: [20, 30],
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  useEffect(() => {
    fetch(
      `http://localhost:3001/api/users/60301c330594ba0c39f009c7/test`, //id del usuario logeado y cambiar la ruta/test
      options
    )
      .then((promise) => {
        if (promise.status === 200) {
          return promise.json();
        }
      })
      .then((json) => setPossibleMatches(json));
  }, []);

  console.log(possibleMatches);
  //los button tienen que , pasar el usuario y mandr a la db el like odislike .
  return (
    <>
      <div className="slider__container">
        {possibleMatches.map((possibleMatch, index) => (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <UserCardReal possibleMatch={possibleMatch} />
            )}
          </div>
        ))}
      </div>
      <button onClick={giveLike}>Like!</button>
    </>
  );
};

export default UserCard;
