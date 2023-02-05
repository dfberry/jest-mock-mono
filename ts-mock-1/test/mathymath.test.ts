import {
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  test
} from '@jest/globals';

import * as SDK from '../src/sync-function/mathymath';
import * as CLIENT from '../src/sync-function/client';

describe('maths', () => {
  let fakeAddResult: number;
  let spy: any;

  beforeAll(() => {
    fakeAddResult = 123;
  });

  beforeEach(() => {
    spy = jest.spyOn(SDK, 'add').mockImplementation(returnMockDataSync);
  });

  afterEach(() => {
    spy.mockReset();
  });

  function returnMockDataSync(): number {
    console.log(`mock data ${fakeAddResult}`);
    return fakeAddResult;
  }

  test('Sync math success', async () => {
    // These values are based on current mock data

    const resultAdd = CLIENT.useMathyMath(10, 20);

    expect(resultAdd).toBe(fakeAddResult);
    spy.mockReset();
  });
});
