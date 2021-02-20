import React from 'react';
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import { Context } from '../..';
import { ModalProps } from '../../interfaces/modal';

interface Description {
  id: number,
  title: string,
  description: string
}

export const DeviceModal: React.FC<ModalProps> = ({onHide, show}: ModalProps) => {
  const [info, setInfo] = React.useState<Description[]>([]);
  const {devices} = React.useContext(Context);

  const addInfo = (): void => {
    setInfo(prevState => [...prevState, {title: 'new test', description: 'new test description', id: Date.now()}]);
  }

  const removeInfo = (id: number): void => {
    setInfo(prevState => prevState.filter(item => item.id !== id));
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
          Add Device
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row className="d-flex justify-content-start">
            <Dropdown className="m-2">
              <DropdownToggle>Choose Category</DropdownToggle>
              <DropdownMenu>
                {devices?.categories.map(category => {
                  return <DropdownItem key={category.id}>{category.name}</DropdownItem>
                })}
              </DropdownMenu>
            </Dropdown>
            <Dropdown className="m-2">
              <DropdownToggle>Choose Brand</DropdownToggle>
              <DropdownMenu>
                {devices?.brands.map(brand => {
                  return <DropdownItem key={brand.id}>{brand.name}</DropdownItem>
                })}
              </DropdownMenu>
            </Dropdown>
          </Row>
          <Form.Control className="mt-2" name="name" placeholder="Brand name"/>
          <Form.Control className="mt-2" name="price" type="number" placeholder="Brand price"/>
          <Form.Control className="mt-2" name="image" type="file" placeholder="Brand image"/>
          <hr/>
          <Button onClick={addInfo}>Add new description</Button>
            {info.map(description => {
              return (
                <Row className="mb-2 mt-2" key={description.id}>
                  <Col md={4}>
                    <Form.Control placeholder="Enter description property name"/>
                  </Col>
                  <Col md={4}>
                    <Form.Control placeholder="Enter description value"/>
                  </Col>
                  <Col md={4}>
                    <Button variant="danger" onClick={() => removeInfo(description.id)}>Delete</Button>
                  </Col>
                </Row>
              )
            })}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='primary' onClick={onHide}>Add</Button>
        <Button variant='danger' onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}