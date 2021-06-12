import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Page, Text, Row, Col } from '@geist-ui/react';
import Sidebar from './Layout';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header />
    <Row component='main' style={{ backgroundColor: '#ebebeb' }}>
      <Col span={6} style={{ backgroundColor: '#2a2a2e' }}>
        <Sidebar></Sidebar>
      </Col>
      <Col>
        <Page>
          <Page.Header>
            <Text h2>{title}</Text>
          </Page.Header>
          {children}
        </Page>
      </Col>
    </Row>
    <footer></footer>
  </div>
);

export default Layout;