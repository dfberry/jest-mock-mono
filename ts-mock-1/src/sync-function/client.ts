import { add } from './mathymath';

export function useMathyMath(a: number | undefined, b: number | undefined) {
  try {
    if (!a) throw Error('a is undefined');
    if (!b) throw Error('b is undefined');

    console.log(`useMathyMath params ${a}, ${b}`);

    const resultAdd = add(a, b);

    console.log(`useMathyMath result ${resultAdd}`);

    if (!resultAdd) throw Error('returned value is invalid');
    return resultAdd;
  } catch (error: unknown) {
    console.log(error);
    throw error;
  }
}
