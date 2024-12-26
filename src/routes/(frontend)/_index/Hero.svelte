<script lang="ts">
    import Form from "$lib/components/Form.svelte";
    import FormInput from "$lib/components/FormInput.svelte";
</script>

<div class="cover-screen relative overflow-hidden">
    <div
        class="y-center x-center z-10 w-full space-y-4 text-center md:left-[10%] md:translate-x-0 md:text-left"
    >
        <h1 class="text-5xl md:text-5xl lg:text-6xl">Search for a Veteran</h1>

        <Form action="/search">
            <FormInput
                type="text"
                id="name"
                placeholder="Enter a name"
                classes="w-full md:w-auto text-2xl"
            />
        </Form>
    </div>

    <div class="cover-screen relative overflow-hidden">
        <img
            class="y-center x-center z-[1] w-full select-none"
            src="/park.jpg"
            alt="American flag"
        />

        <!--Bottom to top gradient overlay.-->
        <div class="bt-overlay cover-screen absolute bottom-0 left-0 z-[2] select-none"></div>

        <!--Left to right gradient overlay.-->
        <div class="lr-overlay cover-screen absolute bottom-0 left-0 z-[2] select-none"></div>
    </div>
</div>

<style lang="postcss">
    :global(.bt-overlay:is(.dark *)) {
        background: linear-gradient(0deg, #131313 0.5%, #13131300 60%);
    }

    :global(.bt-overlay) {
        background: linear-gradient(0deg, #f9f9f9 0.5%, #f9f9f900 60%);
    }

    :global(.lr-overlay:is(.dark *)) {
        background: linear-gradient(90deg, #131313 1%, #13131300 60%);
    }

    :global(.lr-overlay) {
        background: linear-gradient(90deg, #f9f9f9 1%, #f9f9f900 60%);
    }
</style>
