import React, { useState } from 'react';
import AddForm from './AddFrom';
import EditForm from './EditForm';
import { downloadJson, downloadCSV, callScript } from '../../utils/api';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const Forms = ({ setList, Switch, Route, Link, list, mtime }) => {
  const [loading, setLoading] = useState(false);
  const toastId = React.useRef(null);

  const callScript = async () => {
    const script = axios.request({
      method: 'get',
      url: 'http://localhost:5000/api/script',
    });
    toast.promise(script, {
      pending: {
        render() {
          return 'En cours...';
        },
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      },
      success: {
        render() {
          return 'Fichier mis à jour 👌';
        },
        icon: true,
      },
      error: 'Erreur 🤯',
    });
  };

  return (
    <div className="h-full">
      <nav className="mt-5">
        <ul className="flex justify-evenly">
          <li className="py-2 px-4 bg-green-600 rounded-md">
            <Link to="/">Accueil</Link>
          </li>
          <li className="py-2 px-4 bg-green-600 rounded-md">
            <Link to="/add">Ajouter</Link>
          </li>
          <button
            className="py-2 px-4 bg-green-600 rounded-md"
            onClick={() => callScript(toastId)}
          >
            Mettre à jour le CSV
          </button>
        </ul>
        {/* <span>Le fichier a été mis à jour</span> */}
      </nav>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <div className="h-[80vh]">
        <Switch>
          <Route exact path="/">
            <div className="flex justify-center items-center h-full text-xl flex-col gap-2">
              <p className="">
                Date de modification du fichier JSON:
                <span className="ml-5">
                  {new Date(mtime.mtimeJSON).toLocaleString('fr-FR')}
                </span>
              </p>
              <p className="">
                Date de modification du fichier CSV:
                <span className="ml-5">
                  {new Date(mtime.mtimeCSV).toLocaleString('fr-FR')}
                </span>
              </p>
              <div className="flex w-full justify-center items-center gap-5">
                <button
                  className="py-2 px-4 bg-blue-400 rounded-md"
                  onClick={() => downloadJson()}
                >
                  Telecharger JSON
                </button>
                <button
                  className="py-2 px-4 bg-blue-400 rounded-md"
                  onClick={() => downloadCSV()}
                >
                  Telecharger CSV
                </button>
              </div>
            </div>
          </Route>
          <Route path="/add">
            <AddForm setList={setList} />
          </Route>
          <Route path="/edit/:id">
            <EditForm setList={setList} list={list} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Forms;
