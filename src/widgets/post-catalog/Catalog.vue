<script
    setup
    lang="ts"
>
import SiteSidebarItem from "@/components/layout/sidebar/SiteSidebarItem.vue";
import CatalogItem from "./CatalogItem.vue";
import { CatalogItemType } from "@/widgets/props";

interface T {
    list: CatalogItemType[];
    visible: boolean;
}

const props = withDefaults(defineProps<T>(), {
    list: () => [],
    visible: true,
});
const emits = defineEmits<{ (e: "getClickedIndex", v: number): void }>();
/**
 * 将点击项的index传递给父组件
 */
function getClickedIndex (clickedItemIndex: number) {
    emits("getClickedIndex", clickedItemIndex);
}
</script>

<template>
    <Teleport to="body">
        <Transition
            name="post-catalog"
            appear
        >
            <SiteSidebarItem
                title="文章目录"
                class="post-catalog"
                v-show="props.visible"
            >
                <div class="catalog-body">
                    <CatalogItem
                        v-for="item in props.list"
                        :key="item.headingIndex"
                        :text="item.text"
                        :heading-level="item.headingLevel"
                        :heading-index="item.headingIndex"
                        :href="item.href"
                        :is-current="item.isCurrent"
                        @click="getClickedIndex(item.headingIndex)"
                    />
                </div>
            </SiteSidebarItem>
        </Transition>
    </Teleport>
</template>

<style
    lang="scss"
    scoped
>
@import "@sty/variable.scss";
.post-catalog {
    background: none;
    border: none;
    border-radius: 10px;
    position: fixed;
    z-index: 10;
    bottom: 0;
    left: 0;
    margin: 5px;
    display: flex;
    max-height: calc(100% - $header-height - 10px);
    max-width: calc($sidebar-width-percentage - 10px);
    .catalog-body {
        max-height: 100%;
        max-width: 100%;
        overflow-y: scroll;
        overflow-x: hidden;
    }
    @media (max-width: $media-small-size) {
        max-width: 25%;
    }
    @media (max-width: $media-smallest-size) {
        max-width: 35%;
    }
    @media (max-width: $media-mini-size) {
        max-width: 45%;
    }
    @media (max-width: $media-minier-size) {
        max-width: 55%;
        min-width: initial;
    }
}
.post-catalog-enter-active,
.post-catalog-leave-active {
    transition: all 0.5s linear;
}
.post-catalog-enter-from,
.post-catalog-leave-to {
    transform: translateX(calc(-100% - 15px));
    opacity: 0;
}
</style>
