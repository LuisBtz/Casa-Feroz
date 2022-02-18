import { createGlobalStyle } from 'styled-components';

import figwoff from '../../assets/fonts/Figue-Regular.woff';
import figeot from '../../assets/fonts/Figue-Regular.eot';
import figttf from '../../assets/fonts/Figue-Regular.ttf';
import figwoff2 from '../../assets/fonts/Figue-Regular.woff2';

import mabeot from '../../assets/fonts/MabryPro-Bold.eot';
import mabttf from '../../assets/fonts/MabryPro-Bold.ttf';
import mabwoff from '../../assets/fonts/MabryPro-Bold.woff';
import mabwoff2 from '../../assets/fonts/MabryPro-Bold.woff2';

export const Typography = createGlobalStyle`
@font-face {
    font-family: 'Figue';
    src: url('${figeot}');
    src: url('${figeot}?#iefix') format('embedded-opentype'),
        url('${figwoff2}') format('woff2'),
        url('${figwoff}') format('woff'),
        url('${figttf}') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'Mabry Pro';
    src: url('${mabeot}');
    src: url('${mabeot}?#iefix') format('embedded-opentype'),
        url('${mabwoff2}') format('woff2'),
        url('${mabwoff}') format('woff'),
        url('${mabttf}') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
:root {
    --regular: 'Figue', serif;
    --bold: 'Mabry Pro', sans-serif;
}
h2 {
    font-size: 3vw;
    @media (max-width: 680px) {
          font-size: 1.5rem;
      }
}

h1, h2, h3 {
    font-family: var(--bold);
}

.title {
    font-family: var(--bold);
    font-size: 2vw;
    @media (max-width: 680px) {
        font-size: 25px;
    }
    @media (min-width: 1500px) {
        font-size: 30px
    }
}
`