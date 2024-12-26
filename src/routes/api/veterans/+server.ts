import { getDocs, query, where, type WhereFilterOp } from "firebase/firestore";
import { json } from "@sveltejs/kit";
import { veterans } from "$lib/scripts/firebase";
import type { queryOption } from "$lib/types";

export async function POST({ request }) {
    try {
        let queryResults = query(veterans);
        let documents;

        const queries: queryOption[] = await request.json();

        // Determine if there are any queries.
        if (Array.isArray(queries)) {
            // Filter the results based on the queries.
            queries.forEach((queryOption: queryOption) => {
                // The name operator is a special case and is handled with a custom function.
                if (queryOption.field === "name") {
                    return;
                }

                queryResults = query(
                    queryResults,
                    where(queryOption.field, queryOption.operator, queryOption.value)
                );
            });

            documents = (await getDocs(queryResults)).docs;

            // Filter the results based on the name query.
            if (queries.some((queryOption) => queryOption.field === "name")) {
                const nameQuery: queryOption = queries.find(
                    (queryOption) => queryOption.field === "name"
                )!;

                documents = documents.filter((document) => {
                    const name = document.data().name.toLowerCase();
                    const value = nameQuery.value.toLowerCase();

                    return name.includes(value);
                });
            }
        } else {
            documents = (await getDocs(queryResults)).docs;
        }

        return json(
            documents.map((document) => ({ id: document.id, ...document.data() })),
            { status: 500 }
        );
    } catch (error) {
        return json({ error: "Error fecthing veterans." }, { status: 500 });
    }
}
