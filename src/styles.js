import theme from './ThemeConfig';

export const smallRoot = {
  margin: '0 auto',
  marginTop: 20,
  maxWidth: 900,
};

export const smallRootWithPadding = {
  margin: '0 auto',
  marginTop: 20,
  maxWidth: 900,
  padding: 20,
};

export const mediumRoot = {
  ...smallRoot,
  maxWidth: 1280,
};

export const marginBottomRoot = {
  height: 'auto !important',
  marginBottom: 80,
  [theme.breakpoints.down('xs')]: {
    marginBottom: 50,
  },
};

export const noPadding = {
  padding: 0,
};

export const centerChildrenInline = {
  textAlign: 'center',
};

export const fullHeight = {
  height: '100%',
};

export const displayBlock = {
  display: 'block',
};

export function marginVertical(margin) {
  return {
    marginTop: margin,
    marginBottom: margin,
  };
}

export function marginHorizontal(margin) {
  return {
    marginLeft: margin,
    marginRight: margin,
  };
}

export const borderBottomHighlight = {
  borderBottomColor: '#ECCA30',
  borderBottom: '2px solid black',
};

export const fullImage = {
  display: 'block',
  width: '100%',
};

export const darkOverlay = {
  position: 'absolute',
  left: 0,
  top: 0,
  bottom: 0,
  right: 0,
  background: 'black',
  opacity: '.3',
};