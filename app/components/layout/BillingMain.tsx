import BillingCards from "../ui/BillingCards"
import BillingInformation from "../ui/BillingInformation"
import Invoices from "../ui/Invoices"
import Transactions from "../ui/Transactions"


const BillingMain = () => {
  return (
    <main className="space-y-6 w-full min-w-0">
      <section className="grid grid-cols-1 min-w-0
      xl:grid-cols-6 items-stretch gap-4 w-full">
        <div className="min-w-0 w-full xl:col-span-4">
          <BillingCards />
        </div>
        <div className="min-w-0 w-full xl:col-span-2">
          <Invoices />
        </div>
      </section>
      <section className="grid grid-cols-1
      xl:grid-cols-6 items-stretch gap-5 w-full">
        <div className="min-w-0 w-full xl:col-span-4">
          <BillingInformation />
        </div>
        <div className="min-w-0 w-full xl:col-span-2">
          <Transactions />
        </div>
      </section>
    </main>
  )
}

export default BillingMain