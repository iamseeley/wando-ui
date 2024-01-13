
// componentsMap.ts
import { ComponentType } from 'react';
import Button from './Button';
import Card from './Card';
import Collapsible from './Collapsible';
import Avatar from './Avatar';
import Badge from './Badge';
import DatePicker from './DatePicker';
import Dialog from './Dialog';
import Dropdown from './Dropdown';
import Form from './Form';
import Menubar from './Menubar';
import NavigationMenu from './NavMenu';
import Popover from './Popover';
import Select from './Selector';
import Switch from './Switch';
import Toggle from './Toggle';
import Tooltip from './Tooltip';
import Textarea from './Textarea';
// import other components

// Use React.ComponentType<any> to allow any props
const componentsMap: Record<string, ComponentType<any>> = {
  Button: Button,
  Card: Card,
  Collapsible: Collapsible,
  Avatar: Avatar,
  Badge: Badge,
  DatePicker: DatePicker,
  Dialog: Dialog,
  Dropdown: Dropdown,
  Form: Form,
  Menubar: Menubar,
  NavigationMenu: NavigationMenu,
  Popover: Popover,
  Select: Select,
  Switch: Switch,
  Toggle: Toggle,
  Tooltip: Tooltip,
  Textarea: Textarea
};

export default componentsMap;
