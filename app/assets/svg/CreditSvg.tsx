import * as React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import Svg, {Path} from 'react-native-svg';

const CreditSvg = ({height, width, color}: React.SVGProps<SVGSVGElement>) => (
  <Svg
    width={width ? width : RFValue(25)}
    height={height ? height : RFValue(25.5)}
    viewBox="0 0 25 25.5">
    <Path
      fill={'transparent'}
      d="M0 0h25v24H0z"
      transform="translate(.5 .499)"
    />
    <Path
      d="M12 24A12 12 0 0 1 3.515 3.516a12 12 0 0 1 16.97 16.971A11.922 11.922 0 0 1 12 24ZM10.453 9.746v8.837a1.162 1.162 0 0 0 1.161 1.161h.775a1.162 1.162 0 0 0 1.161-1.161V9.746l3.5 3.652a1.159 1.159 0 0 0 1.659.021l.527-.533a1.161 1.161 0 0 0 .342-.827 1.142 1.142 0 0 0-.342-.812l-6.413-6.422a1.159 1.159 0 0 0-1.64 0l-6.426 6.422a1.155 1.155 0 0 0-.342.824 1.142 1.142 0 0 0 .342.815l.527.533a1.166 1.166 0 0 0 .823.339 1.151 1.151 0 0 0 .842-.36l3.5-3.65Z"
      transform="translate(.5 .499)"
      fill={color || '#ddd'}
      stroke={'transparent'}
      strokeMiterlimit={10}
    />
  </Svg>
);

export default CreditSvg;
