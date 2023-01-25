import { getSlackStatus } from '../src/slack-status/getSlackStatus';

describe('slack-status-api', () => {
  it('should have a getSlackStatus function', () => {
    expect(typeof getSlackStatus).toBe('function');
  });
});
