import * as React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import Svg, {Path, G, Circle} from 'react-native-svg';

const RestrictLargeSvg = ({
  height,
  width,
  color,
}: React.SVGProps<SVGSVGElement>) => (
  <Svg
    width={width ? width : RFValue(32)}
    height={height ? height : RFValue(32)}
    viewBox="0 0 32 32">
    <G transform="translate(213 -305)">
      <Circle
        cx={16}
        cy={16}
        r={16}
        transform="translate(-213 305)"
        fill={color || '#325baf'}
      />
      <Path
        d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8ZM2 8a5.961 5.961 0 0 1 1.115-3.471l8.356 8.356A5.99 5.99 0 0 1 2 8Zm10.885 3.471L4.529 3.115a5.991 5.991 0 0 1 8.356 8.356Z"
        transform="translate(-205 313)"
        fill={'#9ac0fa'}
      />
      <Path
        transform="rotate(45 -481.81 -83.958)"
        fill={'#f1f3f4'}
        d="M0 0h11.8v2H0z"
      />
    </G>
  </Svg>
);

export default RestrictLargeSvg;
