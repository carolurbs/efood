import Restaurant from '../Restaurant'
const RestaurantsList = () => (
  <div>
    <h2>Nome da Seção</h2>
    <ul>
      <Restaurant featured={true} />
      <Restaurant />
    </ul>
  </div>
)

export default RestaurantsList
