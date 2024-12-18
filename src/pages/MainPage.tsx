import {
  Header,
  MyServices,
  Portfolio,
  WorkHistory,
  Education,
  // UserChat,
  MySkills,
  DockPanel,
} from 'src/components'

export const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        <MyServices />
        <Portfolio sectionId='portfolio' />
        <MySkills sectionId='skills' />
        <WorkHistory sectionId='work-history' />
        <Education sectionId='education' />
      </main>
      <DockPanel />
      {/* <UserChat /> */}
    </>
  )
}
