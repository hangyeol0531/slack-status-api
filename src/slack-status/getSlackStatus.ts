import {
  SlackStatus,
} from './types/status';
import SlackClient from './components/slack-client';

export const getSlackStatus = async (): Promise<SlackStatus> => SlackClient.getSlackStatus();
