import Card from './Card.js'
function Items({items,remove_item,add_price}) {
    return (
        <div className="flex flex-row w-[100vw] justify-between">
            {
                items.map((item) => {
                    return <Card {...item} remove_item={remove_item} add_price={add_price}></Card>

                })

            }



        </div>
    )
}
export default Items; 