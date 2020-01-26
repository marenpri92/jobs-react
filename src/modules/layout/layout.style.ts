import { makeStyles, createStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles(({ palette, spacing }: Theme) =>
    createStyles({
        root: {
            backgroundColor: palette.primary.dark,
            height: "100%"
        },
        icon: {
            padding: spacing(3, 1, 1),
            fontSize: 50
        }
    }));

export default useStyles;