import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/authSlice';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(loginThunk(data));
    // console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <span>Email</span>
        <input
          {...register('email', { required: true })}
          type="email"
          // pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/."
          title="Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix. For example Taras@ukr.ua, adrian@gmail.com, JacobM3rcer@hotmail.com"
          placeholder="Enter email ..."
        />
        {errors.email && <span>This field is required</span>}
      </label>

      <label>
        <span>Password</span>
        <input
          {...register('password', { required: true })}
          type="password"
          // pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          placeholder="Enter password ..."
          title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters. For example TgeV23592, 3Greioct."
        />
        {errors.password && <span>This field is required</span>}
      </label>

      <button type="submit">Sign In</button>
    </form>
  );
};

export default LoginPage;
