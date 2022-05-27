import React from "react";

const ListOrder = () => {
    return (
        <div className="p-8 dark:border-neutral-700">
            <div className="mb-8 flex items-center gap-2">
                <div class="h-6 w-1 bg-cyan-500"></div>
                <span class="text-2xl font-semibold dark:text-neutral-300">
                    List Order
                </span>
            </div>
            <div className="relative overflow-auto rounded-xl">
                <table class="w-full table-auto text-left">
                    <thead class="dark:text-neutral-400">
                        <tr>
                            <th class="px-6 py-3">User Email</th>
                            <th class="px-6 py-3">Car</th>
                            <th class="px-6 py-3">Start Rent</th>
                            <th class="px-6 py-3">Finish Rent</th>
                            <th class="px-6 py-3">Price</th>
                            <th class="px-6 py-3">Status</th>
                        </tr>
                    </thead>
                    <tbody className="dark:text-neutral-500">
                        <tr>
                            <td class="px-6 py-3">naufal@email.com</td>
                            <td class="px-6 py-3">Car</td>
                            <td class="px-6 py-3">Start Rent</td>
                            <td class="px-6 py-3">Finish Rent</td>
                            <td class="px-6 py-3">Price</td>
                            <td class="px-6 py-3">Status</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListOrder;
