import UserCard from "./UserCard";
import { useEffect, useState } from "react";

const Swiper = () => {
  const [possibleMatches, setPossibleMatches] = useState([]);
  const [current, setCurrent] = useState(0);
  const length = possibleMatches.length; 

  const user = JSON.parse(localStorage.getItem("user")); //tenemos el usuario desde el local.
  console.log(user._id);

  const giveLike = () => {
    //en vez d 0 deberia ser null y despues poner una condicion de que si current es null muestra: te has quedado sin usuarios para matchear.
    //despues en el back habria que prevenir de alguna manera que usuarios que ya les has dado like te dejen de aparecr por un tiempo.
    setCurrent(current === length - 1 ? null : current + 1); //funciones de postt a Like ,Dislike
  };
  const giveDislike = () => {
    setCurrent(current === length - 1 ? null : current + 1);
  };
  console.log(current);

/*   const body = {
    gender: user.gender, //
    orientation: user.orientation, //habria que coger aqui del useContext o localstorage las preferencias del usuario logeado
    age_range: user.age_range,
  };

 onst options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }; c */

  useEffect(() => {
    fetch(
      `http://localhost:3001/api/users/${user._id}/candidates` //id del usuario logeado y cambiar la ruta/test
      /* options */
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
      <div className="">
        {possibleMatches.map((possibleMatch, index) => (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <UserCard
                possibleMatch={possibleMatch}
                giveLike={giveLike}
                giveDislike={giveDislike}
              />
            )}
          </div>
        ))}
        {current === null && <div>no more matches for you</div>}
      </div>
    </>
  );
};

export default Swiper;
