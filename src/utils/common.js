import jssha from "jssha";

export function getAuthorizationHeader() {
    const AppID = '0d068c678f4f4154bfa8c2a45628e50c';
    const AppKey = 'FbfZCusU3lw2S1jLnj9jxbO5P3w';
    const GMTString = new Date().toGMTString();

    let ShaObj = new jssha('SHA-1', 'TEXT');
    ShaObj.setHMACKey(AppKey, 'TEXT');
    ShaObj.update('x-date: ' + GMTString);
    const HMAC = ShaObj.getHMAC('B64');
    const Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';

    return { 'Authorization': Authorization, 'X-Date': GMTString /*,'Accept-Encoding': 'gzip'*/}; 
    //如果要將js運行在伺服器，可額外加入 'Accept-Encoding': 'gzip'，要求壓縮以減少網路傳輸資料量
}