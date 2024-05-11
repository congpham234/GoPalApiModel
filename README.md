# Smithy to OpenAPI Template
Convert the quickstart guide Smithy model into the [OpenAPI](https://spec.openapis.org/oas/latest.html) format.

## Build
To build the models in this project run: 
```console
smithy build
```
From the root of this template directory.

The resulting OpenAPI specification can be found in the `build` directory 
created by the command above in the `smithy/source/openapi` directory.


----

1. run this to activate the commands
```npm link```

2. run this to generate openapi-spec.json
```
generate-open-api-doc
```

3. generate api models:
```
generate-api-models
```


4. to publish to npm:
```
npm publish --access=public
```


5. Change version:
npm version 1.0.11

Example of openapi cli (https://heyapi.vercel.app/)
$ openapi --help

  Usage: openapi [options]

  Options:
    -V, --version             output the version number
    -i, --input <value>       OpenAPI specification, can be a path, url or string content (required)
    -o, --output <value>      Output directory (required)
    -c, --client <value>      HTTP client to generate [fetch, xhr, node, axios, angular] (default: "fetch")
    --name <value>            Custom client class name
    --useOptions              Use options instead of arguments
    --useUnionTypes           Use union types instead of enums
    --exportCore <value>      Write core files to disk (default: true)
    --exportServices <value>  Write services to disk (default: true)
    --exportModels <value>    Write models to disk (default: true)
    --exportSchemas <value>   Write schemas to disk (default: false)
    --indent <value>          Indentation options [4, 2, tab] (default: "4")
    --postfixServices         Service name postfix (default: "Service")
    --postfixModels           Model name postfix
    --request <value>         Path to custom request file
    -h, --help                display help for command

  Examples
    $ openapi --input ./spec.json --output ./generated
    $ openapi --input ./spec.json --output ./generated --client xhr