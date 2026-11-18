import CarInformation from "../ui/CarInformation"
import PlatformSettings from "../ui/PlatformSettings"
import ProfileInformation from "../ui/ProfileInformation"
import ProfileNav from "../ui/ProfileNav"
import Projects from "../ui/Projects"
import WelcomeBack from "../ui/WelcomeBack"


const ProfileMain = () => {
  return (
    <main className='mt-6'>
      <ProfileNav />
      <section className="grid grid-cols-1 gap-4 my-5
        xl:grid-cols-[0.85fr_1.7fr_1.05fr] items-stretch">
          <WelcomeBack />
          <CarInformation />
          <ProfileInformation />
      </section>
      <section className="grid grid-cols-1 xl:grid-cols-[0.85fr_2.75fr]
      gap-4 items-stretch w-full">
          <PlatformSettings />
          <Projects />
      </section>
    </main>
  )
}

export default ProfileMain