import { IconContext } from "react-icons";
import {
  BsMedium,
  BsSlack,
  BsTwitter,
  BsFacebook,
  BsInstagram,
} from "react-icons/bs";

const SocialList = () => {
  return (
    <IconContext.Provider
      value={{
        className: "w-5 h-5 transition-colors duration-300 link",
      }}
    >
      <ul className="mt-14 flex items-center gap-5">
        <li>
          <a href="/">
            <BsMedium />
          </a>
        </li>
        <li>
          <a href="/">
            <BsSlack />
          </a>
        </li>
        <li>
          <a href="/">
            <BsTwitter />
          </a>
        </li>
        <li>
          <a href="/">
            <BsFacebook />
          </a>
        </li>
        <li>
          <a href="/">
            <BsInstagram />
          </a>
        </li>
      </ul>
    </IconContext.Provider>
  );
};

export default SocialList;
