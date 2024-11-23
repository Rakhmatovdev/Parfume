import ProductDetails from "@/app/(pages)/products/_components/ProductDetails";
import SEO from "@/app/seo";

function Page() {
    return (
        <>
            <SEO title='Product detail: Nº'/>
            <ProductDetails/>
        </>
    );
}

export default Page;