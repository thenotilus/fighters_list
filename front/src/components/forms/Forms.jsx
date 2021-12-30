import React, { useState } from 'react';
import AddForm from './AddFrom';
import EditForm from './EditForm';
import { downloadJson, downloadCSV } from '../../utils/api';

const Forms = ({ setList, Switch, Route, Link, list, mtime }) => {
  return (
    <div className="h-full">
      <nav className="mt-5">
        <ul className="flex justify-evenly">
          <li className="py-2 px-4 bg-green-600 rounded-md">
            <Link to="/">Home</Link>
          </li>
          <li className="py-2 px-4 bg-green-600 rounded-md">
            <Link to="/add">Ajouter</Link>
          </li>
        </ul>
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
