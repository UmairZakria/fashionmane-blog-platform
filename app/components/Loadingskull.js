export function Loadingskull() {
    return (
        <div className="shadow-xl group overflow-hidden h-[480px] rounded-xl w-full md:min-w-[320px] 2xl:w-[400px] max-w-[400px] md:mx-0 mx-5 space-y-2 pb-3 flex flex-col justify-between bg-white animate-pulse">
            {/* Image skeleton */}
            <div className="h-[250px] w-full bg-gray-200 rounded-t-xl"></div>

            {/* Title skeleton */}
            <div className="px-4 mt-2">
                <div className="h-[26px] w-[80%] bg-gray-200 rounded-md mb-2"></div>
            </div>

            {/* Category & Date skeleton */}
            <div className="px-4 flex w-full items-center justify-between mb-2">
                <div className="h-6 w-20 bg-gray-200 rounded-md"></div>
                <div className="h-6 w-30 bg-gray-200 rounded-md"></div>
            </div>

            {/* Description skeleton */}
            <div className="px-4 space-y-2 mb-4">
                <div className="h-4 w-full bg-gray-200 rounded"></div>
                <div className="h-4 w-full bg-gray-200 rounded"></div>
                <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
            </div>
        </div>
    );
}
