<script lang="ts">
    import { onMount } from "svelte";

    let entries: any[] = $state(Array.from({ length: 20 }));
</script>

{#snippet card(name: string)}
    <div class="aspect-square w-32 bg-red-600"></div>
{/snippet}

<span id="wall"></span>

<div class="flex-center w-full flex-wrap gap-5 overflow-x-hidden py-10 md:px-[10%]">
    {#each entries as entry}
        {@render card(entry)}
    {/each}
</div>
