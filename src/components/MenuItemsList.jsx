import { MENU_ITEMS_IMG_API } from "../utils/constants";

const MenuItemsList=({menuItems})=>{
    return (
    <div>
        {menuItems.map((item)=>(
            <div className="flex border-b-2 p-4 border-gray-300 justify-between" key={item.card.info.id}>
                <div className="p-2 w-9/12"> 
                  <p>{item.card.info.name}</p>
                  <p>₹{item.card.info.price / 100}</p>
                  <p className="font-normal text-gray-500 text-xs">{item.card.info.description}</p>
                </div>
                <div>
                    <div className="border border-gray-400 absolute w-28 bg-white rounded-md shadow-lg mx-5 py-1">
                        <button className="text-xs pb-1 font-bold" 
                            onClick={() => {}}>
                            ADD +
                        </button>
                    </div>
                    <img className="w-40 rounded-md"
                    src={MENU_ITEMS_IMG_API + item.card.info.imageId} />
                </div>
            </div>
        ))}
    </div>)
}

export default MenuItemsList;