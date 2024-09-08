import Card from './Card.js'
function Items({items,remove_item,add_price}) {
    return (
        <div>
            <div className=" h-40 sm:h-20"></div>
            <div className="grid grid-cols-2  lg:grid-cols-4 gap-6">
            {
                items.map((item) => {
                    return <Card {...item} remove_item={remove_item} add_price={add_price}></Card>
                })
            }
        </div>

        </div>
        
    )
}
export default Items; 