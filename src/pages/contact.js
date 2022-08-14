import Head from 'next/head';
import { Fragment } from 'react';
import ContactBreadcrumb from '../components/breadcrumb/contact';
import Contact from '../components/contact';
import Footer from '../components/layout/footer';
import Newsletter from '../components/newsletter/newsletter';
import { getAllItems } from '../lib/items-util';

function ContactPage(props) {
    return (
        <Fragment>
            <Head>
                <title>Contact - Oxybuild</title>
                <meta
                    name='description'
                    content='OxyBuild - Construction React Next JS Template Industry, Products Manufacturing Company, building companies, architecture firms, and the like can take to their advantage by using OxyBuild - Construction React Next JS Template.'
                />
            </Head>
            <ContactBreadcrumb ContactBreadcrumb={props.ContactBreadcrumb} />
            <Contact contactItems={props.contactItems} />
            <Newsletter newsletterItems={props.newsletterItems} />
            <Footer footerItems={props.footerItems} />
        </Fragment>
    );
}

export function getStaticProps() {
    const ContactBreadcrumb = getAllItems('contact-breadcrumb');
    const contactItems = getAllItems('contact');
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            ContactBreadcrumb,
            contactItems,
            newsletterItems,
            footerItems,
        },
    };
}

export default ContactPage;
