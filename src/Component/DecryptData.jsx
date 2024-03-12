import { AES, enc } from "crypto-js";
const DecryptData = (resData) =>{
    const bytes = AES.decrypt(resData, 'secret_key_123');
    const decrypted = JSON.parse(bytes.toString(enc.Utf8));
   console.log(decrypted);
    return  decrypted;
}
export default DecryptData; 