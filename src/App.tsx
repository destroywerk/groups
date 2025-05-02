import React, { useState, useRef } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Drawer,
  Avatar,
  Box,
  Typography,
  Chip,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Badge,
  Button,
  Checkbox,
  TextField,
  InputAdornment,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Group, GroupConditions } from './types';
import { groups } from './data/mockData';
import HomeIcon from '@mui/icons-material/Home';
import InboxIcon from '@mui/icons-material/Inbox';
import AssistantIcon from '@mui/icons-material/Assistant';
import SearchIcon from '@mui/icons-material/Search';
import GroupIcon from '@mui/icons-material/Group';
import AutomationIcon from '@mui/icons-material/AutoFixHigh';
import CalendarIcon from '@mui/icons-material/CalendarToday';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import TimeIcon from '@mui/icons-material/AccessTime';
import PayrollIcon from '@mui/icons-material/Payment';
import RecruitingIcon from '@mui/icons-material/PersonAdd';
import PerformanceIcon from '@mui/icons-material/TrendingUp';
import TrainingIcon from '@mui/icons-material/School';
import CompensationIcon from '@mui/icons-material/AttachMoney';
import WhistleblowingIcon from '@mui/icons-material/Campaign';
import SurveysIcon from '@mui/icons-material/Poll';
import MarketplaceIcon from '@mui/icons-material/Store';
import ImportIcon from '@mui/icons-material/Download';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import SortIcon from '@mui/icons-material/Sort';
import FilterListIcon from '@mui/icons-material/FilterList';
import AddIcon from '@mui/icons-material/Add';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import CategoryIcon from '@mui/icons-material/Category';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';

const LayoutRoot = styled(Box)({
  display: 'flex',
  height: '100vh',
  backgroundColor: '#fff',
});

const Sidebar = styled(Box)(({ theme }) => ({
  width: 280,
  background: 'linear-gradient(180deg, #F7F5FF 0%, #F2EEFF 100%)',
  display: 'flex',
  flexDirection: 'column',
  '& .MuiListItemIcon-root': {
    color: 'rgba(0, 0, 0, 0.54)',
    minWidth: 40,
  },
  '& .MuiListItemText-root': {
    '& .MuiTypography-root': {
      color: 'rgba(0, 0, 0, 0.87)',
      fontSize: '14px',
      fontWeight: 400,
    },
  },
  '& .MuiListItem-root:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
  '& .logo': {
    width: 32,
    height: 32,
    marginRight: 12,
  },
}));

const drawerWidth = 450;

const MainContent = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#fff',
  paddingTop: '16px',
  transition: theme.transitions.create(['margin'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.standard,
  }),
  marginRight: 0,
  width: '100%',
  '&.content-shifted': {
    transition: theme.transitions.create(['margin'], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.standard,
    }),
    marginRight: drawerWidth,
  },
}));

const Header = styled(Box)(({ theme }) => ({
  height: 64,
  backgroundColor: '#fff',
  display: 'flex',
  alignItems: 'center',
  padding: '0 24px 0 40px',
}));

const TableControls = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '16px 24px 16px 40px',
  backgroundColor: '#fff',
}));

const Content = styled(Box)(({ theme }) => ({
  flex: 1,
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
}));

const TableWrapper = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#fff',
  width: '100%',
  overflowX: 'auto',
  paddingLeft: '40px',
  '& .MuiTable-root': {
    width: '100%',
    tableLayout: 'auto',
    minWidth: 0,
    marginLeft: 0,
  },
});

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  height: '32px',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    cursor: 'pointer',
  },
  '&.selected': {
    backgroundColor: 'rgba(33, 150, 243, 0.04)',
    '&:hover': {
      backgroundColor: 'rgba(33, 150, 243, 0.08)',
    },
  },
  '& .MuiCheckbox-root': {
    color: 'rgba(0, 0, 0, 0.16)',
    '& .MuiSvgIcon-root': {
      fontSize: '20px',
    },
    '&.Mui-checked': {
      color: '#1976D2',
    },
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  padding: '4px 16px',
  height: '36px',
  borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  '&.MuiTableCell-head': {
    backgroundColor: '#fff',
    fontWeight: 500,
    fontSize: '13px',
    color: 'rgba(0, 0, 0, 0.6)',
    '& .column-header': {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      cursor: 'pointer',
      '&:hover': {
        color: 'rgba(0, 0, 0, 0.87)',
      },
      '& .MuiSvgIcon-root': {
        fontSize: '16px',
      },
    },
  },
  '&.MuiTableCell-paddingCheckbox': {
    width: '40px',
    paddingLeft: 0,
    paddingRight: 0,
    '& .MuiCheckbox-root': {
      padding: 8,
    },
  },
  '&.name-column': {
    paddingLeft: 8,
  },
  '&.members-column': {
    width: '15%',
  },
  '&.usage-column': {
    width: '35%',
  },
  '&.owner-column': {
    width: '25%',
  },
}));

