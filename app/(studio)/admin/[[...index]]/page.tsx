"use client";

import config from "@/sanity.config";
import { NextStudio } from "next-sanity/studio";


export default function AdminPage(){

    return <NextStudio config={config} />

}

// const AdminPage = () => <NextStudio config={config} />;

// export default AdminPage;