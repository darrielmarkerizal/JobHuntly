import { Form } from "@/components/ui/form";
import { FC } from "react";
import CheckboxForms from "./CheckboxForms";
import { filterFormType } from "@/types";
import { Button } from "@/components/ui/button";

interface FormFilterDynamicProps {
    formFilter: any;
    onSubmitFilter: (val: any) => Promise<void>;
    filterForms: filterFormType[];
}

const items = [
    {
        id: "recents",
        label: "Recents",
    },
    {
        id: "home",
        label: "Home",
    },
    {
        id: "applications",
        label: "Applications",
    },
    {
        id: "desktop",
        label: "Desktop",
    },
    {
        id: "downloads",
        label: "Downloads",
    },
    {
        id: "documents",
        label: "Documents",
    },
] as const;

const FormFilterDynamic: FC<FormFilterDynamicProps> = ({
    filterForms,
    formFilter,
    onSubmitFilter,
}) => {
    return (
        <Form {...formFilter}>
            <form onSubmit={formFilter.handleSubmit(onSubmitFilter)}>
                {/* {filterForms &&
                    filterForms.map((item: filterFormType, i: number) => (
                        <CheckboxForms
                            key={i}
                            formFilter={formFilter}
                            items={item.items}
                            label={item.label}
                            name={item.name}
                        />
                    ))} */}

                <CheckboxForms
                    formFilter={formFilter}
                    items={items}
                    label="Categories"
                    name="categories"
                />

                <Button className="mt-5 w-full">Apply Filter</Button>
                <Button variant="outline" className="mt-3 w-full">
                    Reset Filter
                </Button>
            </form>
        </Form>
    );
};

export default FormFilterDynamic;
