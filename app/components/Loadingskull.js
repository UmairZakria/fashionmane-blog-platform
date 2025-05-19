export function Loadingskull() {
    return (
        <div className="shadow-md p-2 w-full md:w-[280px] h-[300px] overflow-hidden rounded-sm bg-gray-200 md:mx-0 mx-5 space-y-2 pb-3 flex flex-col animate-pulse">
            {/* Image skeleton */}
            <div className="h-[200px]  bg-gray-200  rounded   -lg"></div>

            {/* Text content skeleton */}
            <div className="mx-2 flex h-full justify-around flex-col space-y-2">
                <div className="space-y-4">
                    {/* Title */}
                    <div className="h-6 w-3/4  bg-gray-200  rounded   "></div>

                    {/* Category & Date */}
                    <div className="flex justify-between items-center text-sm text-gray-500">
                        <div className="h-4 w-20  bg-gray-200  rounded   "></div>
                        <div className="h-4 w-24  bg-gray-200  rounded   "></div>
                    </div>
                </div>

                {/* Description lines */}
                <div className="space-y-2">
                    <div className="h-3 w-full  bg-gray-400  rounded   "></div>
                    <div className="h-3 w-full  bg-gray-400  rounded   "></div>
                    <div className="h-3 w-5/6  bg-gray-400  rounded   "></div>
                    <div className="h-3 w-4/6  bg-gray-400  rounded   "></div>
                </div>
            </div>
        </div>

    );
}
