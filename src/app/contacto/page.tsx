import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactPage from "@/components/ContactPage";

export const metadata = {
  title: "Contacto | Sliderack",
  description: "Solicita información sobre los sistemas de almacenaje Sliderack. Nuestro equipo técnico te asesorará sin compromiso.",
};

export default function Contacto() {
  return (
    <>
      <Header />
      <Suspense>
        <ContactPage />
      </Suspense>
      <Footer hideCta />
    </>
  );
}
