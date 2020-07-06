const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 4201;
const httpProxy = require('http-proxy');

app.use(express.static(path.join(__dirname, 'frontEnd')));
app.use(express.json());

const proxy = httpProxy.createProxyServer({});

app.all('/api/getReviews', (req, res) => {
  proxy.web(req, res, { target: 'http://111111-env.eba-9uquamkj.us-east-2.elasticbeanstalk.com/' });
});

app.all('/products', (req, res) => {
  proxy.web(req, res, { target: 'http://newcarousel-env.eba-irp2rurw.us-east-2.elasticbeanstalk.com/' });
});

app.all('/api/get/products', (req, res) => {
  proxy.web(req, res, { target: 'http://searchbarricardo2-dev.us-east-2.elasticbeanstalk.com/' });
});

app.all('/display', (req, res) => {
  proxy.web(req, res, { target: 'http://imagecomponent-env-1.eba-4mfwjdhg.us-east-2.elasticbeanstalk.com/' });
});
app.all('/images/:id', (req, res) => {
  proxy.web(req, res, { target: 'http://imagecomponent-env-1.eba-4mfwjdhg.us-east-2.elasticbeanstalk.com/' });
});

app.listen(PORT, () => {
  console.log(`server is CONNECTED on PORT:${PORT}`);
});
