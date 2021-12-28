import { useEffect, useState } from 'react';
import { getList } from './utils/api';
import DraggableList from './components/list/DraggableList';
import Card from './components/card/Card';
import Forms from './components/forms/Forms';
import './styles/App.css';

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getList().then((data) => setList(data));
    //setList(data);
  }, []);
  return (
    <main className="font-bold text-center pt-5 w-full h-full bg-gray-900 text-white">
      <h1 className="mb-10 text-3xl leading-3">fighters_list</h1>
      <div className="flex justify-between items-start">
        <DraggableList
          data={list}
          renderItemContent={(item) => LessonCard(item)}
          setdata={setList}
        />
        <div className="w-[60%] h-[90vh]">
          <Forms setList={setList} />
        </div>
      </div>
    </main>
  );
}

const LessonCard = (item) => <Card item={item} />;

export default App;
