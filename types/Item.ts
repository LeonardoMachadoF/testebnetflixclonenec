import { Results } from "./Results";

export type Item = {
    page: number;
    results: Results[];
    total_pages: number;
    total_results: number;
};
