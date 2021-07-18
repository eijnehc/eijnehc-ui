import { createGlobalStyle } from 'styled-components';

import './fonts/styles.css';
import { COLORS, WEIGHTS } from '../constant';

export const GlobalStyles = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
  font-size: 100%;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}


/* GLOBAL STYLES */
*,
*:before,
*:after {
  box-sizing: border-box;
  line-height: 1.5;
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: auto;
}

#root {
  /*
    Create a stacking context, without a z-index.
    This ensures that all portal content (modals and tooltips) will
    float above the app.
  */
  isolation: isolate;
}

html {
  /* colors */
  --color-white: hsl(${COLORS.white});
  --color-gray-100: hsl(${COLORS.gray[100]});
  --color-gray-300: hsl(${COLORS.gray[300]});
  --color-gray-500: hsl(${COLORS.gray[500]});
  --color-gray-700: hsl(${COLORS.gray[700]});
  --color-gray-900: hsl(${COLORS.gray[900]});
  --color-black: hsl(${COLORS.black});
  --color-primary-light: hsl(${COLORS.primary.light});
  --color-primary-dark: hsl(${COLORS.primary.dark});
  --color-secondary-light: hsl(${COLORS.secondary.light});
  --color-secondary-dark: hsl(${COLORS.secondary.dark});
  --color-tertiary-light: hsl(${COLORS.tertiary.light});
  --color-tertiary-dark: hsl(${COLORS.tertiary.dark});
  --color-warning-light: hsl(${COLORS.warning.light});
  --color-warning-dark: hsl(${COLORS.warning.dark});


  /* weights */
  --weight-light: ${WEIGHTS.light};
  --weight-regular: ${WEIGHTS.regular};
  --weight-medium: ${WEIGHTS.medium};
  --weight-bold: ${WEIGHTS.bold};
}

html, body, #root {
  height: 100%;
}
`;
