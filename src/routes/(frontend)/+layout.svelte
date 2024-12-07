<script lang="ts">
    import "../../app.css";
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";
    import { getTheme } from "$lib/scripts/theme";
    import { onMount, type Snippet } from "svelte";

    let { children }: { children: Snippet<[]> } = $props();

    // Prevent a flash of unstyled content when changing pages or themes.
    onMount(() => {
        if (getTheme() === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    });
</script>

<Header />

{@render children()}

<Footer />