const UsageChip = styled(Chip)<{ type: string }>(({ theme, type }) => ({
  backgroundColor: 
    type === 'Permission Sets' ? '#FFF3DC' :
    type === 'Workflows' ? '#E8F5E9' :
    type === 'Performance cycle' ? '#E3F2FD' :
    '#F3E5F5',
  color:
    type === 'Permission Sets' ? '#975A16' :
    type === 'Workflows' ? '#1B5E20' :
    type === 'Performance cycle' ? '#1565C0' :
    '#6A1B9A',
  borderRadius: '8px',
  height: '24px',
  fontWeight: 500,
  fontSize: '13px',
  marginRight: '8px',
}));

const ActionButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  padding: '6px 12px',
  borderRadius: '8px',
  fontSize: '14px',
  fontWeight: 500,
  height: '32px',
  minHeight: '32px',
  '&.MuiButton-text': {
    color: 'rgba(0, 0, 0, 0.6)',
    padding: '6px 12px',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    },
  },
  '&.MuiButton-contained': {
    backgroundColor: '#2196F3',
    color: '#fff',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: '#1976D2',
      boxShadow: 'none',
    },
  },
}));

const StyledListItem = styled(ListItem)({
  padding: '8px 16px',
  height: 40,
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
});

const SearchContainer = styled(Box)(({ theme }) => ({
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.standard,
  }),
  display: 'flex',
  alignItems: 'center',
  width: 240,
  marginRight: '8px',
  '&.collapsed': {
    width: 32,
    marginRight: '16px',
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'transparent',
      '& fieldset': {
        opacity: 0,
      },
    },
    '& .MuiInputBase-input': {
      opacity: 0,
      width: 0,
      padding: 0,
    },
    '& .search-icon': {
      color: 'rgba(0, 0, 0, 0.54)',
    },
  },
}));

const menuItems = [
  { icon: <HomeIcon />, text: 'Home' },
  { icon: <InboxIcon />, text: 'Inbox', badge: 6 },
  { icon: <AssistantIcon />, text: 'Assistant' },
  { icon: <SearchIcon />, text: 'Search' },
  { icon: <GroupIcon />, text: 'Organization' },
  { icon: <AutomationIcon />, text: 'Automations' },
  { icon: <CalendarIcon />, text: 'Calendars' },
  { icon: <AnalyticsIcon />, text: 'Analytics' },
  { icon: <TimeIcon />, text: 'Time Tracking' },
  { icon: <PayrollIcon />, text: 'Payroll' },
  { icon: <RecruitingIcon />, text: 'Recruiting' },
  { icon: <PerformanceIcon />, text: 'Performance & Development' },
  { icon: <TrainingIcon />, text: 'Training' },
  { icon: <CompensationIcon />, text: 'Compensation' },
  { icon: <WhistleblowingIcon />, text: 'Whistleblowing' },
  { icon: <SurveysIcon />, text: 'Surveys' },
  { icon: <MarketplaceIcon />, text: 'Marketplace' },
  { icon: <ImportIcon />, text: 'Imports' },
  { icon: <SettingsIcon />, text: 'Settings' },
  { icon: <HelpIcon />, text: 'Help' },
];

