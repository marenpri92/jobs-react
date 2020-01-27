import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing, palette }: Theme) => createStyles({
    root: {
        padding: spacing(2),
        margin: spacing(1, 0),
        border: "solid 1px",
        borderColor: palette.secondary.main,
    }
}));

export default useStyles;