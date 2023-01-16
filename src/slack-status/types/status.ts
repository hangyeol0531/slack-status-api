export type SlackStatusTitle =
    'Login/SSO' |
    'Connections' |
    'Messaging' |
    'Link Previews' |
    'Posts/Files' |
    'Notifications' |
    'Calls' |
    'Search' |
    'Apps/Integrations/APIs' |
    'Workspace/Org Administration';

export const slackTypeMap = {
  'TableCheck.png': 'No Issue',
  'TableMaintenance.png': 'Maintenance',
  'TableNotice.png': 'Notice',
  'TableIncident.png': 'Incident',
  'TableOutage.png': 'Outage',
} as const;

export type SlackStatusPng = keyof typeof slackTypeMap;

export interface SlackType {
  name: SlackStatusTitle,
  status: typeof slackTypeMap[SlackStatusPng],
}