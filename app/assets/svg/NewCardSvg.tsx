import * as React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import Svg, {Defs, Path, G, Circle} from 'react-native-svg';

const NewCardSvg = ({height, width, color}: React.SVGProps<SVGSVGElement>) => (
  <Svg
    width={width ? width : RFValue(32)}
    height={height ? height : RFValue(32)}
    viewBox="0 0 32 32">
    <Defs></Defs>
    <G transform="translate(213 -305)">
      <Circle
        cx={16}
        cy={16}
        r={16}
        transform="translate(-213 305)"
        fill={color || '#325baf'}
      />
      <Path
        d="M387.881 300.224h-.79v-.79a.766.766 0 1 0-1.532 0v.79h-.79a.766.766 0 0 0 0 1.532h.79v.79a.766.766 0 0 0 1.532 0v-.79h.79a.766.766 0 0 0 0-1.532Z"
        transform="translate(-576.6 24.064)"
        fill={'#f1f3f4'}
      />
      <Path
        d="M-189.509 317.518a2.407 2.407 0 0 0-2.281-2.517h-10.929a2.407 2.407 0 0 0-2.281 2.517.2.2 0 0 0 .187.207h15.113a.2.2 0 0 0 .191-.207ZM-189.509 319.413v.936a.415.415 0 0 1-.424.436 4.1 4.1 0 0 0-4.138 4.567.422.422 0 0 1-.4.468h-8.248a2.407 2.407 0 0 1-2.281-2.515v-3.89a.2.2 0 0 1 .187-.21h15.113a.2.2 0 0 1 .191.208Z"
        fill={'#9ac0fa'}
      />
    </G>
  </Svg>
);

export default NewCardSvg;
