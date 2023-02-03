import { getSlackStatus } from '../src/slack-status/getSlackStatus';
import noIssueHtml from './data/noIssueHtml.json';
import noIssue from './data/noIssue.json';
import incidentHtml from './data/incidentHtml.json';
import incident from './data/incident.json';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('slack-status-api', () => {
  it('should have a getSlackStatus function', () => {
    expect(typeof getSlackStatus).toBe('function');
  });
  it('should return noIssue status result', async () => {
    mockedAxios.get.mockResolvedValue(noIssueHtml);
    expect(await getSlackStatus()).toStrictEqual(noIssue);
  });
  it('should return incident status result ', async () => {
    mockedAxios.get.mockResolvedValue(incidentHtml);
    expect(await getSlackStatus()).toStrictEqual(incident);
  });
});
