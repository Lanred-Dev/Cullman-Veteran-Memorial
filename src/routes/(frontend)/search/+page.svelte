<script lang="ts">
    import CardList from "$lib/components/CardList.svelte";
    import type { PageData } from "./$types";

    let { data }: { data: PageData } = $props();
</script>

{#await data.veterans then veterans}
    <CardList entries={veterans} />
{/await}
