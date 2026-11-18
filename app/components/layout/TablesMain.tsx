import AuthorsTable from "../ui/AuthorsTable"
import ProjectTable from "../ui/ProjectTable"

const TablesMain = () => {
  return (
    <main className="space-y-6">
      <AuthorsTable />
      <ProjectTable />
    </main>
  )
}

export default TablesMain