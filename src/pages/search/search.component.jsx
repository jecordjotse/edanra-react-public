import React from "react";
import './search.styles.scss';
import FormInputText from "../../components/form-input-text/form-input-text.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import CustomButtonsContainer from "../../components/custom-buttons-container/custom-buttons-container.component";

const SearchPage = () => {

    return (
        <main className="container">
            <div className="row">
                <div className="col-sm-12 offset-sm-0 col-md-8 offset-md-2">
                    <form className="custom-form animated fadeIn delay-1s">
                        <h2>Find a home in your preferred location</h2>

                        <FormInputText type="text" name="town-name" id="town-name" label="Town Name" required/>


                        <h4 style={{fontWeight: 'bold'}}>Filters : </h4>
                        <h4 style={{fontWeight: 'bold'}}>Property type</h4>
                        <div className="form-check form-check-radio">
                            <label htmlFor="house" className="form-check-label">
                                <input className="form-check-input" type="radio" name="type" id="house"
                                       value="house"/>
                                House
                                <span className="circle">
                                        <span className="check"/>
                                    </span>
                            </label>
                        </div>
                        <div className="form-check form-check-radio">
                            <label htmlFor="hotel" className="form-check-label">
                                <input className="form-check-input" type="radio" name="type" id="hotel"
                                       value="hotel"/>
                                Hotel
                                <span className="circle">
                                        <span className="check"/>
                                    </span>
                            </label>
                        </div>
                        <div className="form-check form-check-radio">
                            <label htmlFor="guest-house" className="form-check-label">
                                <input className="form-check-input" type="radio" name="type" id="guest-house"
                                       value="guest-house"/>
                                Guest House
                                <span className="circle">
                                        <span className="check"/>
                                </span>
                            </label>
                        </div>
                        <div className="form-check form-check-radio">
                            <label htmlFor="hostel" className="form-check-label">
                                <input className="form-check-input" type="radio" name="type" id="hostel"
                                       value="hostel"/>
                                Hostel
                                <span className="circle">
                                        <span className="check"/>
                                    </span>
                            </label>
                        </div>


                        <div className="form-group" style={{marginTop: '30px'}}>
                            <label style={{color: 'rgba(0,0,0,0.9)', fontSize: '1.125rem', fontWeight: 'bold'}}
                                   htmlFor="regions">Region</label>
                            <select id="regions" style={{}}
                                    className="form-control selectpicker custom-select rounded-0"
                                    data-style="btn btn-link"
                                    name="rg">
                                <option>Select an option</option>
                                <option value="AS">Ashanti</option>
                                <option value="BA">Brong-Ahafo</option>
                                <option value="CE">Central</option>
                                <option value="EA">Eastern</option>
                                <option value="GA">Greater Accra</option>
                                <option value="NO">Northern</option>
                                <option value="UE">Upper East</option>
                                <option value="UW">Upper West</option>
                                <option value="VO">Volta</option>
                                <option value="WE">Western</option>
                                <option style={{display: 'none'}} disabled="">N/A</option>
                            </select>
                        </div>

                        <div className="form-group" style={{marginTop: '30px'}}>
                            <label style={{color: 'rgba(0,0,0,0.9)', fontSize: '1.125rem', fontWeight: 'bold'}}
                                   htmlFor="district-input">District</label>
                            <input list="district" className="form-control" id="district-input" name="District"
                                   autoComplete="off"/>
                            <datalist id="district">
                                <option value="Adansi North District"/>
                                <option value="Bekwai Municipal District"/>
                                <option value="Tema Metropolitan District"/>
                                <option value="Shai Osudoku"/>
                                <option value="La Nkwantanang Madina Municipal District"/>
                                <option value="Ga West Municipal District"/>
                                <option value="Tolon District"/>
                            </datalist>
                        </div>

                        <CustomButtonsContainer>
                            <CustomButton type='submit'>Send</CustomButton>
                            <CustomButton type='reset' inverted>Reset</CustomButton>
                        </CustomButtonsContainer>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default SearchPage;