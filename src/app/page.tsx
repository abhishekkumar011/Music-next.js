import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import MusicSchoolTestimonials from "@/components/TestimonialsCards";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="min-h-screen bg-black/[0.96] antialiased">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicSchoolTestimonials />
    </div>
  );
}
