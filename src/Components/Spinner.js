
function Spinner()
{
    return(
        <div className="flex flex-col items-center space-y-2">
            <div className="spinner"></div>
            <p className="text-white font-semibold text-3xl">Loading....</p>
        </div>
    );
}

export default Spinner;