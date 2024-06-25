import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import MaterialIcon from "@mui/icons-material/Icon";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { Box } from "@mui/material";


const sidebarData: {
  title: string, path: string, icon: typeof MaterialIcon
}[] = [
    {
      title: "Trang chủ",
      path: "/admin/clinic-owner",
      icon: DashboardIcon
    },
    {
      title: "Phòng khám",
      path: "/admin/clinic-owner/clinic",
      icon: LocalHospitalIcon
    },
    {
      title: "Lịch hẹn",
      path: "/admin/clinic-owner/appointment",
      icon: CalendarMonthIcon
    },
    {
      title: 'Slot khám',
      path: "/admin/clinic-owner/slots",
      icon:  AccessTimeIcon 
    },
    {
      title: 'Dịch vụ',
      path: "/admin/clinic-owner/services",
      icon: MedicalServicesIcon
    }
  ]

export const mainListItems = (
  <Box>
    {sidebarData.map((item, index) => (
      <ListItemButton component={Link} to={item.path} key={index}>
        <ListItemIcon>
          <item.icon />
        </ListItemIcon>
        <ListItemText primary={item.title} />
      </ListItemButton>
    ))}
  </Box>
);

