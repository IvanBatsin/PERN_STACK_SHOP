import { observer } from 'mobx-react-lite';
import React from 'react';
import { Pagination } from 'react-bootstrap';
import { Context } from '..';

export const Pages: React.FC = observer(() => {
  const {devices} = React.useContext(Context);
  const pages = Array(Math.ceil(devices?.getPageCount! / devices?.getDevicesLimit!)).fill(0).map((_, index) => index + 1);
  return (
    <Pagination className="mt-3">
      {pages.map(page => {
        return <Pagination.Item onClick={() => devices?.setPage(page)} active={page === devices?.page} key={page}>{page}</Pagination.Item>
      })}
    </Pagination>
  )
})