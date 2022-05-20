import { BsFillSuitHeartFill } from "react-icons/bs";

import { ReactComponent as Logo } from "assets/logo.svg";
import Sitemap from "./Sitemap";
import SubscribeForm from "./SubscribeForm";
import SocialList from "./SocialList";

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
