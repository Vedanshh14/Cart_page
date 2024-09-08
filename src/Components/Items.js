import Card from './Card.js'
function Items({items,remove_item,add_price}) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
            {
                items.map((item) => {
                    return <Card {...item} remove_item={remove_item} add_price={add_price}></Card>
                })
            }
        </div>
    )
}
export default Items; 