import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollTopButton from "@/components/ScrollTopButton";
import SupplyCatalog from "@/components/SupplyCatalog";

export const metadata: Metadata = {
  title: "CCTV Supply — Hikvision & Dahua | DTech Solutions",
  description:
    "Browse Hikvision and Dahua CCTV cameras and DVRs we supply and install in Calamba City, Laguna. Message us for pricing and availability.",
};

export default function SupplyPage() {
  return (
    <>
      <Nav />
      <section id="supply-hero">
        <div className="sec-label">CCTV Supply</div>
        <h1 className="sec-title">
          Hikvision &amp; <span>Dahua Products</span>
        </h1>
        <p className="sec-sub">
          Cameras and recorders we regularly supply and install. Message us
          your model of interest for current pricing and availability.
        </p>
      </section>
      <SupplyCatalog />
      <Footer />
      <ScrollTopButton />
    </>
  );
}
