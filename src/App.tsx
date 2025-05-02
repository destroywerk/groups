import React, { useState } from 'react';
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
  overflow: 'hidden',
  backgroundColor: '#fff',
  transition: theme.transitions.create(['margin'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.standard,
  }),
  marginRight: 0,
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
  padding: '0 24px',
}));

const TableControls = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '16px 24px',
  backgroundColor: '#fff',
}));

const Content = styled(Box)(({ theme }) => ({
  flex: 1,
  backgroundColor: '#fff',
  overflow: 'hidden',
}));

const TableWrapper = styled(Box)({
  overflow: 'auto',
  '& .MuiTable-root': {
    minWidth: 1000,
  },
});

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  height: '36px',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    cursor: 'pointer',
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
  borderRadius: '16px',
  height: '24px',
  fontWeight: 500,
  fontSize: '13px',
  marginRight: '8px',
}));

const ActionButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  padding: '6px 12px',
  borderRadius: '12px',
  fontSize: '14px',
  fontWeight: 500,
  height: '32px',
  minHeight: '32px',
  '&.MuiButton-text': {
    color: 'rgba(0, 0, 0, 0.87)',
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
          <TextField
            size="small"
            placeholder="Search groups..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{
              width: '240px',
              mr: 1,
              '& .MuiOutlinedInput-root': {
                height: '32px',
                minHeight: '32px',
                borderRadius: '12px',
                fontSize: '14px',
                '& fieldset': {
                  borderColor: 'rgba(0, 0, 0, 0.12)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(0, 0, 0, 0.23)',
                },
                '& input': {
                  padding: '6px 12px 6px 0',
                  height: '20px',
                },
                '& .MuiInputAdornment-root': {
                  marginRight: '2px',
                  marginLeft: '8px',
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ fontSize: 20, color: 'rgba(0, 0, 0, 0.54)' }} />
                </InputAdornment>
              ),
            }}
          />
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
                    <StyledTableCell>
                      <div className="column-header" onClick={() => handleSort('name')}>
                        <GroupsIcon />
                        Name
                        {sortConfig?.key === 'name' && (
                          sortConfig.direction === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />
                        )}
                      </div>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <div className="column-header" onClick={() => handleSort('members')}>
                        <PersonIcon />
                        # Members
                        {sortConfig?.key === 'members' && (
                          sortConfig.direction === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />
                        )}
                      </div>
                    </StyledTableCell>
                    <StyledTableCell>
                      <div className="column-header" onClick={() => handleSort('usage')}>
                        <CategoryIcon />
                        Usage
                        {sortConfig?.key === 'usage' && (
                          sortConfig.direction === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />
                        )}
                      </div>
                    </StyledTableCell>
                    <StyledTableCell>
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
                      <StyledTableCell>{group.name}</StyledTableCell>
                      <StyledTableCell align="center">{group.members.length}</StyledTableCell>
                      <StyledTableCell>
                        {group.usage.map((type, index) => (
                          <UsageChip
                            key={index}
                            label={type}
                            type={type}
                          />
                        ))}
                      </StyledTableCell>
                      <StyledTableCell>
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
                    p: '24px',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                    position: 'relative',
                  }}
                >
                  <IconButton
                    onClick={handleDrawerClose}
                    sx={{
                      position: 'absolute',
                      right: 16,
                      top: 16,
                      color: 'rgba(0, 0, 0, 0.54)',
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: '20px',
                      fontWeight: 600,
                      color: 'rgba(0, 0, 0, 0.87)',
                      mb: 3,
                      pr: 4,
                    }}
                  >
                    {selectedGroup.name}
                  </Typography>

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
                    <Avatar src={selectedGroup.owner.avatar} />
                    <Typography>{selectedGroup.owner.name}</Typography>
                  </Box>
                </Box>

                <Box sx={{ 
                  p: '24px',
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
                      mb: 2,
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
                  }}>
                    <Box sx={{ 
                      mb: 2, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'space-between'
                    }}>
                      <Typography
                        sx={{
                          fontSize: '14px',
                          color: 'rgba(0, 0, 0, 0.6)',
                          fontWeight: 500,
                        }}
                      >
                        Members ({selectedGroup.members.length})
                      </Typography>
                      <TextField
                        size="small"
                        placeholder="Search members..."
                        value={memberSearchQuery}
                        onChange={(e) => setMemberSearchQuery(e.target.value)}
                        sx={{
                          width: '180px',
                          '& .MuiOutlinedInput-root': {
                            height: '32px',
                            borderRadius: '12px',
                            fontSize: '13px',
                            '& fieldset': {
                              borderColor: 'rgba(0, 0, 0, 0.12)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(0, 0, 0, 0.23)',
                            },
                            '& input': {
                              padding: '6px 12px 6px 0',
                              height: '20px',
                            },
                            '& .MuiInputAdornment-root': {
                              marginRight: '2px',
                              marginLeft: '8px',
                            },
                          },
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <SearchIcon sx={{ fontSize: 18, color: 'rgba(0, 0, 0, 0.54)' }} />
                            </InputAdornment>
                          ),
                        }}
                      />
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
                            py: 1,
                            px: 2,
                          }}
                        >
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