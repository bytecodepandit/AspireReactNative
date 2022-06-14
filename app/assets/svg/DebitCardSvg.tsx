import * as React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import Svg, {Defs, Path} from 'react-native-svg';

const DebitCardSvg = ({
  height,
  width,
  color,
}: React.SVGProps<SVGSVGElement>) => (
  <Svg
    width={width ? width : RFValue(24.042)}
    height={height ? height : RFValue(24.042)}
    viewBox="0 0 24.042 24.042">
    <Defs></Defs>
    <Path
      d="M23.5 8H.5a.474.474 0 0 0-.5.5v7.053a2.485 2.485 0 0 0 2.5 2.519h19a2.485 2.485 0 0 0 2.5-2.519V8.5a.474.474 0 0 0-.5-.5Zm-20 4.03h4a.504.504 0 0 1 0 1.008h-4a.504.504 0 0 1 0-1.008Zm7 3.023h-7a.504.504 0 0 1 0-1.008h7a.504.504 0 0 1 0 1.008Zm8.5 0a1.68 1.68 0 0 1-1-.3 1.68 1.68 0 0 1-1 .3 2.015 2.015 0 0 1 0-4.03 1.68 1.68 0 0 1 1 .3 1.68 1.68 0 0 1 1-.3 2.015 2.015 0 0 1 0 4.03ZM21.5 0h-19C1.1 0 0 1.378 0 3.132v1.253c0 .376.2.626.5.626h23c.3 0 .5-.251.5-.626V3.132C24 1.378 22.9 0 21.5 0Z"
      fill={color || '#01d167'}
    />
  </Svg>
);

export default DebitCardSvg;
