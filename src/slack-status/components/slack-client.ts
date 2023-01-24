import axios from 'axios';
import {
  slackTypeMap, SlackType, SlackStatusTitle, SlackStatusPng,
} from '../types/status';
import { SlackStatusRegexList } from '../types/status';

export default class SlackClient {
  private static url = 'https://status.slack.com/';

  private static statusRegex = /(?<=<p\sclass="bold">|\/img\/v2\/)[A-Za-z\s/.]*(?=<\/p>|"\ssrcset="\/img\/v2\/Table)/g;

  private static options = {
    timeout: 1000 * 3,
    validateStatus(status: number) {
      return status === 200;
    },
  } as const;

  public static async getSlackStatus() {
    const { data }: { data: string } = await axios.get(this.url, this.options);
    return this.parseSlackData(data);
  }

  private static async parseSlackData(data: string): Promise<SlackType[]> {
    const dataRegexList: SlackStatusRegexList = data.match(this.statusRegex) as SlackStatusRegexList;
    const result: SlackType[] = [];
    for (let i = 5; i < dataRegexList.length; i += 2) {
      result.push({
        name: dataRegexList[i] as SlackStatusTitle,
        status: slackTypeMap[dataRegexList[i + 1] as SlackStatusPng],
      });
    }
    return result;
  }
}