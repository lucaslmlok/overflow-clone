import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import comments from "./comments.data";

const Comments = () => {
  return (
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
  );
};

export default Comments;
