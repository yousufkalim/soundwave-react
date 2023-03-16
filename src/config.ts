let baseUrl = 'https://soundwave-api-dev.falconweb.app/api/v1';
let mediaUrl = 'https://soundwave-api-dev.falconweb.app';

// Update the baseUrl and mediaUrl on every environment
switch (window.location.host) {
  case 'soundwave-dev.falconweb.app':
    baseUrl = 'https://soundwave-api-dev.falconweb.app/api/v1';
    mediaUrl = 'https://soundwave-api-dev.falconweb.app';
    break;

  case 'soundwave-qa.falconweb.app':
    baseUrl = 'https://soundwave-api-qa.falconweb.app/api/v1';
    mediaUrl = 'https://soundwave-api-qa.falconweb.app';
    break;

  case 'soundwave-staging.falconweb.app':
    baseUrl = 'https://soundwave-api-staging.falconweb.app/api/v1';
    mediaUrl = 'https://soundwave-api-staging.falconweb.app';
    break;

  case 'soundwave-prod.falconweb.app/':
    baseUrl = 'https://soundwave-api-prod.falconweb.app/api/v1';
    mediaUrl = 'https://soundwave-api-prod.falconweb.app';
    break;
}

export { baseUrl, mediaUrl };
