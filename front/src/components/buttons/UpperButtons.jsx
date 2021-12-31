import { getList } from '../../utils/api';
import { useHistory } from 'react-router-dom';

const UpperButtons = ({ setList }) => {
  // let history = useHistory();
  // const filter_fac = () => {
  //   getList().then((data) => {
  //     history.push('/');

  //     setList(data);
  //     const newList = data.filter((fighter) => fighter.factorien === true);
  //     setList(newList);
  //   });
  // };
  // const filter_nonfac = () => {
  //   getList().then((data) => {
  //     history.push('/');
  //     setList(data);
  //     const newList = data.filter((fighter) => fighter.factorien === false);
  //     setList(newList);
  //   });
  // };
  return (
    <div>
      <p className="my-5 text-lg">
        Déplacez les combattants pour les réorganiser
      </p>
      {/* <div className="flex justify-evenly">
        <button
          className="bg-blue-600 rounded-sm p-3 mb-2 font-semibold"
          onClick={() => filter_fac()}
        >
          factorien
        </button>
        <button
          className="bg-blue-600 rounded-sm p-3 mb-2 font-semibold"
          onClick={() => filter_nonfac()}
        >
          non-factorien
        </button>
      </div> */}
    </div>
  );
};

export default UpperButtons;
