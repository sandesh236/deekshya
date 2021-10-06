import { NextSeo } from 'next-seo';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FeaturesList from '@/components/FeaturesList';
import Consultation from '@/components/Consultation';
import HeroSection from '@/components/HeroSection';

export default function HomePage() {
    return (
        <>
            <NextSeo />
            <Nav />
            <main className="">
                <section className='bg-background relative '>
                   <HeroSection />
                </section>
                <section className='bg-background'>
                    <article className='relative py-24 pt-36 layout'>
                      
                        <div className='mt-12'>
                            <FeaturesList />
                            <Consultation />
                     

                        </div>
                    </article>
                </section>
            </main>
            <Footer />
        </>
    );
}
