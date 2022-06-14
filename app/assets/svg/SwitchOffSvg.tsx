import * as React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import Svg, {Path} from 'react-native-svg';

const SwitchOffSvg = ({height, width}: React.SVGProps<SVGSVGElement>) => (
  <Svg
    width={width ? width : RFValue(34)}
    height={height ? height : RFValue(20)}
    viewBox="0 0 34 20">
    <Path
      d="M34 10a9.971 9.971 0 0 1-9.917 10H9.917a10 10 0 0 1 0-20h14.166A9.97 9.97 0 0 1 34 10Zm-18.417 0a5.667 5.667 0 1 0-5.667 5.714A5.7 5.7 0 0 0 15.583 10Zm0 0"
      fill={'#eee'}
    />
  </Svg>
);

export default SwitchOffSvg;
