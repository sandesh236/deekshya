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
            <main>
                <HeroSection />
                <FeaturesList />
                <Consultation />
            </main>
            <Footer />
        </>
    );
}
