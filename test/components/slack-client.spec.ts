import axios from 'axios';
import noIssueHtml from '../data/noIssue-html.json';
import noIssueResult from '../data/noIssue-result.json';
import messingIncidentHtml from '../data/messaging-incident-html.json';
import messingIncidentResult from '../data/messaging-incident-result.json';
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
    expect(await SlackClient.getSlackStatus()).toStrictEqual(noIssueResult);
  });

  it('should return Messaging Incident status result', async () => {
    mockedAxios.get.mockResolvedValue(messingIncidentHtml);
    expect(await SlackClient.getSlackStatus()).toStrictEqual(messingIncidentResult);
  });
});