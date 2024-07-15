import React from "react";
// import PeopleDataTable from "./data-table";
import { columns } from "./people/columns";
import { people } from "@/sample-data";
import PeopleDataTable from "./people/data-table";

type Props = {};

const People = (props: Props) => {
  return (
    <div className="container py-10 mx-auto">
      <PeopleDataTable columns={columns} data={people}></PeopleDataTable>
    </div>
  );
};

export default People;
