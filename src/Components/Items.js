import Card from './Card.js'
function Items({items,remove_item}) {
    return (
        <div className="flex flex-row w-[100vw] justify-between">
            {
                items.map((item) => {
                    return <Card {...item} remove_item={remove_item}></Card>

                })

            }



        </div>
    )
}
export default Items; 