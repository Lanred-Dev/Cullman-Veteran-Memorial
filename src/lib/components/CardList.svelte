<script lang="ts">
    import CardGroup from "./CardGroup.svelte";
    import type { Veteran } from "$lib/types";
    import { onMount } from "svelte";

    let containerWidth: number = $state(0);
    let { entries, maxGroups }: { entries: Veteran[]; maxGroups?: number } = $props();
    let cardSize: number = $state(0);
    let visibleGroups: Veteran[][] = $derived.by(() => {
        let totalGroups: number = 0;

        return [[]];
    });

    /**
     * Determine the card size based on the window width.
     *
     * @returns never
     */
    function determineCardSize() {
        // Card size is 40px on desktop and 80px on mobile.
        cardSize = window.innerWidth >= 512 ? 40 : 80;
    }

    onMount(() => {
        determineCardSize();
        window.addEventListener("resize", determineCardSize);

        return () => {
            window.removeEventListener("resize", determineCardSize);
        };
    });
</script>

<div
    class="flex-center w-full gap-5 overflow-x-hidden md:px-[10%]"
    bind:clientWidth={containerWidth}
>
    {#each visibleGroups as group}
        <CardGroup entries={group} {cardSize} />
    {/each}
</div>
