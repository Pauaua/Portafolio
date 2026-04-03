import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contacto — Paulina Acuña",
  description: "Envíame un mensaje para hablar sobre tu proyecto o colaboración.",
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
