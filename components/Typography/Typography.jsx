/* eslint-disable default-case */
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Typography = ({ variant, children, css }) => {
  const theme = useTheme();

  let Variant;
  switch (variant) {
    case 'body1':
      Variant = styled.p`
        color: ${theme.colors.text};
        font-weight: ${theme.typography.body.fontWeight};
        font-size: ${theme.typography.body.fontSize};
        padding: 0;
        line-height: 1.3;
        ${css}
      `;
      break;
    case 'body2':
      Variant = styled.p`
        color: ${theme.colors.text};
        font-weight: ${theme.typography.body.fontWeight};
        font-size: ${theme.typography.body.fontSize};
        padding: 0;
        text-align: justify;
        line-height: 1.3;
        ${css}
      `;
      break;
    case 'h1':
      Variant = styled.h1`
        color: ${theme.colors.text};
        font-weight: ${theme.typography.h1.fontWeight};
        font-size: ${theme.typography.h1.fontSize};
        padding: 0;
        line-height: 1.3;
        ${css}
      `;
      break;
    case 'h2':
      Variant = styled.h2`
        color: ${theme.colors.text};
        font-weight: ${theme.typography.h2.fontWeight};
        font-size: ${theme.typography.h2.fontSize};
        padding: 0;
        line-height: 1.3;
        ${css}
      `;
      break;
    case 'h3':
      Variant = styled.h3`
        color: ${theme.colors.text};
        font-weight: ${theme.typography.h3.fontWeight};
        font-size: ${theme.typography.h3.fontSize};
        padding: 0;
        line-height: 1.3;
        ${css}
      `;
      break;
    case 'h4':
      Variant = styled.h4`
        color: ${theme.colors.text};
        font-weight: ${theme.typography.h4.fontWeight};
        font-size: ${theme.typography.h4.fontSize};
        padding: 0;
        line-height: 1.3;
        ${css}
      `;
      break;
    case 'h5':
      Variant = styled.h5`
        color: ${theme.colors.text};
        font-weight: ${theme.typography.h5.fontWeight};
        font-size: ${theme.typography.h5.fontSize};
        padding: 0;
        line-height: 1.3;
        ${css}
      `;
      break;
    case 'h6':
      Variant = styled.h6`
        color: ${theme.colors.text};
        font-weight: ${theme.typography.h6.fontWeight};
        font-size: ${theme.typography.h6.fontSize};
        padding: 0;
        line-height: 1.3;
        ${css}
      `;
      break;
    default:
      break;
  }

  return <Variant>{children}</Variant>;
};

Typography.propTypes = {
  variant: PropTypes.oneOf([
    'body1',
    'body2',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
  ]),
};

Typography.defaultProps = {
  variant: 'Body1',
};

export default Typography;
