import md5 from 'crypto-js/md5'
import sha256 from 'crypto-js/sha256'

export default (pwd) => {
  return sha256(md5(pwd) + '') + ''
}
