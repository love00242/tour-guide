import axios from "axios";
import * as common  from "@/utils/common";

//觀光相關
const api = axios.create({
    baseURL: "https://ptx.transportdata.tw/MOTC/v2/",
    dataType: "json",
    headers: common.getAuthorizationHeader(),
});

export const apiTourScene = parm => api.get(`Tourism/ScenicSpot?${parm}`);
// https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$format=JSON
//https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Taipei?$top=30&$format=JSON

