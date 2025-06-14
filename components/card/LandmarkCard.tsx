import Image from "next/image";
import { LandmarkCardProps } from "@/utils/types";

const LandmarkCard = ({ landmark }: { landmark: LandmarkCardProps }) => {
  const { name, image,  province,   category } = landmark;

  return (
    <article className="group shadow-sm relative transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 p-3 rounded-2xl bg-white dark:bg-gray-800/30">
      <div className="relative h-[300px] overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={name}
          sizes="(max-width:768px) 100vw, 50vw"
          className="object-cover rounded-xl group-hover:scale-110 transition-all duration-500 ease-in-out"
          fill
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="flex justify-between items-center mt-4 px-2">

        <div className="space-y-2">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-yellow-500 transition-colors duration-300">
            {name}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{province}</p>
          <span className="inline-block px-3 py-1.5 text-xs bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-full font-semibold tracking-wide">
            {category}
          </span>
          
        </div>

        <div className="flex items-center gap-1.5 bg-white/95 dark:bg-gray-700/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
          <span className="text-yellow-400 animate-pulse text-lg">★</span>
          <span className="text-sm font-bold bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent">
            4.5
          </span>
        </div>

      </div>
    </article>
  );
};

export default LandmarkCard;
