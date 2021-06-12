import Layout from '../components/Layout';
import { Text, Card } from '@geist-ui/react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContextProvider';

const AboutPage = () => {
  const { exportDisabled } = useContext(AppContext);
  return (
    <Layout title='Options'>
      <Card style={{ width: '100%' }}>
        <Text>Export disabled: {String(exportDisabled)}</Text>
      </Card>
    </Layout>
  );
};

export default AboutPage;
