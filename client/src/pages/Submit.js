import React from 'react';
import Header from '../components/Header';
import API from '../utils/API';

export default class Submit extends React.Component {
    state = {
        name: "",
        address: "",
        city: "",
        state: "WA",
        zip: null,
        phone_number: "",
        website: "",
        served_meal: false,
        food_bank: false,
        immediate_shelter: false,
        longterm_shelter: false,
        urgent_care: false,
        dental: false,
        mental: false,
        daily: false,
        description: "",
        age_min: null,
        age_max: null,
        male: false,
        female: false,
        family_youth: false
    }
    
    handleChange = event => {
        const isCheckBox = event.target.type === 'checkbox';
        this.setState({ 
            [event.target.name]: isCheckBox 
            ? event.target.checked 
            : event.target.value 
         });
    }

    handleSubmit = (event)  => {
        event.preventDefault();
        let newOrg = {
            name: this.state.name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            phone_number: this.state.phone_number,
            website: this.state.website,
            served_meal: this.state.served_meal,
            food_bank: this.state.food_bank,
            immediate_shelter: this.state.immediate_shelter,
            longterm_shelter: this.state.longterm_shelter,
            urgent_care: this.state.urgent_care,
            dental: this.state.dental,
            mental: this.state.mental,
            daily: this.state.daily,
            description: this.state.description,
            age_min: this.state.age_min,
            age_max: this.state.age_max,
            male: this.state.male,
            female: this.state.female,
            family_youth: this.state.family_youth
        }
        console.log(newOrg);
        API.createOrg(newOrg)
            .then((response) => {
                console.log(response);
                // this.setState(this.state);
            })
            .catch((err) => console.log(err));
    }

