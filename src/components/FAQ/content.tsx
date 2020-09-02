import React, { ReactNode } from "react";

interface FagElement {
  category: string;
  faq: { question: string; answer: ReactNode; id?: string }[];
}

export const faqContent: FagElement[] = [
  {
    category: "General",
    faq: [
      {
        question: "What is WorldCerts?",
        answer: (
          <>
            WorldCerts is the umbrella trademark under which we have released a few key components: An open source
            schema for publishing educational credentials A set of tools for generating cryptographic protections for
            educational credentials This online website for verifying the authenticity of WorldCerts files.
          </>
        ),
      },
      {
        question: "Where do I get a WorldCerts certificate?",
        answer: (
          <>
            WorldCerts is an open source platform which education institutions can adopt for issuing certificates.
            Please contact your education institute’s administrative office for enquiries on whether your certificate
            was issued in the WorldCerts format.
          </>
        ),
      },
      {
        question: "Is my personal data safe on the blockchain?",
        answer:
          "Academic records of the certificate and personal data are not published on the blockchain. A hash is generated from the certificate and is used to prove that the certificate is legitimate. The process of computing the hash from the certificate is not reversible. Since the hash is the only information published into the blockchain, no personal information can be obtained from content on the blockchain.          ",
      },
      {
        question: "Why is WorldCerts backed by blockchain technology?",
        answer:
          "Using blockchain, we can greatly reduce the barrier to entry of publishing cryptographically protected educational credentials, as compared to currently existing costly proprietary software. In addition, a public blockchain is owned and maintained by the community and is easily accessible by anyone. As a result, there is no need to run or maintain services to verify WorldCerts.          ",
      },
      {
        question: "Why use the Ethereum blockchain?",
        answer:
          "Ethereum is the blockchain network with the largest developer base, as well as having a large number of participants securing the network.",
      },
      {
        question: "How do I send my WorldCerts certificate to someone?",
        answer:
          "You may use the share button that is visible when you view your certificate, or you can simply email the WorldCerts file to them.",
      },
      {
        question: "Why can't I print the certificate?",
        answer:
          "Printing the certificate discards all the advanced cryptographic protections we have built into WorldCerts, hence printed certificates are not to be considered authentic.",
      },
      {
        question: "What happens if I modify the WorldCerts file?",
        answer: "The modified certificate will fail validation and show up as having been tampered with.",
      },
      {
        question: "What does it mean by Signature?",
        answer: (
          <>
            In every properly issued WorldCerts certificate file, there is a hash-based message authentication code
            which cryptographically certifies that the content of the certificate has not been altered. If you would
            like to know more about the technical nitty-gritty of how this works, check out our technical documentation.
          </>
        ),
      },
    ],
  },

  {
    category: "Verifications",
    faq: [
      {
        question: "What does it mean by Unascertained Issuer?",
        answer:
          "WorldCerts has to maintain a list of identified issuing institutes in order to detect fraudulent issuing institutes masquerading as legitimate ones. At this point in time, it is not unlikely that a legitimate issuing institute is not on our list of recognised institutions. If you are sure that your certificate is from a legitimate issuer, contact the institute directly.",
      },
      {
        question: "What does it mean by Ethereum Blockchain?",
        answer:
          "The Ethereum Blockchain is a publicly usable distributed ledger based on blockchain technology. You can think of it as a publicly readable database.",
      },
      {
        question: "What does it mean by Revoked?",
        answer:
          "The issuer has explicitly published a notice of revocation for this certificate and it is no longer a valid certificate.",
      },
      {
        question: "Is this safe to use? Can't anyone just copy my certificate file and pass off as me?",
        answer:
          "Yes, the certificate file can trivially be duplicated. However, the recipient's name in the certificate cannot be altered without failing our verification process. Thus it is extremely important that the person doing the verification ensures that the recipient indicated in the certificate is actually the entity presenting the certificate. For more advanced institutions, there is the possibility of using Distributed IDs to associate the certificate recipient's public key for further authentication using public/private key signing in the future.",
      },
      {
        id: "verifications-issuers-not-in-registry-meaning",
        question:
          'What does it mean by "Certificate issuer is not in the World Certification Institute registry for Worldcerts"?',
        answer: (
          <ul>
            <li>
              If an institution is in the World Certification Institute registry for WorldCerts, it means that the
              identity of the institution has been established. This institution is an issuer of academic and skill
              certificates recognised by World Certification Institute.
            </li>
            <li>
              If an institution is NOT in the World Certification Institute registry for WorldCerts, we still verify the
              identity of the institution by domain name. Though the institution has not been verified by World
              Certification Institute, it may be possible that this is a legitimate institution. You may check by
              contacting them directly.
            </li>
          </ul>
        ),
      },
    ],
  },

  {
    category: "Institutes",
    faq: [
      {
        question: "How can I add my institute to the list of recognised issuers?",
        answer: <>Please see our documentation</>,
      },
      {
        question: "How can I change the appearance of the certificates I issue?",
        answer:
          'Each certificate can have a "template" field. This field identifies the template to be used for that certificate. Once you are a recognised issuer, you may submit a pull request at our GitHub repository to add your certificate template to the verification site.',
      },
    ],
  },
];
