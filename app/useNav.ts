'use client';
import { usePathname } from "next/navigation"
import { navOptions } from "./publicEnums";



export function useNav() {
	const pathname = usePathname()

	const currentOption = navOptions.find(option =>
		pathname === option.href || pathname.startsWith(`${option.href}/`)
	) || {
		label: 'Not Found',
		href: '/404'
	}

	return {
		currentOption
	}
}