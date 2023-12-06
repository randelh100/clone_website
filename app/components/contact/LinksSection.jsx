'use client'
import DropdownLinkSection from "./DropdownLinkSection"
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

const LinksSection = () => {

  const [showVehicles, setShowVehicles] = useState(false);
  const [showShoppingTools, setShowShoppingTools] = useState(false);
  const [showDiscoverHonda, setShowDiscoverHonda] = useState(false);
  const [showHelpSupport, setShowHelpSupport] = useState(false);
  const [showOwners, setShowOwners] = useState(false);

  const vehiclesLinks = [
    { text: 'Civic Models', href: '' },
    { text: 'Accord Models', href: '' },
    { text: 'HR-V Crossover', href: '' },
    { text: 'CR-V Crossover', href: '' },
    { text: 'Passport SUV', href: '' },
    { text: 'Pilot SUV', href: '' },
    { text: 'Odyssey Minivan', href: '' },
    { text: 'Ridgeline Truck', href: '' },
    { text: 'Future Vehicles', href: '' },
    { text: 'Rugged Capability', href: '' },
    { text: 'Honda Certified Pre-Owned', href: '' },
    { text: 'All Vehicles', href: '' },
  ];

  const shoppingToolsLinks = [
    { text: 'Build & Price', href: '' },
    { text: 'See Offers', href: '' },
    { text: 'Search Inventory', href: '' },
    { text: 'Estimate Payments', href: '' },
    { text: 'Apply for Financing', href: '' },
    { text: 'Trade-in Value', href: '' },
    { text: 'Lease or Finance', href: '' },
  ];

  const discoverHondaLinks = [
    { text: 'About Us', href: '' },
    { text: 'News & Events', href: '' },
    { text: 'Awards, Accolades & Ratings', href: '' },
    { text: 'Investor Relations', href: '' },
    { text: 'Corporate Social Responsibility', href: '' },
    { text: 'Honda Financial Services', href: '' },
    { text: 'Honda in America', href: '' },
    { text: 'Honda Worldwide', href: '' },
    { text: 'Honda Merchandise & Apparel', href: '' },
  ];

  const helpSupportLinks = [
    { text: 'FAQ', href: '' },
    { text: 'Customer Service', href: '' },
    { text: 'Mobility Assistance Program', href: '' },
    { text: 'Rear Entertainment System Accessibility for individuals with Disabilities', href: '' },
    { text: 'Buyer\'s Guide', href: '' },
  ];

  const ownersLinks = [
    { text: 'Honda Owners Site', href: '' },
    { text: 'Schedule Service', href: '' },
    { text: 'Parts & Service', href: '' },
    { text: 'Certified Body Shop Locator', href: '' },
    { text: 'eStore', href: '' },
    { text: 'Roadside Assistance', href: '' },
    { text: 'Pay My Bill', href: '' },
    { text: 'Radio & Navi Codes', href: '' },
    { text: 'HondaLink', href: '' },
    { text: 'Wi-FI Hotspot Data Plans', href: '' },
    { text: 'Safety Recall', href: '' },
  ];


  return (
    <div className='flex justify-between mt-6 max-w-[115rem] mx-auto flex-col md:flex-row'>
      <DropdownLinkSection
        title={'Vehicles'}
        links={vehiclesLinks}
      />
      <DropdownLinkSection
        title={'Shopping Tools'}
        links={shoppingToolsLinks}
      />
      <DropdownLinkSection
        title={'Discover Honda'}
        links={discoverHondaLinks}
      />
      <DropdownLinkSection
        title={'Help & Support'}
        links={helpSupportLinks}
      />

      <DropdownLinkSection
        title={'Owners'}
        links={ownersLinks}
      />
    </div>
  )
}

export default LinksSection
