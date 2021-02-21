import { observer } from 'mobx-react-lite';
import React from 'react';
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import { Context } from '../..';
import { getBrands } from '../../api/brand';
import { getCategories } from '../../api/category';
import { createDevice } from '../../api/device';
import { ModalProps } from '../../interfaces/modal';

interface Description {
  id: number,
  title: string,
  description: string
}

interface FormProps {
  name: string,
  price: number,
  image: File | undefined
}

export const DeviceModal: React.FC<ModalProps> = observer(({onHide, show}: ModalProps) => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const inputFile = React.useRef<HTMLInputElement>(null);
  const [info, setInfo] = React.useState<Description[]>([]);
  const {devices} = React.useContext(Context);
  const [form, setForm] = React.useState<FormProps>({
    image: undefined,
    name: '',
    price: 0
  });

  const addInfo = (): void => {
    setInfo(prevState => [...prevState, {title: 'title', description: 'description', id: Date.now()}]);
  }

  const removeInfo = (id: number): void => {
    setInfo(prevState => prevState.filter(item => item.id !== id));
  }

  const handleSubmit = async (): Promise<void> => {
    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('price', form.price + '');
    formData.append('image', form.image!);
    formData.append('brandId', devices!.getSelectedBrand!.id + '');
    formData.append('categoryId', devices!.getSelectedCategory!.id + '');
    formData.append('info', JSON.stringify(info));

    try {
      await createDevice(formData);
      onHide();
    } catch (error) {
      window.alert(error.response.data);
    }
  }

  const changeDescription = (key: string, value: string, number: number): void => {
    setInfo(info.map(item => item.id === number ? {...item, [key]: value} : item));
  }

  const handleChange = (name: string, value: string): void => {
    setForm(prevState => ({...prevState, [name]: value}));
  }

  const handleChangeFile = (): void => {
    setForm(prevState => ({...prevState, image: inputFile.current!.files![0]}));
  }
  
  React.useEffect(() => {
    getCategories().then(data => devices?.setCategories(data.data));
    getBrands().then(data => devices?.setBrands(data.data));
  }, []);

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
        <Form ref={formRef} datatype="multipart-form-data">
          <Row className="d-flex justify-content-start">
            <Dropdown className="m-2">
              <DropdownToggle>{devices?.getSelectedCategory ? devices?.getSelectedCategory.name : 'Choose Category'}</DropdownToggle>
              <DropdownMenu>
                {devices!.categories.length > 0 && devices?.categories.map(category => {
                  return <DropdownItem onClick={() => devices.setSelectedCategory(category)} key={category.id}>{category.name}</DropdownItem>
                })}
              </DropdownMenu>
            </Dropdown>
            <Dropdown className="m-2">
              <DropdownToggle>{devices?.getSelectedBrand ? devices.getSelectedBrand.name : 'Choose Brand'}</DropdownToggle>
              <DropdownMenu>
                {devices!.brands.length > 0 && devices?.brands.map(brand => {
                  return <DropdownItem onClick={() => devices.setSelectedBrand(brand)} key={brand.id}>{brand.name}</DropdownItem>
                })}
              </DropdownMenu>
            </Dropdown>
          </Row>
          <Form.Control onChange={event => handleChange(event.target.name, event.target.value)} className="mt-2" name="name" placeholder="Brand name" required/>
          <Form.Control onChange={event => handleChange(event.target.name, event.target.value)} className="mt-2" name="price" type="number" placeholder="Brand price" required/>
          <Form.Control className="mt-2" name="image" type="file" placeholder="Brand image" onChange={handleChangeFile} ref={inputFile} required/>
          <hr/>
          <Button onClick={addInfo}>Add new description</Button>
            {info.map(description => {
              return (
                <Row className="mb-2 mt-2" key={description.id}>
                  <Col md={4}>
                    <Form.Control 
                      name="title" 
                      onChange={event => changeDescription(event.target.name, event.target.value, description.id)} 
                      value={description.title} 
                      placeholder="Enter description property name"/>
                  </Col>
                  <Col md={4}>
                    <Form.Control 
                      name="description" 
                      onChange={event => changeDescription(event.target.name, event.target.value, description.id)} 
                      value={description.description} 
                      placeholder="Enter description value"/>
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
        <Button variant='primary' onClick={handleSubmit}>Add</Button>
        <Button variant='danger' onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
})