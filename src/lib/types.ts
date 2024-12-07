import type { WhereFilterOp } from "firebase/firestore";

export interface Veteran {
    id: string;
    birth: string;
    branch: string;
    city: string;
    county: string;
    death: string;
    death_location: string;
    images: string[];
    name: string;
    rank: string;
    wall_location: { line: string; panel: string };
}

export type queryOption = {
    field: string;
    operator: WhereFilterOp;
    value: string;
};
