import Layout from '../components/Layout';
import { Text, Dot } from '@geist-ui/react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContextProvider';

const AboutPage = () => {
  const { exportDisabled } = useContext(AppContext);
  return (
    <Layout title='Options'>
      <Text span>Export disabled:</Text>
      &nbsp;
      <Dot type={exportDisabled ? 'error' : 'success'} />
      <Text b>{String(exportDisabled)}</Text>
    </Layout>
  );
};

export default AboutPage;
