<script lang="ts">
    let {
        id,
        label,
        type,
        placeholder,
        value,
        classes,
        options = [],
    }: {
        id: string;
        label: string;
        type:
            | "text"
            | "file"
            | "email"
            | "radio"
            | "checkbox"
            | "select"
            | "number"
            | "checkbox"
            | "textarea"
            | "password";
        placeholder?: string;
        value?: string | number;
        classes?: string;
        options?: string[];
    } = $props();

    const inputClasses: string = `primary peer w-full text-lg ${classes}`;
</script>

<div class="w-full space-y-1">
    <label class="text-light cursor-text select-none pl-3" for={id}>{label}</label>

    {#if type === "select"}
        <select class={inputClasses} {id}>
            {#each options as option}
                <option value={option}>{option}</option>
            {/each}
        </select>
    {:else if type === "textarea"}
        <textarea class="resize-none {inputClasses}" {id} {placeholder} {value}></textarea>
    {:else}
        <input class={inputClasses} {id} {type} {placeholder} {value} />
    {/if}
</div>
