import settings from "./settings"
import Head from 'next/head'
interface SEOProps {
    url?: string;
    type?: string;
    title?: string;
    description?: string;
    image?: string;
    keywords?: string;
    createdAt?: string;
    updatedAt?: string;
}

const socialTags = ({
                        url,
                        type,
                        title,
                        description,
                        image,
                        createdAt,
                        updatedAt,
                    }: SEOProps) => {
    const metaTags = [
        { name: "twitter:card", content: "summary_large_image" },
        {
            name: "twitter:site",
            content: settings?.meta?.social?.twitter || "",
        },
        { name: "twitter:title", content: title || "" },
        { name: "twitter:description", content: description || "" },
        {
            name: "twitter:creator",
            content: settings?.meta?.social?.twitter || "",
        },
        { name: "twitter:image:src", content: image || "" },
        { name: "og:title", content: title || "" },
        { name: "og:type", content: type || "website" },
        { name: "og:url", content: url || "" },
        { name: "og:image", content: image || "" },
        { name: "og:description", content: description || "" },
        {
            name: "og:site_name",
            content: settings?.meta?.title || "",
        },
        {
            name: "og:published_time",
            content: createdAt || new Date().toISOString(),
        },
        {
            name: "og:modified_time",
            content: updatedAt || new Date().toISOString(),
        },
    ];

    return metaTags;
};

const SEO = (props: SEOProps) => {
    const { title, description, image, keywords } = props;
    return (
        <Head>
            <title>{title ? `${title} | App` : "App"}</title>
            <meta name="description" content={description || ""} />
            <meta itemProp="name" content={title || ""} />
            <meta itemProp="description" content={description || ""} />
            <meta itemProp="image" content={image || ""} />
            <meta name="keywords" content={keywords || ""} />
            <link rel="icon" href="/favicon.ico" />
            {socialTags(props).map(({ name, content }) => (
                <meta key={name} name={name} content={content} />
            ))}
        </Head>
    );
};

SEO.defaultProps = {
    url: settings?.meta?.url,
    type: "website",
    title: settings?.meta?.title,
    description: settings?.meta?.description,
    image: settings?.meta?.social?.graphic,
    keywords: settings?.meta?.keywords,
};

export default SEO;