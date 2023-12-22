import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <div className="flex justify-center items-center mt-[45%] md:mt-[15%]" id="error-page">
                <div>
                    <h1 className="text-center font-bold text-4xl">OOPS!</h1>
                    <p className="my-5 font-semibold text-lg">Sorry, an unexpected error has occurred.</p>
                    <p className="text-center font-medium text-base">No Data Found</p>
                </div>
            </div>
            <div className="flex justify-center items-center mt-5">
            <NavLink to="/" className="btn btn-neutral">Back to Home</NavLink>
            </div>
        </div>
    );
};


export default ErrorPage;