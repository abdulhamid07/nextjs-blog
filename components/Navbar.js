import Container from "@components/Container";
import { useState } from "react";
import Link from "next/link";
import Router from "next/router";

function Navbar({categories}) {
  const [dropDown, setDropdown] = useState(false);
  const [offCanvas, setOffCanvas] = useState(false)
  const [search, setSearch] = useState(false)
  const [keyword, setKeyword] = useState('')
  const menus = categories.data.map(category => ({name:category.attributes.name, href:`/category/${category.attributes.slug}` }))

  const onSubmitSearch = async (e) => {
    await setKeyword('')
    setSearch(false)
    e.preventDefault()
    let route = '/search'
    let query = {}
    
    if(keyword === ''){
      route = '/'
    }else{
      query={
        q:keyword
      }
    }
    await Router.push({
      pathname:route,
      query
    })
  }
  return (
    <nav className="py-10">
      <Container>
        
        {/* <div className="container mx-auto"> */}
          <div className="flex items-center">
            <div className="w-3/12 lg:hidden">
              <button onClick={()=>setOffCanvas(!offCanvas)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.4">
                  <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                </svg>
              </button>
            </div>
            <Link href='/' className="lg:w-2/12 w-6/12 flex items-center justify-center lg:justify-start">
              <div className="w-10 h-10 bg-stone-500 rounded flex items-center justify-center mr-4 shadow-2xl">S</div>
                  Stripblog
            </Link>
            <div className="w-3/12 lg:hidden text-right">
              <button onClick={()=>setSearch(!search)}>
                <svg className="inline-block" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.4">
                  <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 21L16.65 16.65" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                </svg>
              </button>
            </div>
            <div className={`lg:w-7/12 w-full bg-gradient-to-b from-stone-600 to-stone-900 lg:bg-none lg:static top-0 h-full lg:h-auto lg:p-0 fixed p-10 transition-all ${offCanvas ? 'left-0' : '-left-full'}`}>
              <button className="absolute top-10 right-10 lg:hidden" onClick={() => setOffCanvas(!offCanvas)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
              <ul className="lg:space-x-14 flex lg:items-center flex-col lg:flex-row space-y-4 lg:space-y-0">
                {menus.slice(0, 4).map((menu,i) => (
                <li key={i}><Link href={menu.href} className="hover:underline">{menu.name}</Link></li>
                ))}
                {menus.length > 4 && (
                <li className="relative">
                  <a className="hover:underline cursor-pointer flex items-center" onClick={() => setDropdown(!dropDown)}>
                    Lainnya
                    <svg className="ml-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 6L8 10L12 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                  </a>
                  {dropDown && (
                    <ul className="absolute w-[200px] bg-stone-800 rounded shadow-2xl mt-4">
                      {menus.slice(4).map((menu, i) => (
                        <li key={i} className="border-b border-white/5 last:border-0">
                          <Link href={menu.href} className="flex py-3 px-6 hover:bg-stone-700/60"> {menu.name} </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                )}
              </ul>
            </div>
            <div className={`lg:w-3/12 absolute w-full left-0 lg:static transition-all ${search ? 'top-10 px-10' : '-top-40'}`}>
              <button className="absolute top-4 right-14 lg:hidden" onClick={() => setSearch(!search)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
              <form onSubmit={onSubmitSearch}>
                <input 
                value={keyword}
                type="text" 
                className="bg-stone-700 py-4 px-6 w-full lg:rounded-full rounded-lg bg-search pl-12" 
                placeholder="Search..."
                onChange={(e) => setKeyword(e.target.value)}
                />
              </form>
            </div>
          </div>
        {/* </div> */}
      </Container>
    </nav>
  );
}
export default Navbar;