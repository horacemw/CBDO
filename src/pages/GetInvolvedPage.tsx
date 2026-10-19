import { Handshake, Users, BookOpen, MessageCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { useSeo } from "@/lib/useSeo";

const pathways = [
  {
    icon: Handshake,
    title: "Partner with CBDOS",
    body: "Organisations working on human rights, governance or inclusive development are welcome to explore partnership opportunities.",
  },
  {
    icon: Users,
    title: "Participate in community initiatives",
    body: "Join community dialogues, workshops and shared learning spaces facilitated by member CBOs.",
  },
  {
    icon: BookOpen,
    title: "Collaborate on research or advocacy",
    body: "Share evidence, publications or policy briefs that could strengthen the coalition's collective work.",
  },
  {
    icon: MessageCircle,
    title: "Reach out to the Secretariat",
    body: "If none of the above fits exactly, write to us — we will try to point you to the right member or working group.",
  },
];

export function GetInvolvedPage() {
  useSeo({
    title: "Get Involved",
    path: "/get-involved",
    description:
      "How to partner, participate or collaborate with CBDOS and its member organisations.",
  });

  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", to: "/" }, { label: "Get Involved" }]}
      />
      <PageHero
        eyebrow="Get involved"
        title="Join a coalition working for community-led change."
        description="There are several ways to work with the coalition — as a partner, a participant, a volunteer or a collaborator on research and advocacy."
      />

      <section className="section bg-paper">
        <Container>
          <SectionHeading
            eyebrow="Ways to engage"
            title="Four pathways to work with us"
          />
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {pathways.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="border border-border rounded p-6 bg-paper"
              >
                <div className="h-10 w-10 rounded bg-brand-green-soft text-brand-green-dark inline-flex items-center justify-center">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section bg-paper-soft border-t border-border">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Send an enquiry"
                title="Write to the coalition"
                description="Tell us a little about yourself or your organisation and a member of the Secretariat will be in touch."
              />
            </div>
            <div className="lg:col-span-8">
              <div className="border border-border bg-paper rounded p-6 md:p-8">
                <EnquiryForm intent="get-involved" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
