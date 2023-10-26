import React from "react";
import "./style.css";
import API from "../API";

const CreatePurchase = () => {
    // const onSubmit = () => {}; //remove

    const initialFormData = {
        name: "",
        description: "",
        date: "",
        cost: "",
        method: "Cash"
    };

    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
            ...FormData,

            // Trimming any white space
            [e.target.name]: e.target.value.trim()
        });
    };

    const handleCreatePurchase = async (e) => {
        e.preventDefault();
        const req = e.target;
        console.log(req.name);
        const payload = {
            purchase: FormData
        };
        console.log(JSON.stringify(payload.purchase));
        console.log(req);
        console.log(e);
        await API.createPurchase(payload);
        alert("Created successfully");
    };

    return (
        <div className="create-purchase-container">
            <div className="create-purchase-form">
                <h1>Create Purchase</h1>
                <div className="create-row">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Enter Name" />
                </div>
                <div class="create-row">
                    <label>Description</label>
                    <input type="text" name="description" placeholder="Enter Description" />
                </div>
                <div class="create-row">
                    <label>Location</label>
                    <input type="text" name="location" placeholder="Enter location" />
                </div>
                <div class="create-row">
                    <label>Date</label>
                    <input type="date" name="date" />
                </div>
                <div className="create-row">
                    <label>Cost</label>
                    <input type="number" name="cost" min="0" step="0.01" placeholder="Enter cost" />
                </div>
                <div className="create-row">
                    <label>Method</label>
                    <select name="method">
                        <option value="Cash">Cash</option>
                        <option value="Credit">Credit</option>
                        <option value="Debit">Debit</option>
                        <option value="Check">Check</option>
                        <option value="Crypto">Crypto</option>
                    </select>
                </div>
                <button className="submit-button" onClick={onSubmit}>
                    Submit New Purchase
                </button>
            </div>
        </div>
    );
};

export default CreatePurchase;