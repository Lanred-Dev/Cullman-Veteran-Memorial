<script lang="ts">
    const LINKS: { text: string; url: string }[] = [
        {
            text: "About",
            url: "/",
        },
        {
            text: "Wall of Faces",
            url: "/#wall",
        },
        {
            text: "Contact",
            url: "/contact",
        },
    ];
</script>

<header
    class="x-center top-0 z-10 flex w-full flex-col items-start justify-center gap-5 px-5 py-8 sm:px-10 md:flex-row md:items-center md:justify-between md:gap-0 md:px-[10%]"
>
    <div>
        <p class="text-2xl font-medium sm:text-3xl">Cullman Veterans Memorial</p>
        <a href="https://maps.app.goo.gl/1W3mvB9EUpLCeAdt7"
            >1544 Sportsman Lake Road N.W., Cullman, Alabama 35055</a
        >
    </div>

    <!--Navigation items-->
    <div class="flex items-center justify-start gap-6 md:justify-center">
        {#snippet navigationLink(text: string, url: string)}
            <a
                class="font-semibold text-primary-light-400 dark:text-primary-dark-300 sm:text-lg"
                href={url}>{text}</a
            >
        {/snippet}

        {#each LINKS as link}
            {@render navigationLink(link.text, link.url)}
        {/each}
    </div>
</header>
