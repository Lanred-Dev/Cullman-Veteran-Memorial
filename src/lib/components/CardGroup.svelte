<script lang="ts">
    import Card from "./Card.svelte";
    import type { Veteran } from "$lib/types";

    let {
        entries,
        cardSize,
        rows = 3,
    }: { entries: Veteran[]; cardSize: number; rows?: number } = $props();
</script>

<div class="flex-center w-full gap-5">
    {#each Array(rows) as _, index}
        <div class="flex w-fit gap-5">
            {#each entries.slice(index * 3, index * 3 + 3) as entry}
                <Card {...entry} {cardSize} />
            {/each}
        </div>
    {/each}
</div>
