"use client";

import { ChevronsUpDownIcon } from "lucide-react";
import dynamic from "next/dynamic";
import React from 'react'
import { useNav } from "./useNav";

// Import your component with ssr disabled
const MotionBox = dynamic(
	() => import("./MotionBox"),
	{ ssr: false }
);

export function NavButton() {
	const { currentOption } = useNav()

	return <MotionBox
		relativeContentPosition={false}
		useAbsoluteOffset={false}
		classNames={{
			style: 'bg-main-500 rounded-2xl ',
			position: 'fixed top-16 right-[20em] w-[14em] h-12'
		}}>
		<div className="w-full h-full flex items-center flex-row px-4 font-gloock font-black justify-between">
			{currentOption.label}
			<ChevronsUpDownIcon size={24} />
		</div>
	</MotionBox>
}