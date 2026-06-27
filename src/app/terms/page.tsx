import type { Metadata } from 'next'
import LegalLayout, { Section } from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'Terms of Service — Dokimos ID',
  description:
    'The terms governing use of Dokimos ID, a product of Fortress Reclaimed LLC.',
}

export default function Terms() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="June 27, 2026">
      <p className="font-body text-base text-ink/75 leading-relaxed">
        These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of Dokimos ID
        (the &ldquo;Service&rdquo;), provided by Fortress Reclaimed LLC (&ldquo;Fortress
        Reclaimed,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;). By accessing or using the Service,
        you agree to be bound by these Terms.
      </p>

      <Section heading="The Service">
        <p>
          Dokimos ID gates interview links behind real-time government-ID and biometric
          verification, and produces confidence-scored verification reports. The Service is
          currently offered on an early-access basis and may change as it develops.
        </p>
      </Section>

      <Section heading="Eligibility & Accounts">
        <p>
          You must be at least 18 years old and able to form a binding contract to use the Service.
          You are responsible for the accuracy of your account information and for all activity that
          occurs under your account, including keeping your credentials secure.
        </p>
      </Section>

      <Section heading="Customer Responsibilities">
        <p>
          If you use the Service to verify candidates, you are responsible for using it lawfully —
          including obtaining any required notices and consents from candidates before initiating a
          biometric check, and complying with applicable employment, privacy, and biometric-privacy
          laws in your jurisdiction.
        </p>
      </Section>

      <Section heading="Acceptable Use">
        <p>
          You agree not to misuse the Service, including by attempting to circumvent verification,
          interfering with its operation, reverse-engineering it, or using it to harass, discriminate
          against, or unlawfully screen individuals. We may suspend or terminate access for conduct
          that violates these Terms.
        </p>
      </Section>

      <Section heading="Fees">
        <p>
          Pricing for the Service is being finalized and will be communicated before any paid plan
          begins. Early-access participation does not create an obligation to purchase, and any fees,
          billing terms, and trial conditions will be set out at the time a paid plan is offered.
        </p>
      </Section>

      <Section heading="Intellectual Property">
        <p>
          The Service, including its software, design, and the Dokimos ID name and marks, is owned
          by Fortress Reclaimed LLC and protected by intellectual-property laws. These Terms do not
          grant you any rights in our intellectual property except the limited right to use the
          Service as permitted here.
        </p>
      </Section>

      <Section heading="Disclaimers">
        <p>
          The Service is provided &ldquo;as is&rdquo; and &ldquo;as available.&rdquo; Verification
          results are decision-support tools and do not constitute a guarantee of a candidate&apos;s
          identity, qualifications, or fitness for a role. To the fullest extent permitted by law, we
          disclaim all warranties, express or implied.
        </p>
      </Section>

      <Section heading="Limitation of Liability">
        <p>
          To the fullest extent permitted by law, Fortress Reclaimed LLC will not be liable for any
          indirect, incidental, special, consequential, or punitive damages, or for any loss of
          profits or data, arising out of or relating to your use of the Service.
        </p>
      </Section>

      <Section heading="Governing Law">
        <p>
          These Terms are governed by the laws of the State of Wyoming, without regard to its
          conflict-of-laws rules. Any disputes will be subject to the exclusive jurisdiction of the
          state and federal courts located in Wyoming.
        </p>
      </Section>

      <Section heading="Changes to These Terms">
        <p>
          We may update these Terms from time to time. When we do, we will revise the &ldquo;Last
          updated&rdquo; date above. Your continued use of the Service after changes take effect
          constitutes acceptance of the revised Terms.
        </p>
      </Section>
    </LegalLayout>
  )
}
