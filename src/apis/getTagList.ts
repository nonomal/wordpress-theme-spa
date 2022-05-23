import appFetch from "../utils/fetch";
import wpAppConfig from "@wpAppConfig";
import { TagListItem } from "./apis";

const tagEndpoint = `tags${
    wpAppConfig.apiBackendPrettyUrlEnabled ? "?" : "&"
}_fields=id,count,name,slug&hide_empty=${wpAppConfig.hideEmptyTag}`;

/**
 * 获取tag列表
 */
export default appFetch<TagListItem[]>(tagEndpoint);
