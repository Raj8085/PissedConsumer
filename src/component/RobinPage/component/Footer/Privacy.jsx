import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto p-4 md:p-6 md:px-20 bg-gray-100">
      <div className="grid gap-6 lg:grid-cols-[1fr,350px]">
        {/* Main Content */}
        <Card>
          <CardContent className="p-6">
            <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground mb-6">
              Last Modified: December 27, 2024
            </p>

            <div className="space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-4 md:ml-10">
                  Scope and Consent
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground md:px-10">
                  This Privacy Policy (the “Policy”) describes
                  PissedConsumer.com’s collection, use, and protection of the
                  information posters (“You”, “Your”) provide when using
                  PissedConsumer.com (the “Site”, “We”, “Us”, “Our”). By
                  creating an account on the Site, posting content on the Site,
                  or using any other service on the Site, You consent to Our
                  collection, use, and disclosure of Your information as
                  described in this Policy. If You do not consent to have Your
                  information used as described in this Policy, You must
                  discontinue use of the Site immediately. This Policy
                  incorporates all defined terms and conditions set forth in Our
                  Terms of Use Agreement (the “Agreement”). Any terms that are
                  not defined in this Policy shall have the meaning given in the
                  Agreement. This Policy is intended to explain Our privacy
                  practices and to inform You as to: Kinds of personally
                  identifiable information (&quot;Personal Information&quot;) We
                  collect from visitors of the Site. How Personal Information is
                  collected. How we use Personal Information. The circumstances
                  under which we disclose Personal Information to third parties.
                  How You can access, update or delete any Personal Information
                  collected about You by Us. The mechanisms We have implemented
                  to protect Your Personal Information. You can request the
                  deletion of all Your data (i.e. Your Personal Information)
                  from the Site by emailing Us at help@pissedconsumer.com or
                  privacy@pissedconsumer.com As We continue offering Our
                  visitors new and different types of content and services, this
                  Policy is subject to change at any time. However, We will
                  treat all Personal information We collect in accordance with
                  the Privacy Policy in effect at the time the information is
                  collected. Your continued use of the Site following the
                  posting of changes shall mean that You accept and agree to the
                  changes. The Information We Collect At PissedConsumer.com We
                  collect Personal Information during registration and review
                  submission processes. Visitors are required to be 14 years or
                  older to create a complaint. During the registration We
                  collect Your full name and Your valid e-mail address. When a
                  new complaint is created, We may collect additional
                  information, including, but not limited to Your full name,
                  e-mail address, mailing address, telephone number, gender,
                  date of birth, and certain computer information (see below).
                  We may also ask additional questions regarding Your experience
                  with the company You complain about and regarding Your
                  personal preferences on a number of topics. For certain
                  advanced services, We may also collect billing information
                  provided by PayPal. Additionally, when You come to our Site,
                  We automatically collect some non-personally identifiable
                  computer information (“Computer Information”), such as
                  information about Your computer operating system (e.g.,
                  Windows XP, Mac OS), Your IP address, information about Your
                  web browser (e.g., Internet Explorer, Google Chrome) being
                  used, information collected through the use of cookies (see
                  below) and information regarding Your Internet service
                  provider. This non-personally identifiable information may be
                  shared with third parties to provide more relevant services
                  and/or advertisements. Users’ IP addresses are recorded for
                  security and monitoring purposes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 md:ml-10">
                  The Information We Collect
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground md:px-10">
                  At PissedConsumer.com We collect Personal Information during
                  registration and review submission processes. Visitors are
                  required to be 14 years or older to create a complaint. During
                  the registration We collect Your full name and Your valid
                  e-mail address. When a new complaint is created, We may
                  collect additional information, including, but not limited to
                  Your full name, e-mail address, mailing address, telephone
                  number, gender, date of birth, and certain computer
                  information (see below). We may also ask additional questions
                  regarding Your experience with the company You complain about
                  and regarding Your personal preferences on a number of topics.
                  For certain advanced services, We may also collect billing
                  information provided by PayPal. Additionally, when You come to
                  our Site, We automatically collect some non-personally
                  identifiable computer information (“Computer Information”),
                  such as information about Your computer operating system
                  (e.g., Windows XP, Mac OS), Your IP address, information about
                  Your web browser (e.g., Internet Explorer, Google Chrome)
                  being used, information collected through the use of cookies
                  (see below) and information regarding Your Internet service
                  provider. This non-personally identifiable information may be
                  shared with third parties to provide more relevant services
                  and/or advertisements. Users’ IP addresses are recorded for
                  security and monitoring purposes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 md:ml-10">
                  How We Use the Information
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground md:px-10">
                  At PissedConsumer.com We collect Personal Information during
                  registration and review submission processes. Visitors are
                  required to be 14 years or older to create a complaint. During
                  the registration We collect Your full name and Your valid
                  e-mail address. When a new complaint is created, We may
                  collect additional information, including, but not limited to
                  Your full name, e-mail address, mailing address, telephone
                  number, gender, date of birth, and certain computer
                  information (see below). We may also ask additional questions
                  regarding Your experience with the company You complain about
                  and regarding Your personal preferences on a number of topics.
                  For certain advanced services, We may also collect billing
                  information provided by PayPal. Additionally, when You come to
                  our Site, We automatically collect some non-personally
                  identifiable computer information (“Computer Information”),
                  such as information about Your computer operating system
                  (e.g., Windows XP, Mac OS), Your IP address, information about
                  Your web browser (e.g., Internet Explorer, Google Chrome)
                  being used, information collected through the use of cookies
                  (see below) and information regarding Your Internet service
                  provider. This non-personally identifiable information may be
                  shared with third parties to provide more relevant services
                  and/or advertisements. Users’ IP addresses are recorded for
                  security and monitoring purposes. How We Use the Information
                  We use the content You provide to us including, but not
                  limited to Your reviews, Your comments, Your review updates,
                  information related to emails You send to companies via Our
                  Site, information related to calls You make to companies via
                  Our Site, information You provide Us when completing any of
                  Our surveys (the “Complaint Information”) for the purposes of
                  - including, but not limited to - further tracking of Your
                  complaints/issues, improving Your communication with
                  companies, our internal statistical purposes (including
                  research and development, rebuttals, etc.) and so forth. The
                  Complaint Information including pictures and sign-in names is
                  displayed to people in order to facilitate user interaction
                  and comments in the PissedConsumer.com community. We may also
                  share public information contained in a complaint with third
                  parties at Our own discretion. We will share a user&apos;s
                  e-mail address or other Personal Information with such third
                  parties (including, but not limited to journalists, reporters
                  and other media representatives) in the event We have been
                  expressly authorized by the user. Upon visitor&apos;s consent,
                  We may disclose visitor&apos;s information, including Personal
                  Information, to the companies participating in Our Business
                  Solutions Program. We do not sell Personal Information of Our
                  users. We may disclose information about Our visitors,
                  including Personal Information (e.g., e-mail address, phone
                  number), at the request of Third Party Neutrals (please see
                  Our Legitimacy Verification Program Rules and Conditions),
                  when legally required to do so, at the request of governmental
                  authorities conducting an investigation, to verify or enforce
                  compliance with the policies governing our Site and applicable
                  laws, or to protect against misuse or unauthorized use of the
                  Site. We may also disclose user information whenever We
                  believe disclosure is necessary to limit Our legal liability;
                  to protect or defend Our rights or property; or protect the
                  safety, rights, or property of Our visitors or others.
                  Information that You provided during the review submission
                  process for the company to contact You may be shared with
                  verified representative(s) of that company. We may use
                  visitors&apos; Personal Information for Our internal purposes
                  of enabling visitors to enter one of Our online contests or
                  sweepstakes, to subscribe to Our online newsletter or to
                  inform visitors of upcoming events and special announcements.
                  Each e-mail contains instructions on how to be removed from
                  the subscription list. We may use information about visitors,
                  such as age, gender and interests for improving Our reporting
                  on aggregate basis and for targeting service tailored to
                  specific visitors’ requirements. We also use it for market
                  analysis. We may use this information to provide visitors with
                  the most helpful products and services and to respond to
                  inquiries. We may store communication sent through the Site
                  and/or resulting from Your use of the Services and/or the Site
                  in any manner including, but not limited to use of any and all
                  communication features. We may access and analyze such
                  communications to improve the Services. In the event You do
                  not want Us to store or monitor Your communications, You must
                  refrain from using the Site and/or the Services. We also use
                  visitors&apos; Computer Information to track usage, improve
                  the design of the Site, offer products and services, to
                  personalize Our visitors’ experiences, save visitors’
                  passwords in password-protected areas, and to ensure visitors
                  are following the Site&apos;s Agreement. Additionally, in the
                  event that all or most of Opinion Corp.&apos;s stock and/or
                  assets are transferred or sold to another entity, Opinion
                  Corp. may transfer such information and information collected
                  to the acquiring entity.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 md:ml-10">
                  Contests and Sweepstakes
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground md:px-10">
                  PissedConsumer.com may occasionally offer contests and
                  sweepstakes, which may be entered online. All the information
                  collected by PissedConsumer.com is securely maintained and
                  used only for the purpose of conducting and fulfilment of the
                  contest or sweepstakes. Once the contest or sweepstakes are
                  finished, We reserve the right to remove any Personal
                  Information collected. The information collected through
                  PissedConsumer.com sweepstakes may be passed to a fulfilment
                  house which may use the information to help run the contest or
                  sweepstakes. Any such fulfilment house may not use the
                  information for any other purposes and must agree to maintain
                  the confidentiality of the information.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 md:ml-10">
                  Communications from the Site
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground md:px-10">
                  We may want to contact You with information about Our deals,
                  product announcements, software updates, new features and
                  special offers. You have the following choices to opt out of
                  future communications: - You can respond to the email you
                  received and request to be unsubscribed by including the word
                  &quot;unsubscribe&quot; in the subject and/or message body. -
                  You can unsubscribe at any time via the unsubscribe mechanism
                  at the bottom of each email. - If You want to unsubscribe from
                  SMS You received from Us, You can email Us at
                  help@pissedconsumer.com. Alternatively, You can unsubscribe
                  through Your account by logging in, going to the
                  “Notifications” section and making Your subscription
                  selections.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 md:ml-10">
                  Collection and Usage of Information – Third-Party Sites and
                  Affiliates
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground md:px-10">
                  Our Site contains links to other sites, including those of
                  affiliates, advertisers and survey companies. Visitors should
                  consult the other sites&apos; privacy policies, since our
                  Privacy Policy does not cover those sites. PissedConsumer.com
                  does not share visitors’ e-mail addresses or any other
                  Personal Information with such third parties.
                  PissedConsumer.com offers You a possibility to share Your
                  personal experience and/or opinions with Us via video
                  interview and while being recorded (please also see Our Terms
                  of Use, section “Information Supplied by You&quot;). Such
                  video interviews may be published on Our YouTube channel in
                  compliance with YouTube Terms of Service, Google Privacy
                  Policy and Google security setting guidelines. Please use the
                  following links to review privacy policies of Our major
                  advertisers and traffic analysis companies: Google Privacy and
                  Terms Google Security Setting Guidelines YouTube Terms of
                  Service CareOneCredit Shopzilla Media.netâÂÂÂÂÂÂ Please note
                  that You can visit the above entities’ websites to opt out of
                  the use of cookies for personalized advertising (if the vendor
                  or ad network offers this capability). Alternatively, you can
                  opt out of some third-party vendors’ uses of cookies for
                  personalized advertising by visiting www.aboutads.info. Google
                  uses cookies to help serve the ads it displays on the websites
                  of its partners, such as websites displaying Google ads or
                  participating in Google certified ad networks. When users
                  visit a Google partner&apos;s website, a cookie may be dropped
                  on that end user&apos;s browser. Third party vendors,
                  including Google, use cookies to serve ads based on Your prior
                  visits to the Site or other websites. Google&apos;s use of
                  advertising cookies enables it and its partners to serve ads
                  to You based on Your visits to the Site and/or other sites on
                  the Internet. You may opt out of personalized advertising by
                  visiting Your Ads Settings. If You sign up for some of Our
                  paid Services, We may obtain limited information about Your
                  payment card from Our payment processors. Currently, Our
                  payment processors are Stripe and PayPal. Stripe uses and
                  processes Your complete payment information in accordance with
                  Stripe’s Privacy Policy. PayPal uses and processes Your
                  complete payment information in accordance with PayPal’s
                  Privacy Statement. Please be informed that We do not store
                  Your credit card information on Our servers. The payment
                  processors are responsible for the storage of such information
                  in accordance with their policies and procedures. We may
                  occasionally use Clarity software technology to make video
                  recordings of some visitor sessions. We use it in strict
                  compliance with the manufacturer’s policies and
                  recommendations. We do not store any video recordings on our
                  servers. All of the recordings are stored by Clarity. We may
                  use session video recordings for our internal statistical
                  purposes, market analysis, for the purposes of web analytics,
                  and for the purposes of site improvement in accordance with
                  specific visitors’ requirements. We reserve the right to use
                  any other similar software technology(s) for similar purposes
                  at our own discretion.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold mb-4 md:ml-10">Cookies</h2>
                <p className="text-sm leading-relaxed text-muted-foreground md:px-10">
                  PissedConsumer.com uses a software technology called
                  &quot;cookies.&quot; Cookies are small text files that We and
                  certain third parties place in visitors&apos; computer
                  browsers to store their preferences. Cookies, by themselves,
                  do not tell Us Your e-mail address or other Personal
                  Information unless You choose to provide this information to
                  Us by, for example, registering at Our Site. However, once You
                  choose to furnish the Site with Personal Information, this
                  information may be linked to the data stored in the cookie. We
                  may also use small pieces of code called &quot;web
                  beacons&quot; or &quot;clear gifs&quot; to collect anonymous
                  and aggregate advertising metrics, including, but not limited
                  to counting page views, promotion views and advertising
                  responses. These &quot;web beacons&quot; may be used to
                  deliver cookies that conform to Our cookie policy. We use ads
                  provided by third-party advertisers to support the Site. Some
                  of these advertisers may use technology such as cookies and
                  web beacons when they advertise on Our Site, which will also
                  send these advertisers (such as Google through the Google
                  AdSense program) information including Your IP address, Your
                  ISP, the browser You used to visit Our Site, and in some
                  cases, whether You have Flash installed. This is generally
                  used for geotargeting purposes (showing New York real estate
                  ads to someone in New York, for example) or showing certain
                  ads based on specific sites visited (such as showing real
                  estate ads to someone who frequents realty sites). If you
                  would like to unsubscribe from the ads, please follow the
                  instructions here. You may adjust your browser to reject
                  cookies from Us or from any other website. Please consult the
                  &quot;Help&quot; section of Your browser for more information.
                  However, certain areas of Our Site can only be accessed in
                  conjunction with cookies or similar identifiers and You should
                  be aware that disabling cookies or similar identifiers might
                  prevent You from accessing some of Our content. In addition to
                  cookies, We also utilize MD5 hashing algorithms at the stages
                  of registration and complaint posting. In the event a user
                  decides to post a complaint on Our Site and chooses to provide
                  his/her e-mail address, such a user receives a thank-you
                  e-mail containing a link to the complaint. This link includes
                  a hash which, provided that a user follows it, ensures that
                  such a user has an option to log in and/or register
                  automatically by utilizing data stored on Our server from such
                  user’s initial visit. Thus, We make your experience of using
                  Our Site more convenient.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold mb-4 md:ml-10">
                  Session Video Recording
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground md:px-10">
                  PissedConsumer.com may occasionally use software technologies
                  called Webvisor and Hotjar to make video recordings of some
                  visitor sessions. We use them in strict compliance with the
                  manufacturers&apos; policies and recommendations
                  PissedConsumer.com does not store any video recordings on its
                  servers; all of the recordings are stored by Webvisor and
                  Hotjar. We may use session video recordings for Our internal
                  statistical purposes, market analysis, for the purposes of web
                  analytics, and for the purposes of the site improvement in
                  accordance with specific visitors’ requirements.
                  PissedConsumer.com reserves the right to use any other similar
                  software technology(s) for similar purposes at its own
                  discretion.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold mb-4 md:ml-10">
                  Making a Call to Customer Service
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground md:px-10">
                  PissedConsumer.com may occasionally use software technologies
                  called Webvisor and Hotjar to make video recordings of some
                  visitor sessions. We use them in strict compliance with the
                  manufacturers&apos; policies and recommendations
                  PissedConsumer.com does not store any video recordings on its
                  servers; all of the recordings are stored by Webvisor and
                  Hotjar. We may use session video recordings for Our internal
                  statistical purposes, market analysis, for the purposes of web
                  analytics, and for the purposes of the site improvement in
                  accordance with specific visitors’ requirements.
                  PissedConsumer.com reserves the right to use any other similar
                  software technology(s) for similar purposes at its own
                  discretion. Making a Call to Customer Service
                  PissedConsumer.com offers You a possibility to make a call to
                  a representative of a company of Your choice, provided that
                  such a company is present on the Site and that We have a
                  corresponding telephone number to make such a call. When
                  United States-based users make a call through Our platform,
                  the call will be recorded and transcribed for Your
                  convenience. This recording is temporary and is used solely to
                  produce a transcript, which will be accessible in Your account
                  for future reference. The audio recording will be deleted
                  after the transcript is generated. To operate this
                  functionality, We use a cloud communications platform called
                  Twilio and an artiï¬ÂÂcial intelligence company called
                  Deepgram. These are third-party tools, and We use them in
                  strict compliance with the Twilio Terms of Service, Twilio
                  Privacy Policy, Deepgram Terms of Service, Deepgram Privacy
                  Policy. You agree that by using this call feature, You accept
                  these third-party terms in addition to Our Terms of Use and
                  Our Privacy Policy. To use this functionality, You need to
                  have an account on the Site, so that information about Your
                  calls and the transcripts produced from those calls can be
                  stored in Your user proï¬ÂÂle for Your convenience and
                  possible further use. In preparing the transcript, We use an
                  artiï¬ÂÂcial intelligence tool which removes certain
                  personally identiï¬ÂÂable information (PII) from the
                  transcript for Your safety and security. We do not warrant or
                  guarantee that all such PII will be removed from the
                  transcript, and We advise against sharing credit card numbers,
                  social security numbers, or other sensitive ï¬ÂÂnancial or
                  medical data within calls made through Our service. The
                  transcript generated by this service will be sent to you by
                  email and will be stored in Your account. We may also access
                  the transcript for purposes related to analytics and service
                  improvement, but We will not publish individual user
                  transcripts without that user’s express permission. We may use
                  transcript data in an aggregated, anonymized form for
                  marketing purposes, and You voluntarily consent to such
                  disclosure. All personally identiï¬ÂÂable information (PII)
                  identiï¬ÂÂed in the call will be subject to Our data handling
                  and privacy practices as outlined in this Privacy Policy. You
                  must also note that an access to transcripts of calls is a
                  paid service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 md:ml-10">
                  Security
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground md:px-10">
                  We have adopted appropriate physical, electronic, and
                  managerial procedures to safeguard and help prevent
                  unauthorized access, maintain data security, and correctly use
                  the information We collect online. You recognize and
                  acknowledge that despite Our security measures, no data
                  transmission over the Internet can be guaranteed to be
                  completely secure, and no data is completely secure from an
                  unauthorized third-party access. To ensure Your protection and
                  safety when using the Site, We may remove certain types of
                  sensitive personal information from Our Site including, but
                  not limited to: social security numbers; bank account numbers;
                  credit card numbers; images of signatures; nude or sexually
                  explicit images that were uploaded or shared without Your
                  consent; confidential, personal medical records of private
                  people. Personal information We usually do not remove
                  includes, but is not limited to: dates of birth; addresses;
                  telephone numbers. We usually do not remove information that
                  can be found on official government websites and/or regular
                  websites because the information is publicly available.
                  Phishing: Phishing attacks attempt to steal consumers&apos;
                  personal identifiable information and financial accounts
                  credentials. &quot;Phishers&quot; use &apos;spoofed&apos;
                  e-mails leading consumers to counterfeit websites designed to
                  trick recipients into divulging Sensitive Personal Information
                  such as credit card numbers, account numbers, nicknames,
                  passwords, and social security numbers. WE DO NOT SEND EMAILS
                  ASKING YOU TO PROVIDE OR CONFIRM SENSITIVE PERSONAL
                  INFORMATION OR YOUR NICKNAME OR PASSWORD! If You receive such
                  email communications, please forward them immediately to Our
                  Privacy Administrator at privacy@pissedconsumer.com and then
                  immediately delete the fraudulent email from Your computer. If
                  You have any questions about Our privacy practices, please
                  e-mail or write to Us using the contact information provided
                  below. If You believe that Our Site has collected incorrect
                  information or if You would like to dispute any information,
                  please contact Us using the same address below. In order to
                  send Us a data access request, please email us at
                  help@pissedconsumer.com. Privacy Notice for California
                  Residents. If You are a California resident, You may have Our
                  Terms of Use and Privacy Policy emailed to You electronically
                  by sending a letter to Us including Your electronic mail
                  address or an email to the email address stated below and
                  requesting copies of these policies. Under California Civil
                  Code Section 1789.3, California website users are entitled to
                  the following specific consumer rights notice: The Complaint
                  Assistance Unit of the Division of Consumer Services of the
                  California Department of Consumer Affairs may be contacted in
                  writing at 1625 N. Market Blvd., Suite S-202, Sacramento,
                  California 95834, or by telephone at ‎(800) 952-5210. If You
                  want to send Us any inquiries related to the California
                  Consumer Privacy Act (CCPA) or the California Privacy Rights
                  Act (CPRA), please email Us at help@pissedconsumer.com,
                  privacy@pissedconsumer.com or contact Us via our mailing
                  address listed below.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold mb-4 md:ml-10">Email :  privacy@pissedconsumer.com</h2>
                <p className="text-sm leading-relaxed text-muted-foreground md:px-10">
                    <h1 className="text-xl font-bold mb-4">Address</h1>
                  Consumer Opinion LLC Media Relations 1930 Village Center
                  Circle #3-6853 Las Vegas, NV 89134
                </p>
              </section>
            </div>
          </CardContent>
        </Card>
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Featured Reviews */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Featured Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {featuredReviews.map((review, index) => (
                  <div key={index}>
                    <Link
                      to="#"
                      className="text-sm text-blue-600 hover:text-blue-800 hover:underline block"
                    >
                      {review}
                    </Link>
                    {index < featuredReviews.length - 1 && (
                      <Separator className="my-2" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Latest Reviews */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Latest Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {latestReviews.map((review, index) => (
                  <div key={index}>
                    <Link
                      href="#"
                      className="text-sm text-blue-600 hover:text-blue-800 hover:underline block"
                    >
                      {review}
                    </Link>
                    {index < latestReviews.length - 1 && (
                      <Separator className="my-2" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Hot Topics */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Hot Topics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {hotTopics.map((topic, index) => (
                  <div key={index}>
                    <Link
                      to="#"
                      className="text-sm text-blue-600 hover:text-blue-800 hover:underline block"
                    >
                      {topic.title}
                    </Link>
                    <p className="text-xs text-muted-foreground mt-1">
                      {topic.comments} comments
                    </p>
                    {index < hotTopics.length - 1 && (
                      <Separator className="my-2" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
// Sample data
const featuredReviews = [
  "First Choice Haircutters - Ruined my hair",
  "PetSmart - I want everyone to know about my experience",
  "Dawn Dish - A problem",
  "Wingstop - My food had a lot of grease",
  "Instamile - PAINFUL HORSE TEETH - 700 $ - WORST EXPERIENCE EVER !!",
];

const latestReviews = [
  "Temu - Didn't receive my order",
  "Aliexpress - Waiting for refund",
  "Shein Australia - Refund",
  "PUBG Mobile - 10 years ban",
  "Facebook - My account was disabled",
];

const hotTopics = [
  {
    title:
      "Popeyes Louisiana Kitchen - Demined active military discount again from sam manger and refusal to service afterwards",
    comments: 8,
  },
  {
    title:
      "Amazon - Closing my account and will never go back again! Scammers working for them as well!",
    comments: 8,
  },
  {
    title: "Geico sucks",
    comments: 7,
  },
  {
    title:
      "STK Steakhouse - Glass cut, uncooked meat, missing food we were charged for",
    comments: 6,
  },
];
