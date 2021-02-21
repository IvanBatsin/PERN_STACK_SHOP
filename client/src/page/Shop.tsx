import React from 'react';
import { observer } from 'mobx-react-lite';
import { Col, Container, Row } from 'react-bootstrap';
import { BrandBar } from '../components/BrandBar';
import { CategoryBar } from '../components/CategoryBar';
import { DeviceList } from '../components/DeviceList';
import { Context } from '..';
import { getCategories } from '../api/category';
import { getBrands } from '../api/brand';
import { getDevices } from '../api/device';
import { Pages } from '../components/Pages';

export const Shop: React.FC = observer(() => {
  const {devices} = React.useContext(Context);

  React.useEffect(() => {
    getCategories().then(data => devices?.setCategories(data.data)).catch(err => window.alert(err.response.data));
    getBrands().then(data => devices?.setBrands(data.data)).catch(err => window.alert(err.response.data));
    getDevices()
      .then(data => {
        devices?.setDevices(data.data.rows)
        devices?.setPageCount(data.data.count)
      })
      .catch(err => window.alert(err.response.data));
  }, []);

  React.useEffect(() => {
    getDevices(devices?.getSelectedBrand?.id, devices?.getSelectedCategory?.id, devices?.page)
      .then(data => {
        devices?.setDevices(data.data.rows)
        devices?.setPageCount(data.data.count)
      })
      .catch(err => window.alert(err.response.data));
  }, []);
  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <CategoryBar/>
        </Col>
        <Col md={9}>
          <BrandBar/>
          <DeviceList/>
          <Pages/>
        </Col>
      </Row>
    </Container>
  )
})