import Left from "@/components/Left"
import Middle from "@/components/Middle"
import Right from "@/components/Right"

const Homepage = () => {
  return (
    <main className="flex gap-2 p-2 w-full  max-w-[1300px] mx-auto">
  <section className="left sticky top-0 hidden xl:block w-[20%] h-fit ">
    <Left/>
  </section>
  <section className="w-full lg:w-[70%] xl:w-[50%]  ">
    <Middle userId="434"/>
  </section>
  <section className="right sticky top-0 hidden lg:block w-[30%] h-fit ">
    <Right userId="23r32"/>
  </section>
    </main>
  )
}

export default Homepage