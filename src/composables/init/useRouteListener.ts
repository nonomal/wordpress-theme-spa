import { ref, watch } from "vue";
import { Router, RouteLocationNormalizedLoaded } from "vue-router";
import { LandingType } from "@/components/props";

/**
 * route监听器
 * @param route route实例
 * @param router router实例
 * @param resourceCount 资源个数
 */
export default function (
    route: RouteLocationNormalizedLoaded,
    router: Router,
    resourceCount: number
) {
    /**
     * 资源加载标志，每加载完成一个资源将其+1
     */
    const loadingFlag = ref(0),
        /**
         * landing组件类型
         */
        landingType = ref<LandingType>(LandingType.home);
    //加载完数据跳转至首页
    watch(
        () => loadingFlag.value,
        (n, o) => {
            if (n === resourceCount && o < resourceCount) {
                router.push({ name: "home" });
            }
        }
    );
    //根据路由变化选择不同的landing组件
    watch(
        () => route.name,
        (n) => {
            if (n && typeof n === "string") {
                if (["author", "category", "tag"].includes(n)) {
                    landingType.value = LandingType.archive;
                } else if (n === "post") {
                    landingType.value = LandingType.post;
                } else {
                    landingType.value = LandingType.home;
                }
            }
        }
    );
    return {
        /**
         * 资源加载标志，每加载完成一个资源将其+1
         */
        loadingFlag,
        /**
         * landing组件类型
         */
        landingType,
    };
}
