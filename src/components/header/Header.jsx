import React from "react";
import classNames from "classnames";
import styles from "./header.module.scss";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Logo from '../logo/Logo'
import SearchIcon from '@mui/icons-material/Search'
import { InputBase } from "@mui/material";
import { Grade } from "@mui/icons-material";
import Button from '@mui/material/Button'


export default function Header() {

    return (
        <Container className={classNames(styles.container)} maxWidth="x12">
            <Grid container spacing={1} columnSpacing={{ xs: 4, sm: 4, md: 6 }}  className={classNames(styles.grid)}>
                <Grid item xs>
                    <Logo> </Logo>
                </Grid>
                <Grid item xs={6} >
                    <div className={classNames(styles.searchField)}>
                        <div>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Find assets, users and activity..."
                            className={classNames(styles.searchInput)}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Grid>
                <Grid item xs>
                    <div className={classNames(styles.links)}>
                        <div> Home</div>
                        <div> Activity </div>
                        <div> 
                        <Button>EXPLORE</Button>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}