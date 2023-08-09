const crypto = require('crypto');

class KeyGenerator {
  generateRandomKey() {
    return crypto.randomBytes(32);
  }
}

module.exports = KeyGenerator;