const App: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [memberSearchQuery, setMemberSearchQuery] = useState('');
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [sortConfig, setSortConfig] = useState<{
    key: 'name' | 'members' | 'usage' | 'owner';
    direction: 'asc' | 'desc';
  } | null>(null);
  const [memberSearchActive, setMemberSearchActive] = useState(false);
  const memberSearchInputRef = useRef<HTMLInputElement>(null);

  const handleRowClick = (group: Group) => {
    if (selectedGroup?.id === group.id) {
      setSelectedGroup(null);
      setMemberSearchQuery('');
    } else {
      setSelectedGroup(group);
    }
  };

  const handleDrawerClose = () => {
    setSelectedGroup(null);
    setMemberSearchQuery('');
  };

  const handleCheckboxChange = (groupId: string) => {
    setSelectedRows(prev => {
      if (prev.includes(groupId)) {
        return prev.filter(id => id !== groupId);
      } else {
        return [...prev, groupId];
      }
    });
  };

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelectedRows(filteredGroups.map(group => group.id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleSort = (key: 'name' | 'members' | 'usage' | 'owner') => {
    setSortConfig(current => ({
      key,
      direction: current?.key === key && current.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const filteredGroups = groups.filter(group => 
    group.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredMembers = selectedGroup?.members.filter(member =>
    member.name.toLowerCase().includes(memberSearchQuery.toLowerCase())
  ) || [];

  const sortedGroups = [...filteredGroups].sort((a: Group, b: Group): number => {
    if (!sortConfig) return 0;

    let comparison = 0;
    switch (sortConfig.key) {
      case 'name':
        comparison = a.name.localeCompare(b.name);
        break;
      case 'members':
        comparison = a.members.length - b.members.length;
        break;
      case 'usage':
        comparison = a.usage.length - b.usage.length;
        break;
      case 'owner':
        comparison = a.owner.name.localeCompare(b.owner.name);
        break;
    }

    return sortConfig.direction === 'asc' ? comparison : -comparison;
  });

  const renderConditions = (conditions: GroupConditions) => {
    return Object.entries(conditions).map(([key, values]) => {
      if (!values || values.length === 0) return null;
      
      return (
        <Box sx={{ mb: 2 }} key={key}>
          <Typography
            sx={{
              fontSize: '13px',
              color: 'rgba(0, 0, 0, 0.6)',
              mb: 1,
              textTransform: 'capitalize',
            }}
          >
            {key.replace(/([A-Z])/g, ' $1').trim()}
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {values.map((value: string) => (
              <Chip
                key={value}
                label={value}
                size="small"
                sx={{
                  backgroundColor: 'rgba(0, 0, 0, 0.08)',
                  color: 'rgba(0, 0, 0, 0.87)',
                  height: '24px',
                  fontSize: '13px',
                }}
              />
            ))}
          </Box>
        </Box>
      );
    });
  };

  const handleDrawerNavigation = (direction: 'up' | 'down') => {
    if (!selectedGroup) return;
    
    const currentIndex = sortedGroups.findIndex(group => group.id === selectedGroup.id);
    if (currentIndex === -1) return;

    const nextIndex = direction === 'up' 
      ? (currentIndex - 1 + sortedGroups.length) % sortedGroups.length
      : (currentIndex + 1) % sortedGroups.length;

    setSelectedGroup(sortedGroups[nextIndex]);
  };

  const handleMemberSearchIconClick = () => {
    setMemberSearchActive(true);
    setTimeout(() => {
      memberSearchInputRef.current?.focus();
    }, 100);
  };

  const handleMemberSearchBlur = () => {
    if (!memberSearchQuery) setMemberSearchActive(false);
  };

  return (
    <LayoutRoot>
      <Sidebar>
        <Box sx={{ p: '16px', borderBottom: '1px solid rgba(0, 0, 0, 0.12)', display: 'flex', alignItems: 'center' }}>
          <img src="/logo.svg" alt="Kolhorn" className="logo" />
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontSize: '20px',
              fontWeight: 600,
              color: 'rgba(0, 0, 0, 0.87)',
            }}
          >
            Kolhorn
          </Typography>
        </Box>
        <List sx={{ flex: 1, pt: 0 }}>
          {menuItems.map((item) => (
            <StyledListItem key={item.text}>
              <ListItemIcon>
                {item.badge ? (
                  <Badge
                    badgeContent={item.badge}
                    color="primary"
                    sx={{
                      '& .MuiBadge-badge': {
                        backgroundColor: '#2196F3',
                        fontSize: '11px',
                        height: '16px',
                        minWidth: '16px',
                      },
                    }}
                  >
                    {item.icon}
                  </Badge>
                ) : (
                  item.icon
                )}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </StyledListItem>
          ))}
        </List>
        <Box 
          sx={{ 
            p: '16px', 
            borderTop: '1px solid rgba(0, 0, 0, 0.12)',
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
          }}
        >
          <Avatar 
            src="https://i.pravatar.cc/150?img=1" 
            sx={{ 
              width: 32, 
              height: 32 
            }} 
          />
          <Typography
            sx={{
              fontSize: '14px',
              color: 'rgba(0, 0, 0, 0.87)',
            }}
          >
            Sana Dawoud
          </Typography>
        </Box>
      </Sidebar>

      <MainContent className={selectedGroup ? 'content-shifted' : ''}>
        <Header>
          <Typography
            variant="h6"
            sx={{
              fontSize: '20px',
              fontWeight: 600,
              color: 'rgba(0, 0, 0, 0.87)',
            }}
          >
            Groups
          </Typography>
        </Header>

        <TableControls>
          <ActionButton
            variant="text"
            startIcon={<SortIcon />}
            size="small"
          >
            Sort
          </ActionButton>
          <ActionButton
            variant="text"
            startIcon={<FilterListIcon />}
            size="small"
          >
            Filter
          </ActionButton>
          <Box sx={{ flex: 1 }} />
          <SearchContainer className={selectedGroup ? 'collapsed' : ''}>
            <TextField
              size="small"
              placeholder="Search groups..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{
                width: '100%',
                '& .MuiOutlinedInput-root': {
                  height: '34px',
                  minHeight: '34px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  transition: theme => theme.transitions.create(['background-color', 'border-color'], {
                    easing: theme.transitions.easing.easeInOut,
                    duration: theme.transitions.duration.standard,
                  }),
                  backgroundColor: '#fff',
                  padding: 0,
                  '& fieldset': {
                    borderColor: 'rgba(0, 0, 0, 0.12)',
                    transition: theme => theme.transitions.create(['opacity', 'border-color'], {
                      easing: theme.transitions.easing.easeInOut,
                      duration: theme.transitions.duration.standard,
                    }),
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(0, 0, 0, 0.23)',
                  },
                  '& input': {
                    padding: '7px 12px 7px 0',
                    height: '20px',
                    transition: theme => theme.transitions.create(['opacity', 'width', 'padding'], {
                      easing: theme.transitions.easing.easeInOut,
                      duration: theme.transitions.duration.standard,
                    }),
                  },
                  '& .MuiInputAdornment-root': {
                    marginLeft: '12px',
                    marginRight: 0,
                    '& .search-icon': {
                      fontSize: 20,
                      transition: theme => theme.transitions.create(['color'], {
                        easing: theme.transitions.easing.easeInOut,
                        duration: theme.transitions.duration.standard,
                      }),
                    },
                  },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon className="search-icon" sx={{ color: 'rgba(0, 0, 0, 0.54)' }} />
                  </InputAdornment>
                ),
              }}
            />
          </SearchContainer>
          <ActionButton
            variant="contained"
            startIcon={<AddIcon />}
            size="small"
          >
            Create group
          </ActionButton>
        </TableControls>

        <Content>
          <TableWrapper>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <StyledTableCell padding="checkbox">
                      <Checkbox 
                        size="small"
                        indeterminate={selectedRows.length > 0 && selectedRows.length < filteredGroups.length}
                        checked={selectedRows.length === filteredGroups.length}
                        onChange={handleSelectAll}
                        sx={{
                          color: 'rgba(0, 0, 0, 0.16)',
                          borderRadius: '8px',
                          '& .MuiSvgIcon-root': {
                            fontSize: '20px',
                          },
                          '&.Mui-checked, &.MuiCheckbox-indeterminate': {
                            color: '#1976D2',
                          },
                        }}
                      />
                    </StyledTableCell>
                    <StyledTableCell className="name-column">
                      <div className="column-header" onClick={() => handleSort('name')}>
                        <GroupsIcon />
                        Name
                        {sortConfig?.key === 'name' && (
                          sortConfig.direction === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />
                        )}
                      </div>
                    </StyledTableCell>
                    <StyledTableCell className="members-column" align="center">
                      <div className="column-header" onClick={() => handleSort('members')}>
                        <PersonIcon />
                        # Members
                        {sortConfig?.key === 'members' && (
                          sortConfig.direction === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />
                        )}
                      </div>
                    </StyledTableCell>
                    <StyledTableCell className="usage-column">
                      <div className="column-header" onClick={() => handleSort('usage')}>
                        <CategoryIcon />
                        Usage
                        {sortConfig?.key === 'usage' && (
                          sortConfig.direction === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />
                        )}
                      </div>
                    </StyledTableCell>
                    <StyledTableCell className="owner-column">
                      <div className="column-header" onClick={() => handleSort('owner')}>
                        <PersonIcon />
                        Owner
                        {sortConfig?.key === 'owner' && (
                          sortConfig.direction === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />
                        )}
                      </div>
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {sortedGroups.map((group) => (
                    <StyledTableRow 
                      key={group.id} 
                      onClick={() => handleRowClick(group)}
                      selected={selectedRows.includes(group.id)}
                      className={selectedGroup?.id === group.id ? 'selected' : ''}
                    >
                      <StyledTableCell padding="checkbox" onClick={(e) => e.stopPropagation()}>
                        <Checkbox 
                          size="small"
                          checked={selectedRows.includes(group.id)}
                          onChange={() => handleCheckboxChange(group.id)}
                          sx={{
                            color: 'rgba(0, 0, 0, 0.16)',
                            borderRadius: '8px',
                            '& .MuiSvgIcon-root': {
                              fontSize: '20px',
                            },
                            '&.Mui-checked': {
                              color: '#1976D2',
                            },
                          }}
                        />
                      </StyledTableCell>
                      <StyledTableCell className="name-column">{group.name}</StyledTableCell>
                      <StyledTableCell className="members-column" align="center">{group.members.length}</StyledTableCell>
                      <StyledTableCell className="usage-column">
                        {group.usage.map((type, index) => (
                          <UsageChip
                            key={index}
                            label={type}
                            type={type}
                          />
                        ))}
                      </StyledTableCell>
                      <StyledTableCell className="owner-column">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Avatar
                            src={group.owner.avatar}
                            sx={{
                              width: 24,
                              height: 24,
                            }}
                          />
                          <Typography
                            sx={{
                              fontSize: '14px',
                              color: 'rgba(0, 0, 0, 0.87)',
                            }}
                          >
                            {group.owner.name}
                          </Typography>
                        </Box>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TableWrapper>

          <Drawer
            anchor="right"
            open={Boolean(selectedGroup)}
            onClose={handleDrawerClose}
            variant="persistent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
                border: 'none',
                borderLeft: '1px solid rgba(0, 0, 0, 0.12)',
                boxShadow: '-4px 0 8px -4px rgba(0, 0, 0, 0.05)',
                backgroundColor: '#fff',
                height: '100vh',
                top: 0,
              },
            }}
          >
            {selectedGroup && (
              <>
                <Box
                  sx={{
                    pt: '64px',
                    position: 'relative',
                  }}
                >
                  <Box sx={{
                    position: 'absolute',
                    top: 24,
                    left: 24,
                    display: 'flex',
                    alignItems: 'center',
                  }}>
                    <IconButton
                      onClick={handleDrawerClose}
                      sx={{
                        color: 'rgba(0, 0, 0, 0.54)',
                      }}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Box>
                  
                  <Box sx={{
                    position: 'absolute',
                    top: 24,
                    right: 24,
                    display: 'flex',
                    gap: 1,
                  }}>
                    <IconButton
                      onClick={() => handleDrawerNavigation('up')}
                      sx={{
                        color: 'rgba(0, 0, 0, 0.54)',
                      }}
                    >
                      <KeyboardArrowUpIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => handleDrawerNavigation('down')}
                      sx={{
                        color: 'rgba(0, 0, 0, 0.54)',
                      }}
                    >
                      <KeyboardArrowDownIcon />
                    </IconButton>
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: '20px',
                      fontWeight: 600,
                      color: 'rgba(0, 0, 0, 0.87)',
                      mb: 3,
                      px: 3,
                      pt: 4,
                    }}
                  >
                    {selectedGroup.name}
                  </Typography>

                  <Box sx={{ px: 3 }}>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Box sx={{ minWidth: 160, flex: '0 0 180px' }}>
                        <Typography
                          sx={{
                            fontSize: '14px',
                            color: 'rgba(0, 0, 0, 0.6)',
                            fontWeight: 500,
                            mb: 1,
                          }}
                        >
                          Owner
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Avatar 
                            src={selectedGroup.owner.avatar} 
                            sx={{
                              width: 24,
                              height: 24,
                            }}
                          />
                          <Typography
                            sx={{
                              fontSize: '14px',
                              color: 'rgba(0, 0, 0, 0.87)',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              maxWidth: 120,
                            }}
                          >
                            {selectedGroup.owner.name}
                          </Typography>
                        </Box>
                      </Box>

                      <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Typography
                          sx={{
                            fontSize: '14px',
                            color: 'rgba(0, 0, 0, 0.6)',
                            fontWeight: 500,
                            mb: 1,
                          }}
                        >
                          Usage
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                          {selectedGroup.usage.map((type, index) => (
                            <UsageChip
                              key={index}
                              label={type}
                              type={type}
                            />
                          ))}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ 
                  pt: '32px',
                  px: '24px',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                }}>
                  <Typography
                    sx={{
                      fontSize: '14px',
                      color: 'rgba(0, 0, 0, 0.6)',
                      fontWeight: 500,
                      mb: 1,
                    }}
                  >
                    Members are assigned based on the following conditions:
                  </Typography>

                  {renderConditions(selectedGroup.conditions)}

                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    flex: 1,
                    overflow: 'hidden',
                    mt: 3,
                  }}>
                    <Box sx={{ 
                      mb: 2, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'space-between'
                    }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography
                          sx={{
                            fontSize: '14px',
                            color: 'rgba(0, 0, 0, 0.6)',
                            fontWeight: 500,
                          }}
                        >
                          Members
                        </Typography>
                        <Box sx={{
                          backgroundColor: 'rgba(0, 0, 0, 0.08)',
                          borderRadius: '16px',
                          padding: '2px 8px',
                          minWidth: '24px',
                          height: '20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                          <Typography
                            sx={{
                              fontSize: '12px',
                              color: 'rgba(0, 0, 0, 0.6)',
                              fontWeight: 500,
                            }}
                          >
                            {selectedGroup.members.length}
                          </Typography>
                        </Box>
                      </Box>
                      <ClickAwayListener onClickAway={handleMemberSearchBlur}>
                        <Box
                          sx={{
                            position: 'relative',
                            width: memberSearchActive ? 180 : 32,
                            transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            background: memberSearchActive ? '#fff' : 'transparent',
                            borderRadius: '8px',
                            boxShadow: memberSearchActive ? '0 1px 4px 0 rgba(0,0,0,0.04)' : 'none',
                            border: memberSearchActive ? '1px solid rgba(0,0,0,0.12)' : 'none',
                            height: 32,
                            cursor: memberSearchActive ? 'text' : 'pointer',
                          }}
                          onClick={() => {
                            if (!memberSearchActive) handleMemberSearchIconClick();
                          }}
                        >
                          { !memberSearchActive ? (
                            <SearchIcon
                              sx={{
                                color: 'rgba(0,0,0,0.54)',
                                fontSize: 20,
                                position: 'absolute',
                                right: 8,
                                top: '50%',
                                transform: 'translateY(-50%)',
                                opacity: 1,
                                transition: 'opacity 0.2s',
                                pointerEvents: 'auto',
                              }}
                            />
                          ) : null }
                          <input
                            ref={memberSearchInputRef}
                            value={memberSearchQuery}
                            onChange={e => setMemberSearchQuery(e.target.value)}
                            onBlur={handleMemberSearchBlur}
                            placeholder="Search members..."
                            style={{
                              width: memberSearchActive ? 180 : 0,
                              opacity: memberSearchActive ? 1 : 0,
                              marginLeft: 0,
                              border: 'none',
                              outline: 'none',
                              background: 'transparent',
                              fontSize: 14,
                              transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.2s',
                              padding: memberSearchActive ? '0 0 0 12px' : 0,
                              height: 28,
                              boxSizing: 'border-box',
                            }}
                          />
                        </Box>
                      </ClickAwayListener>
                    </Box>

                    <Box sx={{ 
                      flex: 1,
                      overflow: 'auto',
                      display: 'flex',
                      flexDirection: 'column',
                    }}>
                      <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 1fr)',
                        gap: 0,
                        mb: 0,
                        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                      }}>
                        <Typography
                          sx={{
                            fontSize: '13px',
                            color: 'rgba(0, 0, 0, 0.6)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            py: 1,
                            pl: 1,
                            pr: 2,
                            borderRight: '1px solid rgba(0, 0, 0, 0.12)',
                          }}
                        >
                          <PersonIcon sx={{ fontSize: 18 }} />
                          Name
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: '13px',
                            color: 'rgba(0, 0, 0, 0.6)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            py: 1,
                            px: 2,
                          }}
                        >
                          <svg width="14" height="14" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.4499 2.92441C8.44969 2.55186 8.14767 2.24971 7.7751 2.2496H6.42451C6.05203 2.24981 5.74992 2.55193 5.74971 2.92441V3.59999H8.4499V2.92441ZM4.4001 2.92441V3.59999H2.37451C1.25645 3.6002 0.350308 4.50634 0.350098 5.62441V7.8748V12.3744C0.350098 13.4927 1.25631 14.3996 2.37451 14.3998H11.8247C12.9431 14.3998 13.8501 13.4928 13.8501 12.3744V7.8748V5.62441C13.8499 4.50621 12.943 3.59999 11.8247 3.59999H9.79951V2.92441C9.7993 1.80628 8.89326 0.900099 7.7751 0.899994H6.42451C5.30645 0.900205 4.40031 1.80634 4.4001 2.92441ZM12.4995 7.19999V5.62441C12.4993 5.2518 12.1974 4.9496 11.8247 4.9496H2.37451C2.00203 4.94981 1.69992 5.25193 1.69971 5.62441V7.19999H4.1749H10.0249H12.4995ZM9.3501 8.5496V9.22441C9.3501 9.5972 9.65211 9.90019 10.0249 9.90019C10.3977 9.90019 10.6997 9.5972 10.6997 9.22441V8.5496H12.4995V12.3744C12.4995 12.7472 12.1975 13.0502 11.8247 13.0502H2.37451C2.0019 13.05 1.69971 12.7471 1.69971 12.3744V8.5496H3.5001V9.22441C3.5001 9.5972 3.80211 9.90019 4.1749 9.90019C4.54769 9.90019 4.84971 9.5972 4.84971 9.22441V8.5496H9.3501Z" 
                              fill="rgba(0, 0, 0, 0.54)"
                            />
                          </svg>
                          Position
                        </Typography>
                      </Box>

                      {filteredMembers.map((member) => (
                        <Box
                          key={member.id}
                          sx={{
                            display: 'grid',
                            gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 1fr)',
                            gap: 0,
                            borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                          }}
                        >
                          <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            minWidth: 0,
                            py: 1,
                            pl: 1,
                            pr: 2,
                            borderRight: '1px solid rgba(0, 0, 0, 0.12)',
                          }}>
                            <Avatar 
                              src={member.avatar} 
                              sx={{
                                width: 24,
                                height: 24,
                              }}
                            />
                            <Typography
                              sx={{
                                fontSize: '14px',
                                color: 'rgba(0, 0, 0, 0.87)',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                              }}
                            >
                              {member.name}
                            </Typography>
                          </Box>
                          <Typography
                            sx={{
                              fontSize: '14px',
                              color: 'rgba(0, 0, 0, 0.87)',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                              alignSelf: 'center',
                              py: 1,
                              px: 2,
                            }}
                          >
                            {member.position}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </>
            )}
          </Drawer>
        </Content>
      </MainContent>
    </LayoutRoot>
  );
};

export default App; 