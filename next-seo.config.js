const title = 'Deekshya| school mis';
const description = 'School information management (MIS) and automation software for all school needs.';

const SEO = {
    title,
    description,
    canonical: 'https://deekshay.tricodetechnology.com.np',
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://deekshya.tricodetechnology.com.np',
        title,
        description,
        images: [
            {
                url: 'https:/deekshya.tricodetechnology.com.np/favicon/large-og.jpg',
                alt: title,
                width: 1200,
                height: 1200,
            },
        ],
    },
};

export default SEO;

// EXAMPLES
{
    /* 
    const title = 'Next.js Tailwind Starter';
    const description = 'your description';
    const url = 'https://theodorusclarence.com';

    <NextSeo
    title={title}
    description={description}
    canonical={url}
    openGraph={{
        url,
        title,
        description,
    }}
/>;  */
}
