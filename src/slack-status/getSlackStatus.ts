import {
  SlackType,
} from './types/status';
import SlackClient from './components/slack-client';

export const getSlackStatus = async (): Promise<SlackType[]> => SlackClient.getSlackStatus();
