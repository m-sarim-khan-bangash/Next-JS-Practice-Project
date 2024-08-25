import RepoDirs from "@/components/RepoDirs/RepoDirs";
import ReposeDetailView from "@/views/ReposView/ReposDetailView";
import React from "react";

export default function ReposeDetail({ params: { name } }) {
  console.log(name);
  return (
    <>
      <ReposeDetailView name={name} />
      <RepoDirs name={name} />
    </>
  );
}
