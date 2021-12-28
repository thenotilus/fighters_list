import React, { useState } from 'react';
import AddForm from './AddFrom';
import EditForm from './EditForm';

const Forms = ({ setList, Switch, Route, Link, list }) => {
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
          <li className="py-2 px-4 bg-blue-400 rounded-md">Telecharger JSON</li>
          <li className="py-2 px-4 bg-blue-400 rounded-md">Telecharger CSV</li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <div className="h-[80vh]">
        <Switch>
          <Route exact path="/">
            {'info'}
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
