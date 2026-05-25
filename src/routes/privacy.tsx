import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Badgeborn" },
      { name: "description", content: "Badgeborn Privacy Policy — how we collect, use, and protect your personal information." },
      { property: "og:title", content: "Privacy Policy — Badgeborn" },
      { property: "og:description", content: "Badgeborn Privacy Policy — how we collect, use, and protect your personal information." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="border-b border-neutral-200">
        <div className="mx-auto max-w-3xl px-6 py-5">
          <Link to="/" className="text-sm font-medium tracking-[0.2em]">
            BADGEBORN<sup className="text-[8px] ml-0.5 align-super">™</sup>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12">
        <article className="prose-privacy">
          <h1>Privacy Policy</h1>
          <p><em>Last updated May 23, 2026</em></p>

          <p>
            This Privacy Notice for Yatrik Bodhe (doing business as <strong>Badgeborn</strong>) ('<strong>we</strong>', '<strong>us</strong>', or '<strong>our</strong>'), describes how and why we might access, collect, store, use, and/or share ('<strong>process</strong>') your personal information when you use our services ('<strong>Services</strong>'), including when you:
          </p>
          <ul>
            <li>Visit our website at <a href="https://badgeborn.com">https://badgeborn.com</a> or any website of ours that links to this Privacy Notice</li>
            <li>Use Badgeborn. Logo mascot marks created from photos</li>
            <li>Engage with us in other related ways, including any marketing or events</li>
          </ul>
          <p>
            <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:techbadgeborn@gmail.com">techbadgeborn@gmail.com</a>.
          </p>

          <h2>Summary of Key Points</h2>
          <p><em>This summary provides key points from our Privacy Notice. Please review the full Table of Contents below for more details.</em></p>
          <p><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.</p>
          <p><strong>Do we process any sensitive personal information?</strong> Some information may be considered 'special' or 'sensitive' in certain jurisdictions — for example, your racial or ethnic origins, sexual orientation, and religious beliefs. We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law.</p>
          <p><strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.</p>
          <p><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so.</p>
          <p><strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties. See Section 4 for details.</p>
          <p><strong>How do we keep your information safe?</strong> We have adequate organisational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.</p>
          <p><strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.</p>
          <p><strong>How do you exercise your rights?</strong> The easiest way is by submitting a data subject access request or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</p>

          <h2>Table of Contents</h2>
          <ol>
            <li>What information do we collect?</li>
            <li>How do we process your information?</li>
            <li>What legal bases do we rely on to process your personal information?</li>
            <li>When and with whom do we share your personal information?</li>
            <li>Do we offer artificial intelligence-based products?</li>
            <li>Is your information transferred internationally?</li>
            <li>How long do we keep your information?</li>
            <li>How do we keep your information safe?</li>
            <li>Do we collect information from minors?</li>
            <li>What are your privacy rights?</li>
            <li>Controls for do-not-track features</li>
            <li>Do United States residents have specific privacy rights?</li>
            <li>Do we make updates to this notice?</li>
            <li>How can you contact us about this notice?</li>
            <li>How can you review, update, or delete the data we collect from you?</li>
          </ol>

          <h2>1. What information do we collect?</h2>
          <h3>Personal information you disclose to us</h3>
          <p><em>In Short:</em> We collect personal information that you provide to us.</p>
          <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>
          <p><strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
          <ul><li>Names</li></ul>
          <p><strong>Sensitive Information.</strong> When necessary, with your consent or as otherwise permitted by applicable law, we process the following categories of sensitive information:</p>
          <ul><li>Biometric data</li></ul>
          <p><strong>Payment Data.</strong> We may collect data necessary to process your payment if you choose to make purchases, such as your payment instrument number and the security code associated with your payment instrument. All payment data is handled and stored by <strong>Dodo Payments</strong>. You may find their privacy notice here: <a href="https://dodopayments.com/legal/privacy-policy">https://dodopayments.com/legal/privacy-policy</a></p>
          <p>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>

          <h3>Information automatically collected</h3>
          <p><em>In Short:</em> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</p>
          <p>We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</p>
          <p>The information we collect includes:</p>
          <ul>
            <li><em>Log and Usage Data.</em> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports, and hardware settings).</li>
            <li><em>Device Data.</em> We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.</li>
          </ul>
          <h3>Google API</h3>
          <p>Our use of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements.</p>

          <h2>2. How do we process your information?</h2>
          <p><em>In Short:</em> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes only with your prior explicit consent.</p>
          <p>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</p>
          <ul>
            <li><strong>To deliver and facilitate delivery of services to the user.</strong> We may process your information to provide you with the requested service.</li>
            <li><strong>To respond to user inquiries/offer support to users.</strong> We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.</li>
            <li><strong>To fulfil and manage your orders.</strong> We may process your information to fulfil and manage your orders, payments, returns, and exchanges made through the Services.</li>
            <li><strong>To protect our Services.</strong> We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.</li>
            <li><strong>To save or protect an individual's vital interest.</strong> We may process your information when necessary to save or protect an individual's vital interest, such as to prevent harm.</li>
          </ul>

          <h2>3. What legal bases do we rely on to process your information?</h2>
          <p><em>In Short:</em> We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e. legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfil our contractual obligations, to protect your rights, or to fulfil our legitimate business interests.</p>
          <p><u>If you are located in the EU or UK, this section applies to you.</u></p>
          <p>The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:</p>
          <ul>
            <li><strong>Consent.</strong> We may process your information if you have given us permission (i.e. consent) to use your personal information for a specific purpose. You can withdraw your consent at any time.</li>
            <li><strong>Performance of a Contract.</strong> We may process your personal information when we believe it is necessary to fulfil our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.</li>
            <li><strong>Legitimate Interests.</strong> We may process your information when we believe it is reasonably necessary to achieve our legitimate business interests and those interests do not outweigh your interests and fundamental rights and freedoms. For example, we may process your personal information for some of the purposes described in order to:
              <ul><li>Diagnose problems and/or prevent fraudulent activities</li></ul>
            </li>
            <li><strong>Legal Obligations.</strong> We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.</li>
            <li><strong>Vital Interests.</strong> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.</li>
          </ul>
          <p><u>If you are located in Canada, this section applies to you.</u></p>
          <p>We may process your information if you have given us specific permission (i.e. express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e. implied consent). You can withdraw your consent at any time.</p>
          <p>In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:</p>
          <ul>
            <li>If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way</li>
            <li>For investigations and fraud detection and prevention</li>
            <li>For business transactions provided certain conditions are met</li>
            <li>If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim</li>
            <li>For identifying injured, ill, or deceased persons and communicating with next of kin</li>
            <li>If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse</li>
            <li>If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province</li>
            <li>If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records</li>
            <li>If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced</li>
            <li>If the collection is solely for journalistic, artistic, or literary purposes</li>
            <li>If the information is publicly available and is specified by the regulations</li>
            <li>We may disclose de-identified information for approved research or statistics projects, subject to ethics oversight and confidentiality commitments</li>
          </ul>

          <h2>4. When and with whom do we share your personal information?</h2>
          <p><u><em>In Short:</em></u> We may share information in specific situations described in this section and/or with the following third parties.</p>
          <p><strong>Vendors, Consultants, and Other Third-Party Service Providers.</strong> We may share your data with third-party vendors, service providers, contractors, or agents ('third parties') who perform services for us or on our behalf and require access to such information to do that work. We have contracts in place with our third parties, which are designed to help safeguard your personal information. This means that they cannot do anything with your personal information unless we have instructed them to do it. They will also not share your personal information with any organisation apart from us. They also commit to protect the data they hold on our behalf and to retain it for the period we instruct.</p>
          <p>The third parties we may share personal information with are as follows:</p>
          <ul>
            <li><strong>AI Service Providers:</strong> Google Cloud AI</li>
            <li><strong>Functionality and Infrastructure Optimisation:</strong> Railway</li>
            <li><strong>Invoice and Billing:</strong> Dodo Payments</li>
            <li><strong>Website Hosting:</strong> Lovable</li>
          </ul>
          <p>We also may need to share your personal information in the following situations:</p>
          <ul>
            <li><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
          </ul>

          <h2>5. Do we offer artificial intelligence-based products?</h2>
          <p><em>In Short:</em> We offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies.</p>
          <p>As part of our Services, we offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies (collectively, 'AI Products'). These tools are designed to enhance your experience and provide you with innovative solutions. The terms in this Privacy Notice govern your use of the AI Products within our Services.</p>
          <h3>Use of AI Technologies</h3>
          <p>We provide the AI Products through third-party service providers ('AI Service Providers'), including <strong>Google Cloud AI</strong>. As outlined in this Privacy Notice, your input, output, and personal information will be shared with and processed by these AI Service Providers to enable your use of our AI Products. You must not use the AI Products in any way that violates the terms or policies of any AI Service Provider.</p>
          <h3>Our AI Products</h3>
          <p>Our AI Products are designed for the following functions:</p>
          <ul><li>Image generation</li></ul>
          <h3>How We Process Your Data Using AI</h3>
          <p>All personal information processed using our AI Products is handled in line with our Privacy Notice and our agreement with third parties. This ensures high security and safeguards your personal information throughout the process.</p>
          <p><strong>How to Opt Out</strong></p>
          <p>We believe in giving you the power to decide how your data is used. To opt out, you can:</p>
          <ul><li>Contact us using the contact information provided</li></ul>

          <h2>6. Is your information transferred internationally?</h2>
          <p><em>In Short:</em> We may transfer, store, and process your information in countries other than your own.</p>
          <p>Our servers are located in the <strong>United States</strong>. Regardless of your location, please be aware that your information may be transferred to, stored by, and processed by us in our facilities and in the facilities of the third parties with whom we may share your personal information (see Section 4 above), including facilities in the United States, and other countries.</p>
          <p>If you are a resident in the European Economic Area (EEA), United Kingdom (UK), or Switzerland, then these countries may not necessarily have data protection laws or other similar laws as comprehensive as those in your country. However, we will take all necessary measures to protect your personal information in accordance with this Privacy Notice and applicable law.</p>
          <p><strong>European Commission's Standard Contractual Clauses:</strong></p>
          <p>We have implemented measures to protect your personal information, including by using the European Commission's Standard Contractual Clauses for transfers of personal information between our group companies and between us and our third-party providers. These clauses require all recipients to protect all personal information that they process originating from the EEA or UK in accordance with European data protection laws and regulations. Our Standard Contractual Clauses can be provided upon request. We have implemented similar appropriate safeguards with our third-party service providers and partners and further details can be provided upon request.</p>

          <h2>7. How long do we keep your information?</h2>
          <p><em>In Short:</em> We keep your information for as long as necessary to fulfil the purposes outlined in this Privacy Notice unless otherwise required by law.</p>
          <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than <strong>90 days</strong>.</p>
          <p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymise such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>

          <h2>8. How do we keep your information safe?</h2>
          <p><em>In Short:</em> We aim to protect your personal information through a system of organisational and technical security measures.</p>
          <p>We have implemented appropriate and reasonable technical and organisational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</p>

          <h2>9. Do we collect information from minors?</h2>
          <p><em>In Short:</em> We do not knowingly collect data from or market to children under 18 years of age or the equivalent age as specified by law in your jurisdiction.</p>
          <p>We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at <a href="mailto:techbadgeborn@gmail.com">techbadgeborn@gmail.com</a>.</p>

          <h2>10. What are your privacy rights?</h2>
          <p><em>In Short:</em> Depending on your state of residence in the US or in some regions, such as the European Economic Area (EEA), United Kingdom (UK), Switzerland, and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.</p>
          <p>In some regions (like the EEA, UK, Switzerland, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making. If a decision that produces legal or similarly significant effects is made solely by automated means, we will inform you, explain the main factors, and offer a simple way to request human review. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us using the contact details in Section 14 below.</p>
          <p>We will consider and act upon any request in accordance with applicable data protection laws.</p>
          <p>If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your Member State data protection authority or UK data protection authority.</p>
          <p>If you are located in Switzerland, you may contact the Federal Data Protection and Information Commissioner.</p>
          <p><strong><u>Withdrawing your consent:</u></strong></p>
          <p>If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us using the contact details provided in Section 14 below.</p>
          <p>However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</p>
          <p>If you have questions or comments about your privacy rights, you may email us at <a href="mailto:techbadgeborn@gmail.com">techbadgeborn@gmail.com</a>.</p>

          <h2>11. Controls for do-not-track features</h2>
          <p>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ('DNT') feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognising and implementing DNT signals has been finalised. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.</p>
          <p>California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an industry or legal standard for recognising or honouring DNT signals, we do not respond to them at this time.</p>

          <h2>12. Do United States residents have specific privacy rights?</h2>
          <p><em>In Short:</em> If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may have the right to request access to and receive details about the personal information we maintain about you and how we have processed it, correct inaccuracies, get a copy of, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law.</p>

          <h3>Categories of Personal Information We Collect</h3>
          <p>The table below shows the categories of personal information we have collected in the past twelve (12) months.</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="border border-neutral-300 p-2 text-left">Category</th>
                  <th className="border border-neutral-300 p-2 text-left">Examples</th>
                  <th className="border border-neutral-300 p-2 text-left">Collected</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-neutral-300 p-2">A. Identifiers</td><td className="border border-neutral-300 p-2">Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</td><td className="border border-neutral-300 p-2"><strong>YES</strong></td></tr>
                <tr><td className="border border-neutral-300 p-2">B. Personal information as defined in the California Customer Records statute</td><td className="border border-neutral-300 p-2">Name, contact information, education, employment, employment history, and financial information</td><td className="border border-neutral-300 p-2"><strong>YES</strong></td></tr>
                <tr><td className="border border-neutral-300 p-2">C. Protected classification characteristics under state or federal law</td><td className="border border-neutral-300 p-2">Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data</td><td className="border border-neutral-300 p-2"><strong>YES</strong></td></tr>
                <tr><td className="border border-neutral-300 p-2">D. Commercial information</td><td className="border border-neutral-300 p-2">Transaction information, purchase history, financial details, and payment information</td><td className="border border-neutral-300 p-2"><strong>NO</strong></td></tr>
                <tr><td className="border border-neutral-300 p-2">E. Biometric information</td><td className="border border-neutral-300 p-2">Fingerprints and voiceprints</td><td className="border border-neutral-300 p-2"><strong>YES</strong></td></tr>
                <tr><td className="border border-neutral-300 p-2">F. Internet or other similar network activity</td><td className="border border-neutral-300 p-2">Browsing history, search history, online behaviour, interest data, and interactions with our and other websites, applications, systems, and advertisements</td><td className="border border-neutral-300 p-2"><strong>NO</strong></td></tr>
                <tr><td className="border border-neutral-300 p-2">G. Geolocation data</td><td className="border border-neutral-300 p-2">Device location</td><td className="border border-neutral-300 p-2"><strong>NO</strong></td></tr>
                <tr><td className="border border-neutral-300 p-2">H. Audio, electronic, sensory, or similar information</td><td className="border border-neutral-300 p-2">Images and audio, video or call recordings created in connection with our business activities</td><td className="border border-neutral-300 p-2"><strong>YES</strong></td></tr>
                <tr><td className="border border-neutral-300 p-2">I. Professional or employment-related information</td><td className="border border-neutral-300 p-2">Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us</td><td className="border border-neutral-300 p-2"><strong>NO</strong></td></tr>
                <tr><td className="border border-neutral-300 p-2">J. Education information</td><td className="border border-neutral-300 p-2">Student records and directory information</td><td className="border border-neutral-300 p-2"><strong>NO</strong></td></tr>
                <tr><td className="border border-neutral-300 p-2">K. Inferences drawn from collected personal information</td><td className="border border-neutral-300 p-2">Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual's preferences and characteristics</td><td className="border border-neutral-300 p-2"><strong>NO</strong></td></tr>
                <tr><td className="border border-neutral-300 p-2">L. Sensitive personal information</td><td className="border border-neutral-300 p-2">Biometric data</td><td className="border border-neutral-300 p-2"><strong>YES</strong></td></tr>
              </tbody>
            </table>
          </div>
          <p>We only collect sensitive personal information, as defined by applicable privacy laws or the purposes allowed by law or with your consent. Sensitive personal information may be used, or disclosed to a service provider or contractor, for additional, specified purposes. You may have the right to limit the use or disclosure of your sensitive personal information. We do not collect or process sensitive personal information for the purpose of inferring characteristics about you.</p>
          <p>We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:</p>
          <ul>
            <li>Receiving help through our customer support channels</li>
            <li>Participation in customer surveys or contests</li>
            <li>Facilitation in the delivery of our Services and to respond to your inquiries</li>
          </ul>
          <p>We will use and retain the collected personal information as needed to provide the Services or for:</p>
          <ul>
            <li>Category A – 6 months</li>
            <li>Category B – 6 months</li>
            <li>Category C – 6 months</li>
            <li>Category E – 6 months</li>
            <li>Category H – 6 months</li>
            <li>Category L – 6 months</li>
          </ul>

          <h3>Sources of Personal Information</h3>
          <p>Learn more about the sources of personal information we collect in Section 1: What information do we collect?</p>

          <h3>How We Use and Share Personal Information</h3>
          <p>Learn more about how we use your personal information in Section 2: How do we process your information?</p>

          <h3>Will your information be shared with anyone else?</h3>
          <p>We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Learn more about how we disclose personal information in Section 4: When and with whom do we share your personal information?</p>
          <p>We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be 'selling' of your personal information.</p>
          <p>We have not sold or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. We have disclosed the following categories of personal information to third parties for a business or commercial purpose in the preceding twelve (12) months: Categories A, B, C, E, H, and L.</p>
          <p>The categories of third parties to whom we disclosed personal information for a business or commercial purpose can be found under Section 4: When and with whom do we share your personal information?</p>

          <h3>Your Rights</h3>
          <p>You have rights under certain US state data protection laws. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law. These rights include:</p>
          <ul>
            <li><strong>Right to know</strong> whether or not we are processing your personal data</li>
            <li><strong>Right to access</strong> your personal data</li>
            <li><strong>Right to correct</strong> inaccuracies in your personal data</li>
            <li><strong>Right to request</strong> the deletion of your personal data</li>
            <li><strong>Right to obtain a copy</strong> of the personal data you previously shared with us</li>
            <li><strong>Right to non-discrimination</strong> for exercising your rights</li>
            <li><strong>Right to opt out</strong> of the processing of your personal data if it is used for targeted advertising (or sharing as defined under California's privacy law), the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects ('profiling')</li>
          </ul>
          <p>Depending upon the state where you live, you may also have the following rights:</p>
          <ul>
            <li>Right to access the categories of personal data being processed (as permitted by applicable law, including the privacy law in Minnesota)</li>
            <li>Right to obtain a list of the categories of third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in California, Delaware, and Maryland)</li>
            <li>Right to obtain a list of specific third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in Minnesota and Oregon)</li>
            <li>Right to obtain a list of third parties to which we have sold personal data (as permitted by applicable law, including the privacy law in Connecticut)</li>
            <li>Right to review, understand, question, and depending on where you live, correct how personal data has been profiled (as permitted by applicable law, including the privacy law in Connecticut and Minnesota)</li>
            <li>Right to limit use and disclosure of sensitive personal data (as permitted by applicable law, including the privacy law in California)</li>
            <li>Right to opt out of the collection of sensitive data and personal data collected through the operation of a voice or facial recognition feature (as permitted by applicable law, including the privacy law in Florida)</li>
          </ul>

          <h3>How to Exercise Your Rights</h3>
          <p>To exercise these rights, you can contact us by submitting a data subject access request, by emailing us at <a href="mailto:techbadgeborn@gmail.com">techbadgeborn@gmail.com</a>, or by referring to the contact details at the bottom of this document.</p>
          <p>Under certain US state data protection laws, you can designate an authorised agent to make a request on your behalf. We may deny a request from an authorised agent that does not submit proof that they have been validly authorised to act on your behalf in accordance with applicable laws.</p>
          <p><strong>Request Verification.</strong> Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. We will only use personal information provided in your request to verify your identity or authority to make the request. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes.</p>
          <p>If you submit the request through an authorised agent, we may need to collect additional information to verify your identity before processing your request and the agent will need to provide a written and signed permission from you to submit such request on your behalf.</p>
          <p><strong>Appeals.</strong> Under certain US state data protection laws, if we decline to take action regarding your request, you may appeal our decision by emailing us at <a href="mailto:techbadgeborn@gmail.com">techbadgeborn@gmail.com</a>. We will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may submit a complaint to your state attorney general.</p>
          <p><strong>California 'Shine The Light' Law.</strong> California Civil Code Section 1798.83, also known as the 'Shine The Light' law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us by using the contact details provided in Section 14.</p>

          <h2>13. Do we make updates to this notice?</h2>
          <p><em>In Short:</em> Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>
          <p>We may update this Privacy Notice from time to time. The updated version will be indicated by an updated 'Revised' date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.</p>

          <h2>14. How can you contact us about this notice?</h2>
          <p>If you have questions or comments about this notice, you may email us at <a href="mailto:techbadgeborn@gmail.com">techbadgeborn@gmail.com</a> or contact us by post at:</p>
          <p>
            Yatrik Bodhe<br />
            Bellandur<br />
            Bengaluru, Karnataka 560103<br />
            India
          </p>

          <h2>15. How can you review, update, or delete the data we collect from you?</h2>
          <p>Based on the applicable laws of your country or state of residence in the US, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please fill out and submit a data subject access request.</p>
        </article>
      </main>
    </div>
  );
}
