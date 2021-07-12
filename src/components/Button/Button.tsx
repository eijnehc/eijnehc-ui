import React, { FC, ReactNode, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

type ComponentSize = 'small' | 'default' | 'large';
type Emphasis = 'fill' | 'outline' | 'underline';

interface Props {
  variant: Emphasis;
  size: ComponentSize;
  children: ReactNode;
}

// type color = 'primary' | 'secondary' | 'danger';

export const sidePaddings: { [key in ComponentSize]: number } = {
  large: 30,
  default: 25,
  small: 20,
};

const SIZES = {
  small: {
    '--borderRadius': 2 + 'px',
    '--fontSize': 16 / 16 + 'rem',
    '--padding': '4px 12px',
  },
  default: {
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

export const Button: FC<Props> = ({
  variant,
  size,
  children,
  ...remainingProps
}) => {
  const styles = SIZES[size];
  let Component;
  switch (variant) {
    case 'fill':
      Component = FillButton;
      break;
    case 'outline':
      Component = OutlineButton;
      break;
    case 'underline':
      Component = UnderlineButton;
      break;
    default:
      throw new Error(`Unrecognized Button variant: ${variant}`);
  }

  return (
    <Component variant={variant} style={styles} {...remainingProps}>
      {children}
    </Component>
  );
};

const ButtonWrapper = styled.button`
  text-transform: uppercase;
  font-weight: var(--weight-medium);
  border: 2px solid transparent;
  outline-color: var(--color-primary-light);

  &:focus {
    outline-offset: 4px;
  }
`;

const FillButton = styled(ButtonWrapper)`
  background-color: var(--color-primary-dark);

  &:hover {
    background-color: var(--color-primary-light);
  }
`;

const OutlineButton = styled(ButtonWrapper)`
  background-color: var(--color-white);
  color: var(--color-primary-dark);
  border: 2px solid currentColor;

  &:hover {
    color: var(--color-primary-light);
    border-color: currentColor;
  }
`;

const UnderlineButton = styled(ButtonWrapper)`
  background-color: transparent;
  color: var(--color-gray-500);
  border-bottom: 2px solid var(--color-primary-dark);

  &:hover {
    color: var(--color-gray-700);
  }
`;
