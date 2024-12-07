<!--Create a form that allows for input props and dynamic fields and title provided by the user of the component.-->
<script lang="ts">
    import { enhance } from "$app/forms";
    import type { Snippet } from "svelte";

    let { classes, children }: { classes?: string; children: Snippet<[]> } = $props();
</script>

<form class="flex-center flex-col gap-5 {classes}" method="POST" use:enhance>
    {@render children?.()}
</form>
