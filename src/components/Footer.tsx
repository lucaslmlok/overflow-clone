import { IconContext } from "react-icons";
import {
  BsMedium,
  BsSlack,
  BsTwitter,
  BsFacebook,
  BsInstagram,
  BsFillSuitHeartFill,
} from "react-icons/bs";

import Button from "components/Button";
import { ReactComponent as Logo } from "assets/logo.svg";
import sitemap from "constants/sitemap";

const Sitemap = () => {
  return (
    <nav className="my-5 grid grid-cols-2 gap-x-4 gap-y-12 text-sm">
      {sitemap.map((part) => (
        <div key={part.title}>
          <h5 className="font-bold uppercase tracking-wide">{part.title}</h5>
          <ul>
            {part.nav.map((item) => (
              <li key={item.title} className="my-6">
                <a href={item.path} className="link">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};

const SubscribeForm = () => {
  return (
    <form>
      <div className="flex items-stretch">
        <input
          type="email"
          className="block flex-1 rounded-tl-md rounded-bl-md border border-r-0 border-blue-900/30 px-4 outline-offset-[-1px] outline-primary placeholder:text-gray-500 focus:outline-2"
          placeholder="Your email"
        />
        <Button
          variant="contained"
          size="small"
          className="rounded-tl-none rounded-bl-none"
        >
          Subscribe
        </Button>
      </div>
    </form>
  );
};

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

const Footer = () => {
  return (
    <footer>
      <div className="container border-y py-8">
        <Sitemap />
        <a href="/" className="my-9 block">
          <Logo />
        </a>
        <p className="text-sm leading-relaxed tracking-wider">
          Get the latest news about Overflow's new features and product updates.
        </p>
        <SubscribeForm />
        <SocialList />
      </div>
      <div className="container pt-1 pb-3 text-xs">
        <ul className="my-7 flex gap-9">
          <li>
            <a href="/" className="link">
              Cookie Statement
            </a>
          </li>
          <li>
            <a href="/" className="link">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="/" className="link">
              Privacy Policy
            </a>
          </li>
        </ul>
        <p>@ 2022 PROTOIO Inc. All rights reserved.</p>
        <p>
          Made with <BsFillSuitHeartFill className="inline align-text-top" /> by{" "}
          <a href="/" className="font-medium text-sky-500">
            PROTOIO Inc.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
