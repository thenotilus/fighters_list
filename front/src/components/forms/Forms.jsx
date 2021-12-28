import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Forms = () => {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState('');

  return (
    <form
      onSubmit={handleSubmit((data) => setResult(JSON.stringify(data)))}
      className="flex flex-col justify-center h-full mx-52"
    >
      <input
        {...register('firstName')}
        placeholder="First name"
        className="w-full rounded-md text-xl p-2 my-2 placeholder:text-black text-black"
      />
      <input
        {...register('lastName')}
        placeholder="Last name"
        className="w-full rounded-md text-xl p-2 my-2 placeholder:text-black text-black"
      />
      <select
        {...register('category')}
        className="w-full rounded-md text-xl p-2 my-2 text-black"
      >
        <option value="">Select...</option>
        <option value="A">Category A</option>
        <option value="B">Category B</option>
      </select>
      <p>{result}</p>
      <button
        type="submit"
        className="h-10 m-2 text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
      >
        Success
      </button>
    </form>
  );
};

const EditForm = ({ id }) => {
  if (!id) {
    return 'Select a fighter to edit or create a new one';
  }
  return <div></div>;
};
export default Forms;
