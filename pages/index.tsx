import Layout from '../components/Layout';
import { Page, Text, Card } from '@geist-ui/react';

const IndexPage = () => (
  <Layout title='Options'>
    <Card style={{ width: '100%' }}>
      <Text>
        Hello, I am using <Text b>Geist UI</Text> !
      </Text>
    </Card>
  </Layout>
);

export default IndexPage;
