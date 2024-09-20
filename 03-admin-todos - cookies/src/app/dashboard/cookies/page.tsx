import { TabBar } from '@/components'
import React from 'react'

import {cookies} from "next/headers"

export const metadata = {
  title: "Cookies pages",
  description:"SEO Title"
}


export  default function CookiesPage(){
  const cookiesStore = cookies()
  const tab = +(cookiesStore.get("selectedTab")?.value || 1)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div className='flex-col'>
        <span className='text-3xl'>Tabs</span>
        <TabBar currentTab={tab}/>
      </div>
    </div>
  )
}
