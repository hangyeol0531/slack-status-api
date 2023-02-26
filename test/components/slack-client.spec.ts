import axios from 'axios';
import noIssueHtml from '../data/noIssueHtml.json';
import incidentHtml from '../data/incidentHtml.json';
import incidentHtml2 from '../data/incidentHtml2.json';
import incidentHtml3 from '../data/incidentHtml3.json';
import incidentHtml4 from '../data/incidentHtml4.json';
import noIssue from '../data/noIssue.json';
import incident from '../data/incident.json';
import incident2 from '../data/incident2.json';
import incident3 from '../data/incident3.json';
import incident4 from '../data/incident4.json';
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

  it('should return Apps/Integrations/APIs incident status result ', async () => {
    mockedAxios.get.mockResolvedValue(incidentHtml);
    expect(await SlackClient.getSlackStatus()).toStrictEqual(incident);
  });

  it('should return Messaging incident status result ', async () => {
    mockedAxios.get.mockResolvedValue(incidentHtml2);
    expect(await SlackClient.getSlackStatus()).toStrictEqual(incident2);
  });

  it('should return Notifications incident status result', async () => {
    mockedAxios.get.mockResolvedValue(incidentHtml3);
    expect(await SlackClient.getSlackStatus()).toStrictEqual(incident3);
  });

  it('should return Posts/Files incident status result', async () => {
    mockedAxios.get.mockResolvedValue(incidentHtml4);
    expect(await SlackClient.getSlackStatus()).toStrictEqual(incident4);
  });
});