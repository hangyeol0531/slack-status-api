export const slackTypeMap = {
    'TableCheck.png': 'No Issue',
    'TableMaintenance.png': 'Maintenance',
    'TableNotice.png': 'Notice',
    'TableIncident.png': 'Incident',
    'TableOutage.png': 'Outage',
} as const;

export type slackStatusPng = keyof typeof slackTypeMap;

export interface SlackType {
    name: string,
    status: string,
}

export type slackStatusTitle =
    'Login/SSO' |
    'Connections' |
    'Messaging' |
    'Link Previews' |
    'Posts/Files' |
    'Notifications' |
    'Calls' |
    'Search' |
    'Apps/Integrations/APIs' |
    'Workspace/Org Administration'