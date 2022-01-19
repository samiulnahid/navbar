import ModalBody from "./ModalComponent/ModalBody"
import ModalFooter from "./ModalComponent/ModalFooter"
import ModalHeader from "./ModalComponent/ModalHeader"
import Modal from "./ModalComponent/Modal"


export default function TestModal(props) {
  return (
    <Modal>
      <ModalHeader>
        <h3>Test Modal #1</h3>
      </ModalHeader>
      <ModalBody>
        <p>Body of modal #1</p>
      </ModalBody>
      <ModalFooter>
        <button onClick={ props.close } className="btn btn-primary">Close Modal</button>
      </ModalFooter>
    </Modal>
  );
}