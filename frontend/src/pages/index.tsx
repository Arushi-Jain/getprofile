import AboutSection from '@/components/partials/AboutSection';
import BlogSection from '@/components/partials/BlogSection';
import ContactSection from '@/components/partials/ContactSection';
import ExperienceSection from '@/components/partials/ExperienceSection';
import HeroSection from '@/components/partials/HeroSection';
import RecentWorkSection from '@/components/partials/RecentWorkSection';
import ServiceSection from '@/components/partials/ServiceSection';
import SkillSection from '@/components/partials/SkillSection';
import TestimonialSection from '@/components/partials/TestimonialSection';
import AppLayout from '@/layouts/AppLayout';
import type { NextPage } from 'next';
// import lodash from "lodash";

const Home: NextPage = () => {
  return (
    <AppLayout title="Home">
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ExperienceSection />
      <ServiceSection />
      <RecentWorkSection />
      <TestimonialSection />
      <BlogSection />
      <ContactSection />
    </AppLayout>
  );
};

export default Home;
