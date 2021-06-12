import React, { FC, ReactNode } from 'react';
import Head from 'next/head';
import { Page, Text, Row, Col } from '@geist-ui/react';
import Sidebar from './Sidebar';

type LayoutProps = {
  children?: ReactNode;
  title?: string;
};

const Layout: FC<LayoutProps> = ({ children, title = 'Default title' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header />
    <Row component='main' style={{ backgroundColor: '#ebebeb' }}>
      <Col span={6} style={{ backgroundColor: '#2a2a2e' }}>
        <Sidebar />
      </Col>
      <Col>
        <Page>
          <Page.Header>
            <Text h2>{title}</Text>
          </Page.Header>
          <Page.Content>{children}</Page.Content>
        </Page>
      </Col>
    </Row>
    <footer></footer>
  </div>
);

export default Layout;
