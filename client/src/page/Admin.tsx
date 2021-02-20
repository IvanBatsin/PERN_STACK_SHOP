import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { BrandModal } from '../components/modals/BrandModal';
import { CategoryModal } from '../components/modals/CategoryModal';
import { DeviceModal } from '../components/modals/DeviceModal';

type ShowModal = 'brand' | 'category' | 'device' | undefined;
export const Admin: React.FC = () => {
  const [show, setShow] = React.useState<ShowModal>(undefined);
  return (
    <Container className="d-flex flex-column">
      <Button onClick={() => setShow('category')} className="mt-3 p-2">Add category</Button>
      <Button onClick={() => setShow('brand')} className="mt-3 p-2">Add brand</Button>
      <Button onClick={() => setShow('device')} className="mt-3 p-2">Add device</Button>
      <BrandModal show={show === 'brand'} onHide={() => setShow(undefined)}/>
      <DeviceModal show={show === 'device'} onHide={() => setShow(undefined)}/>
      <CategoryModal show={show === 'category'} onHide={() => setShow(undefined)}/>
    </Container>
  )
}