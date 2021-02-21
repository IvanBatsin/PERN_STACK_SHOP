import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { createCategory } from '../../api/category';
import { ModalProps } from '../../interfaces/modal';


export const CategoryModal: React.FC<ModalProps> = ({show, onHide}: ModalProps) => {
  const [name, setName] = React.useState<string>('');

  const addCategory = () => {
    createCategory({name});
    setName('');
    onHide();
  }
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Category
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control placeholder="Enter category name" value={name} onChange={event => setName(event.target.value)}/>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='primary' onClick={addCategory}>Add</Button>
        <Button variant='danger' onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}