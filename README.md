# slack-status-api
NPM module to import Slack system information data

# Installing
```bash
$ npm install slack-status-api
```

# Example
```typescript
import { getSlackStatus } from 'slack-status-api';

(async () => {
  const data = await getSlackStatus();
  console.log(data);
})()
```

# npm
https://www.npmjs.com/package/slack-status-api?activeTab=readme