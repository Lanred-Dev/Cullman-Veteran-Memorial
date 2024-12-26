<script lang="ts">
    import type { Veteran } from "$lib/types";

    let { name, images, cardSize }: Veteran & { cardSize: number } = $props();
</script>

<div
    class="aspect-square bg-primary-light-400 dark:bg-primary-dark-400 md:w-40"
    style:width="{cardSize}px"
>
    <img src={images[0]} alt="{name}'s cover" class="h-full w-full object-cover" />
</div>
