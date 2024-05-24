"use client"

import { useRouter } from "next/navigation"

const Students = () => {
    const router = useRouter();
  return (
    <div>pagina estudiantes</div>
  )
}

// export default Students


// const EntradaBlog = ({entrada}) => {
//     return(
//         <div>
//             <h1>Pagina estudiantes</h1>
//         </div>
//     )
// }

// export async function getServerSideProps({query: {students}}) {
//     const url = `/${locale}/wikiTango`
// }