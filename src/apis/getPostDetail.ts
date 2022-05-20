import appFetch from "../utils/fetch";
import wpAppConfig from "@wpAppConfig";
import { PostDetail } from "./apis";

// const postDetailEndpoint = `posts/{id}${wpAppConfig.apiBackendPrettyUrlEnabled ? "?" : "&"}_fields=author,id,content,title,categories,tags,date,modified,featured_media,featured_image_url`;

const baseEndpoint = [
    "posts/",
    `${
        wpAppConfig.apiBackendPrettyUrlEnabled ? "?" : "&"
    }_fields=author,id,content,title,categories,tags,date,modified,featured_media,featured_image_url`,
];

/**
 * 获取单个文章
 */
export default appFetch<PostDetail>(baseEndpoint);