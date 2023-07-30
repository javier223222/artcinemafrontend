
import { Box, Typography, Divider, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import { logopage } from "@/imports/exportimages";
const Draweritem = (props)=> (
    <Box onClick={props.handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
       <img src={logopage} alt="logo de la empresa"></img>
      </Typography>
      <Divider />
      <List>
        {props.navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
export default Draweritem;