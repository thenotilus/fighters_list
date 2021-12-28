import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { addFighter, getList } from '../../utils/api';

const Forms = ({ setList }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [result, setResult] = useState('');

  const onSubmit = (data) => {
    setResult(JSON.stringify(data));
    addFighter(data).then((res) => {
      //getList();
      setList(res);
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center h-full mx-52"
    >
      <input
        {...register('name', { required: true })}
        placeholder="First name"
        className="w-full rounded-md text-xl p-2 my-2 placeholder:text-black text-black"
      />
      {errors.name?.type === 'required' && 'Name is required'}

      <input
        {...register('image', { required: true })}
        placeholder="Image url"
        className="w-full rounded-md text-xl p-2 my-2 placeholder:text-black text-black"
      />
      {errors.image?.type === 'required' && 'Image URL is required'}

      <input
        {...register('sherdog', { required: true })}
        placeholder="Sherdog url"
        className="w-full rounded-md text-xl p-2 my-2 placeholder:text-black text-black"
      />
      {errors.sherdog?.type === 'required' && 'Sherdog URL is required'}

      <input
        {...register('position', { required: true })}
        placeholder="position"
        type="number"
        className="w-full rounded-md text-xl p-2 my-2 placeholder:text-black text-black"
      />
      {errors.position?.type === 'required' && 'Position URL is required'}

      <input
        {...register('ufc_position')}
        placeholder="ufc position"
        type="number"
        className="w-full rounded-md text-xl p-2 my-2 placeholder:text-black text-black"
      />
      <p>{result}</p>
      <button
        type="submit"
        className="h-10 my-2 text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
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
