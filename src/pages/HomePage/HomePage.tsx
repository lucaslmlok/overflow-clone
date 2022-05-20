import { IconContext } from "react-icons";
import { BsCpu, BsCast } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import Button from "components/shared/Button";
import ArrowLink from "components/shared/ArrowLink";
import { ReactComponent as Puzzle } from "assets/puzzle.svg";
import { ReactComponent as Amazon } from "assets/amazon.svg";
import { ReactComponent as Netflix } from "assets/netflix.svg";
import { ReactComponent as Spotify } from "assets/spotify.svg";
import { ReactComponent as Microsoft } from "assets/microsoft.svg";
import { ReactComponent as Facebook } from "assets/facebook.svg";
import { ReactComponent as Yahoo } from "assets/yahoo.svg";
import { ReactComponent as Office } from "assets/office.svg";
import { ReactComponent as Working } from "assets/working.svg";
import comments from "constants/comments";

const HomePage = () => {
  return (
    <div className="container">
      <section className="text-center">
        <h1>Every journey deserves a great story.</h1>
        <p>
          Create beautiful user flows and design presentations to narrate your
          design story like never before.
        </p>
        <div className="mx-2 my-6 flex justify-between gap-5">
          <Button variant="contained" className="flex-1">
            Start free trial
          </Button>
          <Button variant="outlined" className="flex-1">
            See examples
          </Button>
        </div>
        <Puzzle className="mt-16 h-full w-full" />
      </section>
      <section>
        <IconContext.Provider
          value={{ className: "my-5 h-9 w-9 text-primary" }}
        >
          <div className="my-20">
            <BsCpu />
            <h2>Interactive user flow diagrams</h2>
            <p>
              Transform your screens into interactive user flows to narrate
              powerful user experience stories. Show a holistic view of your
              user journey, navigate through it effortlessly, and communicate
              your work effectively to your team and stakeholders.
            </p>
          </div>
          <div className="my-20">
            <BsCast />
            <h2>Meaningful design presentations</h2>
            <p>
              Create professional design presentations to engage your audience
              in design critique. Use only the screens you want to share,
              organize and group them efficiently, and add additional content or
              branding cues for a seamless presentation experience.
            </p>
          </div>
          <div className="flex flex-col items-center gap-9 px-16 py-10">
            <Amazon />
            <Netflix />
            <Spotify />
            <Microsoft />
            <Facebook />
            <Yahoo />
            <p className="mt-0 text-center leading-snug text-gray-400">
              Trusted by more than 500,000 designers and product managers across
              the globe
            </p>
          </div>
        </IconContext.Provider>
      </section>
      <section>
        <h2>Invite teammates and collaborate</h2>
        <p>
          Invite teammates to collaborate on your documents and build more
          impactful design presentations together. Organize your documents and
          publications in private or shared folders, depending on your team's
          security needs.
        </p>
        <ArrowLink href="/">See how</ArrowLink>
        <Office className="h-full w-full" />
      </section>
      <section className="text-center">
        <h3 className="text-2xl font-bold">
          Learn how Infinite Red uses Overflow to improve asynchronous
          communication with their clients.
        </h3>
        <ArrowLink href="/">Read case study</ArrowLink>
      </section>
      <section>
        <h2>Captivate your audience with breathtaking design presentations</h2>
        <p>
          Keep your audience engaged from start to finish in design critique
          meetings with Overflow's interactive presentation features. Navigate
          between screens with ease using your mouse or keyboard. Zoom out for a
          bird's eye view of the user journey as a whole or switch to a rapid
          prototype view to focus on design details.
        </p>
        <ArrowLink href="/">See how</ArrowLink>
        <Working className="my-10 h-full w-full" />
      </section>
      <div className="rounded-2xl bg-sky-50 py-16 px-14">
        <p className="text-center">
          Trusted by more than 500,000 designers and product managers across the
          globe
        </p>
        <Swiper modules={[Pagination]} pagination={{ clickable: true }}>
          {comments.map((comment) => (
            <SwiperSlide className="mt-2 mb-16" key={comment.quote}>
              <blockquote>
                <p className="px-2 text-center text-2xl font-bold leading-normal before:content-['“'] after:content-['”']">
                  {comment.quote}
                </p>
                <cite className="flex items-center justify-center gap-4 not-italic">
                  <img
                    className="w-12"
                    src={comment.avatar}
                    alt="David Teodorescu"
                  />
                  <div>
                    <p className="m-0 mb-0.5 text-sm font-bold uppercase tracking-wider">
                      {comment.name}
                    </p>
                    <p className="m-0 text-xs">{comment.desc}</p>
                  </div>
                </cite>
              </blockquote>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomePage;
