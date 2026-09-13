import bannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="h-200 flex ">
      <div className="container flex mx-auto">
        <div className="flex flex-col justify-center">
          <h1 className="text-6xl font-extrabold">
            Build Your Ideal{" "}
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="py-6">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="pt-10 flex gap-4">
            <button className="btn btn-secondary bg-linear-to-r from-orange-500 via-pink-500 ">
              {" "}
              Explore Technologies
            </button>
            <button className="btn btn-outline">Learn More</button>
          </div>
        </div>
        <img src={bannerImg} alt="BannerImg" />
      </div>
    </section>
  );
};

export default Banner;
