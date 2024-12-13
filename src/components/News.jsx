import React, { useRef, useState } from "react";

const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef();
  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 10;
    const tiltY = (relativeX - 0.5) * -10;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95,0.95,0.95)`;

    setTransformStyle(newTransform);
  };
  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

const BentoCard = ({ src, title, description, isComingSoon }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <h1 className="bento-title special-font">{title}</h1>
        {description && (
          <p className="mt-3 max-w-64 text-s md:text-base">{description}</p>
        )}
      </div>
    </div>
  );
};

const News = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className=" px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            One pixel at a time
          </p>

          <p className="max-w-md font-circular-webtext-lg text-blue-50 opacity-50">
            Break the biggest stories in the gaming universe, delivering
            exclusive insights, timely updates, and in-depth coverage of
            everything from groundbreaking game launches to industry-changing
            innovations.
          </p>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title="radiant"
            description="Stay informed with the latest trends, esports highlights, and behind-the-scenes stories shaping the world of gaming."
          />
        </BentoTilt>
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title={"Fuckk"}
              description={
                "Dive into the worlds you love with our in-depth game reviews, covering gameplay mechanics, storytelling, graphics, and more."
              }
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="videos/feature-3.mp4"
              title={"Shit"}
              description={
                "Catch the action! From global tournaments to local matchups, we bring you the latest esports highlights and updates."
              }
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="videos/feature-4.mp4"
              title={"Retro"}
              description={
                "Relive the classics! Dive into the nostalgia of retro gaming with reviews, stories, and hidden gems."
              }
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default News;
