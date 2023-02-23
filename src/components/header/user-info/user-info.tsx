import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import Divider from "@mui/material/Divider";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import { useAppSelector } from "../../../app/hooks";
import { selectUser } from "../../../slices/app.slice";

interface UserInfoProps {
	anchorEl: null | HTMLElement;
	open: boolean;
	handleClose: () => void;
}

const UserInfo: React.FC<UserInfoProps> = ({ anchorEl, open, handleClose }) => {
	const user = useAppSelector(selectUser);
	return (
		<>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}>
				<List
					sx={{
						width: "100%",
						maxWidth: 360,
						bgcolor: "background.paper",
					}}>
					<ListItem>
						<ListItemAvatar>
							<Avatar>
								<AccountCircleIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Email" secondary={user?.email} />
					</ListItem>
					<Divider variant="inset" component="li" />
					<ListItem>
						<ListItemAvatar>
							<Avatar>
								<AccessTimeIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText
							primary="Last active"
							secondary={new Date(+user!.lastLoginAt).toLocaleString()}
						/>
					</ListItem>
					<Divider variant="inset" component="li" />
				</List>
			</Menu>
		</>
	);
};

export default UserInfo;
