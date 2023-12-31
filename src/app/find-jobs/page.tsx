"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { formFilterSchema } from "@/lib/form-schema";
import ExploreDataContainer from "@/containers/ExploreDataContainer";
import { filterFormType } from "@/types";
import { CATEGORIES_OPTIONS } from "@/constants";

const FILTER_FORMS: filterFormType[] = [
    {
        name: "categories",
        label: "Categories",
        items: CATEGORIES_OPTIONS,
    },
];

export default function FindJobsPage() {
    const formFilter = useForm<z.infer<typeof formFilterSchema>>({
        resolver: zodResolver(formFilterSchema),
    });

    const onSubmitFormFilter = async (val: z.infer<typeof formFilterSchema>) =>
        console.log(val);

    return (
        <ExploreDataContainer
            formFilter={formFilter}
            onSubmitFilter={onSubmitFormFilter}
            filterForms={FILTER_FORMS}
        />
    );
}
