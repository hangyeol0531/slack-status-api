import axios from 'axios';
import noIssueHtml from '../data/noIssueHtml.json';
import noIssue from '../data/noIssue.json';
import SlackClient from '../../src/slack-status/components/slack-client';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('slack-client', () => {
  it('should have a slack-client', () => {
    expect(typeof SlackClient).toBe('function');
  });

  it('should have a slack-client getSlackStatus', () => {
    expect(typeof SlackClient).toBe('function');
  });

  it('should return noIssue status result', async () => {
    mockedAxios.get.mockResolvedValue(noIssueHtml);
    expect(await SlackClient.getSlackStatus()).toStrictEqual(noIssue);
  });
});