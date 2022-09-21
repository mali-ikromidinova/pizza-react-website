import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRouter} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer   isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to='/'>Pizzas</SidebarLink>
                <SidebarLink to='/'>Deserts</SidebarLink>
                <SidebarLink to='/'>Full menu</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRouter to='/'>Order now</SidebarRouter>
            </SideBtnWrap>
        </SidebarContainer>
    );
}
 
export default Sidebar;