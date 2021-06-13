import React, { CSSProperties, useState } from 'react';
import { Grid, Spacer } from '@geist-ui/react';
import NextLink from 'next/link';
import { useTheme, Link } from '@geist-ui/react';
import { useRouter } from 'next/router';
import LabIcon from './icons/LabIcon';
import StructureIcon from './icons/StructureIcon';

const Sidebar = () => {
  const { pathname } = useRouter();
  const { palette } = useTheme();
  const [hovered, setHovered] = useState<string>();
  const selectedColor = palette.background;
  const color = palette.accents_3;

  const linkStyle = (selected): CSSProperties => ({
    color: selected ? selectedColor : color,
    alignItems: 'center',
    padding: '0.5em 0',
  });

  const renderChemistryMenuItem = () => {
    const target = '/';
    const selected = pathname === target;
    const hover = hovered === target;
    const style = linkStyle(selected || hover);
    return (
      <NextLink href={target}>
        <Link
          style={style}
          onMouseEnter={() => {
            setHovered(target);
          }}
          onMouseLeave={() => {
            setHovered(undefined);
          }}
        >
          <LabIcon size={20} color='#fff' shrink={0} />
          <Spacer inline x={0.5} />
          <span>Chemistry</span>
        </Link>
      </NextLink>
    );
  };

  const renderStructuresMenuItem = () => {
    const target = '/structures';
    const selected = pathname === target;
    const hover = hovered === target;
    const style = linkStyle(selected || hover);
    return (
      <NextLink href={target}>
        <Link
          style={style}
          onMouseEnter={() => {
            setHovered(target);
          }}
          onMouseLeave={() => {
            setHovered(undefined);
          }}
        >
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
