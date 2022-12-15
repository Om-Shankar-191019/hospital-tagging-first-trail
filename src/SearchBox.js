import React, { useState} from 'react'
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const SearchBox = () => {
    const [searchText, setSearchText] = useState("");
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
        <div style={{display:'flex'}}>
            <div style={{flex:1}}>
                <OutlinedInput 
                    style={{width:'100%'}}
                    value={searchText}
                    onChange={(event) => setSearchText(event.target.value)}
                />
            </div>
            <div>
                <Button 
                    variant="contained" 
                    style={{ padding:'15px 12px'}} 
                    onClick={()=>{}}
                >Search</Button>
            </div>
        </div>

        <List>
        {
            [1,2,3,4,5].map((item) => {
                return (
                    <div key={item}>
                        <ListItem disablePadding>
                            <ListItemButton>
                            <ListItemIcon>
                                <img src='./placeholder.png' alt='placeholder' style={{height:38,width:38}}></img>
                            </ListItemIcon>
                            <ListItemText primary="Inbox" />
                            </ListItemButton>
                        </ListItem>   
                        <Divider />  
                    </div>
                );
            })
        }
        </List>
        

    </div>
  )
}

export default SearchBox