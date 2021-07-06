import React, { FC, ReactNode, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props {
  variant: string;
  size: 'small' | 'medium' | 'large';
  children: ReactNode;
}

type variant = 'emphasis' | 'outline' | 'ghost';
type size = 'small' | 'medium' | 'large';
type color = 'primary' | 'secondary' | 'danger';

const SIZES = {
  small: {
    '--borderRadius': 2 + 'px',
    '--fontSize': 16 / 16 + 'rem',
    '--padding': '4px 12px',
  },
  medium: {
    '--borderRadius': 2 + 'px',
    '--fontSize': 18 / 16 + 'rem',
    '--padding': '12px 20px',
  },
  large: {
    '--borderRadius': 4 + 'px',
    '--fontSize': 21 / 16 + 'rem',
    '--padding': '16px 32px',
  },
};

export const Button: FC<Props> = ({ variant, size, children }) => {
  //   let Component;
  //   switch (variant) {
  //     case 'fill':
  //       Component = FillButton;
  //       break;
  //     case 'outline':
  //       Component = OutlineButton;
  //       break;
  //     case 'ghost':
  //       Component = GhostButton;
  //       break;
  //     default:
  //       throw new Error(`Unrecognized Button variant: ${variant}`);
  //   }

  return <ButtonBase>{children}</ButtonBase>;
};

const ButtonBase = styled.button`
  font-family: roboto, 'san-serif';
  text-transform: uppercase;
  font-weight: 500;
  font-size: var(--fontSize);
  padding: var(--padding);
  border-radius: var(--borderRadius);
  border: 2px solid transparent;
  outline-color: var(--color-primary-light);

  &:focus {
    outline-offset: 4px;
  }
`;

const FillButton = styled(ButtonBase)`
  background-color: var(--color-primary-light);
  color: var(--color-primary-light);

  &:hover {
    background-color: var(--color-primary-light);
  }
`;

const OutlineButton = styled(ButtonBase)`
  background-color: var(--color-primary-light);
  color: var(--color-primary-light);
  border: 2px solid currentColor;

  &:hover {
    background-color: var(--color-primary-light);
  }
`;

const GhostButton = styled(ButtonBase)`
  color: var(--color-primary-light);
  background-color: transparent;
  border: var(--color-primary-light);

  &:hover {
    background-color: var(--color-primary-light);
    color: var(--color-primary-light);
  }
`;
