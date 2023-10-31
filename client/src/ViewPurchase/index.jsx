import React, {useState, useEffect} from "react";
import "./style.css";
import API from "../API";

const purchaseData = [
    {
        name: "Pizookie",
        description: "Pizookie Tuesday",
        location: "BJ's Nobel Drive",
        date: "10/17/2023",
        cost: 5,
        method: "Debit",
    },

    {
        name: "Pulled Pork Sandwich",
        description: "Today's lunch",
        location: "Rooftop",
        date: "10/18/2023",
        cost: 10,
        method: "Debit"
    }
]

const ViewPurchase = () => {
    const [body, setBody] = useState([]);

    useEffect(() => {
        API.getPurchase().then((response) => {
            console.log(response);
            setBody(response.data.purchase);
        });
    }, []);

    return (
        <div className="view-container">

            {body.map((purchase) => {
                return (
                    <div className="view-item">
                        <h1 className="item-title">{purchase.name}</h1>
                        <h2 className="item-subtitle">{purchase.description}</h2>
                        <div className="item-row">
                            <p className="item-text">{purchase.location}</p>
                            <p className="item-text">{purchase.data}</p>
                        </div>
                        <div className="item-row">
                            <h2 className="item-subtitle">${purchase.cost}</h2>
                            <p className="item-text">{purchase.method}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ViewPurchase;