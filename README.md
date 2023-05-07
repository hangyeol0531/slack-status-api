# slack-status-api

NPM module to import Slack System Status Information

# Installing

Using npm

```bash
$ npm install slack-status-api
```

# Example

##### import the library using the import

```typescript
import { getSlackStatus } from 'slack-status-api';

(async () => {
  const data = await getSlackStatus();
  console.log(data);
})()
```

##### result

Status can be **No Issue, Maintenance, Notice, Incident, Outage**, total of 5

```json
{
  "Login/SSO": {
    "status": "No Issue"
  },
  "Connections": {
    "status": "No Issue"
  },
  "Messaging": {
    "status": "No Issue"
  },
  "Files": {
    "status": "No Issue"
  },
  "Notifications": {
    "status": "No Issue"
  },
  "Huddles": {
    "status": "No Issue"
  },
  "Search": {
    "status": "No Issue"
  },
  "Apps/Integrations/APIs": {
    "status": "No Issue"
  },
  "Workspace/Org Administration": {
    "status": "No Issue"
  },
  "Workflows": {
    "status": "No Issue"
  },
  "Canvases": {
    "status": "No Issue"
  }
}
```

# npm

https://www.npmjs.com/package/slack-status-api?activeTab=readme