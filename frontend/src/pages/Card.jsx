import React from 'react';
import './Homepage.css';

const Card = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                {[1, 2, 3].map((_, index) => (
                    <div key={index} className="col-12 col-sm-6 col-md-4 mb-4 d-flex align-items-stretch">
                        <div className="card p-4 shadow-lg text-center w-100">
                            <div className="mb-3">
                                <i className="bi bi-cash-stack display-4 text-success"></i>
                            </div>
                            <h5 className="fw-bold">Cost Savings</h5>
                            <p className="text-muted">
                                Over time, solar energy can significantly lower electricity bills and, in some cases,
                                allow users to sell excess power back to the grid.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;
