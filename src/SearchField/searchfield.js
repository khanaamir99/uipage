import { FormControl, OutlinedInput, makeStyles, IconButton, InputAdornment } from "@material-ui/core";
import SearchSharpIcon from '@material-ui/icons/SearchSharp';

const useStyles = makeStyles((theme) => ({
    search: {
        maxHeight: "38px",
    },
    search_input: {
        maxHeight: "38px",
        padding: "0px",
        outline: "none",
        background: "#fff"
    },
    search_button: {
        width: theme.spacing(4),
        height: theme.spacing(4),
        marginRight: "3px",
    },
    search_icon: {

    }
}))

export default function SearchField(props){
    const classes = useStyles();

    return (
        <FormControl className={classes.search} >
            <OutlinedInput 
            placeholder="Search Patient"
            fullWidth
            type="text"
            className={classes.search_input}
            endAdornment={
                <InputAdornment position="end">
                    <IconButton edge="end" className={classes.search_button}>
                        <SearchSharpIcon fontSize="small" className={classes.search_icon}/>
                    </IconButton>
                </InputAdornment>
            } />
        </FormControl>
    )
}