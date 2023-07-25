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
                  src="https://th.bing.com/th/id/R.8fc12bd56ccf17a9f829456e5e1b51be?rik=4SocZT8SsfjXlQ&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2falecive%2fflatwoken%2f512%2fApps-Logo-Old-icon.png&ehk=cZaeH%2f80yv7E37njzdDLifhsM58ZE4BNR6fCFToVQyI%3d&risl=&pid=ImgRaw&r=0"
                  alt="Company"
                />
                <img
                  className="hidden h-8 w-auto lg:block"
                  src="https://th.bing.com/th/id/R.8fc12bd56ccf17a9f829456e5e1b51be?rik=4SocZT8SsfjXlQ&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2falecive%2fflatwoken%2f512%2fApps-Logo-Old-icon.png&ehk=cZaeH%2f80yv7E37njzdDLifhsM58ZE4BNR6fCFToVQyI%3d&risl=&pid=ImgRaw&r=0"
                  alt="Company"
                />
                <h2 className="pl-3">Flashcard Creator</h2>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
   
  );
}
export default Navbar;
