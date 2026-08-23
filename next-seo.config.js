const title = 'Deekshya — School Management Software';
const description = 'All-in-one school information management system. Replace Excel with automated student records, HR, accounting, library, and cloud-based reporting. Built by TriCode Technology, Kathmandu.';

const SEO = {
    title,
    description,
    canonical: 'https://deekshya.tricodetechnology.com.np',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://deekshya.tricodetechnology.com.np',
        title,
        description,
        siteName: 'Deekshya by TriCode Technology',
        images: [
            {
                url: 'https://deekshya.tricodetechnology.com.np/favicon/ms-icon-310x310.png',
                alt: title,
                width: 310,
                height: 310,
            },
        ],
    },
    twitter: {
        cardType: 'summary_large_image',
        title,
        description,
    },
    additionalMetaTags: [
        { name: 'keywords', content: 'school management software Nepal, school MIS, student management, school ERP Nepal, Deekshya, TriCode Technology' },
        { name: 'author', content: 'TriCode Technology' },
    ],
};

export default SEO;
