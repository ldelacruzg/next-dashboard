import { IoHeart } from "react-icons/io5"

export const FavoritePokemonsEmpty = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[50vh]">
      <IoHeart className="text-red-400" size={100} />
      <span>{"There aren't favorites"}</span>
    </div>
  )
}