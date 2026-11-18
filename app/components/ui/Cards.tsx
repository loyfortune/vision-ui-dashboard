import ReferralTracking from "./ReferralTracking"
import SalesOverview from "./SalesOverview"
import SastisfactionRate from "./SastisfactionRate"
import UsersChart from "./UsersChart"
import WelcomeAddress from "./WelcomeAddress"

const Cards = () => {
  
  return (
    <section className="my-8">
        <section className='mb-7 grid grid-cols-1 gap-5
        items-stretch md:grid-cols-2 xl:grid-cols-12'>
          {/* Welcome back */}
          <div className='min-w-0 md:col-span-2 xl:col-span-5'>
            <WelcomeAddress />
          </div>
          {/* Satisfaction Rate */}
          <div className='min-w-0 md:col-span-1 xl:col-span-3'>
            <SastisfactionRate />
          </div>
          {/* Referral Tracking */}
          <div className='min-w-0 md:col-span-1 xl:col-span-4'>
            <ReferralTracking />
          </div>
        </section>
        <section className='grid grid-cols-1 items-stretch
        gap-5 xl:grid-cols-5 w-full'>
          {/* Sales Overview */}
          <div className='min-w-0 xl:col-span-3'>
            <SalesOverview />
          </div>
          {/* Active Users */}
          <div className='min-w-0 xl:col-span-2'>
            <UsersChart />
          </div>
        </section>
    </section>
  )
}

export default Cards