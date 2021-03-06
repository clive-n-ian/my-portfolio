import type { FC } from 'react';

const AboutPage: FC = () => {
  const PlaceHolder: String =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  return (
    <section className="md:flex h-full w-full bg-dark-primary">
      <img
        alt="Cactus Decoration"
        src="/assets/images/deco_about.svg"
        className="absolute bottom-0 right-0 h-[10vh] w-[10vh]"
      />
      <div className="md:h-full min-w-[40vw]">
        <img
          alt="About page background"
          src="/assets/images/bg_about.svg"
          className="md:my-[15vh] max-h-[40vh]"
        />
      </div>
      <div className="md:m-[10vh] flex md:max-w-[60vw] flex-col py-[5vh]">
        <div className="relative h-[100px] w-[170px]">
          <img
            alt="Moon background"
            src="/assets/images/bg_moon.svg"
            className="absolute z-10 mx-9 h-[70px] w-[70px]"
          />
          <p className="absolute z-20 text-justify text-5xl font-light text-white">
            {'ABOUT'}
          </p>
        </div>
        <p className="text-lg md:text-xl font-extralight text-white">{PlaceHolder}</p>
      </div>
    </section>
  );
};

export default AboutPage;
