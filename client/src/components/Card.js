export default function ApartmentCard({children}) {
    return (
        <section className="relative py-8 bg-gray-100">
            <div className="container max-w-7xl px-4 mx-auto">
                <div className="relative flex flex-col min-w-0 bg-white w-full mb-6 shadow-xl rounded-2xl my-4">
                    <div className="px-6">
                        <div className=" place-content-center my-8">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
