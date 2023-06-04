import {Link, useLocation} from "react-router-dom";

export default function AccountNav() {
  const {pathname} = useLocation();
  let subpage = pathname.split('/')?.[2];
  if (subpage === undefined) {
    subpage = 'profile';
  }
  function linkClasses (type=null) {
    let classes = " text-gray-800 font-medium text-sm px-2 lg:px-3 py-2 lg:py-2.5 focus:outline-none";
    if (type === subpage) {
      classes += ' border-b-2 border-gray-600';
    } else {
      // classes += ' bg-gray-200';
    }
    return classes;
  }
  return (
    <>
    <header>
      <nav className="p-4 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
              <div className="flex items-center lg:order-2">
                  <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                      <span className="sr-only">Open main menu</span>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                      <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </button>
              </div>
              <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                  <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-4 lg:mt-0">
                      <li>
                          <Link to={"/account"} className={linkClasses('profile')}>Tài khoản của tôi</Link>
                      </li>
                      <li>
                          <Link to={"/account/bookings"} className={linkClasses('bookings')}>Nhà thuê đã đặt</Link>
                      </li>
                      <li>
                          <Link to={"/account/places"} className={linkClasses('places')}>Nhà thuê của tôi</Link>
                      </li>
                      <li>
                          <Link to={"/account/contract"} className={linkClasses('contract')}>Hợp đồng của tôi</Link>
                      </li>
                      {/* <li>
                          <Link to={"/account"} className="text-gray-800 font-medium text-sm px-2 lg:px-3 py-2 lg:py-2.5 focus:outline-none" aria-current="page">Nhà thuê yêu thích</Link>
                      </li>
                      <li>
                          <Link to={"/account"} className="text-gray-800 font-medium text-sm px-2 lg:px-3 py-2 lg:py-2.5 focus:outline-none" aria-current="page">Chuyên viên yêu thích</Link>
                      </li> */}
                      <li>
                          <Link to={"/account/recharge"} className={linkClasses('recharge')} aria-current="page">Nạp tiền</Link>
                      </li>
                      {/* <li>
                          <Link to={"/account"} className="text-gray-800 font-medium text-sm px-2 lg:px-3 py-2 lg:py-2.5 focus:outline-none" aria-current="page">Thanh toán</Link>
                      </li> */}
                      {/* <li>
                          <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</a>
                      </li>
                      <li>
                          <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                      </li> */}
                  </ul>
              </div>
          </div>
      </nav>
    </header>
    <hr className="mb-4 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </>
  );
}