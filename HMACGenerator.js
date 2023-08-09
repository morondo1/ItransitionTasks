const crypto = require('crypto');

class HMACGenerator {
  generateHMAC(message, key) {
    const hmac = crypto.createHmac('sha256', key).update(message);
    return hmac.digest('hex');
  }
}

module.exports = HMACGenerator;
