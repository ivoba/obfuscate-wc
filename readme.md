[![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)](https://stenciljs.com)

# obfuscate-link web component

### Web component to obfuscate emails, links and more 

Give Crawlers & Spammers a harder time collecting your infos while still display the infos nicely.

```html
    <obfuscate-link id="obfuscate" email="aXZvQGxvY2FsLmRldg==">custom link</obfuscate-link>
    <br />
    <obfuscate-link id="obfuscate" email="aXZvQGxvY2FsLmRldg=="></obfuscate-link>
    <br />
    <obfuscate-link id="obfuscate" tel="aXZvQGxvY2FsLmRldg=="></obfuscate-link>
    <br />
    <obfuscate-link id="obfuscate" sms="aXZvQGxvY2FsLmRldg=="></obfuscate-link>
    <br />
    <obfuscate-link id="obfuscate" facetime="aXZvQGxvY2FsLmRldg=="></obfuscate-link>
    <br />
    <obfuscate-link id="obfuscate" href="aXZvQGxvY2FsLmRldg=="></obfuscate-link>
```

### Encoding 

The `obfuscate-link` web component expects an already encoded value.
The default encoding is base64. 
Please base64 encode your link yourself before entering it.  

You can add your own decoder to provide a more sophisticated encoding and hence you must also have your own encoder to encode your value.

Add your decoder like this:

```html
  <script>
    function decoder(value) {
      console.log('custom decoder');
      return window.atob(value);
    }
    obfuscate.decoder = decoder;
  </script>
```
## Using this component

There are three strategies we recommend for using web components built with Stencil.

### Script tag

- Put a script tag similar to this `<script type='module' src='https://unpkg.com/obfuscate-link-web-component@0.0.7/www/build/obfuscate-link.esm.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules
- Run `npm install my-component --save`
- Put a script tag similar to this `<script type='module' src='node_modules/obfuscate-link-web-component/www/build/obfuscate-link.esm.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### In an app
- Run `npm install obfuscate-link-web-component --save`
- Add an import to the npm packages `import { ObfuscateLink } from 'obfuscate-link-web-component';customElements.define('obfuscate-link', ObfuscateLink);`
- Then you can use the element anywhere in your template, JSX, html etc


## Disclaimer  
Obfuscation can still be decoded by sophisticated bots quite easily but still better than nothing. 
Using the web component itself is already blocking spammer that look for mailto links.

## Development

Run:

```bash
npm install
npm start
```

To build the component for production, run:

```bash
npm run build
```

To run the unit tests for the components, run:

```bash
npm test
```

## Credits

Heavily inspired by https://github.com/coston/react-obfuscate  
I was migrating from react to plain HTML and JS, so i needed something that worked as web component.

I also enjoyed reading this posts:  
https://antonvroemans.medium.com/expand-your-spam-mailing-list-with-cloudflares-poor-obfuscation-fdc3cc8f4ccd
https://www.corewebvitals.io/pagespeed/say-goodbye-to-cloudflare-email-obfuscation
https://derkuba.de/content/posts/1021/stencil-builds-for-using-component-lib/