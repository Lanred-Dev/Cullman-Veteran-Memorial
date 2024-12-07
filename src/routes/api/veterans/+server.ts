import { getDocs, query, where, type WhereFilterOp } from "firebase/firestore";
import { json } from "@sveltejs/kit";
import { veterans } from "$lib/scripts/firebase";
import type { queryOption } from "$lib/types";

export async function GET({ request }) {
    try {
        let queryResults = query(veterans);

        // Determine if there are any queries.
        if (Array.isArray(request.body)) {
            const queries: queryOption[] = await request.json();

            // Filter the results based on the queries.
            queries.forEach((queryOption: queryOption) => {
                queryResults = query(
                    queryResults,
                    where(queryOption.field, queryOption.operator, queryOption.value)
                );
            });
        }

        const docs = await getDocs(queryResults);

        return json(
            docs.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
            { status: 500 }
        );
    } catch (error) {
        return json({ error: "Error fecthing veterans." }, { status: 500 });
    }
}
