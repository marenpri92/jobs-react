import { makeStyles, createStyles, Theme, withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';

export const useStyles = makeStyles(({ spacing }: Theme) => createStyles({
    small: {
        width: spacing(5),
        height: spacing(5),
    },
    large: {
        width: spacing(10),
        height: spacing(10),
    }
}));


export const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      backgroundColor: '#44b700',
    },
  }),
)(Badge);