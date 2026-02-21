import { useMediaQuery } from "react-responsive";

const Watch = ({ src, alt, color, minSize, maxSize }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });

  return (
    <div className="relative w-full h-full md:mt-20 xl:mt-0">
      <svg
        width={isNotMobile ? "420" : "260"}
        height={isNotMobile ? "420" : "260"}
        className="absolute top-1/2 left-1/2 -translate-1/2 z-1"
      >
        <circle
          cx={isNotMobile ? "210" : "130"}
          cy={isNotMobile ? "210" : "130"}
          r={isNotMobile ? "210" : "130"}
          fill={color}
        />
      </svg>
      <svg
        width={isNotMobile ? "520" : "340"}
        height={isNotMobile ? "520" : "340"}
        className="absolute top-1/2 left-1/2 -translate-1/2 z-0"
      >
        <circle
          cx={isNotMobile ? "260" : "170"}
          cy={isNotMobile ? "260" : "170"}
          r={isNotMobile ? "260" : "170"}
          fill="white"
        />
      </svg>
      <img
        src={src}
        alt={alt}
        className={`absolute top-1/2 left-1/2 -translate-1/2 md:w-${maxSize} w-${minSize} z-2`}
      />
    </div>
  );
};

export default Watch;
