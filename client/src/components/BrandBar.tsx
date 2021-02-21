import { observer } from 'mobx-react-lite';
import React from 'react';
import { Card, Row } from 'react-bootstrap';
import { Context } from '..';

export const BrandBar: React.FC = observer(() => {
  const {devices} = React.useContext(Context);
  return (
    <Row className="d-flex">
      {devices?.brands.map(brand => {
        return (
          <Card 
            key={brand.id} 
            className="p-3" 
            onClick={() => devices.setSelectedBrand(brand)}
            style={{cursor: 'pointer'}}
            border={devices.selectedBrand?.id === brand.id ? 'primary' : 'light'}>
            {brand.name}
          </Card>
        )
      })}
    </Row>
  )
});