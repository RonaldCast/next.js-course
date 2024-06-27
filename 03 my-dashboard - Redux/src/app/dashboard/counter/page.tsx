import { CartCounter } from "@/shopping-cart";



export const metadata = {
    title:"Shopping Cart "
}

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el Carrito</span>
      <CartCounter value={20}/>
    </div>
  );
}
