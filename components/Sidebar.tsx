import React from 'react';
import { Row, Col, Spacer } from '@geist-ui/react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <Row
      gap={0.8}
      style={{ flexDirection: 'column', padding: '1em' }}
      component='nav'
    >
      <Spacer y={10} />
      <Col>
        <Link href='/'>
          <a>Chemistry</a>
        </Link>
      </Col>
      <Col>
        <Link href='/structures'>
          <a>Chemistry Structures</a>
        </Link>
      </Col>
    </Row>
  );
  {
    /* <Link href='/users'>
  <a>Users List</a>
</Link>{' '}
| <a href='/api/users'>Users API</a> */
  }
};

export default Sidebar;
