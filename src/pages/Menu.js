import React, { useState } from 'react';
import Menulist from '../components/MenuList';
import Varefilters from '../components/VareFilters';

const Menu = () => {
    let[filterValue, filterUpdate] = useState('pizza')

        return (
            <div>
                <Varefilters filterUpdate={filterUpdate}/>
                <Menulist filter={filterValue}/>
            </div>
        );
}

export default Menu;