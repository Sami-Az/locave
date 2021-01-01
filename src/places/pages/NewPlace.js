import React from 'react';

import { VALIDATOR_REQUIRE } from '../../shared/utils/validators';
import Input from '../../shared/components/FormElements/Input';

import './NewPlace.css';

const NewPlace = () => {
    return (
        <form className="place-form">
           <Input 
            element="input"
            type="text"
            label="Title"
            errorText="Please enter a valid title."
            validators={[VALIDATOR_REQUIRE()]}
          />
        </form>
    )
}

export default NewPlace;
