import * as React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import Svg, {Defs, Path} from 'react-native-svg';

const HomeSvg = ({height, width, color}: React.SVGProps<SVGSVGElement>) => (
  <Svg
    width={width ? width : RFValue(24.042)}
    height={height ? height : RFValue(24.042)}
    viewBox="0 0 24.042 24.042">
    <Defs></Defs>
    <Path fill={'transparent'} d="M0 0h24v24H0z" />
    <Path
      fill={color || '#ddd'}
      d="M23.5 14.772c0 .067 0 .133-.069.133a.149.149 0 0 1-.138-.133c-.207-.266-10.675-11.323-11.157-11.723-.207-.2-.275-.133-.482.067C11.588 3.182.707 14.639.569 14.838c-.069.067-.138.067-.138-.067a10.912 10.912 0 0 1-.413-3.663 10.341 10.341 0 0 1 1.515-5.062A11.451 11.451 0 0 1 9.384.318 11.829 11.829 0 0 1 20.61 3.582a10.907 10.907 0 0 1 3.237 6.261 8.818 8.818 0 0 1 .138 1.932 15.1 15.1 0 0 1-.485 2.997Z"
    />
    <Path
      fill={color || '#ddd'}
      d="M3.531 20.034c-.069-.067-.138-.133 0-.266s8.195-8.593 8.402-8.793c.069-.067.138-.067.138 0 .275.333 8.2 8.726 8.4 8.859.069.067.069.133-.069.133a9.34 9.34 0 0 1-1.515 1.266 11.776 11.776 0 0 1-5.923 2.131 6.121 6.121 0 0 1-1.1.067 11.907 11.907 0 0 1-8.333-3.397Z"
    />
  </Svg>
);

export default HomeSvg;
