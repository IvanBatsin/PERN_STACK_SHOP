import React from 'react';
import { Card, Col, Container, Image, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { IDevice } from '../interfaces/shop_items';

interface IDecription {
  id: number,
  title: string,
  decription: string
}

export const DevicePage: React.FC = () => {
  // const device = {id: 1, name: 'Iphone 12', rating: 5, price: 25000, img: 'https://33.img.avito.st/640x480/8025258733.jpg'};
  const description: IDecription[] = [
    {id: 1, title: 'RAM memory', decription: '5 GB'},
    {id: 2, title: 'Camera', decription: '40 mpx'},
    {id: 3, title: 'Processor', decription: 'Nvidia core'},
    {id: 4, title: 'UI', decription: 'Pure Android'},
  ];
  const { id } = useParams<{id: string}>();
  const [device, setDevice] = React.useState<IDevice | undefined>();
  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image src={device!.img} width={300} height={300}/>
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2>{device!.name}</h2>
            <div 
              className="d-flex justify-content-center align-items-center"
              style={
                {background: 'url(https://p7.hiclipart.com/preview/1004/192/946/shape-star-clip-art-shape.jpg) no-repeat center center', 
                backgroundSize: 'cover', 
                width: 240, 
                height: 240,
                fontSize: 30}}>
              {device!.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card 
            className="d-flex justify-content-around align-items-center"
            style={{width: 300, height: 300, fontSize: 32, border: '1px solid lightgrey'}}>
            <h3>At ${device!.price}</h3>
            <Button>Add to cart</Button>
          </Card>
        </Col>
      </Row>
      <Row className='d-flex flex-column mt-4'>
        <h3>Description</h3>
        {description.map((item, index) => {
          return <Row key={item.id} style={{backgroundColor: index % 2 === 0 ? 'lightgrey' : 'white', padding: 5}}>
            <b>{item.title}</b>: {item.decription}
          </Row>
        })}
      </Row>
    </Container>
  )
}