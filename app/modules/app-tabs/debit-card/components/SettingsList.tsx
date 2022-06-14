import {CardOption, DebitCardSettingLeftIcon, Switch} from '@atoms';
import {CardSettingOptionEnum} from '@enums';
import {DebitCardOptionsSettingInterface, Store} from '@interfaces';
import {DebitCardOptions} from '@app/core/mock/DebitCardOptions';
import {navigate} from '@services/navigation/navigation.service';
import {setCardDetails} from '@store/actions';
import {spendingLimit} from '@routes/labels';
import {React, useDispatch, useSelector} from '@shared-import';
import {TouchableOpacity} from 'react-native';

const SettingsList = () => {
  const {cardDetails} = useSelector((state: Store) => state);
  const dispatch = useDispatch();
  const onPressRightIcon = (leftIcon: any) => {
    if (leftIcon === CardSettingOptionEnum.weeklySpending) {
      if (cardDetails.usage?.usageLimit > 0) {
        dispatch(
          setCardDetails({
            ...cardDetails,
            usage: {
              ...cardDetails.usage,
              usageLimit: 0,
            },
          }),
        );
      } else {
        navigate(spendingLimit);
      }
    }
  };
  return (
    <React.Fragment>
      {DebitCardOptions.map(
        (
          {
            id,
            description,
            title,
            rightIcon,
            leftIcon,
          }: DebitCardOptionsSettingInterface,
          index: number,
        ) => {
          return (
            <CardOption
              key={`${id}_${index}`}
              title={title}
              description={description}
              right={
                rightIcon
                  ? () => (
                      <TouchableOpacity
                        onPress={() => onPressRightIcon(leftIcon)}
                        activeOpacity={0.1}>
                        <Switch
                          value={
                            cardDetails.usage?.usageLimit > 0 &&
                            leftIcon === CardSettingOptionEnum.weeklySpending
                          }
                        />
                      </TouchableOpacity>
                    )
                  : null
              }
              left={() => <DebitCardSettingLeftIcon code={leftIcon} />}
            />
          );
        },
      )}
    </React.Fragment>
  );
};

export default SettingsList;
