import UserCardReal from "./UserCardReal";
import { useEffect, useState } from "react";

const UserCard = () => {
  const [possibleMatches, setPossibleMatches] = useState([]);
  const [current, setCurrent] = useState(0);
  const length = possibleMatches.length;

  const user = JSON.parse(localStorage.getItem("user")); //tenemos el usuario desde el local.
  console.log(user._id);

  const giveLike = () => {
    //en vez d 0 deberia ser null y despues poner una condicion de que si current es null muestra: te has quedado sin usuarios para matchear.
    //despues en el back habria que prevenir de alguna manera que usuarios que ya les has dado like te dejen de aparecr por un tiempo.
    setCurrent(current === length - 1 ? 0 : current + 1); //funciones de postt a Like ,Dislike
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
              <UserCardReal possibleMatch={possibleMatch} giveLike={giveLike} />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default UserCard;
