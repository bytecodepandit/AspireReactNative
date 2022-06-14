import * as React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import Svg, {Path} from 'react-native-svg';

const RestrictSvg = ({height, width, color}: React.SVGProps<SVGSVGElement>) => (
  <Svg
    width={width ? width : RFValue(16)}
    height={height ? height : RFValue(16)}
    viewBox="0 0 16 16">
    <Path
      d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8ZM2 8a5.961 5.961 0 0 1 1.115-3.471l8.356 8.356A5.99 5.99 0 0 1 2 8Zm10.885 3.471L4.529 3.115a5.991 5.991 0 0 1 8.356 8.356Z"
      fill={color || '#9ac0fa'}
    />
  </Svg>
);

export default RestrictSvg;
