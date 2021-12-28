import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { updateFighter, getList } from '../../utils/api';
import { useParams, useHistory } from 'react-router-dom';

const EditForm = ({ setList, list }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [result, setResult] = useState('');
  const [show, setShow] = useState(false);
  let { id } = useParams();
  let history = useHistory();

  const onSubmit = (data) => {
    setResult(JSON.stringify(data));
    updateFighter(data, id).then((res) => {
      setList(res);
      history.push(`/edit/${data.position}`);
    });
  };

  useEffect(() => {
    if (list.length > 0) {
      const { name, image, sherdog, position, ufc_position } = list[id];
      reset({
        name,
        image,
        sherdog,
        position,
        ufc_position,
      });
    }
  }, [id, list]);

  if (list.length <= 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col w-full mt-10">
      <h1 className="font-bold text-xl mb-5">
        Formulaire d'Edition du combatant: {list[id]?.name}
      </h1>
      <div className="text-left ml-5 flex justify-around">
        <div>
          <p>
            position:
            <span className="text-yellow-400 ml-3">{list[id]?.position}</span>
          </p>
          <p>
            ufc_position:
            <span className="text-yellow-400 ml-3">
              {list[id]?.ufc_position}
            </span>
          </p>
          <p>
            weight_class:
            <span className="text-yellow-400 ml-3">
              {list[id]?.weight_class}
            </span>
          </p>
          <p>
            Wins: <span className="text-yellow-400 ml-3">{list[id]?.Wins}</span>
          </p>
          <p>
            Losses:{' '}
            <span className="text-yellow-400 ml-3">{list[id]?.Losses}</span>
          </p>
          <p>
            factorien:
            <span className="text-yellow-400 ml-3">
              {list[id]?.factorien ? 'true' : 'false'}
            </span>
          </p>
          <p>
            birthday:
            <span className="text-yellow-400 ml-3">{list[id]?.birthday}</span>
          </p>
        </div>
        <div>
          <p>
            Name: <span className="text-yellow-400 ml-3">{list[id]?.name}</span>
          </p>
          <p>
            Nickname:
            <span className="text-yellow-400 ml-3">{list[id]?.nickname}</span>
          </p>
          <p>
            Age: <span className="text-yellow-400 ml-3">{list[id]?.age}</span>
          </p>
          <p>
            Height:{' '}
            <span className="text-yellow-400 ml-3">{list[id]?.height}</span>
          </p>
          <p>
            Weight:{' '}
            <span className="text-yellow-400 ml-3">{list[id]?.weight}</span>
          </p>
          <p>
            Image:{' '}
            <span className="text-yellow-400 ml-3 text-xs">
              {list[id]?.image}
            </span>
          </p>
          <p>
            sherdog:
            <span className="text-yellow-400 ml-3 text-xs">
              {list[id]?.sherdog}
            </span>
          </p>
        </div>
      </div>
      <button
        className="py-2 bg-blue-600 w-1/2 rounded-md mx-auto mt-5"
        onClick={() => setShow(!show)}
      >
        Edit {list[id]?.name}
      </button>
      {show && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col h-full mx-auto w-2/3"
        >
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
      )}
    </div>
  );
};
export default EditForm;
