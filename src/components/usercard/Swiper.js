import UserCard from "./UserCard";
import { useEffect, useState, useContext } from "react";
import { MatchContext } from "../../providers/match";
import NewMatch from "../newMatch/NewMatch";
import { API_ROOT } from "../../utils/hostSettings";
const Swiper = () => {
  const [possibleMatches, setPossibleMatches] = useState([]);
  const [current, setCurrent] = useState(0);

  const length = possibleMatches.length;
  const { newMatch } = useContext(MatchContext);


  const user = JSON.parse(localStorage.getItem("user"));
  console.log(newMatch);
  const giveLike = () => {
    setTimeout(() => { setCurrent(current === length - 1 ? null : current + 1); }, 350);

  };
  const giveDislike = () => {
    setTimeout(() => { setCurrent(current === length - 1 ? null : current + 1); }, 350);

  };
  console.log(current);

  useEffect(() => {
    fetch(`${API_ROOT}/api/users/${user._id}/candidates` //id del usuario logeado y cambiar la ruta/test
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

      {newMatch && <NewMatch />}
      <div className="swiper__container">

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
