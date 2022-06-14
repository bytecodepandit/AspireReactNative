import * as React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import Svg, {Path, G, Circle} from 'react-native-svg';

const UploadSvg = ({height, width, color}: React.SVGProps<SVGSVGElement>) => (
  <Svg
    width={width ? width : RFValue(32)}
    height={height ? height : RFValue(32)}
    viewBox="0 0 32 32">
    <G transform="translate(-.094)">
      <Circle
        cx={16}
        cy={16}
        r={16}
        transform="translate(.094)"
        fill={color || '#325baf'}
      />
      <Path
        d="m8.589 5.246 1.431-1.4v6.394a1.149 1.149 0 0 0 2.3 0V3.844l1.43 1.4a1.166 1.166 0 0 0 1.625 0 1.11 1.11 0 0 0 0-1.592L11.981.33a1.166 1.166 0 0 0-1.625 0L6.964 3.653a1.11 1.11 0 0 0 0 1.592 1.167 1.167 0 0 0 1.625.001Z"
        transform="translate(4.961 7.899)"
        stroke={color || '#325baf'}
        strokeWidth={'.1px'}
        fill={'#9ac0fa'}
      />
      <Path
        d="M17.954 11.754a2.757 2.757 0 0 1-2.773 2.734H7.66a2.757 2.757 0 0 1-2.773-2.734 1.142 1.142 0 0 1 2.284 0 .487.487 0 0 0 .489.482h7.521a.487.487 0 0 0 .489-.482 1.142 1.142 0 0 1 2.284 0Z"
        transform="translate(4.709 9.667)"
        fill={'#f1f3f4'}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
        stroke={color || '#325baf'}
        strokeWidth={'.1px'}
      />
    </G>
  </Svg>
);

export default UploadSvg;
