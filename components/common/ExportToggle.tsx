import React, { FC } from 'react';
import { Toggle, Text } from '@geist-ui/react';
import { CheckboxEvent } from '@geist-ui/react/dist/checkbox/checkbox';

interface ExportToggleProps {
  id?: string;
  value: boolean;
  onChange: (e: CheckboxEvent) => void;
  text: string;
}

const ExportToggle: FC<ExportToggleProps> = ({ id, value, onChange, text }) => {
  return (
    <div>
      <Toggle
        itemID={id}
        size='large'
        initialChecked={value}
        checked={value}
        onChange={onChange}
      />
      &nbsp;
      <Text span aria-label='export-toggle'>
        {text}
      </Text>
    </div>
  );
};

export default ExportToggle;
