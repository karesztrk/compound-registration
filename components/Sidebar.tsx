import React from 'react';
import { Row, Col, Spacer } from '@geist-ui/react';
import NextLink from 'next/link';
import { useTheme, Link } from '@geist-ui/react';
import { useRouter } from 'next/router';
import LabIcon from './icons/LabIcon';
import StructureIcon from './icons/StructureIcon';

const Sidebar = () => {
  const { pathname } = useRouter();
  const { palette } = useTheme();
  const selectedColor = palette.background;
  const color = palette.accents_3;

  const renderChemistryMenuItem = () => {
    const selected = pathname === '/';
    const menuItemColor = selected ? selectedColor : color;
    return (
      <NextLink href='/'>
        <Link
          style={{
            color: menuItemColor,
            alignItems: 'center',
          }}
        >
          <LabIcon size={20} color='#fff' />
          <Spacer inline x={0.5} />
          <span>Chemistry</span>
        </Link>
      </NextLink>
    );
  };

  const renderStructuresMenuItem = () => {
    const selected = pathname === '/structures';
    const menuItemColor = selected ? selectedColor : color;
    return (
      <NextLink href='/structures'>
        <Link
          style={{
            color: menuItemColor,
            alignItems: 'center',
          }}
        >
          <StructureIcon size={20} color='#fff' />
          <Spacer inline x={0.5} />
          <span>Chemical Structures</span>
        </Link>
      </NextLink>
    );
  };

  return (
    <Row
      gap={0.8}
      style={{ flexDirection: 'column', padding: '1em' }}
      component='nav'
    >
      <Spacer y={5} />
      <Col>{renderChemistryMenuItem()}</Col>
      <Col>{renderStructuresMenuItem()}</Col>
    </Row>
  );
};

export default Sidebar;
