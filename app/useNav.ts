'use client';
import { usePathname } from "next/navigation"
import { navOptions } from "./publicEnums";

const NOT_FOUND = {
	label: 'Not Found',
	href: '/404'
}


export function useNav() {
	const pathname = usePathname()

	const currentOption = navOptions.find(option =>
		pathname === option.href || pathname.startsWith(`${option.href}/`)
	) || NOT_FOUND

	return {
		currentOption
	}
}