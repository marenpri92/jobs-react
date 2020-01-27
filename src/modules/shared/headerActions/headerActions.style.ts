import { makeStyles, createStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles(({ spacing }: Theme) =>
    createStyles({
        headerActions: {
            padding: spacing(2, 0)
        },
    }));

export default useStyles;