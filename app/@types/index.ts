import { type LucideIcon } from 'lucide-react'

export type NavItem = {
	to: string
	title: string
	icon: LucideIcon
	// variant?: 'basic' | 'ghost'
	label?: string
}
