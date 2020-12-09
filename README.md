# Developer Portfolio

## How to run

```bash
# Clone this repository
$ git clone https://github.com/korayguler/developer-portfolio

# Go into the repository
$ cd developer-portfolio


# Install dependencies
$ npm install

# Start the dev server
$ npm start

```

## Customisation

### Edit files for your customisation

### your-info > public/data.json

```json
"profile": {
    "fullname": "Crazy Dev",
    "about": "I am a Sofware Developer.",
    "email": "https://<your-email/>",
    "resume": "https://<your-resume/>",
    "profilePic": "profile.png" // public/web/profile.png change-the-image
  }
```

### your-social-links > public/data.json

```json
"social": {
    "medium": "https://<your-medium-url/>",
    "github": "https://<your-github/>",
    "twitter": "https://<your-twitter-adress/>",
    "linkedin": "https://<your-linkedin-adress/>",
    "instagram": "https://<your-instagram-adress/>"
  },
```

### your-projects > public/data.json

```json
"projects": [
    {
      "name": "Vue.js and Vuex TodoList APP",                   //title
      "image": "vuex-todolist.jpg",                             //public/projects/file-name.jpg
      "live": "https://vuex-todolist.vercel.app/",              //live-preview
      "source": "https://github.com/korayguler/vuex-todolist",  //source-link
      "tech": ["vue", "vuex", "js"]                             //tags
    },
    {
      "name": "Node.js, Express, ModgoDB API",
      "image": "nodejs-auth-api.jpg",
      "live": "https://nodejs--auth-api.herokuapp.com/",
      "source": "https://github.com/korayguler/nodejs-auth-api",
      "tech": ["nodejs", "express", "mongodb", "js"]
    }]

```

### your-tools > public/data.json

```json
"tools": {
"frontend": [
{
"tool": "javascript",
"icon": "devicon-javascript-plain colored" //change-icons https://devicon.dev/
},],
"backend": [
{
"tool": "nodejs",
"icon": "devicon-nodejs-plain colored"
},],
"devtools": [
{
"tool": "nodejs",
"icon": "devicon-nodejs-plain colored"
},] }

```

### edit your medium-url > components/Posts.js

```javascript
async function getPosts() {
  const username = '<medium-url/>';
  const response = await fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`,
  );
  const result = await response.json();
  return result;
}
```

### change meta tags > public/index.html

```html
<title>Developer Portfolio</title>
<meta name="description" content="Free Developer Portfolio for All Developer" />
```

## Tech Stack

- react
- react-dom
- react-router-dom
- animate.css
- devicon.dev

## Prerequisite

- node
- npm

#### and deploy....
