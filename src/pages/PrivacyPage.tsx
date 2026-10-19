import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { useSeo } from "@/lib/useSeo";

export function PrivacyPage() {
  useSeo({
    title: "Privacy Policy",
    path: "/privacy",
    description:
      "How CBDOS handles information submitted through this website. Draft policy — subject to organisational review.",
  });

  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", to: "/" }, { label: "Privacy Policy" }]}
      />
      <PageHero
        eyebrow="Privacy Policy"
        title="How we handle information submitted through this website."
      />

      <section className="section bg-paper">
        <Container width="narrow">
          <article className="prose-article">
            <p>
              CBDOS is committed to handling the information people share with
              us carefully, in line with the trust communities place in
              coalition members.
            </p>

            <h2>What we collect through this website</h2>
            <p>
              The website collects only the information that users voluntarily
              submit through the enquiry forms, such as a name, email address,
              organisation (optional), area of interest and message content.
              We do not use third-party advertising or behavioural tracking.
            </p>

            <h2>How we use this information</h2>
            <ul>
              <li>To respond to the enquiry submitted.</li>
              <li>To route the enquiry to the appropriate member or working group.</li>
              <li>To improve how the Secretariat supports enquirers.</li>
            </ul>
            <p>
              We do not sell, rent or share enquiry information with third
              parties for marketing purposes.
            </p>

            <h2>Retention</h2>
            <p>
              Enquiry information is kept only as long as needed to respond
              and to follow up where appropriate. Specific retention periods
              will be set by CBDOS once the website is connected to a secure
              backend.
            </p>

            <h2>Security</h2>
            <p>
              Formal security safeguards depend on the hosting and backend
              configuration that CBDOS confirms before launch. This frontend
              implementation does not transmit sensitive information to any
              third party in its current demonstration form.
            </p>

            <h2>Sensitive matters</h2>
            <p>
              This website is not a secure channel for confidential
              case reporting. For sensitive human-rights concerns, please
              use an in-person referral through a trusted community
              organisation or legal aid provider.
            </p>

            <h2>Third-party services</h2>
            <p>
              The website currently uses externally hosted fonts and
              placeholder images. CBDOS should confirm whether any third-party
              analytics or form providers are used before launch, and update
              this policy accordingly.
            </p>

            <h2>Contact for privacy questions</h2>
            <p>
              Privacy questions should be directed to the CBOs Coalition
              Secretariat using the contact details on the Contact page.
            </p>
          </article>
        </Container>
      </section>
    </>
  );
}
