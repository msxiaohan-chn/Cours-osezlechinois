import { NavBar } from '@/components/sections/NavBar';
import { AboutSection } from '@/components/sections/AboutSection';
import { CourseSection } from '@/components/sections/CourseSection';
import { MethodSection } from '@/components/sections/MethodSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { BookingSection } from '@/components/sections/BookingSection';
import { FooterSection } from '@/components/sections/FooterSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <AboutSection />
      <CourseSection />
      <MethodSection />
      <TestimonialsSection />
      <BookingSection />
      <FooterSection />
    </div>
  );
}
