import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/authSlice';
import { StyledRegisterForm } from './RegisterPage.slyled';

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(registerThunk(data));
    // console.log(data);
    reset();
  };

  return (
    <StyledRegisterForm onSubmit={handleSubmit(onSubmit)}>
      <label className="label">
        <span>Email</span>
        <input
          className="input"
          {...register('email', { required: true })}
          type="email"
          pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/."
          title="Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix. For example Taras@ukr.ua, adrian@gmail.com, JacobM3rcer@hotmail.com"
          placeholder="Enter email ..."
        />
        {errors.email && <span>This field is required</span>}
      </label>
      <label className="label">
        <span>Name</span>
        <input
          className="input"
          {...register('name', { required: true })}
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Enter name ..."
        />

        {errors.name && <span>This field is required</span>}
      </label>
      <label className="label">
        <span>Password</span>
        <input
          className="input"
          {...register('password', { required: true })}
          type="password"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          placeholder="Enter password ..."
          title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters. For example TgeV23592, 3Greioct."
        />
        {errors.password && <span>This field is required</span>}
      </label>

      <button className="button" type="submit">
        Sign Up
      </button>
    </StyledRegisterForm>
  );
};

export default RegisterPage;
