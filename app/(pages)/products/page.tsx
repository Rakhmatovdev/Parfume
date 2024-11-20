import Products from "@/app/(pages)/products/_components/Products";
import { Suspense } from "react";
import Loading from "./loading";

function Page() {
    return (
        <Suspense fallback={<Loading/>}><Products/></Suspense>
    );
}

export default Page;