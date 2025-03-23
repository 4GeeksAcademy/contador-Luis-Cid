import React from "react";
import PropTypes from "prop-types";

const SecondsCounter = ({ seconds }) => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-white">
            <div className="display-4 p-4 bg-secondary rounded shadow">
                <i className="fas fa-clock me-2"></i>
                {seconds.toString().padStart(6, "0")}
            </div>
        </div>
    );
};

SecondsCounter.propTypes = {
    seconds: PropTypes.number.isRequired,
};

export default SecondsCounter;
