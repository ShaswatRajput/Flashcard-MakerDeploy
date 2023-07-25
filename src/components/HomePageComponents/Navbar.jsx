const Navbar=()=> {
  return (
    
        <nav className=" bg-white" >
      <div className="container">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="block h-8 w-auto lg:hidden"
                  src="https://th.bing.com/th/id/R.990534e4476918da8d687acc60000392?rik=GrcoIqPQaAdRPw&riu=http%3a%2f%2fonlinehackz.com%2fapi%2ficon%2f5d825a7ecd95fd7126ea0eb1&ehk=u1dhAFABwP3MHhUg%2fGPdXUHoBIkGc8aOipC3dJQ0gIs%3d&risl=&pid=ImgRaw&r=0"
                  alt="AlmaCompany"
                />
                <img
                  className="hidden h-8 w-auto lg:block"
                  src="https://th.bing.com/th/id/R.990534e4476918da8d687acc60000392?rik=GrcoIqPQaAdRPw&riu=http%3a%2f%2fonlinehackz.com%2fapi%2ficon%2f5d825a7ecd95fd7126ea0eb1&ehk=u1dhAFABwP3MHhUg%2fGPdXUHoBIkGc8aOipC3dJQ0gIs%3d&risl=&pid=ImgRaw&r=0"
                  alt="AlmaCompany"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
      
   
  );
}
export default Navbar;
