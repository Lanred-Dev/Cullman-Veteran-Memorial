<script lang="ts">
    import Form from "$lib/components/Form.svelte";
    import FormRow from "$lib/components/FormRow.svelte";
    import FormInput from "$lib/components/FormInput.svelte";
    import FormSubmit from "$lib/components/FormSubmit.svelte";
    import Section from "./Section.svelte";
</script>

<Section
    id="contact"
    title="Reach out to us"
    text="Reach out to us with your questions, comments, suggestions, or concerns. We'll get back to you as soon as we can."
    height="50vh"
>
    <Form action="/api/contact" method="POST" classes="w-full md:w-1/2">
        <FormRow>
            <FormInput id="name" label="Name" type="text" placeholder="John Doe" />
            <FormInput id="email" label="Email" type="email" placeholder="johndoe@gmail.com" />
        </FormRow>

        <FormInput
            id="message"
            label="What are you contacting us about?"
            type="textarea"
            placeholder="Something important..."
            classes="h-40"
        />

        <FormSubmit text="Send" />
    </Form>
</Section>
