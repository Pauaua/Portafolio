import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta a Paulina Acuña Paiva, desarrolladora Full Stack, para hablar sobre tu proyecto, colaboración o una posición full-time.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contacto — Paulina Acuña Paiva",
    description:
      "Contacta a Paulina Acuña Paiva, desarrolladora Full Stack, para hablar sobre tu proyecto o colaboración.",
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
