import React from "react";

function AboutPackage() {
    return (
        <div className="space-y-4 rounded-xl border border-neutral-200 p-4 shadow dark:border-neutral-700">
            <div className="font-bold">About Package</div>
            <div>
                <div className="font-medium">Includes</div>
                <ul className="list-outside list-disc pl-8">
                    <li>
                        Apa saja yang termasuk dalam paket misal durasi max 12
                        jam Sudah termasuk bensin selama 12 jam
                    </li>
                    <li>Sudah termasuk pajak</li>
                    <li>Sudah termasuk Tiket Wisata</li>
                    <li>Sudah termasuk pajak</li>
                </ul>
            </div>
            <div>
                <div className="font-medium">Excludes</div>
                <ul className="list-outside list-disc pl-8">
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>
                        Jika overtime lebih dari 12 jam akan ada tambahan biaya
                        Rp 20.000/jam
                    </li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
            </div>
            <div>
                <div className="font-medium">Misc</div>
                <ul className="list-outside list-disc pl-8">
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
