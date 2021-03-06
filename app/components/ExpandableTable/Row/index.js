import React from 'react';
import { ListItem } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Collapse from 'material-ui/transitions/Collapse';
import { withStyles, createStyleSheet } from 'material-ui/styles';import Card, { CardContent } from 'material-ui/Card';
import KeyboardArrowUp from 'material-ui-icons/KeyboardArrowUp';
import KeyboardArrowDown from 'material-ui-icons/KeyboardArrowDown';


const styleSheet = createStyleSheet('zmoraExpandableTableRow', () => ({
  cardContentRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    cursor: 'pointer',
  },
  cardHidden: {
    backgroundColor: 'inherit',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '98%',
    boxShadow: 'none',
    transition: '0.5s',
  },
  cardExpanded: {
    backgroundColor: '#ffffff',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    boxShadow: '1px 3px 10px 0px rgba(0, 0, 0, 0.4)',
    transition: '0.5s',
  },
  listItemHidden: {
    paddingTop: 0,
    paddingBottom: 0,
    transition: '0.5s',
  },
  listItemExpanded: {
    paddingTop: 20,
    paddingBottom: 20,
    transition: '0.5s',
  },
}));

@withStyles(styleSheet)
export class ExpandableTableRow extends React.PureComponent {
  static propTypes = {
    children: React.PropTypes.node,
    header: React.PropTypes.node,
    startExpanded: React.PropTypes.bool,
    classes: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { expanded: props.startExpanded || false };
  }

  toggleExpanded() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const classes = this.props.classes;

    const isExpanded = this.state.expanded;
    const onClick = () => this.toggleExpanded();
    const expandedIcon = isExpanded ? <KeyboardArrowDown /> : <KeyboardArrowUp />;
    const cardClass = !isExpanded ? classes.cardHidden : classes.cardExpanded;
    const listItemClass = !isExpanded ? classes.listItemHidden : classes.listItemExpanded;

    return (
      <ListItem className={listItemClass}>
        <Card className={cardClass}>
          <CardContent className={classes.cardContentRow} onClick={onClick}>
            <Typography>{expandedIcon}</Typography>
            {this.props.header}
          </CardContent>
          <Collapse in={isExpanded} transitionDuration={500}>
            <CardContent>
              {this.props.children}
            </CardContent>
          </Collapse>
        </Card>
      </ListItem>
    );
  }
}

export default ExpandableTableRow;
