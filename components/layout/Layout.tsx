import React, { CSSProperties, FC, ReactNode } from 'react';
import Head from 'next/head';
import {
  Page,
  Text,
  Grid,
  useTheme,
  useMediaQuery,
  Card,
} from '@geist-ui/react';
import Sidebar from './Sidebar';
import BrandIcon from '../icons/BrandIcon';

type LayoutProps = {
  children?: ReactNode;
  title?: string;
};

const page: CSSProperties = {
  padding: 0,
  height: '100vh',
  backgroundColor: '#2a2a2e',
  display: 'flex',
  flexDirection: 'column',
};

const pageHeader: CSSProperties = {
  height: '50px',
  boxSizing: 'content-box',
  padding: '1em 1.5em',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.75)',
};

const pageContent: CSSProperties = {
  height: '100%',
  width: '100%',
  padding: 0,
};

const container: CSSProperties = {
  height: '100%',
  width: '100%',
  margin: '0 auto',
};

const content: CSSProperties = { width: '100%' };

const Layout: FC<LayoutProps> = ({ children, title = 'Default title' }) => {
  const { palette } = useTheme();
  const sm = useMediaQuery('sm', {
    match: 'down',
  });
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Page render='effect' style={page}>
        <Page.Header style={pageHeader}>
          <BrandIcon color='#fff' size={50} />
        </Page.Header>
        <Page.Content style={pageContent}>
          <Grid.Container gap={5} justify='center' style={container}>
            <Grid
              xs={24}
              md={4}
              direction='column'
              justify={sm ? 'center' : 'flex-start'}
              alignItems={sm ? 'center' : 'flex-start'}
            >
              <Sidebar />
            </Grid>
            <Grid
              xs={24}
              md={20}
              direction='column'
              style={{ backgroundColor: palette.background }}
            >
              <Text h2>{title}</Text>
              <Card style={content}>{children}</Card>
            </Grid>
          </Grid.Container>
        </Page.Content>
      </Page>
    </>
  );
};

export default Layout;
