import Card from './Card.js'
function Items({ items }) {
    return (
        <div className="flex flex-row w-[100vw] justify-between">
            {
                items.map((item) => {
                    return <Card {...item}></Card>

                })

            }



        </div>
    )
}
export default Items; 