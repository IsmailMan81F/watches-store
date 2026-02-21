
const Button = ({price}) => {
  return (
    <button className="text-black font-medium bg-white text-[22px] rounded-sm px-4.5 py-3">{`Add to cart - $${price}`}</button>
  )
}

export default Button