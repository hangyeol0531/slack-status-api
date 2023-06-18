import axios from 'axios';
import noIssueHtml from '../data/noIssue-html.json';
import noIssueResult from '../data/noIssue-result.json';
import messingIncidentHtml from '../data/messaging-incident-html.json';
import messingIncidentResult from '../data/messaging-incident-result.json';
import workflowsIncidentHtml from '../data/workflows-incident-html.json';
import workflowsIncidentResult from '../data/workflows-incident-result.json';
import _230615IncidentHtml from '../data/230615-issue-html.json';
import _230615IncidentResult from '../data/230615-issue-result.json';
import SlackClient from '../../src/slack-status/components/slack-client';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('slack-client', () => {
  it('should have a slack-client', () => {
    expect(typeof SlackClient).toBe('function');
  });

  it('should have a slack-client getSlackStatus', () => {
    expect(typeof SlackClient.getSlackStatus).toBe('function');
  });

  it('should return noIssue status result', async () => {
    mockedAxios.get.mockResolvedValue(noIssueHtml);
    expect(await SlackClient.getSlackStatus()).toStrictEqual(noIssueResult);
  });

  it('should return Messaging Incident status result', async () => {
    mockedAxios.get.mockResolvedValue(messingIncidentHtml);
    expect(await SlackClient.getSlackStatus()).toStrictEqual(messingIncidentResult);
  });

  it('should return Workflows Incident status result', async () => {
    mockedAxios.get.mockResolvedValue(workflowsIncidentHtml);
    expect(await SlackClient.getSlackStatus()).toStrictEqual(workflowsIncidentResult);
  });

  it('should return Messaging, Connections, Apps/Integrations/APIs, Workflows Incident status result', async () => {
    mockedAxios.get.mockResolvedValue(_230615IncidentHtml);
    expect(await SlackClient.getSlackStatus()).toStrictEqual(_230615IncidentResult);
  });
});