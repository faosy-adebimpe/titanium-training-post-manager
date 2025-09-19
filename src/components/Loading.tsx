const Loading = ({ count }: { count: number }) => {
    return (
        <div className="flex flex-wrap gap-5 justify-center items-center">
            {Array.from({ length: count }).map((_, index) => (
                <div
                    className="w-sm rounded-md flex flex-col items-start gap-5 p-3"
                    key={index}
                >
                    <div className="w-full h-10 rounded-md animate-pulse bg-gray-200"></div>
                    <div className="w-full h-24 rounded-md animate-pulse bg-gray-200"></div>
                    <div className="w-20 h-9 animate-pulse bg-gray-200 flex gap-3 items-center rounded-full justify-center">
                        <div className="size-7 rounded-full animate-pulse bg-black/30"></div>
                        <div className="size-7 rounded-full animate-pulse bg-black/30"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Loading;
