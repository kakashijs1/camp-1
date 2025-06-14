import Image from "next/image";
import { Tent } from "lucide-react";

const Logo = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-x-4">
        {/* <Image
          src={"/assets/camp2.png"}
          alt="logo"
          className="  bg-white rounded-full p-1"
          width={48}
          height={48}
        /> */}
        <Tent className="shadow-xl" />
        <h1 className="font-bold">Clerk-Camp</h1>
      </div>
    </>
  );
};
export default Logo;
