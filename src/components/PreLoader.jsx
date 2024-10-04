const PreLoader = () => {
    return (
        <div className="flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 h-screen w-screen">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-indigo-500"></div>
        </div>
    )
}

export default PreLoader;