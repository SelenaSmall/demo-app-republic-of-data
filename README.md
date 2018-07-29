# README

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
