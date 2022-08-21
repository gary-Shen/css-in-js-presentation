const layouts = {
  margin: {
    small: '4px',
    regular: '8px',
    large: '16px',
  },
  padding: {
    small: '4px',
    regular: '8px',
    large: '16px',
  },
  borderRadius: {
    small: '2px',
    regular: '4px',
    large: '6px',
  },
  lineHeight: {
    small: '18px',
    regular: '22px',
    large: '32px',
  },
  fontSize: {
    small: '12px',
    regular: '14px',
    large: '20px',
  },
};

const colors = {
  // basic
  primary: '#0069FF',
  success: 'green',
  warning: '',
  danger: '',
  // 色相
  black: '#000',
  blue: 'blue',
  white: '#fff',
  // ...
};

export default {
  colors,
  layouts,
  button: {
    focusOutlineSize: '3px',
    outlineSize: '1px',
    lineHeight: layouts.lineHeight.regular,
    padding: `0 ${layouts.padding.regular}`,
    backgroundColor: colors.primary,
    color: colors.white,
    radius: layouts.borderRadius.regular,
  },
};
