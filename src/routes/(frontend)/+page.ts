export async function load({ fetch, url }) {
    const veterans = await fetch("/api/veterans", {
        method: "POST",
    });

    return {
        veterans: await veterans.json(),
    };
}
