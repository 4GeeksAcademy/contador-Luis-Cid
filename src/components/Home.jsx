import React from "react";
import SecondsCounter from "./SecondsCounter";
;

 

const Home = () => {
    const [seconds, setSeconds] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return <SecondsCounter seconds={seconds} />;
};

export default Home;
