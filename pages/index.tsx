import Layout from '../components/Layout';
import { Text, Toggle } from '@geist-ui/react';
import { FC, useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContextProvider';

const IndexPage: FC = () => {
  const { exportDisabled, setSwitchState, getSwitchState } =
    useContext(AppContext);

  useEffect(() => {
    getSwitchState();
  }, []);

  const onChangeToggle = (e) => {
    setSwitchState(e.target.checked);
  };

  return (
    <Layout title='Options'>
      <div>
        <Toggle
          size='large'
          initialChecked={exportDisabled}
          checked={exportDisabled}
          onChange={onChangeToggle}
        />
        &nbsp;
        <label>Disable V2000 export</label>
      </div>
      <Text>
        Disable the option to export in any of the MDL V2000 formats, and hide
        the absolute stereo chiral flag from the canvas (for more information
        please see the documentation)
      </Text>
    </Layout>
  );
};

export default IndexPage;