    render() {
        return(
            <div className="container container-fluid">
                <Header headerName={"Submit an Organization"} />
                <div className="container container-fluid col-8">
                    <form onSubmit={this.handleSubmit}>
                        {/* <!-- Organization Name --> */}
                        <div className="form-group">
                            <label 
                                htmlFor="name">Organization Name</label>
                            <input 
                                name="name"
                                value={this.state.name} 
                                onChange={this.handleChange} 
                                className="form-control" 
                                aria-describedby="org name" 
                                placeholder="Organization's Full Name" />
                        </div>
                        
                        {/* Address Line 1 */}
                        <div className="form-group ">
                            <label 
                                htmlFor="address">Address</label>
                            <input 
                                name="address"
                                value={this.state.address} 
                                onChange={this.handleChange} 
                                className="form-control"
                                aria-describedby="org name" 
                                placeholder="1234 Main St" />
                        </div>
                        
                        {/* City, State, Zip */}
                        <div className="form-row">
                            <div className="form-group col-md-7">
                                <label 
                                    htmlFor="city">City</label>
                                <input 
                                    name="city"
                                    value={this.state.city} 
                                    onChange={this.handleChange}
                                    className="form-control" />
                            </div>
                            <div className="form-group col-md-2">
                                <label 
                                    htmlFor="state">State</label>
                                <select 
                                    name="state"
                                    value={this.state.state} 
                                    onChange={this.handleChange}
                                    id="state" 
                                    className="form-control">
                                    <option value="WA">WA</option>
                                </select>
                            </div>
                            <div className="form-group col-md-3">
                                <label 
                                    htmlFor="zip">Zip</label>
                                <input 
                                    name="zip"
                                    type="number"
                                    value={this.state.zip} 
                                    onChange={this.handleChange} 
                                    className="form-control" />
                            </div>
                        </div>
                        
                        {/* Phone Number and Website */}
                        <div className="form-row d-flex justify-content-start" >
                            {/* Phone Number */}
                            <div className="form-group col-md-4">
                                <label 
                                    htmlFor="phone_number">Phone Number</label>
                                <input
                                    name="phone_number"
                                    value={this.state.phone_number} 
                                    onChange={this.handleChange} 
                                    className="form-control"
                                    aria-describedby="phone number"
                                    placeholder="123.456.7890" />
                            </div>
                            {/* <!-- Website --> */}
                            <div className="form-group col-md-4">
                                <label 
                                    htmlFor="website">Website</label>
                                <input 
                                    name="website"
                                    value={this.state.website} 
                                    onChange={this.handleChange} 
                                    className="form-control"
                                    aria-describedby="website"
                                    placeholder="Website.org" />
                            </div>
                        </div>
                    
                        {/* Serving Population Details */}
                        <div className="form-group population mb-4">
                            <label 
                                htmlFor="population">Populations Served</label>
                            {/* Gender Groups */}
                            <div className="d-flex justify-content-start mb-2">
                                    <div className="form-check form-check-inline col-3">
                                        <input 
                                            name="family_youth"
                                            type="checkbox" 
                                            value={this.state.family_youth} 
                                            onChange={this.handleChange} 
                                            className="form-check-input" />
                                            <label 
                                                className="form-check-label" 
                                                htmlFor="family_youth">Family/Youth</label>
                                    </div>
                                    <div className="form-check form-check-inline col-3">
                                        <input 
                                            name="male"
                                            type="checkbox" 
                                            value={this.state.male} 
                                            onChange={this.handleChange} 
                                            className="form-check-input" />
                                            <label 
                                                className="form-check-label" 
                                                htmlFor="male">Men</label>
                                    </div>
                                    <div className="form-check form-check-inline col-3">
                                        <input 
                                            name="female"
                                            type="checkbox" 
                                            value={this.state.female} 
                                            onChange={this.handleChange} 
                                            className="form-check-input" />
                                            <label 
                                                className="form-check-label" 
                                                htmlFor="female">Women</label>
                                    </div>
                            </div>
                            {/* Age Min/Max */}
                            <div className="d-flex justify-content-start">
                                <div className="form-group col-4">
                                    <label 
                                        htmlFor="age_min">Minumum Age</label>
                                    <input 
                                        name="age_min"
                                        type="number"
                                        value={this.state.age_min}
                                        onChange={this.handleChange}
                                        className="form-control col-5" 
                                        placeholder="18" />
                                </div>
                                <div className="form-group col-4">
                                    <label 
                                        htmlFor="age_min">Maximum Age</label>
                                    <input 
                                        name="age_max"
                                        type="number"
                                        value={this.state.age_max}
                                        onChange={this.handleChange}
                                        className="form-control col-5" 
                                        placeholder="18" />
                                </div>
                            </div>
                        </div>
                        
                        {/* Health Services */}
                        <div className="form-group health mb-4">
                            <label 
                                htmlFor="health">Health &amp; Personal Care</label>
                            <div className="d-flex justify-content-start">
                                <div className="form-check form-check-inline col-3">
                                    <input 
                                        name="urgent_care"
                                        type="checkbox" 
                                        value={this.state.urgent_care} 
                                        onChange={this.handleChange} 
                                        className="form-check-input" />
                                        <label 
                                            className="form-check-label" 
                                            htmlFor="urgent_care">Urgent Care</label>
                                </div>
                                <div className="form-check form-check-inline col-3">
                                    <input 
                                        name="dental"
                                        type="checkbox" 
                                        value={this.state.dental} 
                                        onChange={this.handleChange} 
                                        className="form-check-input" />
                                        <label 
                                            className="form-check-label" 
                                            htmlFor="dental">Dental</label>
                                </div>
                                <div className="form-check form-check-inline col-3">
                                    <input 
                                        name="mental"
                                        type="checkbox" 
                                        value={this.state.mental} 
                                        onChange={this.handleChange} 
                                        className="form-check-input" />
                                        <label 
                                            className="form-check-label" 
                                            htmlFor="mental">Behavioral</label>
                                </div>
                                <div className="form-check form-check-inline col-3">
                                    <input 
                                        name="dental_care"
                                        type="checkbox" 
                                        value={this.state.daily} 
                                        onChange={this.handleChange} 
                                        className="form-check-input" />
                                        <label 
                                            className="form-check-label" 
                                            htmlFor="daily">Daily Care</label>
                                </div>
                            </div>
                        </div>
                        
                        {/* Food */}
                        <div className="form-group food mb-4">
                            <label
                                htmlFor="food">Food</label>
                            <div className="d-flex justify-content-start">
                                <div className="form-check form-check-inline col-3">
                                    <input 
                                        name="served_meal"
                                        type="checkbox" 
                                        value={this.state.served_meal} 
                                        onChange={this.handleChange} 
                                        className="form-check-input" />
                                        <label 
                                            className="form-check-label" 
                                            htmlFor="served_meal">Served Meals</label>
                                </div>
                                <div className="form-check form-check-inline col-3">
                                    <input 
                                        name="food_bank"
                                        type="checkbox" 
                                        value={this.state.food_bank} 
                                        onChange={this.handleChange} 
                                        className="form-check-input" />
                                        <label 
                                            className="form-check-label" 
                                            htmlFor="food_bank">Food Bank</label>
                                </div>
                            </div>
                        </div>
                        
                        {/* Shelter */}
                        <div className="form-group shelter mb-4">
                            <label 
                                htmlFor="shelter">Shelter</label>
                            <div className="d-flex justify-content-start">
                                <div className="form-check form-check-inline col-3">
                                    <input 
                                        name="immediate_shelter"
                                        type="checkbox" 
                                        value={this.state.immediate_shelter} 
                                        onChange={this.handleChange} 
                                        className="form-check-input" />
                                        <label 
                                            className="form-check-label" 
                                            htmlFor="immediate_shelter">Immediate</label>
                                </div>
                                <div className="form-check form-check-inline col-3">
                                    <input 
                                        name="longterm_shelter"
                                        type="checkbox" 
                                        value={this.state.longterm_shelter} 
                                        onChange={this.handleChange} 
                                        className="form-check-input" />
                                        <label 
                                            className="form-check-label" 
                                            htmlFor="longterm_shelter">Long-Term</label>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="form-group">
                            <label 
                                htmlFor="description">Details</label>
                            <textarea 
                                name="description"
                                value={this.state.description} 
                                onChange={this.handleChange} 
                                className="form-control"
                                rows="5"
                                placeholder="Please include days and hours of operation and other important details for those in need of your services."
                                />
                        </div>
                    
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
            
        )
            
    }
};