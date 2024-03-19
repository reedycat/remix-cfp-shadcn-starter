import {
	Blocks,
	FileDiff,
	Building2,
	Users2,
	CircleDollarSign,
	PocketKnife,
	FileKey,
	PackagePlus,
	BookmarkPlus,
	Contact,
	Database
} from 'lucide-react'
import { type NavItem } from '~/@types'

export const group_1: NavItem[] = [
	{
		to: 'databases',
		title: 'Databases',
		label: '0',
		icon: Database
	},
	{
		to: 'migrations',
		title: 'Migrations',
		icon: FileDiff
	}
]

export const group_2: NavItem[] = [
	{
		to: 'applications',
		title: 'Applications',
		label: '0',
		icon: Blocks
	},

	{
		to: 'features',
		title: 'Features',
		icon: PocketKnife
	},
	{
		to: 'quotas',
		title: 'Quotas',
		icon: PackagePlus
	},
	{
		to: 'permissions',
		title: 'Permissions',
		icon: FileKey
	}
]

export const group_3: NavItem[] = [
	{
		to: 'organizations',
		title: 'Organizations',
		label: '0',
		icon: Building2
	},
	{
		to: 'subscription-plans',
		title: 'Subscription Plans',
		icon: CircleDollarSign
	},
	{
		to: 'subscription-addons',
		title: 'Subscription Addons',
		icon: BookmarkPlus
	},
	{
		to: 'accounts',
		title: 'Accounts',
		label: '0',
		icon: Contact
	},
	{
		to: 'users',
		title: 'Users',
		label: '0',
		icon: Users2
	}
]

export const sidebarNavGroups = {
	group_1,
	group_2,
	group_3
}
