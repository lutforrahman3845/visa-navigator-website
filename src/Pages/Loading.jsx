import Lottie from "lottie-react";
import loader from "../assets//loader.json";
const Loading = () => {
    return (
        <div className="flex justify-center min-h-screen dark:bg-secondary">
            <Lottie className="w-36" animationData={loader} loop={true} />
        </div>
    );
};

export default Loading;