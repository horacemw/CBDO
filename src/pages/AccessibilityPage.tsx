import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { useSeo } from "@/lib/useSeo";

export function AccessibilityPage() {
  useSeo({
    title: "Accessibility Statement",
    path: "/accessibility",
    description:
      "The coalition's accessibility goals and channels for reporting barriers.",
  });

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Accessibility Statement" },
        ]}
      />
      <PageHero
        eyebrow="Accessibility Statement"
        title="Making this website usable for as many people as possible."
      />

      <section className="section bg-paper">
        <Container width="narrow">
          <article className="prose-article">
            <p>
              The CBDOS coalition is committed to making its website usable by
              as many people as possible, including people using assistive
              technologies.
            </p>

            <h2>Our goals</h2>
            <p>
              We aim to meet WCAG 2.2 Level AA practices in the design and
              implementation of this website.
            </p>

            <h2>What we have done</h2>
            <ul>
              <li>Used semantic HTML landmarks for navigation and main content.</li>
              <li>Provided a visible skip-to-content link.</li>
              <li>Ensured keyboard access through menus, forms and the image lightbox.</li>
              <li>Used meaningful alt text for informative images.</li>
              <li>Respected the user's reduced-motion preferences.</li>
              <li>Used sufficient colour contrast for text, buttons and links.</li>
              <li>Provided accessible form labels and error messages.</li>
            </ul>

            <h2>Known limitations</h2>
            <p>
              Some images are documentary-style placeholders that will be
              replaced by CBDOS photographs. Reviewing alt text for replaced
              images is an ongoing responsibility.
            </p>

            <h2>Reporting accessibility barriers</h2>
            <p>
              If you encounter an accessibility barrier on this website, we
              welcome your feedback. Once CBDOS has confirmed a public contact
              address, please use that address to report the barrier. In the
              meantime, you can also raise feedback through the Contact page.
            </p>
          </article>
        </Container>
      </section>
    </>
  );
}
