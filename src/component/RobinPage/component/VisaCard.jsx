export default function VisaCard() {
    return (
      <footer className="bg-neutral-100 px-4 py-8 md:py-12 text-4xl">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <div className="w-px h-6 bg-neutral-300" />
            <span className="font-medium">VISA Signature</span>
          </div>
  
          {/* Main Content */}
          <div className="space-y-6 text-xl leading-relaxed text-neutral-800">
            <p>
              Robinhood Gold Card is offered by Robinhood Credit, Inc., and is issued by Coastal Community Bank, pursuant to a license from Visa U.S.A. Inc. Robinhood Credit, Inc. (RCI) is a financial technology company, not a bank.
            </p>
  
            <p>
              Individual credit limits will vary by applicant and are subject to credit approval and underwriting. See if you&apos;re approved with no impact to your credit score. Your credit will not be impacted unless you decide to accept the card offer.
            </p>
  
            <ol className="list-decimal list-outside ml-4 space-y-4">
              <li>
                Authorized users receive a plastic card at no cost. If available, authorized users may upgrade to a stainless steel card for a fee. See Robinhood Credit Card App for details.
              </li>
              <li>
                See full rates and <a href="#" className="underline">fee details</a>. The Gold Card requires an annual Robinhood Gold subscription to apply and maintain the card and does not include a 30 day free trial. Robinhood Gold is offered through Robinhood Gold, LLC (RHG) and is a subscription offering premium services available for a fee. RCT and RHG are subsidiaries of Robinhood Markets, Inc. (Robinhood).
              </li>
              <li>
                Some limitations or conditions may apply. Must have Robinhood Financial brokerage account to redeem cash back. See <a href="#" className="underline">rewards program</a> terms for details. Rewards program terms are subject to change.
              </li>
              <li>
                See <a href="#" className="underline">Visa benefits terms</a> for details.
              </li>
            </ol>
  
            <p>
              <a href="#" className="underline">Coastal Privacy Policy</a>
            </p>
  
            <p className="uppercase text-xs">
              For Vermont Customers: THIS IS A LOAN SOLICITATION ONLY. ROBINHOOD CREDIT, INC. IS NOT THE LENDER. INFORMATION RECEIVED WILL BE SHARED WITH ONE OR MORE THIRD PARTIES IN CONNECTION WITH YOUR LOAN INQUIRY. THE LENDER MAY NOT BE SUBJECT TO ALL VERMONT LENDING LAWS. THE LENDER MAY BE SUBJECT TO FEDERAL LENDING LAWS.
            </p>
  
            <p>
              Robinhood, 85 Willow Road, Menlo Park, CA 94025.
            </p>
  
            <p className="text-xs">
              © 2024 Robinhood. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    )
  }
  
  