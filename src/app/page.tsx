import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoDesign from "@/components/LogoDesign";
import BrandKit from "@/components/BrandKit";
import PackagingDesign from "@/components/PackagingDesign";
import MarketingMaterials from "@/components/MarketingMaterials";
import SocialMedia from "@/components/SocialMedia";
import MetaAds from "@/components/MetaAds";
import GoogleAds from "@/components/GoogleAds";
import ReelsShorts from "@/components/ReelsShorts";
import LocalSeo from "@/components/LocalSeo";
import PrBranding from "@/components/PrBranding";
import WebsiteDesign from "@/components/WebsiteDesign";
import PhotoVideo from "@/components/PhotoVideo";
import Platforms from "@/components/Platforms";
import Footer from "@/components/Footer";
import { ScissorsSVG } from "@/components/SvgDecorators";

function Divider({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className="flex items-center justify-center py-1 overflow-hidden"
      style={{ background: dark ? "#1a1f1c" : "#f5f0eb" }}
    >
      <ScissorsSVG className="w-28 opacity-50" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-cream min-h-screen">
      <Navbar />
      <Hero />
      <Divider />
      <LogoDesign />
      <Divider dark />
      <BrandKit />
      <Divider />
      <PackagingDesign />
      <Divider dark />
      <MarketingMaterials />
      <Divider />
      <SocialMedia />
      <Divider dark />
      <MetaAds />
      <Divider />
      <GoogleAds />
      <Divider dark />
      <ReelsShorts />
      <Divider />
      <LocalSeo />
      <Divider dark />
      <PrBranding />
      <Divider />
      <WebsiteDesign />
      <Divider dark />
      <PhotoVideo />
      <Divider />
      <Platforms />
      <Footer />
    </main>
  );
}
