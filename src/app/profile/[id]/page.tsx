import Left from "@/components/Left"
import Middle from "@/components/Middle"
import Right from "@/components/Right"
import prisma from "../../../../db"
interface Params{
 params:{
  id: String 
 }
}
const Homepage =async({params}:Params) => {
  const user = await prisma.user.findUnique({where: {id: params.id as string}, 
    include: {_count: 
      {select:{ 
        followers:true,
        following: true,
        posts: true
      }}}});
  console.log(user)
  return (
    <main className="flex gap-2 p-2 w-full  max-w-[1300px] mx-auto">
  <section className="left sticky top-0 hidden xl:block w-[20%] h-fit ">
    <Left/>
  </section>
  <section className="w-full lg:w-[70%] xl:w-[50%]  ">
    <Middle userId={params.id as string} user={user }/>
  </section>
  <section className="right sticky top-0 hidden lg:block w-[30%] h-fit ">
    <Right userId="23r32"/>
  </section>
    </main>
  )
}

export default Homepage