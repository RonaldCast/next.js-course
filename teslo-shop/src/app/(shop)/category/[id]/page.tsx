import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
// import { notFound } from "next/navigation";

interface Props {
  params: {
    id: Category
  }
}

const products = initialData.products;

export default function CategoryPage({params}:Props) {

  const { id } = params; 

  const productsFiltered =  products.filter((prod) => prod.gender === id)

  // if(id === 'kids') {
  //   notFound()
  // }

  const labels:Record<Category, string> = {
    'men':"para hombres",
    'women':"para mujeres",
    'kid':"para niños", 
    "unisex": "para todos"
  }

  return (
   <main>
      <Title
      title={`Artículos ${labels[id]}`}
      // subTitle={labels[id]}
      className="mb-2"
    />
    <ProductGrid products={productsFiltered}/>
   </main>
      
  );
}
