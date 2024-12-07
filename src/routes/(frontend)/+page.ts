export async function load({ fetch, url }) {
    const veterans = await fetch("/api/veterans");

    return {
        veterans: await veterans.json(),
    };
}
