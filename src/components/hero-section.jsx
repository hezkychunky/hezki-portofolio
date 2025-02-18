import Greetings from "./greetings";

function Hero() {
  return (
    <div
      id="home"
      className="flex flex-wrap bg-transparent h-screen z-10 pt-24 md:pt-60"
    >
      <section className="w-full xl:w-1/2">
        <Greetings />
      </section>
      <section
        id="#about"
        className="w-full xl:w-1/2 flex flex-col justify-center md:p-8"
      >
        <h1 className="text-3xl text-slate-600 text-center pb-4">About Me</h1>
        <p>
          <span className="text-teal-500 font-semibold bg-gray-100 py-1 rounded-sm">
            “Exposing features and simplifying complexities”
          </span>{" "}
          have always been two aspects I am passionate about, guiding my work as
          a web developer. <br /> Now, with React, Next.js, and Express.js, I am
          able to bring them to life through clean & efficient code.
          Additionally, by applying cognitive empathy, I strive to make
          applications more intuitive with thoughtful design and layout.
        </p>
      </section>
    </div>
  );
}

export default Hero;
