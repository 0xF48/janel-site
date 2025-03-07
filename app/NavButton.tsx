"use client";

import { ChevronsUpDownIcon } from "lucide-react";
import dynamic from "next/dynamic";
import React, { useEffect } from 'react'
import { useNav } from "./useNav";
import { createPortal } from 'react-dom'
import cn from 'classnames'
import { navOptions } from "./publicEnums";
import { useRouter } from "next/navigation";

// Import your component with ssr disabled
const MotionBox = dynamic(
	() => import("./MotionBox"),
	{ ssr: false }
);

export function NavButton() {
	const { currentOption } = useNav()
	const [isOpen, setIsOpen] = React.useState(false)
	const [resetKey, setResetKey] = React.useState('')
	const router = useRouter(); // Initialize the router
	const [selectedOption, setSelectedOption] = React.useState(currentOption)

	useEffect(() => {
		setSelectedOption(currentOption)
	}, [currentOption])

	function onClick() {
		setIsOpen(true)
	}

	useEffect(() => {
		window.addEventListener('resize', () => {
			setResetKey(Math.random().toString())
		})
	}, [])

	let content
	let position
	if (isOpen == false) {
		position = 'fixed top-10 w-[14em] h-12 right-20'
		content = <div
			onClick={onClick}
			className="w-full h-full flex items-center flex-row px-6 font-display font-black justify-between">
			{selectedOption.label}
			<ChevronsUpDownIcon size={24} />
		</div>
	} else {
		position = 'fixed top-5 right-20 w-[14em] h-[15em]'
		content = <div
			className="w-full h-full flex items-start flex-col font-display font-black">
			{navOptions.map((option, i) => {
				return <div onClick={() => {
					router.replace(option.href)
					setSelectedOption(option)
					setIsOpen(false)

				}}
					key={option.href}
					className={cn(option.href == selectedOption.href ? "text-white" : "text-main-300", "w-full h-12 flex items-center flex-row transition-colors px-6  hover:text-white")}>
					{option.label}
				</div>
			})}
		</div>
	}

	return <>
		{createPortal(<div onClick={() => { setIsOpen(false) }} className={cn("z-10 w-full h-full fixed transition-opacity duration-200 left-0 top-0 bg-main-800/90 backdrop-blur-xl", isOpen ? ' opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none')} ></div >, document.body)}
		<MotionBox
			resetKey={resetKey}
			relativeContentPosition={false}
			useAbsoluteOffset={false}
			classNames={{
				style: cn(isOpen ? 'bg-main-500' : 'bg-main-600', 'ring ring-4 ring-main-500 transition-colors rounded-2xl cursor-pointer z-40 hover:bg-main-500'),
				position: position
			}}>
			{content}
		</MotionBox >
	</>


}