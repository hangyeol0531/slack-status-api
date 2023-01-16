import axios from 'axios';
import {
  SlackStatusPng, SlackStatusTitle, SlackType, slackTypeMap,
} from './types/status';

const slackStatusUrl = 'https://status.slack.com/';

export const getSlackStatus = async (): Promise<SlackType[]> => {
  const regex = /(?<=<p\sclass="bold">|\/img\/v2\/)[A-Za-z\s/.]*(?=<\/p>|"\ssrcset="\/img\/v2\/Table)/g;
  const { data } = await axios.get(slackStatusUrl);
  const dataRegexList: (SlackStatusTitle | SlackStatusPng)[] = data.match(regex);
  const result: SlackType[] = [];
  for (let i = 5; i < dataRegexList.length; i += 2) {
    result.push({
      name: dataRegexList[i] as SlackStatusTitle,
      status: slackTypeMap[dataRegexList[i + 1] as SlackStatusPng],
    });
  }
  return result;
};
