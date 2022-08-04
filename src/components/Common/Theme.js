export const theme = {
  colors: {
    defaultText: '#000000',
    mediumText: '#555555',
    inverseText: '#ffffff',
    paperBackground: '#f0f0f0',
    pageBackground: '#ffffff',
    sectionBackground: '#ffffff',
    statsBackground: '#ccdddd',
    transactions: {
      headerBackground: '#009999',
      secondRow: '#e8eeee',
    },
  },
  fontSizes: {
    s: '12px',
    m: '16px',
    l: '24px',
    xl: '36px',
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  spacing: [0, 5, 10, 20, 40, 80, 160, 320, 640],
  radii: {
    none: 0,
    normal: '5px',
    large: '10px',
    round: '50%',
  },
  margin: returnParams,
  padding: returnParams,
  mp: returnParams,
};

function returnParams(...sizes) {
  return sizes.map(s => (s ? `${this.spacing[s]}px` : '0')).join(' ');
}