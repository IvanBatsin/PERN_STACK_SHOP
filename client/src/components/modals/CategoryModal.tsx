import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { ModalProps } from '../../interfaces/modal';

export const CategoryModal: React.FC<ModalProps> = ({show, onHide}: ModalProps) => {
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
          <Form.Control placeholder="Enter category name"/>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='primary' onClick={onHide}>Add</Button>
        <Button variant='danger' onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}