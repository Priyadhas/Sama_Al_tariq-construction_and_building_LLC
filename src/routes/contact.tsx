import { createFileRoute } from "@tanstack/react-router";
import { ContactCTA } from "../components/site/ContactCTA";
import { Footer } from "../components/site/Footer";
import { Nav } from "../components/site/Nav";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Sama Al Tariq" },
      {
        name: "description",
        content:
          "Contact Sama Al Tariq Building Contracting L.L.C. for interior fit-out, renovation and construction enquiries in Dubai.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="bg-black text-background">
      <Nav />
      <ContactCTA />
      <Footer />
    </main>
  );
}
