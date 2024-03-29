<script setup lang="ts">
import { RouterLink } from "vue-router";
import { convertDateFormat } from "@/utils/date";
import {
    PostListItemCategoryItemType,
    PostListItemTagItemType,
} from "@/components/props";
//接口或对象字面类型可以包含从其他文件导入的类型引用，但是，传递给defineProps的泛型参数本身不能是一个导入的类型
//https://staging-cn.vuejs.org/guide/typescript/composition-api.html#typing-component-props
interface T {
    /**
     * post id
     */
    id: number;
    /**
     * 特色图片URL
     */
    thumbnail: string;
    /**
     * 所属分类 数组
     */
    category: PostListItemCategoryItemType[];
    /**
     * 所属标签 数组
     */
    tag: PostListItemTagItemType[];
    /**
     * 日期
     */
    date: string;
    /**
     * 标题
     */
    title: string;
    /**
     * 摘要
     */
    excerpt: string;
}
//props类型+默认值声明
//https://v3.cn.vuejs.org/api/sfc-script-setup.html#仅限-typescript-的功能
const props = withDefaults(defineProps<T>(), {
    id: 0,
    thumbnail: "",
    category: () => [],
    tag: () => [],
    date: "",
    title: "",
    excerpt: "",
});
</script>

<template>
    <div class="post-item">
        <div class="post-item-wrap">
            <div class="post-thumbnail">
                <div
                    :style="{
                        'background-image': 'url(' + props.thumbnail + ')',
                    }"
                    :class="{ 'has-thumbnail': props.thumbnail }"
                >
                    <div class="post-meta">
                        <div class="post-category">
                            <i class="fa fa-folder-o" />
                            <ul class="post-categories">
                                <li
                                    v-for="cat in props.category"
                                    :key="cat.id"
                                >
                                    <RouterLink
                                        :to="{
                                            name: 'category',
                                            params: { cid: cat.id },
                                        }"
                                    >
                                        {{ cat.name }}
                                    </RouterLink>
                                </li>
                            </ul>
                        </div>
                        <div class="post-tag">
                            <i class="fa fa-tag" />
                            <ul>
                                <li
                                    v-for="t in props.tag"
                                    :key="t.id"
                                >
                                    <RouterLink
                                        :to="{
                                            name: 'tag',
                                            params: { tid: t.id },
                                        }"
                                    >
                                        {{ t.name }}
                                    </RouterLink>
                                </li>
                            </ul>
                        </div>
                        <div class="post-time">
                            <i class="fa fa-clock-o" /><time
                                :datetime="props.date"
                            >
                                {{ convertDateFormat(props.date) }}
                            </time>
                        </div>
                    </div>
                </div>
            </div>
            <div class="post-title">
                <span>❊</span><RouterLink :to="{ name: 'post', params: { pid: props.id } }">
                    {{ props.title }}
                </RouterLink><span>❊</span>
            </div>
            <div
                class="post-excerpt"
                v-html="props.excerpt"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@sty/mixin.scss";
@import "@sty/variable.scss";
.post-item {
    padding: 2px;
    margin-bottom: 30px;
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 3px var(--theme-color);
    border-radius: 10px;
    @media (max-width: $media-mini-size) {
        margin-bottom: 20px;
    }
    @media (max-width: $media-minier-size) {
        margin-bottom: 15px;
    }
}
.post-item-wrap {
    padding: 7px;
    border: 2px solid var(--theme-color-pale);
    border-radius: inherit;
    > .post-thumbnail {
        z-index: 1;
        @include has-dual-same-pseudo-els("", -1);
        &::before,
        &::after {
            width: 100%;
            height: 100%;
            background-color: #ccc;
        }
        &::before {
            left: -4px;
            bottom: -4px;
        }
        &::after {
            left: 4px;
            bottom: 4px;
        }
        > .has-thumbnail {
            height: 200px;
            background-position: center;
            background-size: cover;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
        }
    }
    > .post-title {
        font-size: 1.25rem;
        margin: 10px;
        @include flex-center;
        > a {
            margin: 0 8px;
            &:hover {
                color: var(--theme-color-gray);
            }
        }
        > span {
            color: var(--theme-color-pale);
        }
    }
    > .post-excerpt {
        font-family: var(--theme-font-compatible);
        margin: 0 10px;
        color: #555;
        text-align: left;
        line-height: 20px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        > p {
            overflow: inherit;
            text-overflow: inherit;
        }
    }
    @media (max-width: $media-mini-size) {
        > .post-thumbnail {
            > .has-thumbnail {
                height: 170px;
            }
            .post-meta {
                line-height: 20px;
            }
        }
    }
}
.post-meta {
    background: rgba(0, 0, 0, 0.4);
    line-height: 24px;
    color: #fff;
    padding: 6px 10px;
    > div {
        display: flex;
        align-items: center;
        margin-bottom: 8px;
        &:last-child {
            margin-bottom: 0;
        }
        > i {
            margin-right: 5px;
        }
    }
    ul {
        > li {
            position: relative;
            margin-right: 20px;
            float: left;
            &:not(:last-child)::after {
                position: absolute;
                content: "✦";
                width: 10px;
                font-size: 0.625rem;
                right: -15px;
                color: #ccc;
            }
            > a {
                color: #fff;
            }
        }
    }
    time {
        font-family: var(--theme-font);
    }
    a:hover {
        text-decoration: underline;
    }
    @media (max-width: $media-mini-size) {
        > div:not(:last-child) {
            margin-bottom: 6px;
        }
    }
}
</style>
<style lang="scss">
.post-item-wrap > .post-excerpt > p {
    overflow: inherit;
    text-overflow: inherit;
}
</style>
