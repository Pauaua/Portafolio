import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta a Paulina Acuña Paiva, técnica en programación y desarrolladora de software, para hablar sobre una posición, un proyecto o una colaboración.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contacto — Paulina Acuña Paiva",
    description:
      "Contacta a Paulina Acuña Paiva, técnica en programación y desarrolladora de software, para hablar sobre una posición, un proyecto o una colaboración.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
