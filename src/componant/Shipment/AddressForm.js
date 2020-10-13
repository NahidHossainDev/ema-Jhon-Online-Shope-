import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { ContextElement } from '../../App';

const AddressForm = (props) => {
    const { register, handleSubmit, errors } = useForm();
  const [loginInfo] = useContext(ContextElement);
    
    return (
      <div style={{ display: "inline-block" }}>
        <form className="ship-form" onSubmit={handleSubmit(props.onSubmit)}>
          <input
            name="name"
            defaultValue={loginInfo.name}
            ref={register}
            placeholder="Full Name"
          />
          {errors.name && <span className="error">This field is required</span>}

          <input
            name="email"
            defaultValue={loginInfo.email}
            ref={register({ required: true })}
            placeholder="Email"
          />
          {errors.email && (
            <span className="error">This field is required</span>
          )}

          <input
            name="address"
            ref={register({ required: true })}
            placeholder="Address"
          />
          {errors.address && (
            <span className="error">This field is required</span>
          )}

          <input
            name="phone"
            ref={register({ required: true })}
            placeholder="Phone Number"
          />
          {errors.exampleRequired && (
            <span className="error">This field is required</span>
          )}

          <input type="submit" />
        </form>
      </div>
    );
};

export default AddressForm;