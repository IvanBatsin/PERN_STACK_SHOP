import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { createBrand } from '../../api/brand';
import { ModalProps } from '../../interfaces/modal';

export const BrandModal: React.FC<ModalProps> = ({onHide, show}: ModalProps) => {
  const [name, setName] = React.useState<string>('');

  const addBrand = async (): Promise<void> => {
    try {
      await createBrand({name});
      setName('');
      onHide();
    } catch (error) {
      window.alert(error.response.data);
    }
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
          Add Brand
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control placeholder="Enter brand name" value={name} onChange={event => setName(event.target.value)}/>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='primary' onClick={addBrand}>Add</Button>
        <Button variant='danger' onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}