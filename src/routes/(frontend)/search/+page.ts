import type { queryOption } from "$lib/types.js";

export async function load({ fetch, url }) {
    // Get all search queries.
    const queries: URLSearchParams = new URLSearchParams(url.search);

    // Convert the queries to an array of objects.
    const queryOptions: queryOption[] = [];

    queries.forEach((value, key) => {
        queryOptions.push({ field: key, operator: "==", value });
    });

    // Fetch the veterans based on the queries.
    const veterans = await fetch("/api/veterans", {
        body: JSON.stringify(queryOptions),
    });

    return {
        veterans: await veterans.json(),
    };
}
