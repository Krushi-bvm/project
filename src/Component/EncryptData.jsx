import { AES } from "crypto-js";
const EncryptData = (objData) => {
    const ciphertext = AES.encrypt(JSON.stringify(objData), 'secret_key_123').toString();
    return ciphertext;
}
export default EncryptData;