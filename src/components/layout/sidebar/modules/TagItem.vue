<script setup lang="ts">
import { RouterLink } from "vue-router";

interface T {
    count: number;
    name: string;
    id: number;
    size?: number;
}
const props = withDefaults(defineProps<T>(), {
    count: 0,
    name: "",
    id: 0,
    size: 0,
});
</script>

<template>
    <RouterLink
        class="tag-cloud-link"
        :to="{ name: 'tag', params: { tid: props.id } }"
        :style="{ 'font-size': props.size ? props.size + 'rem' : 'unset' }"
    >
        {{ props.name }}
        <span class="tag-link-count">({{ props.count }})</span>
    </RouterLink>
</template>

<style lang="scss" scoped>
.tag-cloud-link {
    background: var(--theme-color-pale);
    border-radius: 20px;
    color: #fff;
    padding: 8px;
    transition: var(--theme-transition);
    display: inline-block;
    margin: 3px;
    line-height: 1;
    > .tag-link-count {
        font-size: 0.6rem;
    }
    &:hover {
        background: var(--theme-color);
    }
}
</style>
