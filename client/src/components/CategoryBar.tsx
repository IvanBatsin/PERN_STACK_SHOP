import { observer } from 'mobx-react-lite';
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Context } from '..';

export const CategoryBar: React.FC = observer(() => {
  const {devices} = React.useContext(Context);
  return (
    <ListGroup>
      {devices?.categories.map(category => {
        return <ListGroup.Item 
                  style={{cursor: 'pointer'}}
                  active={category.id === devices.selectedCategory?.id}
                  key={category.id}
                  onClick={() => devices.setSelectedCategory(category)}>{category.name}</ListGroup.Item>
      })}
    </ListGroup>
  )
})