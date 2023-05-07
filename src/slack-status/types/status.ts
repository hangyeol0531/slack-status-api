export type SlackStatusTitle =
    'Login/SSO' |
    'Connections' |
    'Messaging' |
    'Files' |
    'Notifications' |
    'Huddles' |
    'Search' |
    'Apps/Integrations/APIs' |
    'Workspace/Org Administration' |
    'Workflows'|
    'Canvases';

export const slackTypeMap = {
  'TableCheck.png': 'No Issue',
  'TableMaintenance.png': 'Maintenance',
  'TableNotice.png': 'Notice',
  'TableIncident.png': 'Incident',
  'TableOutage.png': 'Outage',
} as const;

export type SlackStatusPng = keyof typeof slackTypeMap;
export type SlackStatusType = typeof slackTypeMap[SlackStatusPng];

export type SlackStatusRegexList = (SlackStatusTitle | SlackStatusPng)[];

export type SlackStatus = {
  // eslint-disable-next-line no-unused-vars
  [key in SlackStatusTitle]: {
    status: SlackStatusType
  }
}