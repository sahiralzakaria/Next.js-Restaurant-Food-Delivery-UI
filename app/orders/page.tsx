import React from 'react'

const OrdersPage = () => {
    return (
        <div className="p-4 lg:px-20 xl:px-40">
            <table className="w-full border-separate border-spacing-3">
                <thead>
                    <tr className="text-left">
                        <th className="hidden md:block">Order ID</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th className="hidden md:block">Products</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-sm md:text-base bg-red-50">
                        <td className="hidden md:block py-6 px-1">9876543211123</td>
                        <td className="py-6 px-1">03.02.2024</td>
                        <td className="py-6 px-1">42.50</td>
                        <td className="hidden md:block py-6 px-1">Chicken Shawarma (1), Fries (1), Pepsi 330ml (1)</td>
                        <td className="py-6 px-1">Delivered</td>
                    </tr>

                    <tr className="text-sm md:text-base odd:bg-gray-100">
                        <td className="hidden md:block py-6 px-1">7654321987654</td>
                        <td className="py-6 px-1">28.01.2024</td>
                        <td className="py-6 px-1">120.00</td>
                        <td className="hidden md:block py-6 px-1">Family Pizza (1), Garlic Bread (2), Sprite 1L (1)</td>
                        <td className="py-6 px-1">On the way (approx. 15min)...</td>
                    </tr>

                    <tr className="text-sm md:text-base odd:bg-gray-100">
                        <td className="hidden md:block py-6 px-1">5544332211998</td>
                        <td className="py-6 px-1">17.01.2024</td>
                        <td className="py-6 px-1">67.30</td>
                        <td className="hidden md:block py-6 px-1">Sushi Box 12pcs (1), Miso Soup (1)</td>
                        <td className="py-6 px-1">Preparing...</td>
                    </tr>

                    <tr className="text-sm md:text-base odd:bg-gray-100">
                        <td className="hidden md:block py-6 px-1">3344556677889</td>
                        <td className="py-6 px-1">05.01.2024</td>
                        <td className="py-6 px-1">25.90</td>
                        <td className="hidden md:block py-6 px-1">Tuna Sandwich (1), Orange Juice (1)</td>
                        <td className="py-6 px-1">Cancelled</td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default OrdersPage