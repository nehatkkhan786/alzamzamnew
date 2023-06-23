import React from 'react'
import { Link } from 'react-router-dom'

const OrderSuccess = () => {
  return (
    <div class="flex items-center justify-center p-14 w-full">
        <div class="bg-gray-100 p-8 rounded-lg shadow-md">
            <svg class="text-green-500 w-16 h-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <h1 class="text-2xl font-semibold text-gray-800 text-center mb-4">Success!</h1>
            <p class="text-gray-600 text-center mb-6">Your Quotation has been placed successfully.</p>
            <div class="flex justify-center">
        <Link to='/' class="inline-block bg-zamzam_bg hover:bg-zamzam_bg_hover text-white py-2 px-4 rounded-md transition-colors duration-300 ease-in-out">Continue Shopping </Link>
            </div>
        </div>
    </div>
  )
}

export default OrderSuccess