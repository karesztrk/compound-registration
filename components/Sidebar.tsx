import React from 'react';
import { Grid, Spacer } from '@geist-ui/react';
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

  const linkStyle = (selected) => ({
    color: selected ? selectedColor : color,
    alignItems: 'center',
  });

  const renderChemistryMenuItem = () => {
    const selected = pathname === '/';
    const style = linkStyle(selected);
    return (
      <NextLink href='/'>
        <Link style={style}>
          <LabIcon size={20} color='#fff' shrink={0} />
          <Spacer inline x={0.5} />
          <span>Chemistry</span>
        </Link>
      </NextLink>
    );
  };

  const renderStructuresMenuItem = () => {
    const selected = pathname === '/structures';
    const style = linkStyle(selected);
    return (
      <NextLink href='/structures'>
        <Link style={style}>
          <StructureIcon size={20} color='#fff' shrink={0} />
          <Spacer inline x={0.5} />
          <span>Chemical Structures</span>
        </Link>
      </NextLink>
    );
  };

  return (
    <>
      {renderChemistryMenuItem()}
      {renderStructuresMenuItem()}
    </>
  );
};

export default Sidebar;
