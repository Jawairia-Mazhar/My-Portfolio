import React from 'react'

const shadowMap = {
  red: "shadow-red-500 text-red-500 hover:border-red-500",
  blue: "shadow-blue-500 text-blue-500 hover:border-blue-500",
  yellow: "shadow-yellow-500 text-yellow-500 hover:border-yellow-500",
  cyan: "shadow-cyan-500 text-cyan-500 hover:border-cyan-500",
  teal: "shadow-teal-500 text-teal-500 hover:border-teal-500",
  black: "shadow-black text-black hover:border-black",
  gray: "shadow-gray-500 text-gray-500 hover:border-gray-500",
}

const SkillCard = ({ name, logo, color }) => {
  const classes = shadowMap[color] || "shadow-gray-500 text-gray-500 hover:border-gray-500"

  return (
    <div
      className={`w-35 h-38 p-5 rounded-md cursor-pointer border border-transparent hover:shadow-xl hover:scale-105 transition duration-300 ${classes}`}>
      <img src={logo} className="w-25 h-25 mx-auto mb-2" alt={name} />
      <span className={`block text-center ${classes.split(" ")[1]}`}>{name}</span>
    </div>
  )
}

export default SkillCard;
