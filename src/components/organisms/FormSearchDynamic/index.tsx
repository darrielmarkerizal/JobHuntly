import React, { FC } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AiOutlineSearch } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { LOCATION_OPTIONS } from "@/constants";
import { optionType } from "@/types";

interface FormSearchDynamicProps {}

const FormSearchDynamic: FC<FormSearchDynamicProps> = () => {
  return (
    <div className="mx-auto w-max">
      <div className="text-center bg-background p-4 shadow-md inline-flex items-center gap-4 relative w-max z-10">
        <div className="inline-flex gap-3 items-center">
          <AiOutlineSearch className="w-6 h-6" />
          <Input
            className="py-5  w-[350px] border-none"
            placeholder="Job Title or Keyword"
          />
        </div>
        <div className="inline-flex gap-3 items-center">
          <IoLocationOutline className="w-6 h-6" />
          <Select>
            <SelectTrigger className="w-[350px] border-none text-gray-300 outline-none py-5">
              <SelectValue placeholder="Select a location" />
            </SelectTrigger>
            <SelectContent>
              {LOCATION_OPTIONS.map((item: optionType, i: number) => (
                <SelectItem key={i} value={item.id}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Button>Search</Button>
        </div>
      </div>
      <div>
        <div className="text-muted-foreground mt-3">
          Popular : UI Designer, UX Designer, Android Developer
        </div>
      </div>
    </div>
  );
};

export default FormSearchDynamic;
