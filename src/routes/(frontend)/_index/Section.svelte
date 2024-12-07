<script lang="ts">
    import type { Snippet } from "svelte";

    let {
        id,
        title,
        text,
        direction = "vertical",
        height,
        children,
    }: {
        id: string;
        title?: string;
        text?: string;
        direction?: "vertical" | "horizontal";
        height?: string;
        children?: Snippet<[]>;
    } = $props();
</script>

<span {id}></span>

<div
    class="flex-center mt-[30vh] {direction !== 'horizontal' ? 'flex-col' : ''} relative"
    style:height={typeof height === "string" ? height : "unset"}
>
    {#if title || text}
        <div class="flex-center relative z-10 mb-10 flex-col gap-3 text-center">
            {#if title}
                <p class="text-4xl lg:text-5xl">
                    {@html title}
                </p>
            {/if}

            {#if text}
                <p class="text-light text-xl lg:max-w-4xl">{@html text}</p>
            {/if}
        </div>
    {/if}

    {@render children?.()}
</div>
