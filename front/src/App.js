import { useEffect, useState } from 'react';
import { getList } from './utils/api';
import DraggableList from './components/list/DraggableList';
import Card from './components/card/Card';
import Forms from './components/forms/Forms';
import './styles/App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getList().then((data) => setList(data));
    //setList(data);
  }, []);
  return (
    <Router>
      <main className="font-bold text-center mt-5 w-full h-full text-white">
        <h1 className="mb-10 text-3xl leading-3">fighters_list</h1>
        <div className="flex justify-between items-start">
          <DraggableList
            data={list}
            renderItemContent={(item) => LessonCard(item)}
            setdata={setList}
            Link={Link}
          />
          <div className="w-[60%] h-[90vh]">
            <Forms
              setList={setList}
              Link={Link}
              Switch={Switch}
              Route={Route}
              list={list}
            />
          </div>
        </div>
      </main>
    </Router>
  );
}

const LessonCard = (item) => <Card item={item} />;

export default App;
