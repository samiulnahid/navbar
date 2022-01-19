
import ModalRoot from './ModalComponent/ModalRoot';
import ModalService from './Services/ModalService';
import TestModal from './TestModal';

function ModalApp() {

  const addModal = () => {
    ModalService.open(TestModal);
  };

  return (
    <div className="App">
      <ModalRoot/>
      <button onClick={ addModal } className="btn btn-primary m-4">Open modal</button>
    </div>
  );
}

export default ModalApp;