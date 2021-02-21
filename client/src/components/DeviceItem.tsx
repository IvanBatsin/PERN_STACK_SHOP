import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { RoutePaths } from '../interfaces/route';
import { IDevice } from '../interfaces/shop_items';

interface DeviceItemProps {
  device: IDevice
}

export const DeviceItem: React.FC<DeviceItemProps> = ({device}: DeviceItemProps) => {
  const history = useHistory();
  return (
    <Col md={3} className="mt-3" onClick={() => history.push(`${RoutePaths.DEVICE}/${device.id}`)}>
      <Card border="light" style={{width: 150, cursor: 'pointer'}}>
        <Image src={'http://localhost:5000/' + device.img} width={150} height={150}/>
        <div className="d-flex justify-content-between align-items-center mt-1 text-black-50">
          <div>Sumsung</div>
          <div>
            {device.rating}
            <i className="fa fa-star-o" aria-hidden="true"></i>
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  )
}