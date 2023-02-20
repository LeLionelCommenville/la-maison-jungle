
function Cart() {
    const monsteraPrice = 8;
    const lierePrice = 10;
    const flowerBouquetPrice = 15;
    return (
      <div>
        <ul>
          <li> Monstera : { monsteraPrice } €</li>
          <li> Liere : { lierePrice } €</li>
          <li> Bouquet de fleure : { flowerBouquetPrice         } €</li>
        </ul>
        Total : { monsteraPrice +  lierePrice + flowerBouquetPrice } €
      </div>
    )
}

export default Cart