import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const regx =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const submit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(submit)} className="form">
      <label htmlFor="name" className="form__label form__label-name">
        Name
      </label>
      <input
        className="form__input form__input-name"
        type="text"
        id="name"
        {...register('name', {
          required: { value: true, message: 'This field is required' },
          minLength: 4,
          maxLength: 50,
        })}
      />
      {errors.name && <span>{errors.name.message}</span>}
      <label htmlFor="email" className="form__label form__label-email">
        Email
      </label>
      <input
        className="form__input"
        type="text"
        id="email"
        {...register('email', {
          required: { value: true, message: 'This field is required' },
          minLength: 4,
          pattern: regx,
        })}
      />
      {errors.email && <span>{errors.email.message}</span>}
      <label htmlFor="subject" className="form__label form__label-subject">
        Subject
      </label>
      <input
        className="form__input"
        type="text"
        id="subject"
        {...register('subject', {
          required: { value: true, message: 'This field is required' },
          minLength: 4,
          maxLength: 50,
        })}
      />
      {errors.subject && <span>{errors.subject.message}</span>}
      <label htmlFor="message" className="form__label form__message">
        Message
      </label>
      <input
        className="form__input form__input-message"
        type="text"
        id="message"
        {...register('message', {
          required: { value: true, message: 'This field is required' },
          minLength: 4,
          maxLength: 50,
        })}
      />
      {errors.message && <span class="span-1">{errors.message.message}</span>}
      <button className="form__cta">Send Message</button>
    </form>
  );
};

export default Form;
