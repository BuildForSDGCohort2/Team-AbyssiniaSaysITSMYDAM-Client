import React from 'react';
import useStyles from './single-supplier.styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import  PostedProduct  from '../../components/posted-product/posted-product.component';
const SingleSupplierPage = ({ data }) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.block}>
        <Typography
          gutterBottom
          variant="h3"
          className={classes.title}
        >
          {data.company.companyName}
        </Typography>
        <Typography
          gutterBottom
          variant="subtitle1"
          className={classes.subtitle}
        >
          {`Posted by ${data.firstName} ${data.lastName}`}
        </Typography>
        <Typography
          gutterBottom
          variant="subtitle1"
          className={classes.subtitle}
        >
          {data.company.companyEmail}
        </Typography>
        <Typography
          gutterBottom
          variant="subtitle2"
          className={classes.subtitle}
        >
          {`Posted by ${data.company.address.country}, ${data.company.address.city}`}
        </Typography>
      </div>

      <div className={classes.secondBlock}>
        <Typography
          className={classes.stat}
          color="primary"
          gutterBottom
          variant="body1"
        >
          STATS
        </Typography>
        <Card className={classes.thirdBlock}>
          <CardContent>
            <Grid container>
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                className={classes.achievements}
              >
                <Typography
                  className={classes.estimate}
                  color="primary"
                  gutterBottom
                  variant="h6"
                >
                  {data.products.length}
                </Typography>
                <Typography
                  color="primary"
                  gutterBottom
                  variant="body1"
                  className={classes.description}
                >
                  Products
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                className={classes.achievements}
              >
                <Typography
                  color="primary"
                  gutterBottom
                  variant="body1"
                  className={classes.estimate}
                >
                {data.totalSale}
                </Typography>
                <Typography
                  color="primary"
                  gutterBottom
                  variant="body1"
                  className={classes.description}
                >
                  Total Sales
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                className={classes.achievements}
              >
                <Typography
                  color="primary"
                  gutterBottom
                  variant="h6"
                  className={classes.estimate}
                >
                  {data.productsType.length}
                </Typography>
                <Typography
                  color="primary"
                  gutterBottom
                  variant="body1"
                  className={classes.description}
                >
                Type of products
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
      <PostedProduct products={data.products}/>
    </div>
  );
};

export default SingleSupplierPage;
