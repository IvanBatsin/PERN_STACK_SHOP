import React from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { Row } from 'react-bootstrap';
import { DeviceItem } from './DeviceItem';

export const DeviceList: React.FC = observer(() => {
  const {devices} = React.useContext(Context);
  return (
    <Row className="d-flex">
      {devices?.devices.map(device => {
        return <DeviceItem key={device.id} device={device}/>
      })}
    </Row>
  ) 
})