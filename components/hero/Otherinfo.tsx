import { LandmarkCardProps } from "@/utils/types";

const Otherinfo = ({ landmark }: { landmark: LandmarkCardProps }) => {
    return (
        <div className="hidden md:block backdrop-blur-sm bg-black/30 rounded-lg p-4 shadow-md max-w-sm">
            <div className="text-white space-y-2 animate-fade-in">
                
                {/* ชื่อจังหวัด */}
                <p className="text-xs md:text-base font-semibold tracking-wider text-amber-300 uppercase">
                    {landmark.province}
                </p>
                
                {/* ชื่อสถานที่ */}
                <h1 className="text-xs md:text-xl font-bold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                    {landmark.name}
                </h1>
                
                {/* คำอธิบายสั้น ๆ */}
                <p className="text-xs md:text-sm text-gray-200 leading-relaxed line-clamp-3">
                    {landmark.description}
                </p>
            </div>
        </div>
    );
};

export default Otherinfo;
