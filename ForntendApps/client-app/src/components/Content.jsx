import React from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
const Content = () => {
    const data = [
      { name: "John Doe", email: "johndoe@example.com" },
      { name: "Jane Doe", email: "janedoe@example.com" },
    ];
  
    return (
      <div className="p-grid p-nogutter p-justify-center">
        <div className="p-col-10">
          <Card>
            <h2>Search Users</h2>
            <div className="p-inputgroup">
              <InputText placeholder="Search by name or email" />
              <Button icon="pi pi-search" />
            </div>
          </Card>
          <Card>
            <h2>User List</h2>
            <DataTable value={data}>
              <Column field="name" header="Name" />
              <Column field="email" header="Email" />
            </DataTable>
          </Card>
        </div>
      </div>
    );
  };
  export default Content;