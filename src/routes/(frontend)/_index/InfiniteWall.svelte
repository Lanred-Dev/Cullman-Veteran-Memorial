<script lang="ts">
    import Section from "./Section.svelte";
    import CardList from "$lib/components/CardList.svelte";
    import type { Veteran } from "$lib/types";

    let { entries }: { entries: Veteran[] } = $props();
</script>

<Section id="wall">
    <CardList maxGroups={1} {entries} />
</Section>
