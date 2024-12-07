<script lang="ts">
    import Hero from "./_index/Hero.svelte";
    import InfiniteWall from "./_index/InfiniteWall.svelte";
    import Contact from "./_index/Contact.svelte";
    import type { PageData } from "./$types";

    let { data }: { data: PageData } = $props();
</script>

<Hero />
<InfiniteWall entries={data.veterans} />
<Contact />
