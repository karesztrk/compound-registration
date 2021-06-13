import Layout from '../components/layout/Layout';
import ExportToggle from '../components/common/ExportToggle';
import { Text } from '@geist-ui/react';
import { FC, useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContextProvider';
import { CheckboxEvent } from '@geist-ui/react/dist/checkbox/checkbox';

const IndexPage: FC = () => {
  const { exportDisabled, setSwitchState, getSwitchState } =
    useContext(AppContext);

  useEffect(() => {
    getSwitchState();
  }, []);

  const onChangeToggle = (e: CheckboxEvent) => {
    setSwitchState(e.target.checked);
  };

  return (
    <Layout title='Options'>
      <ExportToggle
        id='export-toggle'
        text='Disable V2000 export'
        value={exportDisabled}
        onChange={onChangeToggle}
      />
      <Text>
        Disable the option to export in any of the MDL V2000 formats, and hide
        the absolute stereo chiral flag from the canvas (for more information
        please see the documentation)
      </Text>
    </Layout>
  );
};

export default IndexPage;
