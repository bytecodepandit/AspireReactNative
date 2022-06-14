import {
  FreezeCardSvg,
  NewCardSvg,
  RestrictLargeSvg,
  SpeedMeterLargeSvg,
  UploadSvg,
} from '@assets/svg';
import {CardSettingOptionEnum} from '@enums';
import {React} from '@shared-import';

const DebitCardSettingLeftIcon = ({code}: {code: number}) => {
  const LeftIcon = null;
  switch (code) {
    case CardSettingOptionEnum.topUp:
      return <UploadSvg />;
    case CardSettingOptionEnum.weeklySpending:
      return <SpeedMeterLargeSvg />;
    case CardSettingOptionEnum.freezeCard:
      return <FreezeCardSvg />;
    case CardSettingOptionEnum.getNewCard:
      return <NewCardSvg />;
    case CardSettingOptionEnum.deactivatedCard:
      return <RestrictLargeSvg />;
  }
  return LeftIcon;
};

export default DebitCardSettingLeftIcon;
