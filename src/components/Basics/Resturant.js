import React,{ useState } from 'react';
import './style.css';
import Menu from './menuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList = [
  ...new Set(                                 // <--- "..." is an spred operator...
      Menu.map((curElem) =>{
      return curElem.category;
     })
    ),"All"
  ];
console.log(uniqueList);

const Resturant = () => {

      const [menuData, setMenuData] = useState(Menu);
      const [menuList, setMenuList]= useState(uniqueList);
      // console.log(menuData);

      const filterItem=(category)=>{

         if(category==="All"){
          setMenuData(Menu);
          return;
         }

        const updatedList = Menu.filter((curElem)=>{ 
        return curElem.category === category;
      });
          setMenuData(updatedList);
      };

  return (
    <>
    <Navbar filterItem={filterItem} menuList={uniqueList}/>
    <MenuCard menuData={menuData}/>
    </>
  );
};

export default Resturant;