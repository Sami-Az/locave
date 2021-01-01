import React from 'react';

import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/utils/validators';
import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';

import './PlaceForm.css';
import useForm from '../../shared/hooks/form-hook';


const NewPlace = () => {
    const [formState, inputHandler] = useForm(
      {
        title: {
          value: '',
          isValid: false
        },
        description: {
          value: '',
          isValid: false
        },
        address: {
          value: '',
          isValid: false
        }
      },
      false
    )

    const placeSubmitHandler = (event) => {
        event.preventDefault();
        console.log(formState.inputs); // Send this to backend
    }

    return (
        <form className="place-form" onSubmit={placeSubmitHandler}>
           <Input 
            id="title"
            element="input"
            type="text"
            label="Title"
            errorText="Please enter a valid place title."
            validators={[VALIDATOR_REQUIRE()]}
            onInput={inputHandler}
          />
          <Input 
            id="description"
            element="textarea"
            label="Description"
            errorText="Please enter a valid place description (at least 10 characters)."
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(10)]}
            onInput={inputHandler}
          />
          <Input 
            id="address"
            element="input"
            label="Address"
            errorText="Please enter a valid address."
            validators={[VALIDATOR_REQUIRE()]}
            onInput={inputHandler}
          />
          <Button type="submit" disabled={!formState.isValid}>
             ADD PLACE
          </Button>
        </form>
    )
}

export default NewPlace;
