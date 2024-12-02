import Carousel from "./_components/Carousel";
import Hero from "./_components/Hero";
import Month from "./_components/Month";
import Products from "./_components/Products";
import Team from "./_components/Team";
import GoUpButton from "./_components/GoUpButton";
import Contact from "./_components/Contact";
import Copyright from "./_components/Copyright";
import Email from "./_components/Email";

export default function Home() {
  return (
    <main className="min-h-screen h-auto">
      <GoUpButton/>
      <Carousel/>
      <Hero/>
      <Products/>
      <Month/>
      <Team/>
      <Email/>
      <Contact/>
      <Copyright/>
    </main>
  );
}
