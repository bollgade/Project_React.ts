import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

interface CounterProps {
  className?: string;
}

export const Counter: FC<CounterProps> = (props) => {
  const { className } = props;

  const { t } = useTranslation();

  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div className={className}>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button
        onClick={increment}
        data-testid="increment-btn"
      >
        {t('increment')}
      </Button>
      <Button
        onClick={decrement}
        data-testid="decrement-btn"
      >
        {t('decrement')}
      </Button>
    </div>
  );
};
