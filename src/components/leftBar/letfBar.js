import "./leftBar.css";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import BlockIcon from '@material-ui/icons/Block';

const LeftBar = () => {
  return (
    <div className="leftBar__container">
      <div className="userProfile_container">
      <img
          src="https://thispersondoesnotexist.com/image"
          alt="user_image_menu"
          className="userAvatar"
         
        />
      </div>

      <div className="likes_container">
        <p>Likes</p>
       <ThumbUpAltIcon/>
      </div>

      <div className="matches_container">
        <p>Matches</p>
        <WhatshotIcon/>
      </div>

      <div className="blocks_container">
        <p>Blocks</p>
        <BlockIcon/>
      </div>
    </div>
  );
};

export default LeftBar;
