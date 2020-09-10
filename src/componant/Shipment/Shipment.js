import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css'
import { ContextElement } from '../../App';
const Shipment = () => {
   const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    
    const [loginInfo] = useContext(ContextElement)

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
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
      {errors.email && <span className="error">This field is required</span>}

      <input
        name="address"
        ref={register({ required: true })}
        placeholder="Address"
      />
      {errors.address && <span className="error">This field is required</span>}

      <input
        name="exampleRequired"
        ref={register({ required: true })}
        placeholder="Phone Number"
      />
      {errors.exampleRequired && (
        <span className="error">This field is required</span>
      )}

      <input type="submit" />
    </form>
  );
};

export default Shipment;