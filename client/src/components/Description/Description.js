import React from 'react'
import useStyles from "./styles"
const Description = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <img src="https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=907&q=70"
            alt="Hero Img"
            className={classes.image}

            />
        </div>
    )
}

export default Description
