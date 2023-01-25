import SlackClient from '../../src/slack-status/components/slack-client';

describe('slack-client', () => {
  it('should have a slack-client', () => {
    expect(typeof SlackClient).toBe('function');
  });