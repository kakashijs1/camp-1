import { categories } from "@/utils/categories";
import Link from "next/link";

const CategoriesList = ({
    search,
    category,
}: {
    search?: string;
    category?: string;
}) => {
    const searchTerm = search ? `&search=${search}` : "";

    return (
        <div className="w-full px-4 md:px-6 lg:px-8">
            {/* Categories grid with clean, modern styling */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-3 md:gap-4 py-6">
                {categories.map((item) => (
                    <Link key={item.label} href={`/?category=${item.label}${searchTerm}`}>
                        <article 
                            className={`
                                group relative flex flex-col items-center justify-center
                                p-4 md:p-6 rounded-xl transition-all duration-300
                                bg-white/80 dark:bg-gray-800/20 backdrop-blur-sm
                                border border-gray-200/50 dark:border-gray-700/50
                                shadow-sm hover:shadow-lg
                                hover:-translate-y-1 hover:scale-105
                                ${category === item.label 
                                    ? 'bg-blue-50/90 dark:bg-gray-900/30 border-blue-300/60 dark:border-blue-600/50 shadow-md' 
                                    : 'hover:bg-gray-50/90 dark:hover:bg-gray-750/80'
                                }
                                min-h-[100px] cursor-pointer
                            `}
                        >
                            {/* Subtle glow effect for active state */}
                            {category === item.label && (
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-sm -z-10" />
                            )}

                            {/* Icon with better sizing and spacing */}
                            <div className={`
                                flex items-center justify-center w-10 h-10 mb-3
                                text-2xl transition-all duration-300
                                ${category === item.label 
                                    ? 'text-blue-600 dark:text-blue-400 scale-110' 
                                    : 'text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:scale-110'
                                }
                            `}>
                                <item.icon />
                            </div>

                            {/* Label with better typography */}
                            <p className={`
                                text-xs md:text-sm font-medium text-center leading-tight
                                ${category === item.label 
                                    ? 'text-blue-700 dark:text-blue-300 font-semibold' 
                                    : 'text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white'
                                }
                                transition-colors duration-300
                            `}>
                                {item.label}
                            </p>

                            {/* Active indicator dot */}
                            {category === item.label && (
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                            )}

                            {/* Hover effect overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                        </article>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoriesList;