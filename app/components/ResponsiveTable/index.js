import React from 'react';
import classNames from 'classnames';

import { withStyles, createStyleSheet } from 'material-ui/styles';

import
  Table,
{ TableHead,
  TableBody,
  TableRow,
TableCell,
} from 'material-ui/Table';

const styleSheet = createStyleSheet('zmoraResponsiveTable', (theme) => ({
  [theme.breakpoints.down('lg')]: {
    headRoot: {
      display: 'none',
    },
    cellRoot: {
      '&:before': {
        content: 'attr(data-title)',
        float: 'left',
        ...theme.typography.caption,
      },
      '&:hover': {
        backgroundColor: theme.palette.grey[50],
      },
      ...theme.typography.body1,
      display: 'block',
      borderBottom: 'none',
      textAlign: 'right',
      padding: 2 * theme.spacing.unit,
    },
    cellHiding: {
      display: 'none',
    },
    rowRoot: {
      border: `1px solid ${theme.palette.common.faintBlack}`,
      marginBottom: 3 * theme.spacing.unit,
      display: 'block',
      height: '100%',
    },
  },
  [theme.breakpoints.up('lg')]: {
    cellPadding: {
      '&:last-child': {
        paddingRight: 'inherit',
      },
      padding: `0 ${theme.spacing.unit}px 0 ${theme.spacing.unit}px`,
    },
  },
}));

export const ResponsiveTable = Table;

const ResponsiveTableHeadNoStyle = (props) => {
  const { classes, ...other } = props;
  return <TableHead {...other} classes={{ root: classes.headRoot }} />;
};
ResponsiveTableHeadNoStyle.propTypes = {
  classes: React.PropTypes.object.isRequired,
};
export const ResponsiveTableHead = withStyles(styleSheet)(ResponsiveTableHeadNoStyle);

const ResponsiveTableRowNoStyle = (props) => {
  const { classes, ...other } = props;
  return <TableRow {...other} classes={{ root: classes.rowRoot }} />;
};
ResponsiveTableRowNoStyle.propTypes = {
  classes: React.PropTypes.object.isRequired,
};
export const ResponsiveTableRow = withStyles(styleSheet)(ResponsiveTableRowNoStyle);


const ResponsiveTableCellNoStyle = (props) => {
  const { classes, hiding, ...other } = props;
  const cellClasses = classNames(classes.cellRoot, { [classes.cellHiding]: hiding });
  return <TableCell {...other} classes={{ root: cellClasses, padding: classes.cellPadding }} />;
};
ResponsiveTableCellNoStyle.propTypes = {
  classes: React.PropTypes.object.isRequired,
  hiding: React.PropTypes.bool,
};
export const ResponsiveTableCell = withStyles(styleSheet)(ResponsiveTableCellNoStyle);


export const ResponsiveTableBody = TableBody;

