import React from 'react';

const ServicesCard = ({ services}) => {

    return (
        <div className="col-lg-4">
            <div className="card serC mb-5">
                <img className="card-img-top service-image" src={`data:image/jpeg;base64,${services.newImage.img}`} alt="not found" />
                <div className="card-body text-center">
                    <h4 className="card-title text-capitalize">{services.name}</h4>
                    <h4>${services.price} </h4>
                    <p className="card-text">{services.desc} </p>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;