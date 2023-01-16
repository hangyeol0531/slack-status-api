import { getSlackStatus } from '../getSlackStatus';

describe('slack-status-api', () => {
  it('should have a getSlackStatus function', () => {
    expect(typeof getSlackStatus).toBe('function');
  });
});
