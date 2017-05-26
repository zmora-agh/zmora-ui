import React, { PropTypes } from 'react';

import List, { ListItem, ListSubheader, ListItemText } from 'material-ui/List';
import Menu, { MenuItem } from 'material-ui/Menu';
import CircularProgress from '../../../../node_modules/material-ui/Progress/CircularProgress';

const Layout = (props) => <List subheader={<ListSubheader>{props.header}</ListSubheader>}>{props.children}</List>;

Layout.propTypes = {
  header: PropTypes.node,
  children: PropTypes.node,
};

export default class SelectMenu extends React.PureComponent {
  static initialIndex(props) {
    // Give up if there is nothing to choose from
    if (props.options) {
      // Valid option, just return
      if (props.selected && props.options[props.selected]) return props.selected;
      // Selection is not valid but there is at least one element, default to it
      if (props.options.length > 0) return 0;
    }
    return undefined;
  }

  constructor(props) {
    super(props);
    this.state = {
      anchorEl: undefined,
      open: false,
      selectedIndex: this.constructor.initialIndex(props),
    };

    this.onIndexChange = this.onIndexChange.bind(this);
    this.handleClickListItem = this.handleClickListItem.bind(this);
    this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  componentDidMount() {
    this.onIndexChange(this.state.selectedIndex);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.options !== this.props.options) {
      this.setState({ selectedIndex: this.constructor.initialIndex(nextProps) });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.options !== this.props.options) {
      this.onIndexChange(this.state.selectedIndex);
    }
  }

  onIndexChange(index) {
    if (!this.props.onChange) return;
    if (this.props.options && this.props.options[index]) {
      this.props.onChange(this.props.options[index]);
    } else {
      this.props.onChange(undefined);
    }
  }

  handleClickListItem = (event) => {
    if (this.props.disabled) return;
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleMenuItemClick = (event, index) => {
    this.setState({ selectedIndex: index, open: false });
    this.onIndexChange(index);
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
    if (!this.props.options) return <Layout {...this.props}><ListItem><CircularProgress /></ListItem></Layout>;
    if (this.props.options.length === 0) {
      return <Layout {...this.props}><ListItem><ListItemText secondary={this.props.empty} /></ListItem></Layout>;
    }

    return (
      <Layout {...this.props}>
        <div>
          <ListItem button={!this.props.disabled} onClick={this.handleClickListItem}>
            <ListItemText
              primary={this.props.primary(this.props.options[this.state.selectedIndex])}
              secondary={this.props.secondary(this.props.options[this.state.selectedIndex])}
            />
          </ListItem>
          <Menu
            anchorEl={this.state.anchorEl}
            open={this.state.open}
            onRequestClose={this.handleRequestClose}
          >
            {this.props.options.map((option, index) => (
              <MenuItem
                key={option.id}
                selected={index === this.state.selectedIndex}
                onClick={(event) => this.handleMenuItemClick(event, index)}
              >
                {this.props.primary(option)}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Layout>
    );
  }
}

SelectMenu.propTypes = {
  options: PropTypes.array,
  primary: PropTypes.func,
  secondary: PropTypes.func,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  empty: PropTypes.node,
};
