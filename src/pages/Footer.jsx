import { Link } from "react-router-dom";


const Footer = () => {
    return (

        <footer class="bg-[#3e5ea396] text-white shadow dark:bg-gray-900 mt-12">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <div>
                        <h3 className="text-2xl">Food and <span className="text-cyan-400">Beverage</span></h3>
                    </div>
                    <ul class="flex flex-wrap items-center gap-10 mb-6 text-sm font-medium sm:mb-0 dark:text-gray-400">
                        <Link to="/">
                            <button>Home</button>
                        </Link>
                        <Link to="/product">
                            <button>Add Product</button>
                        </Link>
                        <Link to="/cart">
                            <button>My Cart</button>
                        </Link>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-s sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Food and Beverage</a>. All Rights Reserved.</span>
            </div>
        </footer>

    );
};

export default Footer;