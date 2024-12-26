<script lang="ts">
    import type { Snippet } from "svelte";
    import { twMerge } from "tailwind-merge";

    let {
        action,
        method = "GET",
        classes,
        children,
    }: {
        action: string;
        method?: "POST" | "GET";
        classes?: string;
        children: Snippet<[]>;
    } = $props();
</script>

<form class={twMerge("flex-center flex-col gap-5", classes)} {method} {action}>
    {@render children?.()}
</form>
