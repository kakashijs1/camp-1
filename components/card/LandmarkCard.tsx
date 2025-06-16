import Image from "next/image";
import { LandmarkCardProps } from "@/utils/types";
import { categories } from "@/utils/categories";
import FavoriteToggleButton from "./FavoriteToggleButton";

const LandmarkCard = ({ landmark }: { landmark: LandmarkCardProps }) => {
  const { name, image, province, category, description, price,id } = landmark;
  const categoryObj = categories.find((c) => c.label === category);
  const CategoryIcon = categoryObj?.icon;

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

      <div className="absolute top-5 right-5">
        <FavoriteToggleButton landmarkId={id}/>
      </div>

      <div className="flex justify-between items-center mt-4 px-2    ">
        <div className="space-y-4 w-full">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 dark:text-white group-hover:text-yellow-500 transition-colors duration-300 line-clamp-1">
              {name}
            </h3>
            <div className="flex items-center gap-1.5 bg-white/95 dark:bg-gray-700/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md self-start sm:self-center">
              <span className="text-yellow-400 animate-pulse text-base sm:text-lg">
                ★
              </span>
              <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent">
                4.5
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 line-clamp-1  ">
              {province}
            </p>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
              {description.substring(0, 20)}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 justify-between mt-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-full font-medium tracking-wide">
              {CategoryIcon && <CategoryIcon className="w-3.5 h-3.5" />}
              {category}
            </span>
            <span className="text-sm font-bold bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent">
              ${price}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default LandmarkCard;
