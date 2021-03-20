import { useEffect, useState, useContext } from "react";
import { MatchContext } from "../../providers/match";
import "./newMatch.css";
import { API_ROOT } from "../../utils/hostSettings";

const NewMatch = () => {
  const [matchInfo, setMatchInfo] = useState({});
  const [photo, setPhoto] = useState([]);
  const { newMatch } = useContext(MatchContext);
  const { setNewMatch } = useContext(MatchContext);
  useEffect(() => {
    fetch(`${API_ROOT}/api/users/${newMatch}/`)
      .then((promise) => {
        if (promise.status === 200) {
          return promise.json();
        }
      })
      .then((json) => setMatchInfo(json));
  }, []);
  useEffect(() => {
    fetch(`${API_ROOT}/api/photo/${matchInfo._id}/photos`)
      .then((promise) => {
        if (promise.status === 200) {
          return promise.json();
        }
      })
      .then((json) => setPhoto(json));
  }, [matchInfo]);
  const photoBuffer = photo.map((e) => {
    const src = `data:${e.mimetype};base64,${Buffer.from(e.photo.data).toString(
      "base64"
    )}`;
    return src;
  });
  console.log(matchInfo._id);
  return (
    <div
      className="newMatch__container"
      onClick={() => {
        setNewMatch("");
      }}
    >
      <div className="newMatch__text_container">
        <p className="newMatch_text_message">
          You matched with {matchInfo.firstname}! Go to messages and start a
          conversation!
        </p>
      </div>
      <div className="newMatch__photo_container">
        <img src={photoBuffer[0]} className="image__newMatch" />
      </div>
    </div>
  );
};
export default NewMatch;
