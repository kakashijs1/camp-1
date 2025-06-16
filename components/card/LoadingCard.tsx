import { Skeleton } from "../ui/skeleton";

const LoadingCard = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
};

export const SkeletonCard = () => {
  return (
    <div>
      <Skeleton className="h-[400px] w-[340px] overflow-hidden rounded-xl mb-2" />
      <Skeleton className="h-4 w-3/4 overflow-hidden rounded-xl mb-2" />
      <Skeleton className="h-4 w-1/2 overflow-hidden rounded-xl mb-2" />
      <Skeleton className="h-4 w-1/3 overflow-hidden rounded-xl" />
    </div>
  );
};

export default LoadingCard;
