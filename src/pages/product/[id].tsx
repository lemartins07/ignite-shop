import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product";

export default function Product() {  
  
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,00</span>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolorem, necessitatibus cumque pariatur minus laboriosam tempore amet nesciunt iure architecto quia ex natus itaque voluptatem, quasi alias eligendi sapiente illum!</p>

        <button>Comprar Agora</button>
      </ProductDetails>
    </ProductContainer> 
  )
}