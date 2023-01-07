import axios from 'axios';
import { slackStatusPng, slackStatusTitle, SlackType, slackTypeMap } from "./types/status";

const slackStatusUrl: string = 'https://status.slack.com/'

const getSlackStatus = async (): Promise<SlackType[]> => {
    const regex: RegExp = /(?<=<p\sclass="bold">|\/img\/v2\/)[A-Za-z\s\/.]*(?=<\/p>|"\ssrcset="\/img\/v2\/Table)/g;
    const { data } = await axios.get(slackStatusUrl);
    const dataRegexList: (slackStatusTitle | slackStatusPng)[] = data.match(regex);
    const result: SlackType[] = [];
    for (let i = 5; i < dataRegexList.length; i += 2) {
        result.push({
            name: dataRegexList[i],
            status: slackTypeMap[dataRegexList[i + 1] as slackStatusPng],
        })
    }
    return result;
}

(async () => {
    const result = await getSlackStatus();
    console.log(result);
})()