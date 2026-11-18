import Cards from "../ui/Cards"
import OrdersOverview from "../ui/OrdersOverview"
import ProjectTable from "../ui/ProjectTable"
import Stats from "../ui/Stats"

const DashboardMain = () => {
  return (
    <main className='w-full min-w-0'>
       <Stats />
       <Cards />
       <section className='w-full mb-8 grid grid-cols-1
      xl:grid-cols-3 xl:items-stretch gap-5'>
        <div className="min-w-0 w-full xl:col-span-2">
          <ProjectTable />
        </div>
        <div className="min-w-0 w-full xl:col-span-1">
          <OrdersOverview />
        </div>
      </section>
    </main>
  )
}

export default DashboardMain