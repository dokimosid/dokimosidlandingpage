import type { Metadata } from 'next'
import LegalLayout, { Section } from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'Privacy Policy — Dokimos ID',
  description:
    'How Dokimos ID, a product of Fortress Reclaimed LLC, collects, uses, and protects personal and biometric information.',
}

export default function Privacy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="June 27, 2026">
      <p className="font-body text-base text-ink/75 leading-relaxed">
        This Privacy Policy explains how Fortress Reclaimed LLC (&ldquo;Fortress Reclaimed,&rdquo;
        &ldquo;we,&rdquo; &ldquo;us&rdquo;) handles information in connection with Dokimos ID
        (the &ldquo;Service&rdquo;), our identity-verification product for remote hiring. By using
        the Service, you agree to the practices described here.
      </p>

      <Section heading="Information We Collect">
        <p>We collect the following categories of information:</p>
        <p>
          <strong className="text-ink font-semibold">Account information.</strong> Name, work email,
          company, role, and similar details provided by hiring teams who sign up.
        </p>
        <p>
          <strong className="text-ink font-semibold">Verification data.</strong> When a candidate
          completes a check, we process their government-issued ID document, a biometric selfie,
          liveness-detection results, and the resulting match and confidence scores.
        </p>
        <p>
          <strong className="text-ink font-semibold">Usage data.</strong> Log data, device and
          browser information, and timestamps generated when you interact with the Service.
        </p>
      </Section>

      <Section heading="How We Use Information">
        <p>
          We use information to operate the verification workflow, release gated interview links
          after a passing check, generate confidence-scored reports, secure the Service, provide
          support, and meet legal obligations. We do not sell personal or biometric information.
        </p>
      </Section>

      <Section heading="Biometric Data">
        <p>
          Biometric verification is performed only with the candidate&apos;s consent at the time of
          the check. Raw face templates and ID images are treated as transient artifacts: they are
          used to complete the match and are automatically deleted within 7 days. After deletion,
          only the verification outcome (pass/fail, confidence score, and timestamps) is retained
          for the hiring team&apos;s audit record.
        </p>
      </Section>

      <Section heading="How We Share Information">
        <p>
          We share verification outcomes with the hiring organization that initiated the check. We
          may share information with service providers (such as cloud-infrastructure and
          identity-verification processors) who act on our behalf under contractual confidentiality
          and security obligations, and where required by law or to protect our legal rights.
        </p>
      </Section>

      <Section heading="Data Security">
        <p>
          The Service is built with encryption (including AWS KMS), least-privilege access
          controls, and audit logging, on an architecture designed to align with SOC 2 principles.
          No method of transmission or storage is perfectly secure, but we work to protect your
          information using commercially reasonable safeguards.
        </p>
      </Section>

      <Section heading="Your Rights">
        <p>
          Depending on your jurisdiction, you may have the right to access, correct, or delete your
          personal information, or to object to certain processing. To exercise these rights,
          contact us at contact@dokimosid.com. We will respond consistent with applicable law,
          including U.S. state privacy and biometric-privacy statutes.
        </p>
      </Section>

      <Section heading="Data Retention">
        <p>
          Biometric artifacts are deleted within 7 days as described above. Account and audit
          records are retained for as long as an account is active and as needed to comply with
          our legal obligations, resolve disputes, and enforce our agreements.
        </p>
      </Section>

      <Section heading="Children">
        <p>
          The Service is intended for use by employers and adult job candidates. It is not directed
          to individuals under the age of 18, and we do not knowingly collect information from
          children.
        </p>
      </Section>

      <Section heading="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. When we do, we will revise the
          &ldquo;Last updated&rdquo; date above. Material changes will be communicated through the
          Service or by other reasonable means.
        </p>
      </Section>
    </LegalLayout>
  )
}
