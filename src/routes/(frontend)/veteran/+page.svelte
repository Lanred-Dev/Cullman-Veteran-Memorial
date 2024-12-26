<script lang="ts">
    import type { Veteran } from "$lib/types";

    let { veteran }: { veteran: Veteran } = $props();
</script>

<h1>{veteran.name}</h1>
