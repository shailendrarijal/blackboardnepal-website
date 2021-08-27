import { Card, CardActionArea, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        flex: '0 1 content',
      },
    upperArea: {
        height: '70%',
    },
  });

export const CardForHomePage = ({
    name,
    description,
    link,
}) => {
    const classes = useStyles();

    return (
        <Card raised className={classes.root}> 
            <CardActionArea className={classes.upperArea}>
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="outlinedPrimary" size="small" color="primary" href={link}>
                GO THERE
                </Button>
            </CardActions>
        </Card>
    )
}

export default CardForHomePage;