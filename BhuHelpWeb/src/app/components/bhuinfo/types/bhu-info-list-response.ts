import { BhuInfoModel } from "./bhu-info.model";

export interface BhuInfoListResponse {
    bhuInfos:BhuInfoModel[];
    totalCount:number;
}