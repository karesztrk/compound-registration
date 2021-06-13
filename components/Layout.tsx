import React, { FC, ReactNode } from 'react';
import Head from 'next/head';
import { Page, Text, Grid, useTheme, useMediaQuery } from '@geist-ui/react';
import Sidebar from './Sidebar';
import BrandIcon from './icons/BrandIcon';

type LayoutProps = {
  children?: ReactNode;
  title?: string;
};

const Layout: FC<LayoutProps> = ({ children, title = 'Default title' }) => {
  const { palette } = useTheme();
  const md = useMediaQuery('md', { match: 'down' });
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <header />
      <Page
        style={{
          padding: 0,
          height: '100vh',
          backgroundColor: '#2a2a2e',
        }}
      >
        <Page.Header
          style={{
            padding: '1em 1em',
          }}
        >
          <BrandIcon color='#fff' size={50} />
        </Page.Header>
        <Page.Content style={{ height: '100%', width: '100%', padding: 0 }}>
          <Grid.Container
            gap={5}
            justify='center'
            style={{ height: '100%', width: '100%', margin: '0 auto' }}
          >
            <Grid
              xs={24}
              md={4}
              direction='column'
              justify={md ? 'center' : 'flex-start'}
              alignItems={md ? 'center' : 'flex-start'}
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
              {children}
            </Grid>
          </Grid.Container>
        </Page.Content>
      </Page>
    </div>
  );
};

export default Layout;
