import React from "react";
import { Menubar } from "primereact/menubar";

const items = [
    {
      label: "File",
      items: [
        { label: "New", icon: "pi pi-fw pi-plus" },
        { label: "Open", icon: "pi pi-fw pi-folder-open" },
        { label: "Save", icon: "pi pi-fw pi-save" },
      ],
    },
    {
      label: "Edit",
      items: [
        { label: "Undo", icon: "pi pi-fw pi-undo" },
        { label: "Redo", icon: "pi pi-fw pi-redo" },
      ],
    },
  ];
const Header = () => {
    return (
      <Menubar model={items} />
    );
  };
  export default Header;