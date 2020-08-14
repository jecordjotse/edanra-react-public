import React, {useState} from 'react';
import {connect} from 'react-redux';
import FormInputText from "../../components/form-input-text/form-input-text.component";
import CustomButtonsContainer from "../../components/custom-buttons-container/custom-buttons-container.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import {selectDistricts, selectRegions} from "../../redux/static-data/static-data.selectors";
import {selectProperty} from "../../redux/properties/properties.selectors";
import {propertyEditStart} from "../../redux/property-upload/property-upload.actions";
import {
    editSpaceValidate,
    errorObject,
    validateAddress,
    validateContact,
    validateDescription,
    validateMail,
    validateName, validatePrice, validateTown
} from "../../assets/js/validation";
import Navbar from "../../components/navbar/navbar.component";
import Footer from "../../components/footer/footer.component";
import {Helmet} from "react-helmet";
import ScrollToTop from "../../utils/scroll-to-top";
import {selectIsPropertyEdited} from "../../redux/property-upload/property-upload.selectors";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";
import SuccessTick from "../../components/success-tick/success-tick.component";
import BackToDashLink from "../../components/back-to-dash-link/back-to-dash-link.component";


const EditSpace = ({regions, districts, property, propertyEditStart, isPropertyEdited}) => {

    const [updateButtonVisibility, setUpdateButtonVisibility] = useState(true);

    const [propertyDetails, setPropertyDetails] = useState({
        uid: property.uid,
        name: property.name ? property.name : "",
        email: property.email,
        contact: property.contact,
        address: property.address,
        property_type: property.property_type,
        description: property.description ? property.description : "",
        region: property.region,
        district: property.district,
        town: property.town,
        price: property.price,
        negotiation_status: property.negotiation_status,
        no_of_bedrooms: property.no_of_bedrooms ? property.no_of_bedrooms : "",
        ad_type: property.ad_type ? property.ad_type: "",
        charge_rate: property.charge_rate ? property.charge_rate: ""
    });

    const [errorMessages, setErrorMessages] = useState({
        nameError: '',
        mailError: '',
        contactError: '',
        addressError: '',
        descriptionError: '',
        regionError: '',
        townError: '',
        priceError: '',
    });

    const {property_type,region, district, negotiation_status, charge_rate, no_of_bedrooms,...otherPropertyDetails} = propertyDetails;

    const setError = () => {
        let error = errorObject.error;
        let message = errorObject.message;
        setErrorMessages({...errorMessages, [error]: message});
    };

    const validatePropertyName = event => {
        validateName(event);
        setError();
    };

    const validatePropertyMail = event => {
        validateMail(event);
        setError();
    };

    const validatePropertyContact = event => {
        validateContact(event);
        setError();
    };

    const validatePropertyAddress = event => {
        validateAddress(event);
        setError();
    };


    const makeRegionValid = () => {
        setErrorMessages({...errorMessages, regionError: ''});
    };


    const validatePropertyDescription = event => {
        validateDescription(event);
        setError();
    };

    const validatePropertyTown = event => {
        validateTown(event);
        setError();
    };

    const validatePropertyPrice = event => {
        validatePrice(event);
        setError();
    };

    const handleSubmit = event => {
        event.preventDefault();
        setUpdateButtonVisibility(false);
        const isValid = editSpaceValidate(event);
        setError();

        if (isValid) {
            propertyEditStart(propertyDetails);
        }
    };

    const handleChange = event => {

        setUpdateButtonVisibility(true);

        const {name, value} = event.target;
        setPropertyDetails({
            ...propertyDetails,
            [name]: value,
        });
        if (event.target.name === 'name') {
            validatePropertyName(event);
        } else if (event.target.name === 'email') {
            validatePropertyMail(event);
        } else if (event.target.name === 'contact') {
            validatePropertyContact(event);
        } else if (event.target.name === 'address') {
            validatePropertyAddress(event);
        } else if (event.target.name === 'description') {
            validatePropertyDescription(event);
        } else if (event.target.name === 'town') {
            validatePropertyTown(event);
        } else if (event.target.name === 'price') {
            validatePropertyPrice(event);
        } else if (event.target.name === 'region') {
            makeRegionValid();
        }
    };

    return (
        <>
            <Helmet>
                <title>Edit Your Ad Details Here</title>
            </Helmet>
            <ScrollToTop/>
            <Navbar/>
            <main className="container">
                <div className="row">
                    <div className="col-sm-12 offset-sm-0 col-md-8 offset-md-2 animated fadeIn delay-1s">
                        <form onSubmit={handleSubmit} className="custom-form form-horizontal"
                              encType="multipart/form-data">

                            <h2>Edit The Details For Your Listing</h2>
                            <h4>Fill the form below with the details of the particular property you want to host. To
                                make
                                transactions
                                easy make sure you input accurate information about the property
                            </h4>
                            <h5 className="custom-form-subhead">1. Please enter your details</h5>

                            <FormInputText value={otherPropertyDetails.name} handleChange={handleChange} type='text'
                                           name='name' id='name' label='Name' onBlur={validatePropertyName}/>
                            <p className='red o-100'>{errorMessages.nameError}</p>

                            <FormInputText value={otherPropertyDetails.email} handleChange={handleChange} type='email'
                                           name='email' id='email' label='Email'
                                           onBlur={validatePropertyMail}/>
                            <p className='red o-100'>{errorMessages.mailError}</p>

                            <FormInputText value={otherPropertyDetails.contact} handleChange={handleChange} type='tel'
                                           name='contact' id='contact'
                                           label='Contact' onBlur={validatePropertyContact}/>
                            <p className='red o-100'>{errorMessages.contactError}</p>

                            <FormInputText value={otherPropertyDetails.address} handleChange={handleChange} type='text'
                                           name='address' id='address'
                                           label='Address' onBlur={validatePropertyAddress}/>
                            <p className='red o-100'>{errorMessages.addressError}</p>


                            <h5 className="custom-form-subhead">2. Please provide the details of your listing</h5>
                            <h5 style={{fontWeight: 'bold'}}>Property type</h5>
                            <div className="form-check form-check-radio">
                                <label htmlFor="house" className="form-check-label">
                                    <input onChange={handleChange} className="form-check-input" type="radio"
                                           name="property_type" id="house"
                                           value="House" checked={property_type === "House"}/>
                                    House
                                    <span className="circle">
                                    <span className="check"/>
                                </span>
                                </label>
                            </div>
                            <div className="form-check form-check-radio">
                                <label htmlFor="hotel" className="form-check-label">
                                    <input onChange={handleChange} className="form-check-input" type="radio"
                                           name="property_type" id="hotel"
                                           value="Hotel" checked={property_type === "Hotel"}/>
                                    Hotel
                                    <span className="circle">
                                    <span className="check"/>
                                </span>
                                </label>
                            </div>
                            <div className="form-check form-check-radio">
                                <label htmlFor="guest-house" className="form-check-label">
                                    <input onChange={handleChange} className="form-check-input" type="radio"
                                           name="property_type" id="guest-house"
                                           value="Guest House" checked={property_type === "Guest House"}/>
                                    Guest House
                                    <span className="circle">
                                    <span className="check"/>
                                </span>
                                </label>
                            </div>
                            <div className="form-check form-check-radio">
                                <label htmlFor="hostel" className="form-check-label">
                                    <input onChange={handleChange} className="form-check-input" type="radio"
                                           name="property_type" id="hostel"
                                           value="Hostel" checked={property_type === "Hostel"}/>
                                    Hostel
                                    <span className="circle">
                                    <span className="check"/>
                                </span>
                                </label>
                            </div>
                            <div className="form-check form-check-radio">
                                <label htmlFor="apartment" className="form-check-label">
                                    <input onChange={handleChange} className="form-check-input" type="radio"
                                           name="property_type" id="apartment"
                                           value="Apartment" checked={property_type === "Apartment"}/>
                                    Apartment
                                    <span className="circle">
                                    <span className="check"/>
                                </span>
                                </label>
                            </div>

                            <FormInputText value={no_of_bedrooms} handleChange={handleChange} type='number' min="0" name='no_of_bedrooms' id='no_of_bedrooms'
                                           label='Number of bedrooms'/>


                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea value={otherPropertyDetails.description} onChange={handleChange}
                                          className="form-control" id="description" rows="3" name='description'/>
                            </div>
                            <p className='red o-100'>{errorMessages.descriptionError}</p>

                            <div className="form-group">
                                <label style={{color: 'rgba(0,0,0,0.5)'}} htmlFor="region">Region</label>
                                <select value={region} onChange={handleChange} className="form-control"
                                        data-style="btn btn-link" id="region" name="region"
                                        required>
                                    <option value>Select an option</option>
                                    {
                                        regions.map((region, idx) => {
                                            return (
                                                <option key={idx + 30} value={region}>{`${region} Region`}</option>);
                                        })
                                    }
                                </select>
                            </div>
                            <p className='red o-100'>{errorMessages.regionError}</p>

                            <div className="form-group">
                                <label htmlFor="district">District</label>
                                <input value={district} onChange={handleChange} list="district" className="form-control"
                                       name="district" autoComplete="off"/>
                                <datalist id="district">
                                    {
                                        districts.map((district, idx) => {
                                            return (<option key={idx} value={district}/>);
                                        })
                                    }
                                </datalist>
                            </div>

                            <FormInputText value={otherPropertyDetails.town} handleChange={handleChange} type='text'
                                           name='town' id='town' label='Town'
                            />
                            <p className='red o-100'>{errorMessages.townError}</p>


                            <h5 className="custom-form-subhead">Charge Rate</h5>
                            <div className="form-check form-check-radio">
                                <label className="form-check-label">
                                    <input onChange={handleChange} className="form-check-input" type="radio"
                                           name="charge_rate" id="per-night"
                                           value="per night" checked={charge_rate === 'per night'} />
                                    Per night
                                    <span className="circle">
                                    <span className="check"/>
                                </span>
                                </label>
                            </div>
                            <div className="form-check form-check-radio">
                                <label className="form-check-label">
                                    <input onChange={handleChange} className="form-check-input" type="radio"
                                           name="charge_rate"
                                           id="per-month" value="per month"
                                           checked={charge_rate === 'per month'} />
                                    Per month
                                    <span className="circle">
                                    <span className="check"/>
                                </span>
                                </label>
                            </div>



                            <FormInputText value={otherPropertyDetails.price} handleChange={handleChange} type='number' name='price' id='price'
                                           label={`Price ${!charge_rate ? '' : charge_rate === "per night" ? 'per night' : 'per month'} (GHS)`}
                                           onBlur={validatePropertyPrice}/>
                            <p className='red o-100'>{errorMessages.priceError}</p>

                            <h5 className="custom-form-subhead">4. Negotiation status</h5>
                            <div className="form-check form-check-radio">
                                <label className="form-check-label">
                                    <input onChange={handleChange} className="form-check-input" type="radio"
                                           name="negotiation_status" id="negotiable"
                                           value="Negotiable" checked={negotiation_status === 'Negotiable'}/>
                                    Negotiable
                                    <span className="circle">
                                    <span className="check"/>
                                </span>
                                </label>
                            </div>
                            <div className="form-check form-check-radio">
                                <label className="form-check-label">
                                    <input onChange={handleChange} className="form-check-input" type="radio"
                                           name="negotiation_status"
                                           id="non-negotiable" value="Non-negotiable"
                                           checked={negotiation_status === 'Non-negotiable'}/>
                                    Non-negotiable
                                    <span className="circle">
                                    <span className="check"/>
                                </span>
                                </label>
                            </div>

                            <CustomButtonsContainer>

                                {
                                    isPropertyEdited ? <LoadingSpinner/> : updateButtonVisibility ? <CustomButton type='submit'>Update</CustomButton> : <SuccessTick/>
                                }

                                <CustomButton type='reset' inverted="true">Reset</CustomButton>
                            </CustomButtonsContainer>

                            {
                                isPropertyEdited ? <BackToDashLink visibility="hidden" /> : <BackToDashLink visibility="visible"/>
                            }
                        </form>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
};

const mapStateToProps = (state, ownProps) => ({
    districts: selectDistricts(state),
    regions: selectRegions(state),
    property: selectProperty(ownProps.match.params.uid)(state),
    isPropertyEdited: selectIsPropertyEdited(state)
});

const mapDispatchToProps = dispatch => ({
    propertyEditStart: (editedDetails) => dispatch(propertyEditStart(editedDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditSpace);
