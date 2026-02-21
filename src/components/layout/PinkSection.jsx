import smartWatch from "../../assets/images/smartWatch.svg";
import watch from "../../assets/images/watch.svg";
import pinkLine from "../../assets/shapes/pinkLine.svg";
import pinkWatch from "../../assets/images/pinkWatch.png";
import Button from "../ui/Button";
import Watch from "../ui/Watch";

const PinkSection = () => {
  return (
    <section>
      <div className="flex mx-auto md:mt-12 xl:0 relative xl:static">
        <div className="flex w-max z-1">
          <div className="flex flex-col items-center pt-8 md:pt-0 px-[6vw] gap-[8vh] md:gap-8">
            <div className="">
              <img
                src={smartWatch}
                alt="smartWatch"
                className="block w-full h-full  m-y-auto"
              />
            </div>
            <img src={pinkLine} alt="pinkLine" />
          </div>
          <div className="flex flex-col gap-[7vh]">
            <div className="text-white flex flex-col ">
              <h1 className="font-semibold text-[clamp(70px,20vw,89px)]">
                FOSSIL
              </h1>
              <h2 className="flex flex-col md:flex-row md:gap-7">
                <span className="font-medium text-[clamp(50px,15vw,70px)]">
                  Super
                </span>
                <span className="font-extrabold text-[clamp(50px,15vw,70px)]">
                  Luxury
                </span>
              </h2>
            </div>
            <p className="font-medium text-[clamp(18px,7vw,26px)] md:text-[35px] text-white inline-block w-[60vw] ">
              Sturdy rubber strap and bold dial, perfect for running and daily
              training.{" "}
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 ">
          <img src={watch} alt="watch" className="w-full h-full" />
        </div>
      </div>

      <div className="w-full h-100 xl:mt-0 xl:absolute xl:z-10 xl:top-1/2 xl:-translate-y-1/2">
        <Watch
          src={pinkWatch}
          alt="pink-watch"
          color="#F29E9D"
          minSize="90"
          maxSize="140"
        />
      </div>
      <div className="w-full flex justify-center mt-30">
        <Button price={"399"} />
      </div>
    </section>
  );
};

export default PinkSection;
