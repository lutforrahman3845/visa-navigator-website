import { useLoaderData } from "react-router-dom";
import Bannar from "../Components/Bannar";
import Main from "../Components/Main";

const Home = () => {
    const data = useLoaderData();
    const visas = data.slice(0,6)
    return (
        <div>
            <Bannar></Bannar>
            <Main visas={visas}></Main>
        </div>
    );
};

export default Home;