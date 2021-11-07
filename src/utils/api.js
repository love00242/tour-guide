import axios from "axios";
import * as common  from "@/utils/common";

//觀光相關
const tourRequest = axios.create({
    baseURL: "https://ptx.transportdata.tw/MOTC/v2/Tourism/",
    dataType: 'json',
    headers: common.getAuthorizationHeader(),
});

export const apiTour = parm => tourRequest.get(`/ScenicSpot?${parm}`);
// https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$format=JSON
//https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Taipei?$top=30&$format=JSON