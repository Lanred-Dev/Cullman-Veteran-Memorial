<script lang="ts">
    import type { Veteran } from "$lib/types";

    let { entries, max }: { entries: Veteran[]; max?: number } = $props();
    let visibleEntries: Veteran[] = $derived(entries.slice(0, max || entries.length));
</script>

{#snippet card({ name, images }: Veteran)}
    <div class="aspect-square w-32 bg-primary-light-400 dark:bg-primary-dark-400 md:w-40">
        <img src={images[0]} alt="{name}'s cover" class="h-full w-full object-cover" />
    </div>
{/snippet}

<div class="flex-center w-full flex-wrap gap-5 overflow-x-hidden md:px-[10%]">
    {#each visibleEntries as entry}
        {@render card(entry)}
    {/each}
</div>
