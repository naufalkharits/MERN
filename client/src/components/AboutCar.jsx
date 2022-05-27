import React from "react";

function AboutPackage(props) {
    return (
        <div className="AboutPackage space-y-8">
            <h1 className="font-bold">Tentang Paket</h1>
            <div className="">
                <h2>Include</h2>
                <ul className="list-disc pl-8">
                    <li>
                        Apa saja yang termasuk dalam paket misal durasi max 12
                        jam Sudah termasuk bensin selama 12 jam
                    </li>
                    <li>Sudah termasuk pajak</li>
                    <li>Sudah termasuk Tiket Wisata</li>
                    <li>Sudah termasuk pajak</li>
                </ul>
            </div>
            <div className="">
                <h2>Exclude</h2>
                <ul className="list-disc pl-8">
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>
                        Jika overtime lebih dari 12 jam akan ada tambahan biaya
                        Rp 20.000/jam
                    </li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
            </div>
            <div className="">
                <h1>Refund, Reschedule, Overtime</h1>
                <ul className="list-disc pl-8">
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>
                        Jika overtime lebih dari 12 jam akan ada tambahan biaya
                        Rp 20.000/jam
                    </li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>
                        Jika overtime lebih dari 12 jam akan ada tambahan biaya
                        Rp 20.000/jam
                    </li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>
                        Jika overtime lebih dari 12 jam akan ada tambahan biaya
                        Rp 20.000/jam
                    </li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
            </div>
        </div>
    );
}

export default AboutPackage;
