import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BrandBar } from '../components/BrandBar';
import { CategoryBar } from '../components/CategoryBar';
import { DeviceList } from '../components/DeviceList';

export const Shop: React.FC = () => {
  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}><CategoryBar/></Col>
        <Col md={9}>
          <BrandBar/>
          <DeviceList/>
        </Col>
      </Row>
    </Container>
  )
}