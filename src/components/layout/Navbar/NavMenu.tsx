import Button from "components/shared/Button";
import { AiOutlineTeam } from "react-icons/ai";
import { BiLaptop } from "react-icons/bi";
import { HiOutlinePresentationChartBar } from "react-icons/hi";
import { MdSupportAgent } from "react-icons/md";
import { TiFlowChildren, TiFlowMerge, TiFlowSwitch } from "react-icons/ti";
import { VscGroupByRefType, VscMortarBoard } from "react-icons/vsc";
import { NavItem, NavSmallItem } from "./NavItem";
import NavPart from "./NavPart";
import NavTitle from "./NavTitle";

const NavMenu = () => {
  return (
    <div className="container flex h-full flex-col overflow-y-auto bg-white pb-7">
      <nav className="flex-1 px-14">
        <ul>
          <li>
            <NavPart title="Product">
              <div className="my-8">
                <NavTitle>Overflow</NavTitle>
                <NavItem
                  icon={(props) => <TiFlowChildren {...props} />}
                  path="/"
                  title="How it Works"
                  desc="Get started with an overview of a typical workflow in Overflow."
                />
                <NavItem
                  icon={(props) => <VscGroupByRefType {...props} />}
                  path="/"
                  title="Features"
                  desc="Explore all features in Overflow, split by workflow steps."
                />
                <NavItem
                  icon={(props) => <HiOutlinePresentationChartBar {...props} />}
                  path="/"
                  title="Design presentation"
                  desc="Engage your audience in design critique with Overflow."
                />
              </div>
              <div className="">
                <NavTitle>Overflow for</NavTitle>
                <NavSmallItem
                  icon={(props) => <BiLaptop {...props} />}
                  path="/"
                  title="Product Teams"
                />
                <NavSmallItem
                  icon={(props) => <AiOutlineTeam {...props} />}
                  path="/"
                  title="Design Teams"
                />
                <NavSmallItem
                  icon={(props) => <MdSupportAgent {...props} />}
                  path="/"
                  title="Design Agencies"
                />
                <NavSmallItem
                  icon={(props) => <TiFlowMerge {...props} />}
                  path="/"
                  title="Tech Startups"
                />
                <NavSmallItem
                  icon={(props) => <TiFlowSwitch {...props} />}
                  path="/"
                  title="Agile Teams"
                />
                <NavSmallItem
                  icon={(props) => <VscMortarBoard {...props} />}
                  path="/"
                  title="Educational Institutions"
                />
              </div>
            </NavPart>
          </li>
          <li>
            <NavPart title="Resources">
              <div className="my-8">
                <NavTitle>Overflow</NavTitle>
                <NavItem
                  icon={(props) => <TiFlowChildren {...props} />}
                  path="/"
                  title="How it Works"
                  desc="Get started with an overview of a typical workflow in Overflow."
                />
                <NavItem
                  icon={(props) => <VscGroupByRefType {...props} />}
                  path="/"
                  title="Features"
                  desc="Explore all features in Overflow, split by workflow steps."
                />
                <NavItem
                  icon={(props) => <HiOutlinePresentationChartBar {...props} />}
                  path="/"
                  title="Design presentation"
                  desc="Engage your audience in design critique with Overflow."
                />
              </div>
              <div className="my-8">
                <NavTitle>Overflow for</NavTitle>
                <NavSmallItem
                  icon={(props) => <BiLaptop {...props} />}
                  path="/"
                  title="Product Teams"
                />
                <NavSmallItem
                  icon={(props) => <AiOutlineTeam {...props} />}
                  path="/"
                  title="Design Teams"
                />
                <NavSmallItem
                  icon={(props) => <MdSupportAgent {...props} />}
                  path="/"
                  title="Design Agencies"
                />
                <NavSmallItem
                  icon={(props) => <TiFlowMerge {...props} />}
                  path="/"
                  title="Tech Startups"
                />
                <NavSmallItem
                  icon={(props) => <TiFlowSwitch {...props} />}
                  path="/"
                  title="Agile Teams"
                />
                <NavSmallItem
                  icon={(props) => <VscMortarBoard {...props} />}
                  path="/"
                  title="Educational Institutions"
                />
              </div>
            </NavPart>
          </li>
          <li>
            <a href="/" className="my-8 block text-2xl font-bold">
              Examples
            </a>
          </li>
          <li>
            <a href="/" className="my-8 block text-2xl font-bold">
              Download
            </a>
          </li>
          <li>
            <a href="/" className="my-8 block text-2xl font-bold">
              Pricing
            </a>
          </li>
        </ul>
      </nav>

      <div className="mt-3 flex flex-col gap-7">
        <Button variant="outlined">Sign in</Button>
        <Button variant="contained">Start for free</Button>
      </div>
    </div>
  );
};

export default NavMenu;
