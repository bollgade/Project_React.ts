import { CounterSchema } from '../types/counterSchema';
import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice', () => {
  test('increment counter', () => {
    const state: CounterSchema = {
      value: 10,
    };
    expect(counterReducer(
      state,
      counterActions.increment(),
    )).toEqual({ value: 11 });
  });

  test('decrement counter', () => {
    const state: CounterSchema = {
      value: 10,
    };
    expect(counterReducer(
      state,
      counterActions.decrement(),
    )).toEqual({ value: 9 });
  });

  test('with empty state should work', () => {
    expect(counterReducer(
      undefined,
      counterActions.increment(),
    )).toEqual({ value: 1 });
  });
});
