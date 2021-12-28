import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { addFighter, getList } from '../../utils/api';

const AddForm = ({ setList }) => {
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
    <div className="flex flex-col justify-center w-full max-w-md mx-auto mt-5">
      <h1 className="font-bold text-xl mb-5">
        Formulaire d'ajoute de combatant
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col h-full">
        <label className="font-bold text-l w-full text-left mb-2">
          Nom du combatant :
        </label>
        <input
          {...register('name', { required: true })}
          placeholder="First name"
          className="w-full rounded-md text-xl p-2 my-2 placeholder:text-black text-black"
        />
        {errors.name?.type === 'required' && 'Name is required'}
        <label className="font-bold text-l w-full text-left mb-2">
          Url de l'image :
        </label>
        <input
          {...register('image', { required: true })}
          placeholder="Image url"
          className="w-full rounded-md text-xl p-2 my-2 placeholder:text-black text-black"
        />
        {errors.image?.type === 'required' && 'Image URL is required'}
        <label className="font-bold text-l w-full text-left mb-2">
          Lien Sherdog :
        </label>
        <input
          {...register('sherdog', { required: true })}
          placeholder="Sherdog url"
          className="w-full rounded-md text-xl p-2 my-2 placeholder:text-black text-black"
        />
        {errors.sherdog?.type === 'required' && 'Sherdog URL is required'}
        <label className="font-bold text-l w-full text-left mb-2">
          Position dans la liste :
        </label>
        <input
          {...register('position', { required: true })}
          placeholder="position"
          type="number"
          className="w-full rounded-md text-xl p-2 my-2 placeholder:text-black text-black"
        />

        {errors.position?.type === 'required' && 'Position URL is required'}
        <label className="font-bold text-l w-full text-left mb-2">
          Classement UFC :
        </label>
        <input
          {...register('ufc_position')}
          placeholder="ufc position"
          type="number"
          className="w-full rounded-md text-xl p-2 my-2 placeholder:text-black text-black"
        />
        <button
          type="submit"
          className="h-10 mt-5 w-full text-xl font-semibold text-white transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
        >
          Enrengistrer
        </button>
      </form>
    </div>
  );
};
export default AddForm;
