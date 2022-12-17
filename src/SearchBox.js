import React, { useState} from 'react'
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import { data } from './dummy';

const SearchBox = ({setSingleLocation}) => {
    const [searchText, setSearchText] = useState("");
    const [selectedData,setSelectedData] = useState([]);
    
    const handleSearch = () =>{
        const filterData = data.filter((item) => {
            return item['District*'].toLowerCase() === searchText.toLowerCase();
        })
        setSelectedData(filterData);
        
    }

  return (
    <div style={{display:'flex', flexDirection:'column'}}>
        <div style={{display:'flex'}}>
            <div style={{flex:1}}>
                <OutlinedInput 
                    placeholder='Search hospitals in any district'
                    autoFocus
                    style={{width:'100%'}}
                    value={searchText}
                    onChange={(event) => setSearchText(event.target.value)}
                />
            </div>
            <div>
                <Button 
                    variant="contained" 
                    style={{ padding:'15px 12px'}} 
                    onClick={handleSearch}
                >Search</Button>
            </div>
        </div>

        <div style={{height:'90vh', overflow:'scroll' }}>
            <List>
            {
                selectedData.map((item,index) => {
                    return (
                        <div key={index}>
                            <ListItem disablePadding>
                                <ListItemButton onClick={() =>{setSingleLocation(item)}}>
                                    <ListItemIcon>
                                        <img src='./placeholder.png' alt='placeholder' style={{height:38,width:38}}></img>
                                    </ListItemIcon>
                                    <ListItemText primary={item['Name of the Vaccination Site*']} />
                                </ListItemButton>
                            </ListItem>   
                            <Divider />  
                        </div>
                    );
                })
            }
            </List>
        </div>
        

    </div>
  )
}

export default SearchBox