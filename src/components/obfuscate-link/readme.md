# obfuscate-link

Give Crawlers & Spammers a harder time collecting your infos while still display the infos nicely.

``
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
``````

### Encoding 

The `obfuscate-link` web component expects an already encoded value.
The default encoding is base64. 
Please base64 encode your link yourself before entering it.  

You can add your own decoder to provide a more sophisticated encoding and hence you must also have your own encoder to encode your value.

Add your decoder like this:

``
  <script>
    function decoder(value) {
      console.log('custom decoder');
      return window.atob(value);
    }
    obfuscate.decoder = decoder;
  </script>
``````

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type                        | Default                                 |
| ---------- | ---------- | ----------- | --------------------------- | --------------------------------------- |
| `decoder`  | --         |             | `(value: string) => string` | `(value: string) => window.atob(value)` |
| `email`    | `email`    |             | `string`                    | `undefined`                             |
| `facetime` | `facetime` |             | `string`                    | `undefined`                             |
| `headers`  | --         |             | `{ [x: string]: string; }`  | `undefined`                             |
| `href`     | `href`     |             | `string`                    | `undefined`                             |
| `sms`      | `sms`      |             | `string`                    | `undefined`                             |
| `tel`      | `tel`      |             | `string`                    | `undefined`                             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
