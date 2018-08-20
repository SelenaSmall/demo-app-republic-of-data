# README

## TODO

- [ ] look and feel
  - [react toolbox](http://react-toolbox.io/#/install) Google's material design
    - uses Css Modules
      - https://github.com/css-modules/css-modules
      - https://github.com/rmosolgo/css_modules
      - https://medium.com/@fkadev/how-i-implemented-css-modules-to-ruby-on-rails-easily-abb324ce22d
    - has some issues from sample doc https://github.com/react-toolbox/react-toolbox/issues/1278

- [ ] light weight charts that look great
  - [x] https://github.com/reactjs/react-chartjs
    ```
    npm install --save react-chartjs chart.js@^1.1.1
    ```
    - using examples http://reactcommunity.org/react-chartjs/index.html
    - `insights/ChartJsDemo`
  - [ ] https://chartkick.com/react
  - [ ] https://c3js.org/
    - [ ] streaming data https://github.com/pubnub/eon-chart
    - https://www.pubnub.com/developers/eon/chart/builder/
  - [ ] http://jerairrest.github.io/react-chartjs-2/
  - [ ] http://www.reactd3.org/
  - [ ] https://github.com/rma-consulting/react-easy-chart#readme
  - [ ] https://www.fusioncharts.com/explore/integrations/front-end-integrations/react
  - [ ] http://voidcanvas.com/top-10-react-graph-chart-libraries-with-demo/
  - [ ] https://hackernoon.com/9-best-javascript-charting-libraries-46e7f4dc34e6

- [ ] some awesome real time geographic maps
  - https://www.pubnub.com/developers/eon/
- [ ] add some descent react theme
- [ ] authentication for any admin things
  - [ ] using clearnace
    - https://everydayrails.com/2016/01/23/clearance-rails-authentication.html
    - https://thoughtbot.com/upcase/videos/clearance-rails-authentication-made-easy
    - https://www.sitepoint.com/simple-rails-authentication-with-clearance/
  - [ ] and JWT
    - http://www.binarywebpark.com/ruby-rails-authentication-json-web-token-example/
    - Github auth and JWT example in 4 parts https://groundberry.github.io/development/2017/03/18/build-an-app-with-rails-and-react-the-back-end.html
- [ ] graphql?
  - https://medium.com/@DrawandCode/building-a-graphql-api-in-rails-part-start-coding-8b1de6d75041
- [ ] should we have all rails and [active admin](https://github.com/activeadmin/activeadmin)?
  - http://demo.activeadmin.info/admin
- [ ] should we have less rails and use hanami instead?

## Development

### Pre-requisites
- Ruby 2.5.0
- Rails 5.1.6
- npm
- bundler

```apple js
git clone git@github.com:SelenaSmall/demo-app-republic-of-data.git
bundle
```

### Running the app in dev

__Quick Start__
```apple js
rake start
```

__API only__ Running on port 3001
```apple js
rails s -p 3001
```

__FrontEnd only__ Running on port 3000
```apple js
cd client
npm start
```

## Deploy to Heroku

### Pre-requisites
- Heroku account

__Quick Deploy__ (from Github master branch)
```apple js
git push heroku master 
```

You can find the app running [here](https://demo-republic-of-data.herokuapp.com)
